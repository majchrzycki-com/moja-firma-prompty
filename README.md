# moja-firma-prompty

**Prompty AI dla każdego działu polskiej firmy, jako gotowe skille.** 1500 promptów dla 51 stanowisk w 10 działach, od prezesa i dyrektora finansowego po księgowego, handlowca i zespół Scrum. Każde stanowisko to jeden skill w formacie [Agent Skills](https://agentskills.io/specification) (`SKILL.md`). Działa w Anthropic Claude, OpenAI ChatGPT i OpenAI Codex, Microsoft 365 Copilot, Google Gemini oraz OpenClaw.

Skill nie jest zwykłą listą promptów. Gdy piszesz na przykład „przygotuj ogłoszenie o pracę”, skill wykonuje kolejne kroki:

1. Dobiera pasujący prompt z biblioteki stanowiska.
2. Prosi o brakujące materiały, zamiast je zgadywać.
3. Wykonuje zadanie tylko na Twoich danych.
4. Kończy kontrolą wyniku.

Niczego nie wysyła i nie zmienia rekordów. Decyzję zostawia człowiekowi.

> Wersja 0.1. Prompty pochodzą z serii wpisów na [majchrzycki.com](https://majchrzycki.com/blog/filar/ai-w-codziennej-pracy?utm_source=github&utm_medium=referral&utm_campaign=moja-firma-prompty). Pisano je pod Microsoft 365 Copilot. W innych narzędziach nie były testowane, więc sprawdź wynik na swoich materiałach.

## Stanowiska

Każdy dział instalujesz osobno. Kliknij skill, żeby zobaczyć pełną bibliotekę promptów.

<!-- stanowiska:start -->
| Stanowisko | Skill | Promptów | Źródło |
|---|---|---:|---|
| **Zarząd i przywództwo** | | | `/plugin install zarzad@moja-firma-prompty` |
| Członek zarządu | [`prompty-zarzad`](plugins/zarzad/skills/prompty-zarzad/prompty.md) | 30 | [wpis](https://majchrzycki.com/blog/microsoft-copilot-praktyczne-prompty-dla-czlonkow-zarzadu?utm_source=github&utm_medium=referral&utm_campaign=moja-firma-prompty&utm_content=prompty-zarzad) |
| Prezes (CEO) | [`prompty-ceo`](plugins/zarzad/skills/prompty-ceo/prompty.md) | 30 | [wpis](https://majchrzycki.com/blog/zarzadzanie-z-microsoft-copilot-praktyczne-prompty-dla-ceo-chief-executive-officer?utm_source=github&utm_medium=referral&utm_campaign=moja-firma-prompty&utm_content=prompty-ceo) |
| Dyrektor operacyjny (COO) | [`prompty-coo`](plugins/zarzad/skills/prompty-coo/prompty.md) | 30 | [wpis](https://majchrzycki.com/blog/zarzadzanie-z-microsoft-copilot-praktyczne-prompty-dla-dyrektora-operacyjnego-chief-operations-officer?utm_source=github&utm_medium=referral&utm_campaign=moja-firma-prompty&utm_content=prompty-coo) |
| Dyrektor wzrostu (CGO) | [`prompty-cgo`](plugins/zarzad/skills/prompty-cgo/prompty.md) | 30 | [wpis](https://majchrzycki.com/blog/zarzadzanie-z-microsoft-copilot-praktyczne-prompty-dla-dyrektora-wzrostu-cgo-chief-growth-officer?utm_source=github&utm_medium=referral&utm_campaign=moja-firma-prompty&utm_content=prompty-cgo) |
| Dyrektor innowacji (CINO) | [`prompty-cino`](plugins/zarzad/skills/prompty-cino/prompty.md) | 30 | [wpis](https://majchrzycki.com/blog/zarzadzanie-z-microsoft-copilot-praktyczne-prompty-dla-dyrektora-innowacji-cino-chief-innovation-officer?utm_source=github&utm_medium=referral&utm_campaign=moja-firma-prompty&utm_content=prompty-cino) |
| Dyrektor zrównoważonego rozwoju (ESG) | [`prompty-esg`](plugins/zarzad/skills/prompty-esg/prompty.md) | 30 | [wpis](https://majchrzycki.com/blog/zarzadzanie-z-microsoft-copilot-praktyczne-prompty-dla-dyrektora-zrównoważonego-rozwoju-esg?utm_source=github&utm_medium=referral&utm_campaign=moja-firma-prompty&utm_content=prompty-esg) |
| Lider | [`prompty-lider`](plugins/zarzad/skills/prompty-lider/prompty.md) | 30 | [wpis](https://majchrzycki.com/blog/microsoft-copilot-praktyczne-prompty-dla-nowoczesnych-liderow?utm_source=github&utm_medium=referral&utm_campaign=moja-firma-prompty&utm_content=prompty-lider) |
| Menedżer | [`prompty-menedzer`](plugins/zarzad/skills/prompty-menedzer/prompty.md) | 30 | [wpis](https://majchrzycki.com/blog/microsoft-copilot-praktyczne-prompty-dla-nowoczesnych-managerow?utm_source=github&utm_medium=referral&utm_campaign=moja-firma-prompty&utm_content=prompty-menedzer) |
| **Finanse i księgowość** | | | `/plugin install finanse@moja-firma-prompty` |
| Dyrektor finansowy (CFO) | [`prompty-cfo`](plugins/finanse/skills/prompty-cfo/prompty.md) | 30 | [wpis](https://majchrzycki.com/blog/zarzadzanie-z-microsoft-copilot-praktyczne-prompty-dla-dyrektora-finansowego-cfo-chief-financial-officer?utm_source=github&utm_medium=referral&utm_campaign=moja-firma-prompty&utm_content=prompty-cfo) |
| Finansista | [`prompty-finansista`](plugins/finanse/skills/prompty-finansista/prompty.md) | 20 | [wpis](https://majchrzycki.com/blog/microsoft-copilot-praktyczne-prompty-dla-finansistow?utm_source=github&utm_medium=referral&utm_campaign=moja-firma-prompty&utm_content=prompty-finansista) |
| Księgowy | [`prompty-ksiegowy`](plugins/finanse/skills/prompty-ksiegowy/prompty.md) | 20 | [wpis](https://majchrzycki.com/blog/microsoft-copilot-praktyczne-prompty-dla-ksiegowych?utm_source=github&utm_medium=referral&utm_campaign=moja-firma-prompty&utm_content=prompty-ksiegowy) |
| Specjalista relacji inwestorskich | [`prompty-relacje-inwestorskie`](plugins/finanse/skills/prompty-relacje-inwestorskie/prompty.md) | 30 | [wpis](https://majchrzycki.com/blog/microsoft-copilot-praktyczne-prompty-dla-specjalistow-relacji-inwestorskich?utm_source=github&utm_medium=referral&utm_campaign=moja-firma-prompty&utm_content=prompty-relacje-inwestorskie) |
| **Sprzedaż i obsługa klienta** | | | `/plugin install sprzedaz@moja-firma-prompty` |
| Dyrektor sprzedaży | [`prompty-dyrektor-sprzedazy`](plugins/sprzedaz/skills/prompty-dyrektor-sprzedazy/prompty.md) | 30 | [wpis](https://majchrzycki.com/blog/zarzadzanie-z-microsoft-copilot-praktyczne-prompty-dla-dyrektora-sprzedazy-sales-director?utm_source=github&utm_medium=referral&utm_campaign=moja-firma-prompty&utm_content=prompty-dyrektor-sprzedazy) |
| Dyrektor przychodów (CRO) | [`prompty-cro`](plugins/sprzedaz/skills/prompty-cro/prompty.md) | 30 | [wpis](https://majchrzycki.com/blog/zarzadzanie-z-microsoft-copilot-praktyczne-prompty-dla-dyrektora-przychodow-cro-chief-revenue-officer?utm_source=github&utm_medium=referral&utm_campaign=moja-firma-prompty&utm_content=prompty-cro) |
| Handlowiec | [`prompty-handlowiec`](plugins/sprzedaz/skills/prompty-handlowiec/prompty.md) | 30 | [wpis](https://majchrzycki.com/blog/microsoft-copilot-23-praktyczne-prompty-dla-sprzedawcow?utm_source=github&utm_medium=referral&utm_campaign=moja-firma-prompty&utm_content=prompty-handlowiec) |
| Dyrektor obsługi klienta | [`prompty-dyrektor-obslugi-klienta`](plugins/sprzedaz/skills/prompty-dyrektor-obslugi-klienta/prompty.md) | 30 | [wpis](https://majchrzycki.com/blog/zarzadzanie-z-microsoft-copilot-praktyczne-prompty-dla-dyrektora-obsługi-klienta-customer-service-director?utm_source=github&utm_medium=referral&utm_campaign=moja-firma-prompty&utm_content=prompty-dyrektor-obslugi-klienta) |
| Specjalista obsługi klienta | [`prompty-obsluga-klienta`](plugins/sprzedaz/skills/prompty-obsluga-klienta/prompty.md) | 30 | [wpis](https://majchrzycki.com/blog/microsoft-copilot-23-praktyczne-prompty-dla-specjalistow-ds-obslugi-klienta?utm_source=github&utm_medium=referral&utm_campaign=moja-firma-prompty&utm_content=prompty-obsluga-klienta) |
| **Marketing, e-commerce i komunikacja** | | | `/plugin install marketing@moja-firma-prompty` |
| Dyrektor marketingu (CMO) | [`prompty-cmo`](plugins/marketing/skills/prompty-cmo/prompty.md) | 30 | [wpis](https://majchrzycki.com/blog/zarzadzanie-z-microsoft-copilot-praktyczne-prompty-dla-dyrektora-marketingu-cmo-chief-marketing-officer?utm_source=github&utm_medium=referral&utm_campaign=moja-firma-prompty&utm_content=prompty-cmo) |
| Dyrektor kreatywny | [`prompty-dyrektor-kreatywny`](plugins/marketing/skills/prompty-dyrektor-kreatywny/prompty.md) | 30 | [wpis](https://majchrzycki.com/blog/zarzadzanie-z-microsoft-copilot-praktyczne-prompty-dla-dyrektora-kreatywnego?utm_source=github&utm_medium=referral&utm_campaign=moja-firma-prompty&utm_content=prompty-dyrektor-kreatywny) |
| Specjalista marketingu | [`prompty-marketing`](plugins/marketing/skills/prompty-marketing/prompty.md) | 30 | [wpis](https://majchrzycki.com/blog/microsoft-copilot-23-praktyczne-prompty-dla-marketerow?utm_source=github&utm_medium=referral&utm_campaign=moja-firma-prompty&utm_content=prompty-marketing) |
| Dyrektor e-commerce | [`prompty-dyrektor-e-commerce`](plugins/marketing/skills/prompty-dyrektor-e-commerce/prompty.md) | 30 | [wpis](https://majchrzycki.com/blog/zarzadzanie-z-microsoft-copilot-praktyczne-prompty-dla-dyrektora-e-commerce?utm_source=github&utm_medium=referral&utm_campaign=moja-firma-prompty&utm_content=prompty-dyrektor-e-commerce) |
| Specjalista e-commerce | [`prompty-e-commerce`](plugins/marketing/skills/prompty-e-commerce/prompty.md) | 30 | [wpis](https://majchrzycki.com/blog/microsoft-copilot-praktyczne-prompty-dla-specjalistow-e-commerce?utm_source=github&utm_medium=referral&utm_campaign=moja-firma-prompty&utm_content=prompty-e-commerce) |
| Specjalista komunikacji wewnętrznej | [`prompty-komunikacja-wewnetrzna`](plugins/marketing/skills/prompty-komunikacja-wewnetrzna/prompty.md) | 30 | [wpis](https://majchrzycki.com/blog/microsoft-copilot-praktyczne-prompty-dla-specjalistow-komunikacji-wewnetrznej-icomm?utm_source=github&utm_medium=referral&utm_campaign=moja-firma-prompty&utm_content=prompty-komunikacja-wewnetrzna) |
| **IT, dane i bezpieczeństwo** | | | `/plugin install it@moja-firma-prompty` |
| Dyrektor IT (CIO) | [`prompty-cio`](plugins/it/skills/prompty-cio/prompty.md) | 30 | [wpis](https://majchrzycki.com/blog/zarzadzanie-z-microsoft-copilot-praktyczne-prompty-dla-dyrektora-it-cio-chief-information-officer?utm_source=github&utm_medium=referral&utm_campaign=moja-firma-prompty&utm_content=prompty-cio) |
| Dyrektor technologii (CTO) | [`prompty-cto`](plugins/it/skills/prompty-cto/prompty.md) | 30 | [wpis](https://majchrzycki.com/blog/zarzadzanie-z-microsoft-copilot-praktyczne-prompty-dla-dyrektora-technologii-cto-chief-technology-officer?utm_source=github&utm_medium=referral&utm_campaign=moja-firma-prompty&utm_content=prompty-cto) |
| Dyrektor danych (CDO) | [`prompty-cdo`](plugins/it/skills/prompty-cdo/prompty.md) | 30 | [wpis](https://majchrzycki.com/blog/zarzadzanie-z-microsoft-copilot-praktyczne-prompty-dla-dyrektora-danych-cdo-chief-data-officer?utm_source=github&utm_medium=referral&utm_campaign=moja-firma-prompty&utm_content=prompty-cdo) |
| Dyrektor bezpieczeństwa (CSO) | [`prompty-cso`](plugins/it/skills/prompty-cso/prompty.md) | 30 | [wpis](https://majchrzycki.com/blog/zarzadzanie-z-microsoft-copilot-praktyczne-prompty-dla-dyrektora-bezpieczenstwa-cso-chief-security-officer?utm_source=github&utm_medium=referral&utm_campaign=moja-firma-prompty&utm_content=prompty-cso) |
| Administrator IT | [`prompty-administrator-it`](plugins/it/skills/prompty-administrator-it/prompty.md) | 30 | [wpis](https://majchrzycki.com/blog/microsoft-copilot-23-praktyczne-prompty-dla-administratorow-it?utm_source=github&utm_medium=referral&utm_campaign=moja-firma-prompty&utm_content=prompty-administrator-it) |
| Administrator IT w małej firmie | [`prompty-administrator-it-mala-firma`](plugins/it/skills/prompty-administrator-it-mala-firma/prompty.md) | 30 | [wpis](https://majchrzycki.com/blog/microsoft-copilot-23-praktyczne-prompty-dla-administratora-i-specjalisty-it-w-malej-firmie?utm_source=github&utm_medium=referral&utm_campaign=moja-firma-prompty&utm_content=prompty-administrator-it-mala-firma) |
| Specjalista IT | [`prompty-specjalista-it`](plugins/it/skills/prompty-specjalista-it/prompty.md) | 30 | [wpis](https://majchrzycki.com/blog/microsoft-copilot-23-praktyczne-prompty-dla-specjalistow-it-i-informatykow?utm_source=github&utm_medium=referral&utm_campaign=moja-firma-prompty&utm_content=prompty-specjalista-it) |
| Specjalista bezpieczeństwa | [`prompty-bezpieczenstwo`](plugins/it/skills/prompty-bezpieczenstwo/prompty.md) | 30 | [wpis](https://majchrzycki.com/blog/microsoft-copilot-praktyczne-prompty-dla-specjalistow-bezpieczenstwa?utm_source=github&utm_medium=referral&utm_campaign=moja-firma-prompty&utm_content=prompty-bezpieczenstwo) |
| **Kadry** | | | `/plugin install hr@moja-firma-prompty` |
| Dyrektor HR (CHRO) | [`prompty-chro`](plugins/hr/skills/prompty-chro/prompty.md) | 30 | [wpis](https://majchrzycki.com/blog/zarzadzanie-z-microsoft-copilot-praktyczne-prompty-dla-dyrektora-hr-chro-chief-human-resources-officer?utm_source=github&utm_medium=referral&utm_campaign=moja-firma-prompty&utm_content=prompty-chro) |
| Specjalista HR | [`prompty-hr`](plugins/hr/skills/prompty-hr/prompty.md) | 30 | [wpis](https://majchrzycki.com/blog/microsoft-copilot-23-praktyczne-prompty-dla-specjalistow-hr?utm_source=github&utm_medium=referral&utm_campaign=moja-firma-prompty&utm_content=prompty-hr) |
| **Operacje** | | | `/plugin install operacje@moja-firma-prompty` |
| Specjalista produkcji | [`prompty-produkcja`](plugins/operacje/skills/prompty-produkcja/prompty.md) | 30 | [wpis](https://majchrzycki.com/blog/microsoft-copilot-praktyczne-prompty-dla-specjalistow-produkcji?utm_source=github&utm_medium=referral&utm_campaign=moja-firma-prompty&utm_content=prompty-produkcja) |
| Specjalista logistyki | [`prompty-logistyka`](plugins/operacje/skills/prompty-logistyka/prompty.md) | 30 | [wpis](https://majchrzycki.com/blog/microsoft-copilot-praktyczne-prompty-dla-specjalistow-logistyki?utm_source=github&utm_medium=referral&utm_campaign=moja-firma-prompty&utm_content=prompty-logistyka) |
| Specjalista zakupów | [`prompty-zakupy`](plugins/operacje/skills/prompty-zakupy/prompty.md) | 30 | [wpis](https://majchrzycki.com/blog/microsoft-copilot-praktyczne-prompty-dla-specjalistow-zakupow?utm_source=github&utm_medium=referral&utm_campaign=moja-firma-prompty&utm_content=prompty-zakupy) |
| Specjalista jakości | [`prompty-jakosc`](plugins/operacje/skills/prompty-jakosc/prompty.md) | 30 | [wpis](https://majchrzycki.com/blog/microsoft-copilot-praktyczne-prompty-dla-specjalistow-jakosci?utm_source=github&utm_medium=referral&utm_campaign=moja-firma-prompty&utm_content=prompty-jakosc) |
| Zarządca obiektu | [`prompty-facility-manager`](plugins/operacje/skills/prompty-facility-manager/prompty.md) | 30 | [wpis](https://majchrzycki.com/blog/microsoft-copilot-praktyczne-prompty-dla-zarzadcy-obiektu-facility-managera?utm_source=github&utm_medium=referral&utm_campaign=moja-firma-prompty&utm_content=prompty-facility-manager) |
| Specjalista administracji | [`prompty-administracja`](plugins/operacje/skills/prompty-administracja/prompty.md) | 30 | [wpis](https://majchrzycki.com/blog/microsoft-copilot-23-praktyczne-prompty-dla-specjalistow-administracji?utm_source=github&utm_medium=referral&utm_campaign=moja-firma-prompty&utm_content=prompty-administracja) |
| **Produkt i rozwój** | | | `/plugin install produkt@moja-firma-prompty` |
| Dyrektor produktu (CPO) | [`prompty-cpo`](plugins/produkt/skills/prompty-cpo/prompty.md) | 30 | [wpis](https://majchrzycki.com/blog/zarzadzanie-z-microsoft-copilot-praktyczne-prompty-dla-dyrektora-produktow-cpo-chief-product-officer?utm_source=github&utm_medium=referral&utm_campaign=moja-firma-prompty&utm_content=prompty-cpo) |
| Specjalista badań i rozwoju | [`prompty-badania-i-rozwoj`](plugins/produkt/skills/prompty-badania-i-rozwoj/prompty.md) | 30 | [wpis](https://majchrzycki.com/blog/microsoft-copilot-praktyczne-prompty-dla-specjalistow-badan-i-rozwoju?utm_source=github&utm_medium=referral&utm_campaign=moja-firma-prompty&utm_content=prompty-badania-i-rozwoj) |
| Projektant UX/UI | [`prompty-ux-ui`](plugins/produkt/skills/prompty-ux-ui/prompty.md) | 30 | [wpis](https://majchrzycki.com/blog/microsoft-copilot-praktyczne-prompty-dla-projektantow-ux-ui?utm_source=github&utm_medium=referral&utm_campaign=moja-firma-prompty&utm_content=prompty-ux-ui) |
| **Dział prawny** | | | `/plugin install prawo@moja-firma-prompty` |
| Prawnik | [`prompty-prawnik`](plugins/prawo/skills/prompty-prawnik/prompty.md) | 20 | [wpis](https://majchrzycki.com/blog/microsoft-copilot-praktyczne-prompty-dla-prawnikow?utm_source=github&utm_medium=referral&utm_campaign=moja-firma-prompty&utm_content=prompty-prawnik) |
| **Metody pracy zespołu** | | | `/plugin install metody-pracy@moja-firma-prompty` |
| Zespół Agile | [`prompty-agile`](plugins/metody-pracy/skills/prompty-agile/prompty.md) | 30 | [wpis](https://majchrzycki.com/blog/microsoft-copilot-i-podejscie-agile-praktyczne-prompty-dla-zespolu-i-managerow?utm_source=github&utm_medium=referral&utm_campaign=moja-firma-prompty&utm_content=prompty-agile) |
| Zespół Scrum | [`prompty-scrum`](plugins/metody-pracy/skills/prompty-scrum/prompty.md) | 30 | [wpis](https://majchrzycki.com/blog/microsoft-copilot-i-scrum-praktyczne-prompty-dla-zespolu-i-managerow?utm_source=github&utm_medium=referral&utm_campaign=moja-firma-prompty&utm_content=prompty-scrum) |
| Zespół Kanban | [`prompty-kanban`](plugins/metody-pracy/skills/prompty-kanban/prompty.md) | 30 | [wpis](https://majchrzycki.com/blog/microsoft-copilot-w-kanban-praktyczne-prompty-dla-zespolu-i-managerow?utm_source=github&utm_medium=referral&utm_campaign=moja-firma-prompty&utm_content=prompty-kanban) |
| Zespół Lean | [`prompty-lean`](plugins/metody-pracy/skills/prompty-lean/prompty.md) | 30 | [wpis](https://majchrzycki.com/blog/microsoft-copilot-w-lean-praktyczne-prompty-dla-zespolu-i-managerow?utm_source=github&utm_medium=referral&utm_campaign=moja-firma-prompty&utm_content=prompty-lean) |
| Zespół Waterfall | [`prompty-waterfall`](plugins/metody-pracy/skills/prompty-waterfall/prompty.md) | 30 | [wpis](https://majchrzycki.com/blog/microsoft-copilot-i-podejscie-waterfall-praktyczne-prompty-dla-zespolu-i-managerow?utm_source=github&utm_medium=referral&utm_campaign=moja-firma-prompty&utm_content=prompty-waterfall) |
| Zespół PRINCE2 | [`prompty-prince2`](plugins/metody-pracy/skills/prompty-prince2/prompty.md) | 30 | [wpis](https://majchrzycki.com/blog/microsoft-copilot-w-prince2-praktyczne-prompty-dla-zespolu-i-managerow?utm_source=github&utm_medium=referral&utm_campaign=moja-firma-prompty&utm_content=prompty-prince2) |
| Zespół SAFe | [`prompty-safe`](plugins/metody-pracy/skills/prompty-safe/prompty.md) | 30 | [wpis](https://majchrzycki.com/blog/microsoft-copilot-w-safe-praktyczne-prompty-dla-zespolu-i-managerow?utm_source=github&utm_medium=referral&utm_campaign=moja-firma-prompty&utm_content=prompty-safe) |
| Zespół DevOps | [`prompty-devops`](plugins/metody-pracy/skills/prompty-devops/prompty.md) | 30 | [wpis](https://majchrzycki.com/blog/microsoft-copilot-w-devops-praktyczne-prompty-dla-zespolu-i-managerow?utm_source=github&utm_medium=referral&utm_campaign=moja-firma-prompty&utm_content=prompty-devops) |
<!-- stanowiska:end -->

Wszystkie prompty w jednej tabeli: [`dane/prompty.csv`](dane/prompty.csv). Kolumny: dział, stanowisko, skill, narzędzie, numer, tytuł, kontekst, prompt, sposób sprawdzenia i adres wpisu.

## Trzy grupy promptów

Każda biblioteka dzieli prompty według narzędzia:

| Grupa | Gdzie działa | Uwagi |
|---|---|---|
| Dowolny czat | Anthropic Claude, OpenAI ChatGPT, Google Gemini, Microsoft 365 Copilot Chat | działa wszędzie, gdzie wkleisz materiał |
| Aplikacje Microsoft 365 | Excel, Word, PowerPoint, Outlook i Teams z Microsoft 365 Copilot | w innym narzędziu załącz plik albo wklej treść |
| Zadanie wieloetapowe | Microsoft 365 Copilot Cowork, Anthropic Claude Cowork, tryb agenta OpenAI ChatGPT | skill wykonuje je etapami i po każdym pokazuje wynik |

## Instalacja

Nazwy menu zmieniają się często. Jeśli wyglądają inaczej, sprawdź aktualną dokumentację narzędzia.

### Anthropic Claude Code

```text
/plugin marketplace add majchrzycki-com/moja-firma-prompty
/plugin install finanse@moja-firma-prompty
```

Zamiast `finanse` wpisz dowolny dział z tabeli. Skill wywołasz zwykłym zdaniem, np. „przygotuj komentarz do odchylenia kosztów”, albo wprost: `/finanse:prompty-ksiegowy`.

### Anthropic Claude w przeglądarce i aplikacji

Spakuj katalog stanowiska, np. `plugins/finanse/skills/prompty-ksiegowy/`, do pliku ZIP. Dodaj go jako umiejętność w ustawieniach Anthropic Claude. Gotowe paczki ZIP dla każdego stanowiska i działu są w zakładce Releases.

### OpenAI ChatGPT i OpenAI Codex

W OpenAI Codex skopiuj katalog stanowiska do katalogu skilli OpenAI Codex.

W OpenAI ChatGPT zrób dwie rzeczy:
1. Wklej plik `dist/instrukcje/<skill>.md` do instrukcji projektu albo GPT.
2. Dodaj plik `dist/instrukcje/<skill>-prompty.md` jako plik wiedzy.

### Microsoft 365 Copilot

W Microsoft 365 Copilot Cowork wybierz **Dostosuj → Umiejętności → Dodaj** i zaimportuj `SKILL.md` razem z `prompty.md`. Opis krok po kroku: [umiejętności SKILL.md w Microsoft 365 Copilot Cowork](https://majchrzycki.com/blog/microsoft-copilot-cowork-umiejetnosci-skill-md?utm_source=github&utm_medium=referral&utm_campaign=moja-firma-prompty).

W agencie z Agent Buildera Microsoft 365 Copilot zrób dwie rzeczy:
1. Wklej plik `dist/instrukcje/<skill>.md` do pola instrukcji.
2. Dodaj plik `<skill>-prompty.md` jako wiedzę.

### Google Gemini

W Google Gemini otwórz **Customize → Skills → Create → Upload** i wskaż katalog stanowiska albo jego plik ZIP. Opis i harmonogram zmiany Gemów na skille: [pomoc Google Gemini](https://support.google.com/gemini/answer/17094296).

### OpenClaw

Skopiuj katalog stanowiska do katalogu skilli OpenClaw.

## Skąd są prompty i jak je poprawiać

Jedynym źródłem jest blog. Skrypt `scripts/sync.mjs` czyta wpisy z promptami i generuje z nich skille, tabelę CSV i tabelę w tym pliku:

```bash
node scripts/sync.mjs ../kmc-websites/majchrzycki_com
node scripts/build.mjs
```

Skrypt kończy się błędem, gdy we wpisie znajdzie inną liczbę promptów, niż zapowiada nagłówek, albo pusty prompt. Poprawkę wprowadź we wpisie, a nie w wygenerowanych plikach.

`scripts/build.mjs` sprawdza każdy skill i tworzy `dist/`:

- `dist/skills/`: skille bez zmian, dla Anthropic Claude, OpenAI Codex, Google Gemini, OpenClaw i Microsoft 365 Copilot Cowork,
- `dist/dzialy/`: te same skille pogrupowane po działach,
- `dist/instrukcje/`: instrukcja do wklejenia i biblioteka jako plik wiedzy, dla agenta Microsoft 365 Copilot i projektu lub GPT w OpenAI ChatGPT.

## Rodzina moja-firma

- [`moja-firma`](https://github.com/majchrzycki-com/moja-firma): procedury dla polskiej małej firmy, czyli profil firmy, kontrola danych, należności i odprawa właściciela.
- Pakiety branżowe `moja-firma-<branża>`: agent zamówień B2B, zamówień sieci, zapytań ofertowych, rozliczenia kampanii, zleceń transportowych i zgłoszeń serwisowych.
- `moja-firma-prompty`: prompty dla działów i stanowisk, czyli to repozytorium.

## Bezpieczeństwo

Skill to instrukcja, którą agent wykona. Zanim go zainstalujesz, przeczytaj `SKILL.md`. Wersja 0.1 nie zawiera skryptów uruchamianych przez agenta ani serwerów MCP, tylko tekst. Nie wklejaj do rozmowy haseł, kluczy API, danych zdrowotnych ani pełnych danych pracowników i klientów. Zgłoszenia dotyczące bezpieczeństwa: [SECURITY.md](SECURITY.md).

Prompty nie są poradą prawną, podatkową, kadrową ani inwestycyjną. Wynik sprawdza osoba, która za niego odpowiada.

## Licencja

Całość, prompty i skrypty, na licencji [MIT](LICENSE). Możesz je kopiować, przerabiać i używać komercyjnie, pod warunkiem zachowania informacji o autorze i licencji.

Autor: [Krzysztof Majchrzycki](https://majchrzycki.com/o-mnie?utm_source=github&utm_medium=referral&utm_campaign=moja-firma-prompty), wdrożenia AI w polskich firmach.

---

## English

**moja-firma-prompty** is a library of 1,500 AI prompts for 51 roles across 10 departments of a Polish company, packaged as [Agent Skills](https://agentskills.io/specification) (`SKILL.md`). The same files work in Anthropic Claude, OpenAI ChatGPT/OpenAI Codex, Microsoft 365 Copilot, Google Gemini and OpenClaw. Each role skill picks the matching prompt, asks for missing inputs instead of guessing and ends with a check of the result. Prompts are in Polish, were written for Microsoft 365 Copilot and are synced from the author's blog. Everything is MIT-licensed.
