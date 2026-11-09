# Biblioteka promptów: Specjalista bezpieczeństwa

Źródło: [„Microsoft Copilot: 30 promptów dla bezpieczeństwa”](https://majchrzycki.com/blog/microsoft-copilot-praktyczne-prompty-dla-specjalistow-bezpieczenstwa?utm_source=github&utm_medium=referral&utm_campaign=moja-firma-prompty&utm_content=prompty-bezpieczenstwo), Krzysztof Majchrzycki, majchrzycki.com. Stan wpisu: 2026-10-02. Licencja MIT.

Prompty pisano pod Microsoft 365 Copilot. W innych narzędziach działają prompty z grupy „Dowolny czat”, a pozostałe wymagają załączenia pliku albo pracy etapami.

## Dowolny czat

Narzędzia: Anthropic Claude, OpenAI ChatGPT, Google Gemini, Microsoft 365 Copilot Chat.

### 1. Analiza wycinka logów

**Wejście:** Zanonimizowany eksport, zakres czasu i znany kontekst działania.

> Wskaż nietypowe zdarzenia z identyfikatorami. Oddziel podejrzenie od potwierdzonego incydentu i zaproponuj odczyty weryfikujące.

**Sprawdź:** Porównaj wynik z surowym logiem oraz aktywnością administracyjną w tym samym czasie.

### 2. Szkic polityki

**Wejście:** Zatwierdzone wymagania organizacji i obecny dokument.

> Wskaż niespójności odpowiedzialności oraz brakujące procedury. Zaproponuj redakcję oznaczając decyzje wymagające akceptacji.

**Sprawdź:** Właściciel polityki potwierdza wykonalność obowiązków i dostępność narzędzi przed zatwierdzeniem.

### 3. Rejestr ryzyka

**Wejście:** Katalog aktywów, scenariusze zagrożeń i istniejące zabezpieczenia.

> Połącz przyczynę, zdarzenie i skutek biznesowy. Oddziel ocenę opartą na danych od opinii wymagającej warsztatu.

**Sprawdź:** Nie przypisuj precyzyjnego prawdopodobieństwa bez uzgodnionej metody oraz dowodów.

### 4. Przegląd reguł zapory

**Wejście:** Eksport reguł i zatwierdzoną mapę przepływów.

> Wskaż reguły szerokie, osierocone i sprzeczne z mapą. Zwróć pytania do właścicieli usług oraz plan testu.

**Sprawdź:** Nie zmieniaj konfiguracji na podstawie samej rekomendacji; sprawdź zależności i dostęp awaryjny.

### 5. Zakres autoryzowanego testu

**Wejście:** Pisemny zakres, środowisko testowe i ograniczenia operacyjne.

> Przygotuj plan weryfikacji zabezpieczeń na poziomie celów i dowodów. Uwzględnij warunki przerwania oraz kontakt awaryjny.

**Sprawdź:** Potwierdź właściciela każdego zasobu i wyklucz systemy spoza zgody na test.

### 6. Mapa dowodów zgodności

**Wejście:** Zatwierdzone wymagania i listę posiadanych dokumentów.

> Przypisz dowody do wymagań oraz wskaż brak aktualnego potwierdzenia. Nie orzekaj zgodności organizacji.

**Sprawdź:** Osoba odpowiedzialna za zgodność potwierdza interpretację, wersję wymagań i wystarczalność dowodu.

### 7. Przebieg reakcji na incydent

**Wejście:** Zanonimizowaną oś czasu zamkniętego incydentu.

> Zidentyfikuj oczekiwanie, niejasne odpowiedzialności i brakujące informacje. Zaproponuj zmianę procedury oraz sposób sprawdzenia jej wpływu.

**Sprawdź:** Oddziel czas detekcji, analizy i przywrócenia usługi; nie sumuj nieporównywalnych miar.

### 8. Ćwiczenie dla pracowników

**Wejście:** Typowe zagrożenia i zasady zgłaszania podejrzeń.

> Przygotuj scenariusze edukacyjne z poprawną reakcją i wyjaśnieniem. Dopasuj język do roli, bez straszenia ani zawstydzania.

**Sprawdź:** Sprawdź, czy pracownik wie, gdzie zgłosić zdarzenie również poza godzinami pracy.

### 9. Przegląd aplikacji

**Wejście:** Model przepływu danych, opis uwierzytelniania i zakres testu.

> Zaproponuj pytania o granice zaufania i plan weryfikacji kontroli. Nie uznawaj braku dostrzeżonego błędu za bezpieczeństwo.

**Sprawdź:** Ekspert weryfikuje wynik w kodzie oraz środowisku testowym objętym zgodą.

### 10. Kontrola tożsamości

**Wejście:** Model ról, metody logowania i proces odbierania dostępu.

> Wskaż luki w cyklu życia tożsamości. Rozdziel konta pracowników, usług i dostęp awaryjny.

**Sprawdź:** Sprawdź jedną rzeczywistą zmianę roli oraz odejście pracownika od początku do końca procesu.

## Aplikacje Microsoft 365

Narzędzia: Excel, Word, PowerPoint, Outlook, Teams z Microsoft 365 Copilot; w innym narzędziu załącz plik.

### 1. Ćwiczenie ciągłości działania

**Aplikacja:** Word; pracuj na otwartym dokumencie roboczym.

**Wejście:** Usługi krytyczne, zależności i zaakceptowane czasy odtworzenia.

> Przygotuj ćwiczenie scenariuszowe z decyzjami i dowodami. Rozdziel przywrócenie infrastruktury od gotowości procesu biznesowego.

**Sprawdź:** Właściciel biznesowy potwierdza, że odtworzone dane pozwalają rzeczywiście obsłużyć klienta.

### 2. Przegląd chmury

**Aplikacja:** Word; pracuj na otwartym dokumencie roboczym.

**Wejście:** Eksport konfiguracji, vendora, zakres kont i model odpowiedzialności.

> Zaproponuj listę kontroli tożsamości, rejestrowania i ekspozycji zasobów. Oznacz miejsca bez wystarczających danych.

**Sprawdź:** Porównaj wskazania z aktualną konfiguracją i dokumentacją konkretnej usługi.

### 3. Pokrycie monitoringu

**Aplikacja:** Word; pracuj na otwartym dokumencie roboczym.

**Wejście:** Katalog usług i źródła zdarzeń wraz z retencją.

> Zmapuj scenariusze zagrożeń na dostępne sygnały. Wskaż luki, opóźnienia oraz odpowiedzialność za reakcję.

**Sprawdź:** Sprawdź, czy zdarzenie dociera do systemu analitycznego i jest dostępne przez wymagany okres.

### 4. Urządzenia IoT

**Aplikacja:** Word; pracuj na otwartym dokumencie roboczym.

**Wejście:** Inwentarz urządzeń, wersje i dozwolone przepływy sieciowe.

> Ułóż plan przeglądu aktualizacji, tożsamości i segmentacji. Wskaż urządzenia bez właściciela lub ścieżki wsparcia.

**Sprawdź:** Potwierdź ograniczenia producenta przed proponowaniem zmian wpływających na działanie urządzenia.

### 5. Ocena vendora

**Aplikacja:** Word; pracuj na otwartym dokumencie roboczym.

**Wejście:** Zakres usługi, dostęp do danych i dostarczone dowody zabezpieczeń.

> Przygotuj pytania uzupełniające proporcjonalne do wpływu vendora. Oddziel deklarację od potwierdzonego testu.

**Sprawdź:** Sprawdź datę, zakres i wyłączenia każdego dokumentu zamiast oceniać samą nazwę certyfikatu.

### 6. Priorytet podatności

**Aplikacja:** Word; pracuj na otwartym dokumencie roboczym.

**Wejście:** Wyniki skanu, ekspozycję zasobów i znaczenie usług.

> Zaproponuj kolejność przeglądu uwzględniając wpływ, wykorzystanie i zabezpieczenia kompensujące. Pokaż brakujące dane.

**Sprawdź:** Analityk potwierdza wersję oraz rzeczywistą podatność; wynik skanera może wymagać weryfikacji.

### 7. Zasady BYOD

**Aplikacja:** Word; pracuj na otwartym dokumencie roboczym.

**Wejście:** Model pracy, zakres danych i uzgodnione granice zarządzania.

> Przygotuj szkic zasad oddzielających dane służbowe i prywatne. Wskaż pytania o utratę urządzenia oraz zakończenie współpracy.

**Sprawdź:** Właściciele bezpieczeństwa i spraw pracowniczych zatwierdzają zakres technicznej kontroli.

### 8. Przegląd środowiska OT

**Aplikacja:** Word; pracuj na otwartym dokumencie roboczym.

**Wejście:** Mapę procesów przemysłowych i zatwierdzone ograniczenia testów.

> Zaproponuj pasywny przegląd zależności oraz dokumentacji. Uwzględnij wymogi ciągłości i odpowiedzialność operatora.

**Sprawdź:** Nie proponuj aktywnego skanowania ani zmiany konfiguracji bez uzgodnienia z właścicielem procesu.

### 9. Gotowość na ransomware

**Aplikacja:** Word; pracuj na otwartym dokumencie roboczym.

**Wejście:** Procedury, kopie i wyniki ostatnich testów odtworzenia.

> Przygotuj ćwiczenie obejmujące izolację, komunikację i odzyskanie działania. Wskaż dowody niezależności kopii od kont produkcyjnych.

**Sprawdź:** Sprawdź odtworzenie w praktyce; sam status udanego zadania backupu nie wystarcza.

### 10. Granice zaufania systemu AI

**Aplikacja:** Word; pracuj na otwartym dokumencie roboczym.

**Wejście:** Źródła danych, narzędzia agenta i możliwe działania.

> Wskaż scenariusze niepożądanego wpływu treści na działanie agenta. Zaproponuj testy odmowy, ograniczeń i kontroli człowieka.

**Sprawdź:** Sprawdź, czy treść dokumentu może zmienić uprawnienia lub uruchomić niezatwierdzone działanie.

## Zadanie wieloetapowe

Narzędzia: Microsoft 365 Copilot Cowork, Anthropic Claude Cowork, tryb agenta OpenAI ChatGPT.

### 1. Ochrona urządzeń mobilnych

**Wejście:** Typy urządzeń, polityki i zakres aplikacji firmowych.

> Na podstawie [zatwierdzonych plików z datą i wersją] przygotuj listę sprawdzeń dostępu, aktualizacji i utraty urządzenia. Rozróżnij konfigurację deklarowaną oraz wymuszoną. Przygotuj tabelę ustaleń, listę braków i pytania do właściciela. Wynik oddaj do [osoby zatwierdzającej] przed wysyłką lub zmianą danych.

**Sprawdź:** Zweryfikuj zachowanie urządzenia niezgodnego z polityką na koncie testowym.

### 2. Przegląd nadmiernych uprawnień

**Wejście:** Eksport ról, właścicieli i uzasadnień dostępu.

> Na podstawie [zatwierdzonych plików z datą i wersją] wskaż uprawnienia do ponownego zatwierdzenia. Oddziel dostęp stały, tymczasowy i awaryjny bez automatycznego odbierania. Przygotuj krótką notę, rejestr źródeł i warianty do oceny. Wynik oddaj do [osoby zatwierdzającej] przed wysyłką lub zmianą danych.

**Sprawdź:** Właściciel zasobu potwierdza potrzebę; brak ostatniego użycia nie zawsze oznacza zbędność.

### 3. Bezpieczeństwo pracy zdalnej

**Wejście:** Model dostępu, obsługiwane urządzenia i scenariusze awarii.

> Na podstawie [zatwierdzonych plików z datą i wersją] zaproponuj checklistę konfiguracji oraz instrukcję zgłoszenia problemu. Uwzględnij alternatywny kanał kontaktu przy utracie dostępu. Przygotuj zestawienie wersji, otwarte decyzje i plan kontroli. Wynik oddaj do [osoby zatwierdzającej] przed wysyłką lub zmianą danych.

**Sprawdź:** Przećwicz zgłoszenie z konta bez dostępu do firmowej poczty i komunikatora.

### 4. Analiza wycinka logów i szkic polityki

**Wejście:** Zanonimizowany eksport, zakres czasu i znany kontekst działania; zatwierdzone wymagania organizacji i obecny dokument.

> Na podstawie [zatwierdzonych plików z datą i wersją] wykonaj kolejno etap 1 — analiza wycinka logów: Wskaż nietypowe zdarzenia z identyfikatorami. Oddziel podejrzenie od potwierdzonego incydentu i zaproponuj odczyty weryfikujące. Etap 2 — szkic polityki: Wskaż niespójności odpowiedzialności oraz brakujące procedury. Zaproponuj redakcję oznaczając decyzje wymagające akceptacji. Przygotuj materiał do przeglądu wraz z dowodami i punktami spornymi. Wynik oddaj do [osoby zatwierdzającej] przed wysyłką lub zmianą danych.

**Sprawdź:** Porównaj wynik z surowym logiem oraz aktywnością administracyjną w tym samym czasie; Właściciel polityki potwierdza wykonalność obowiązków i dostępność narzędzi przed zatwierdzeniem.

### 5. Rejestr ryzyka i przegląd reguł zapory

**Wejście:** Katalog aktywów, scenariusze zagrożeń i istniejące zabezpieczenia; eksport reguł i zatwierdzoną mapę przepływów.

> Na podstawie [zatwierdzonych plików z datą i wersją] wykonaj kolejno etap 1 — rejestr ryzyka: Połącz przyczynę, zdarzenie i skutek biznesowy. Oddziel ocenę opartą na danych od opinii wymagającej warsztatu. Etap 2 — przegląd reguł zapory: Wskaż reguły szerokie, osierocone i sprzeczne z mapą. Zwróć pytania do właścicieli usług oraz plan testu. Przygotuj roboczy dokument, listę wyjątków i kryteria odbioru. Wynik oddaj do [osoby zatwierdzającej] przed wysyłką lub zmianą danych.

**Sprawdź:** Nie przypisuj precyzyjnego prawdopodobieństwa bez uzgodnionej metody oraz dowodów; Nie zmieniaj konfiguracji na podstawie samej rekomendacji; sprawdź zależności i dostęp awaryjny.

### 6. Zakres autoryzowanego testu i mapa dowodów zgodności

**Wejście:** Pisemny zakres, środowisko testowe i ograniczenia operacyjne; zatwierdzone wymagania i listę posiadanych dokumentów.

> Na podstawie [zatwierdzonych plików z datą i wersją] wykonaj kolejno etap 1 — zakres autoryzowanego testu: Przygotuj plan weryfikacji zabezpieczeń na poziomie celów i dowodów. Uwzględnij warunki przerwania oraz kontakt awaryjny.  Etap 2 — mapa dowodów zgodności: Przypisz dowody do wymagań oraz wskaż brak aktualnego potwierdzenia. Nie orzekaj zgodności organizacji. Przygotuj tabelę ustaleń, listę braków i pytania do właściciela. Wynik oddaj do [osoby zatwierdzającej] przed wysyłką lub zmianą danych.

**Sprawdź:** Potwierdź właściciela każdego zasobu i wyklucz systemy spoza zgody na test; Osoba odpowiedzialna za zgodność potwierdza interpretację, wersję wymagań i wystarczalność dowodu.

### 7. Przebieg reakcji na incydent i ćwiczenie dla pracowników

**Wejście:** Zanonimizowaną oś czasu zamkniętego incydentu; typowe zagrożenia i zasady zgłaszania podejrzeń.

> Na podstawie [zatwierdzonych plików z datą i wersją] wykonaj kolejno etap 1 — przebieg reakcji na incydent: Zidentyfikuj oczekiwanie, niejasne odpowiedzialności i brakujące informacje. Zaproponuj zmianę procedury oraz sposób sprawdzenia jej wpływu. Etap 2 — ćwiczenie dla pracowników: Przygotuj scenariusze edukacyjne z poprawną reakcją i wyjaśnieniem. Dopasuj język do roli, bez straszenia ani zawstydzania. Przygotuj krótką notę, rejestr źródeł i warianty do oceny. Wynik oddaj do [osoby zatwierdzającej] przed wysyłką lub zmianą danych.

**Sprawdź:** Oddziel czas detekcji, analizy i przywrócenia usługi; nie sumuj nieporównywalnych miar; Sprawdź, czy pracownik wie, gdzie zgłosić zdarzenie również poza godzinami pracy.

### 8. Przegląd aplikacji i kontrola tożsamości

**Wejście:** Model przepływu danych, opis uwierzytelniania i zakres testu; model ról, metody logowania i proces odbierania dostępu.

> Na podstawie [zatwierdzonych plików z datą i wersją] wykonaj kolejno etap 1 — przegląd aplikacji: Zaproponuj pytania o granice zaufania i plan weryfikacji kontroli. Nie uznawaj braku dostrzeżonego błędu za bezpieczeństwo. Etap 2 — kontrola tożsamości: Wskaż luki w cyklu życia tożsamości. Rozdziel konta pracowników, usług i dostęp awaryjny. Przygotuj zestawienie wersji, otwarte decyzje i plan kontroli. Wynik oddaj do [osoby zatwierdzającej] przed wysyłką lub zmianą danych.

**Sprawdź:** Ekspert weryfikuje wynik w kodzie oraz środowisku testowym objętym zgodą; Sprawdź jedną rzeczywistą zmianę roli oraz odejście pracownika od początku do końca procesu.

### 9. Ćwiczenie ciągłości działania i przegląd chmury

**Wejście:** Usługi krytyczne, zależności i zaakceptowane czasy odtworzenia; eksport konfiguracji, vendora, zakres kont i model odpowiedzialności.

> Na podstawie [zatwierdzonych plików z datą i wersją] wykonaj kolejno etap 1 — ćwiczenie ciągłości działania: Przygotuj ćwiczenie scenariuszowe z decyzjami i dowodami. Rozdziel przywrócenie infrastruktury od gotowości procesu biznesowego.  Etap 2 — przegląd chmury: Zaproponuj listę kontroli tożsamości, rejestrowania i ekspozycji zasobów. Oznacz miejsca bez wystarczających danych. Przygotuj materiał do przeglądu wraz z dowodami i punktami spornymi. Wynik oddaj do [osoby zatwierdzającej] przed wysyłką lub zmianą danych.

**Sprawdź:** Właściciel biznesowy potwierdza, że odtworzone dane pozwalają rzeczywiście obsłużyć klienta; Porównaj wskazania z aktualną konfiguracją i dokumentacją konkretnej usługi.

### 10. Pokrycie monitoringu i urządzenia iot

**Wejście:** Katalog usług i źródła zdarzeń wraz z retencją; inwentarz urządzeń, wersje i dozwolone przepływy sieciowe.

> Na podstawie [zatwierdzonych plików z datą i wersją] wykonaj kolejno etap 1 — pokrycie monitoringu: Zmapuj scenariusze zagrożeń na dostępne sygnały. Wskaż luki, opóźnienia oraz odpowiedzialność za reakcję. Etap 2 — urządzenia iot: Ułóż plan przeglądu aktualizacji, tożsamości i segmentacji. Wskaż urządzenia bez właściciela lub ścieżki wsparcia. Przygotuj roboczy dokument, listę wyjątków i kryteria odbioru. Wynik oddaj do [osoby zatwierdzającej] przed wysyłką lub zmianą danych.

**Sprawdź:** Sprawdź, czy zdarzenie dociera do systemu analitycznego i jest dostępne przez wymagany okres; Potwierdź ograniczenia producenta przed proponowaniem zmian wpływających na działanie urządzenia.

## Zasady pracy w tej roli (z wpisu)

### Jak przygotować materiał do rozmowy z Copilotem?

Zacznij od jednego rezultatu: raportu, wariantów rozwiązania albo planu testu. Polecenie „pomóż mi w pracy” nie określa, co ma trafić do odbiorcy. W przykładach zastąp opis wejścia własnym zatwierdzonym materiałem. Nie podawaj haseł, kluczy, zbędnych danych osobowych ani dokumentów, których nie wolno przetwarzać w wybranym narzędziu.

Nazwa Copilot obejmuje różne doświadczenia pracy. Dostęp do dokumentu, aplikacji czy źródła firmowego zależy od używanego produktu i konfiguracji. Zasady Microsoft 365 Copilot opisuje [dokumentacja danych i prywatności Microsoft](https://learn.microsoft.com/en-us/microsoft-365/copilot/microsoft-365-copilot-privacy). Przed wklejeniem materiału sprawdź, z jakiej usługi i konta korzystasz oraz czy taki sposób przetwarzania zaakceptowała firma. Sam prompt nie nadaje uprawnień i nie tworzy integracji.

| Element wejścia | Co podać | Co zrobić, gdy go brakuje |
|---|---|---|
| Cel | Decyzję lub dokument potrzebny odbiorcy | Najpierw uzgodnić rezultat, zamiast generować obszerny raport |
| Źródło | Materiał z datą, zakresem i właścicielem | Poprosić o brakujące dane i zachować lukę w odpowiedzi |
| Ograniczenia | Zakres, wersję, termin oraz wyłączenia | Oznaczyć założenia do potwierdzenia przed użyciem wyniku |
| Odbiór | Osobę sprawdzającą i kryterium poprawności | Wybrać mniejsze zadanie, które da się rzetelnie ocenić |

Jeżeli potrzebujesz uporządkowania nazw produktów, zacznij od przewodnika po Microsoft Copilot dla firm. Ten zestaw rozwija pracę z poleceniem w określonej roli; nie stanowi instrukcji zakupu licencji ani obietnicy funkcji w każdym wariancie Copilota.

### Jakie ograniczenia mają znaczenie w tej roli?

Microsoft Security Copilot jest odrębnym rozwiązaniem od asystenta pracy biurowej. Dostęp do platformy nie oznacza dostępu do wszystkich danych bezpieczeństwa: Microsoft opisuje osobne role oraz uprawnienia źródeł w [dokumentacji uwierzytelniania Security Copilot](https://learn.microsoft.com/en-us/copilot/security/authentication). Sprawdź również uruchomione integracje i warunki dostępu w organizacji. Sam tekst promptu nie podłącza logów ani nie uruchamia monitoringu.

Poniższe polecenia służą analizie materiału i przygotowaniu procedur. Odpowiedź powinna wskazywać identyfikator zdarzenia, zakres czasu i brakujące dane. Anomalia może wynikać z legalnej zmiany administracyjnej; brak anomalii w wycinku nie dowodzi braku ataku. W incydencie zachowuj źródłowe dowody i ustaloną ścieżkę eskalacji, zamiast zastępować je streszczeniem z czatu.

### Jak sprawdzić, czy prompt pomaga zespołowi?

Wybierz trzy zakończone zadania o podobnym stopniu trudności, dla których masz materiał źródłowy i zaakceptowany rezultat. Przygotuj odpowiedź z pomocą Copilota, a następnie oceń ją według tych samych kryteriów co pracę wykonywaną dotychczas. Nie porównuj łatwego przykładu demonstracyjnego z najtrudniejszym zadaniem miesiąca. Oddziel czas przygotowania materiału, generowania, sprawdzania i poprawek.

| Kryterium | Dowód w próbce | Warunek zatrzymania |
|---|---|---|
| Zgodność z materiałem | Każdy fakt ma wskazane źródło | Pojawia się wymyślony fakt, data lub zobowiązanie |
| Kompletność | Lista wymagań jest porównana z odpowiedzią | Brakuje elementu koniecznego do decyzji lub wykonania |
| Użyteczność | Odbiorca potrafi wykorzystać rezultat | Dokument wymaga odtworzenia niemal od początku |
| Koszt kontroli | Zapisano cały czas pracy, wraz z poprawkami | Szybsze generowanie oznacza dłuższą i trudniejszą weryfikację |

Taki test nie dowodzi jeszcze wyniku dla całego działu. Pokazuje, które zadanie nadaje się do kolejnej próby oraz jakie dane trzeba doprecyzować. Jeśli odpowiedź pomija istotną informację, popraw źródło albo kryterium w poleceniu. Jeśli błąd wraca mimo kompletnego materiału, ogranicz zakres zastosowania. Nie traktuj kolejnego ładnie napisanego wariantu jako naprawy bez ponownego porównania z faktami.

Zachowaj zatwierdzony prompt razem z opisem zadania, wersją źródeł i przykładem błędnej odpowiedzi. Dzięki temu kolejna osoba wie nie tylko, co wkleić, ale też czego szukać podczas kontroli. Materiały przekazywane między działami wymagają wspólnego rozumienia odbiorcy i celu; pomocny punkt porównania stanowią [prompty Copilot dla marketingu](https://majchrzycki.com/blog/microsoft-copilot-23-praktyczne-prompty-dla-marketerow), zwłaszcza przy briefach i komunikacji.

Na pierwszy dzień wybierz jedno polecenie, przygotuj wejście i zapisz warunek odrzucenia odpowiedzi. Po próbie omów z właścicielem zadania, co wymagało poprawki. Jeżeli ten krok działa, przejdź do [promptów administratora IT służących kontrolowanemu wdrażaniu zmian](https://majchrzycki.com/blog/microsoft-copilot-23-praktyczne-prompty-dla-administratorow-it), aby przygotować współpracę z sąsiednią rolą bez przenoszenia wszystkich jej decyzji do jednego promptu.
