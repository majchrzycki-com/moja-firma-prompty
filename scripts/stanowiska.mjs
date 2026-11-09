// Mapa wpisów z promptami na blogu majchrzycki.com → działy i skille.
// slug: plik w src/content/blog/pl/<slug>.md
// skill: nazwa katalogu skilla (prompty-<stanowisko>)
// kto: stanowisko w mianowniku (nagłówek), dla: forma po „dla” (opis skilla)

export const DZIALY = [
  { id: "zarzad", nazwa: "Zarząd i przywództwo", opis: "Prompty dla zarządu, prezesa, dyrektorów operacyjnych, wzrostu, innowacji i ESG oraz liderów i menedżerów." },
  { id: "finanse", nazwa: "Finanse i księgowość", opis: "Prompty dla dyrektora finansowego, finansistów, księgowych i relacji inwestorskich." },
  { id: "sprzedaz", nazwa: "Sprzedaż i obsługa klienta", opis: "Prompty dla dyrektora sprzedaży, dyrektora przychodów, handlowców i obsługi klienta." },
  { id: "marketing", nazwa: "Marketing, e-commerce i komunikacja", opis: "Prompty dla dyrektora marketingu, dyrektora kreatywnego, zespołu marketingu, e-commerce i komunikacji wewnętrznej." },
  { id: "it", nazwa: "IT, dane i bezpieczeństwo", opis: "Prompty dla dyrektorów IT, technologii, danych i bezpieczeństwa, administratorów i specjalistów IT." },
  { id: "hr", nazwa: "Kadry", opis: "Prompty dla dyrektora HR i specjalistów HR." },
  { id: "operacje", nazwa: "Operacje", opis: "Prompty dla produkcji, logistyki, zakupów, działu jakości, zarządcy obiektu i administracji." },
  { id: "produkt", nazwa: "Produkt i rozwój", opis: "Prompty dla dyrektora produktu, działu badań i rozwoju oraz projektantów UX/UI." },
  { id: "prawo", nazwa: "Dział prawny", opis: "Prompty dla prawników, ze sprawdzaniem źródeł. Pomoc w pracy, nie porada prawna." },
  { id: "metody-pracy", nazwa: "Metody pracy zespołu", opis: "Prompty dla zespołów i menedżerów pracujących w Agile, Scrum, Kanban, Lean, Waterfall, PRINCE2, SAFe i DevOps." },
];

const Z = "zarzadzanie-z-microsoft-copilot-praktyczne-prompty-dla-";
const P = "microsoft-copilot-praktyczne-prompty-dla-";
const P23 = "microsoft-copilot-23-praktyczne-prompty-dla-";

export const STANOWISKA = [
  // Zarząd i przywództwo
  { dzial: "zarzad", skill: "prompty-zarzad", kto: "Członek zarządu", dla: "członków zarządu", slug: P + "czlonkow-zarzadu" },
  { dzial: "zarzad", skill: "prompty-ceo", kto: "Prezes (CEO)", dla: "prezesa (CEO)", slug: Z + "ceo-chief-executive-officer" },
  { dzial: "zarzad", skill: "prompty-coo", kto: "Dyrektor operacyjny (COO)", dla: "dyrektora operacyjnego (COO)", slug: Z + "dyrektora-operacyjnego-chief-operations-officer" },
  { dzial: "zarzad", skill: "prompty-cgo", kto: "Dyrektor wzrostu (CGO)", dla: "dyrektora wzrostu (CGO)", slug: Z + "dyrektora-wzrostu-cgo-chief-growth-officer" },
  { dzial: "zarzad", skill: "prompty-cino", kto: "Dyrektor innowacji (CINO)", dla: "dyrektora innowacji (CINO)", slug: Z + "dyrektora-innowacji-cino-chief-innovation-officer" },
  { dzial: "zarzad", skill: "prompty-esg", kto: "Dyrektor zrównoważonego rozwoju (ESG)", dla: "dyrektora zrównoważonego rozwoju (ESG)", slug: Z + "dyrektora-zrównoważonego-rozwoju-esg" },
  { dzial: "zarzad", skill: "prompty-lider", kto: "Lider", dla: "liderów", slug: P + "nowoczesnych-liderow" },
  { dzial: "zarzad", skill: "prompty-menedzer", kto: "Menedżer", dla: "menedżerów", slug: P + "nowoczesnych-managerow" },
  // Finanse i księgowość
  { dzial: "finanse", skill: "prompty-cfo", kto: "Dyrektor finansowy (CFO)", dla: "dyrektora finansowego (CFO)", slug: Z + "dyrektora-finansowego-cfo-chief-financial-officer" },
  { dzial: "finanse", skill: "prompty-finansista", kto: "Finansista", dla: "finansistów", slug: P + "finansistow" },
  { dzial: "finanse", skill: "prompty-ksiegowy", kto: "Księgowy", dla: "księgowych", slug: P + "ksiegowych" },
  { dzial: "finanse", skill: "prompty-relacje-inwestorskie", kto: "Specjalista relacji inwestorskich", dla: "specjalistów relacji inwestorskich", slug: P + "specjalistow-relacji-inwestorskich" },
  // Sprzedaż i obsługa klienta
  { dzial: "sprzedaz", skill: "prompty-dyrektor-sprzedazy", kto: "Dyrektor sprzedaży", dla: "dyrektora sprzedaży", slug: Z + "dyrektora-sprzedazy-sales-director" },
  { dzial: "sprzedaz", skill: "prompty-cro", kto: "Dyrektor przychodów (CRO)", dla: "dyrektora przychodów (CRO)", slug: Z + "dyrektora-przychodow-cro-chief-revenue-officer" },
  { dzial: "sprzedaz", skill: "prompty-handlowiec", kto: "Handlowiec", dla: "handlowców", slug: P23 + "sprzedawcow" },
  { dzial: "sprzedaz", skill: "prompty-dyrektor-obslugi-klienta", kto: "Dyrektor obsługi klienta", dla: "dyrektora obsługi klienta", slug: Z + "dyrektora-obsługi-klienta-customer-service-director" },
  { dzial: "sprzedaz", skill: "prompty-obsluga-klienta", kto: "Specjalista obsługi klienta", dla: "specjalistów obsługi klienta", slug: P23 + "specjalistow-ds-obslugi-klienta" },
  // Marketing, e-commerce i komunikacja
  { dzial: "marketing", skill: "prompty-cmo", kto: "Dyrektor marketingu (CMO)", dla: "dyrektora marketingu (CMO)", slug: Z + "dyrektora-marketingu-cmo-chief-marketing-officer" },
  { dzial: "marketing", skill: "prompty-dyrektor-kreatywny", kto: "Dyrektor kreatywny", dla: "dyrektora kreatywnego", slug: Z + "dyrektora-kreatywnego" },
  { dzial: "marketing", skill: "prompty-marketing", kto: "Specjalista marketingu", dla: "zespołu marketingu", slug: P23 + "marketerow" },
  { dzial: "marketing", skill: "prompty-dyrektor-e-commerce", kto: "Dyrektor e-commerce", dla: "dyrektora e-commerce", slug: Z + "dyrektora-e-commerce" },
  { dzial: "marketing", skill: "prompty-e-commerce", kto: "Specjalista e-commerce", dla: "specjalistów e-commerce", slug: P + "specjalistow-e-commerce" },
  { dzial: "marketing", skill: "prompty-komunikacja-wewnetrzna", kto: "Specjalista komunikacji wewnętrznej", dla: "specjalistów komunikacji wewnętrznej", slug: P + "specjalistow-komunikacji-wewnetrznej-icomm" },
  // IT, dane i bezpieczeństwo
  { dzial: "it", skill: "prompty-cio", kto: "Dyrektor IT (CIO)", dla: "dyrektora IT (CIO)", slug: Z + "dyrektora-it-cio-chief-information-officer" },
  { dzial: "it", skill: "prompty-cto", kto: "Dyrektor technologii (CTO)", dla: "dyrektora technologii (CTO)", slug: Z + "dyrektora-technologii-cto-chief-technology-officer" },
  { dzial: "it", skill: "prompty-cdo", kto: "Dyrektor danych (CDO)", dla: "dyrektora danych (CDO)", slug: Z + "dyrektora-danych-cdo-chief-data-officer" },
  { dzial: "it", skill: "prompty-cso", kto: "Dyrektor bezpieczeństwa (CSO)", dla: "dyrektora bezpieczeństwa (CSO)", slug: Z + "dyrektora-bezpieczenstwa-cso-chief-security-officer" },
  { dzial: "it", skill: "prompty-administrator-it", kto: "Administrator IT", dla: "administratorów IT", slug: P23 + "administratorow-it" },
  { dzial: "it", skill: "prompty-administrator-it-mala-firma", kto: "Administrator IT w małej firmie", dla: "administratora i specjalisty IT w małej firmie", slug: P23 + "administratora-i-specjalisty-it-w-malej-firmie" },
  { dzial: "it", skill: "prompty-specjalista-it", kto: "Specjalista IT", dla: "specjalistów IT i informatyków", slug: P23 + "specjalistow-it-i-informatykow" },
  { dzial: "it", skill: "prompty-bezpieczenstwo", kto: "Specjalista bezpieczeństwa", dla: "specjalistów bezpieczeństwa", slug: P + "specjalistow-bezpieczenstwa" },
  // Kadry
  { dzial: "hr", skill: "prompty-chro", kto: "Dyrektor HR (CHRO)", dla: "dyrektora HR (CHRO)", slug: Z + "dyrektora-hr-chro-chief-human-resources-officer" },
  { dzial: "hr", skill: "prompty-hr", kto: "Specjalista HR", dla: "specjalistów HR", slug: P23 + "specjalistow-hr" },
  // Operacje
  { dzial: "operacje", skill: "prompty-produkcja", kto: "Specjalista produkcji", dla: "specjalistów produkcji", slug: P + "specjalistow-produkcji" },
  { dzial: "operacje", skill: "prompty-logistyka", kto: "Specjalista logistyki", dla: "specjalistów logistyki", slug: P + "specjalistow-logistyki" },
  { dzial: "operacje", skill: "prompty-zakupy", kto: "Specjalista zakupów", dla: "specjalistów zakupów", slug: P + "specjalistow-zakupow" },
  { dzial: "operacje", skill: "prompty-jakosc", kto: "Specjalista jakości", dla: "działu jakości", slug: P + "specjalistow-jakosci" },
  { dzial: "operacje", skill: "prompty-facility-manager", kto: "Zarządca obiektu", dla: "zarządcy obiektu (facility managera)", slug: P + "zarzadcy-obiektu-facility-managera" },
  { dzial: "operacje", skill: "prompty-administracja", kto: "Specjalista administracji", dla: "specjalistów administracji", slug: P23 + "specjalistow-administracji" },
  // Produkt i rozwój
  { dzial: "produkt", skill: "prompty-cpo", kto: "Dyrektor produktu (CPO)", dla: "dyrektora produktu (CPO)", slug: Z + "dyrektora-produktow-cpo-chief-product-officer" },
  { dzial: "produkt", skill: "prompty-badania-i-rozwoj", kto: "Specjalista badań i rozwoju", dla: "działu badań i rozwoju", slug: P + "specjalistow-badan-i-rozwoju" },
  { dzial: "produkt", skill: "prompty-ux-ui", kto: "Projektant UX/UI", dla: "projektantów UX/UI", slug: P + "projektantow-ux-ui" },
  // Dział prawny
  { dzial: "prawo", skill: "prompty-prawnik", kto: "Prawnik", dla: "prawników", slug: P + "prawnikow" },
  // Metody pracy zespołu
  { dzial: "metody-pracy", skill: "prompty-agile", kto: "Zespół Agile", dla: "zespołów i menedżerów pracujących w Agile", slug: "microsoft-copilot-i-podejscie-agile-praktyczne-prompty-dla-zespolu-i-managerow" },
  { dzial: "metody-pracy", skill: "prompty-scrum", kto: "Zespół Scrum", dla: "zespołów i menedżerów pracujących w Scrum", slug: "microsoft-copilot-i-scrum-praktyczne-prompty-dla-zespolu-i-managerow" },
  { dzial: "metody-pracy", skill: "prompty-kanban", kto: "Zespół Kanban", dla: "zespołów i menedżerów pracujących w Kanban", slug: "microsoft-copilot-w-kanban-praktyczne-prompty-dla-zespolu-i-managerow" },
  { dzial: "metody-pracy", skill: "prompty-lean", kto: "Zespół Lean", dla: "zespołów i menedżerów pracujących w Lean", slug: "microsoft-copilot-w-lean-praktyczne-prompty-dla-zespolu-i-managerow" },
  { dzial: "metody-pracy", skill: "prompty-waterfall", kto: "Zespół Waterfall", dla: "zespołów i menedżerów pracujących w modelu kaskadowym (Waterfall)", slug: "microsoft-copilot-i-podejscie-waterfall-praktyczne-prompty-dla-zespolu-i-managerow" },
  { dzial: "metody-pracy", skill: "prompty-prince2", kto: "Zespół PRINCE2", dla: "zespołów i kierowników projektów PRINCE2", slug: "microsoft-copilot-w-prince2-praktyczne-prompty-dla-zespolu-i-managerow" },
  { dzial: "metody-pracy", skill: "prompty-safe", kto: "Zespół SAFe", dla: "zespołów i liderów pracujących w SAFe", slug: "microsoft-copilot-w-safe-praktyczne-prompty-dla-zespolu-i-managerow" },
  { dzial: "metody-pracy", skill: "prompty-devops", kto: "Zespół DevOps", dla: "zespołów i menedżerów DevOps", slug: "microsoft-copilot-w-devops-praktyczne-prompty-dla-zespolu-i-managerow" },
];
