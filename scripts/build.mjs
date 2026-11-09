#!/usr/bin/env node
// Sprawdza skille stanowisk i buduje paczki dla różnych agentów.
//
//   node scripts/build.mjs          sprawdza skille i buduje dist/
//   node scripts/build.mjs --check  tylko sprawdza (do CI)
//
// dist/skills/<skill>/            SKILL.md + prompty.md bez zmian: Anthropic Claude, OpenAI Codex,
//                                 Google Gemini (skills), OpenClaw, Microsoft 365 Copilot Cowork
// dist/instrukcje/<skill>.md      instrukcja do wklejenia: agent Microsoft 365 Copilot Agent Builder,
//                                 projekt lub GPT w OpenAI ChatGPT
// dist/instrukcje/<skill>-prompty.md  biblioteka do dodania jako plik wiedzy obok instrukcji
//
// Bez zależności, Node 18+.

import { readdir, readFile, writeFile, mkdir, rm, cp } from "node:fs/promises";
import { existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const PLUGINS = join(ROOT, "plugins");
const DIST = join(ROOT, "dist");
const CHECK_ONLY = process.argv.includes("--check");
const INSTRUCTION_LIMIT = 8000;
const NAME_RE = /^[a-z0-9]+(-[a-z0-9]+)*$/;
const REPO = "https://github.com/majchrzycki-com/moja-firma-prompty";

const pkg = JSON.parse(await readFile(join(ROOT, "package.json"), "utf8"));
const market = JSON.parse(await readFile(join(ROOT, ".claude-plugin", "marketplace.json"), "utf8"));

function parseSkill(text) {
  const m = text.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!m) return null;
  const fm = {};
  for (const line of m[1].split(/\r?\n/)) {
    const kv = line.match(/^([a-z_]+):\s*(.*)$/);
    if (kv && kv[2] !== "") fm[kv[1]] = kv[2].replace(/^"|"$/g, "").replace(/\\"/g, '"');
  }
  return { fm, body: m[2].trim() };
}

const errors = [];
const warnings = [];
const skills = [];
const seen = new Set();

const listed = new Set(market.plugins.map((p) => p.name));
for (const plugin of (await readdir(PLUGINS, { withFileTypes: true })).filter((d) => d.isDirectory())) {
  if (!listed.has(plugin.name)) errors.push(`plugin ${plugin.name}: brak w .claude-plugin/marketplace.json`);
  const manifest = join(PLUGINS, plugin.name, ".claude-plugin", "plugin.json");
  if (!existsSync(manifest)) errors.push(`plugin ${plugin.name}: brak .claude-plugin/plugin.json`);
  const skillsDir = join(PLUGINS, plugin.name, "skills");
  for (const dir of (await readdir(skillsDir, { withFileTypes: true })).filter((d) => d.isDirectory())) {
    const where = `${plugin.name}/${dir.name}`;
    if (seen.has(dir.name)) errors.push(`${where}: nazwa skilla powtarza się w innym dziale`);
    seen.add(dir.name);
    const file = join(skillsDir, dir.name, "SKILL.md");
    if (!existsSync(file)) { errors.push(`${where}: brak SKILL.md`); continue; }
    if (!existsSync(join(skillsDir, dir.name, "prompty.md"))) errors.push(`${where}: brak prompty.md`);
    const parsed = parseSkill(await readFile(file, "utf8"));
    if (!parsed) { errors.push(`${where}: brak nagłówka YAML (---)`); continue; }
    const { fm, body } = parsed;
    if (!fm.name) errors.push(`${where}: brak pola name`);
    else {
      if (fm.name !== dir.name) errors.push(`${where}: name „${fm.name}” różni się od nazwy katalogu`);
      if (!NAME_RE.test(fm.name) || fm.name.length > 64) errors.push(`${where}: name musi mieć małe litery ASCII, cyfry i myślniki, maks. 64 znaki`);
    }
    if (!fm.description) errors.push(`${where}: brak pola description`);
    else if (fm.description.length > 1024) errors.push(`${where}: description dłuższy niż 1024 znaki`);

    const title = (body.match(/^#\s+(.+)$/m) || [, dir.name])[1];
    const flat = [
      `# ${title} (moja-firma-prompty ${pkg.version})`,
      "",
      `Kiedy używać: ${fm.description}`,
      "",
      body.replace(/^#\s+.+\r?\n/, "").replace(/`prompty\.md`/g, `\`${dir.name}-prompty.md\` (plik wiedzy)`).trim(),
      "",
      "---",
      `Skill „${fm.name}” z paczki moja-firma-prompty ${pkg.version} (${REPO}), licencja MIT.`,
      `Biblioteka promptów jest w pliku ${dir.name}-prompty.md. Dodaj go jako plik wiedzy agenta albo projektu.`,
      "",
    ].join("\n");
    if (flat.length > INSTRUCTION_LIMIT) warnings.push(`${where}: instrukcja ma ${flat.length} znaków (limit ${INSTRUCTION_LIMIT})`);
    skills.push({ plugin: plugin.name, name: dir.name, dir: join(skillsDir, dir.name), flat, chars: flat.length });
  }
}
for (const name of listed) if (!existsSync(join(PLUGINS, name))) errors.push(`marketplace: plugin ${name} nie ma katalogu plugins/${name}`);

for (const w of warnings) console.warn(`uwaga: ${w}`);
if (errors.length) {
  for (const e of errors) console.error(`błąd: ${e}`);
  process.exit(1);
}
if (CHECK_ONLY) {
  console.log(`OK: ${skills.length} skilli w ${listed.size} działach.`);
  process.exit(0);
}

await rm(DIST, { recursive: true, force: true });
await mkdir(join(DIST, "instrukcje"), { recursive: true });
for (const s of skills) {
  await cp(s.dir, join(DIST, "skills", s.name), { recursive: true });
  await mkdir(join(DIST, "dzialy", s.plugin), { recursive: true });
  await cp(s.dir, join(DIST, "dzialy", s.plugin, s.name), { recursive: true });
  await writeFile(join(DIST, "instrukcje", `${s.name}.md`), s.flat, "utf8");
  await cp(join(s.dir, "prompty.md"), join(DIST, "instrukcje", `${s.name}-prompty.md`));
}
console.log(`Zbudowano dist/ dla ${skills.length} skilli w ${listed.size} działach.`);
