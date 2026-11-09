# Biblioteka promptów: Administrator IT

Źródło: [„Microsoft Copilot: 30 promptów dla administratorów IT”](https://majchrzycki.com/blog/microsoft-copilot-23-praktyczne-prompty-dla-administratorow-it?utm_source=github&utm_medium=referral&utm_campaign=moja-firma-prompty&utm_content=prompty-administrator-it), Krzysztof Majchrzycki, majchrzycki.com. Stan wpisu: 2026-10-02. Licencja MIT.

Prompty pisano pod Microsoft 365 Copilot. W innych narzędziach działają prompty z grupy „Dowolny czat”, a pozostałe wymagają załączenia pliku albo pracy etapami.

## Dowolny czat

Narzędzia: Anthropic Claude, OpenAI ChatGPT, Google Gemini, Microsoft 365 Copilot Chat.

### 1. Raport plików przed sprzątaniem

**Wejście:** Wersję PowerShell, dozwolony katalog i politykę retencji.

> Zaprojektuj skrypt tylko raportujący pliki tymczasowe starsze od wskazanej daty. Zwróć ścieżkę, rozmiar i datę; nie usuwaj plików.

**Sprawdź:** Sprawdź na katalogu testowym, czy raport wyklucza dowiązania i ścieżki spoza zakresu.

### 2. Przegląd reguł zapory

**Wejście:** Eksport reguł, listę usług i ścieżkę dostępu administracyjnego.

> Wskaż reguły zbędne lub zbyt szerokie, wyjaśniając zależność od każdej usługi. Przygotuj kolejność testów i plan przywrócenia.

**Sprawdź:** Potwierdź działanie zarządzania zdalnego przed ograniczeniem jakiegokolwiek portu.

### 3. Oś czasu błędu

**Wejście:** Fragment logów z czasem, strefą czasową i opisem objawu.

> Ułóż zdarzenia chronologicznie. Oddziel obserwacje od hipotez; dla każdej hipotezy podaj następny odczyt, który ją potwierdzi lub odrzuci.

**Sprawdź:** Porównaj identyfikatory zdarzeń z surowym eksportem i sprawdź brakujące minuty.

### 4. Jednostki organizacyjne AD DS

**Wejście:** Schemat domeny AD DS, role administratorów i wymagania delegacji.

> Zaproponuj drzewo OU oraz zakres delegacji. Wskaż osobno dziedziczenie GPO, grupy uprawnień i założenia wymagające decyzji.

**Sprawdź:** Sprawdź, czy propozycja dotyczy AD DS, a nie chmurowego katalogu Entra ID.

### 5. Diagnoza zapytania SQL

**Wejście:** Zapytanie, schemat tabel i zanonimizowany plan wykonania.

> Wskaż możliwe wąskie gardła i warianty zmiany. Dla każdego opisz wpływ na semantykę wyniku oraz koszt dodatkowego indeksu.

**Sprawdź:** Porównaj wyniki i plany na reprezentatywnych danych bez wdrażania indeksu w produkcji.

### 6. Zasady dla urządzeń mobilnych

**Wejście:** Typy urządzeń, model własności i obowiązujące wymagania.

> Przygotuj szkic zasad szyfrowania, dostępu i zgłoszenia utraty. Rozdziel urządzenia firmowe oraz prywatne; oznacz decyzje dla właściciela procesu.

**Sprawdź:** Sprawdź, czy procedura usunięcia danych nie obejmuje nieuzgodnionych danych prywatnych.

### 7. Test odtworzenia kopii

**Wejście:** Listę usług, zależności, zatwierdzone RPO i RTO.

> Zaprojektuj próbę odtworzenia jednej usługi z kopii. Zwróć warunki wejścia, kolejność, pomiary czasu oraz dowody poprawności danych.

**Sprawdź:** Odtwórz w odizolowanym środowisku i porównaj wynik z wymaganiami właściciela usługi.

### 8. Rezerwacje DHCP

**Wejście:** Plan adresacji, zakresy i listę rezerwacji bez danych osobowych.

> Wykryj nakładające się zakresy, duplikaty adresów i brakujące informacje. Przygotuj raport oraz plan testów klienta po zmianie.

**Sprawdź:** Zweryfikuj adresy statyczne i faktyczne dzierżawy, których nie ma w dokumentacji.

### 9. Pierścienie aktualizacji

**Wejście:** Inwentarz systemów, okna serwisowe i zależności aplikacji.

> Podziel aktualizacje na pilotaż i kolejne grupy. Określ warunek zatrzymania, test biznesowy i odpowiedzialność za wycofanie.

**Sprawdź:** Potwierdź możliwość odtworzenia usługi przed objęciem krytycznego systemu pilotażem.

### 10. Alerty sieciowe

**Wejście:** Bazowe pomiary opóźnień, utraty pakietów i obciążenia.

> Zaproponuj alerty odnoszące się do objawów użytkownika. Dla każdego wskaż próg roboczy, czas trwania i sposób ograniczania powtórzeń.

**Sprawdź:** Odtwórz znany incydent i sprawdź, czy alert odróżnia go od zwykłego szczytu.

## Aplikacje Microsoft 365

Narzędzia: Excel, Word, PowerPoint, Outlook, Teams z Microsoft 365 Copilot; w innym narzędziu załącz plik.

### 1. Przegląd dostępu VPN

**Aplikacja:** Word; pracuj na otwartym dokumencie roboczym.

**Wejście:** Opis rozwiązania VPN, metody uwierzytelniania i grupy użytkowników.

> Przygotuj listę kontroli dostępu, rejestrowania i odbierania uprawnień. Nie zakładaj konkretnego produktu bez danych o wersji.

**Sprawdź:** Porównaj listę z konfiguracją testową oraz procedurą dostępu awaryjnego.

### 2. Konta potencjalnie nieaktywne

**Aplikacja:** Word; pracuj na otwartym dokumencie roboczym.

**Wejście:** Eksport aktywności, typ konta i listę wyjątków.

> Przygotuj raport kandydatów do przeglądu. Oddziel konta usługowe, urlopy i konta awaryjne; nie generuj automatycznego wyłączania.

**Sprawdź:** Właściciel potwierdza zasadność wyłączenia każdego konta na podstawie kilku sygnałów.

### 3. Diagnostyka DNS

**Aplikacja:** Word; pracuj na otwartym dokumencie roboczym.

**Wejście:** Nazwę problemowej usługi, wyniki zapytań i konfigurację resolverów.

> Ułóż plan porównania odpowiedzi, pamięci podręcznej i delegacji. Wskaż, które wyniki rozstrzygają między błędem klienta a strefy.

**Sprawdź:** Sprawdź odpowiedzi z dwóch segmentów sieci i zapisuj czas wykonania pomiaru.

### 4. Prognoza miejsca na dysku

**Aplikacja:** Excel; pracuj na otwartym arkuszu z danymi.

**Wejście:** Historię zajętości, przyrost danych i terminy zadań wsadowych.

> Policz orientacyjny czas do progu na podstawie jawnych założeń. Oddziel stały trend od jednorazowego skoku.

**Sprawdź:** Przelicz wynik w arkuszu i sprawdź, czy retencja może zmienić kierunek trendu.

### 5. Próba przełączenia klastra

**Aplikacja:** Word; pracuj na otwartym dokumencie roboczym.

**Wejście:** Topologię klastra, wersje SQL Server i wymagania aplikacji.

> Przygotuj scenariusz kontrolowanego przełączenia z kryteriami rozpoczęcia i przerwania. Uwzględnij klientów, quorum i zależności sieciowe.

**Sprawdź:** Administrator weryfikuje zgodność procedury z konkretnym typem klastra i dokumentacją wersji.

### 6. Inwentarz certyfikatów

**Aplikacja:** Word; pracuj na otwartym dokumencie roboczym.

**Wejście:** Raport certyfikatów, nazwy usług i daty wygaśnięcia.

> Ułóż harmonogram odnowień oraz kontroli nazw, łańcucha i przypisania do usługi. Nie żądaj kluczy prywatnych.

**Sprawdź:** Sprawdź certyfikat widoczny dla rzeczywistego klienta, nie tylko wpis na serwerze.

### 7. Test równoważenia ruchu

**Aplikacja:** Word; pracuj na otwartym dokumencie roboczym.

**Wejście:** Konfigurację load balancera i sposób sprawdzania zdrowia aplikacji.

> Zaproponuj test odłączenia jednej instancji, sesji użytkownika i powrotu do puli. Zwróć oczekiwane obserwacje.

**Sprawdź:** Potwierdź, czy health check wykrywa niedostępność zależnej bazy danych.

### 8. Raport uprawnień NTFS

**Aplikacja:** Excel; pracuj na otwartym arkuszu z danymi.

**Wejście:** Zakres folderów, model grup i przykład eksportu ACL.

> Opracuj strukturę raportu uprawnień jawnych i dziedziczonych. Wskaż szerokie grupy i nierozpoznane identyfikatory bez zmiany ACL.

**Sprawdź:** Wybierz próbkę folderów i porównaj raport z efektywnym dostępem użytkownika testowego.

### 9. Kontrola replikacji

**Aplikacja:** Word; pracuj na otwartym dokumencie roboczym.

**Wejście:** Typ replikacji, topologię i wymagany poziom świeżości.

> Przygotuj plan obserwacji opóźnień, konfliktów i błędów. Nie utożsamiaj replikacji z kopią umożliwiającą powrót przed usunięciem danych.

**Sprawdź:** Sprawdź, co nastąpi po logicznym uszkodzeniu danych na źródle.

### 10. Przegląd kontenera

**Aplikacja:** Word; pracuj na otwartym dokumencie roboczym.

**Wejście:** Manifest wdrożenia, wersję systemu i wymagania aplikacji.

> Wypisz zależności obrazu, trwałość danych, sposób aktualizacji i kontrolę zdrowia. Zaproponuj test odtworzenia kontenera.

**Sprawdź:** Potwierdź zgodność obrazu i hosta oraz brak sekretów w obrazie i logach.

## Zadanie wieloetapowe

Narzędzia: Microsoft 365 Copilot Cowork, Anthropic Claude Cowork, tryb agenta OpenAI ChatGPT.

### 1. Mapa monitoringu

**Wejście:** Katalog usług, narzędzia monitorowania i historię incydentów.

> Na podstawie [zatwierdzonych plików z datą i wersją] przypisz do usług sygnały dostępności, wydajności i pojemności. Wskaż luki oraz właściciela każdego alarmu. Przygotuj tabelę ustaleń, listę braków i pytania do właściciela. Wynik oddaj do [osoby zatwierdzającej] przed wysyłką lub zmianą danych.

**Sprawdź:** Usuń alarmy, na które nikt nie ma zdefiniowanej reakcji ani dyżuru.

### 2. Przegląd gpo

**Wejście:** Raport zastosowanych zasad, strukturę OU i listę wyjątków.

> Na podstawie [zatwierdzonych plików z datą i wersją] wskaż potencjalne konflikty oraz zakres testu na wydzielonej grupie komputerów. Uwzględnij dziedziczenie i filtrowanie. Przygotuj krótką notę, rejestr źródeł i warianty do oceny. Wynik oddaj do [osoby zatwierdzającej] przed wysyłką lub zmianą danych.

**Sprawdź:** Porównaj przewidywanie z wynikowym zestawem zasad na urządzeniu pilotażowym.

### 3. Onboarding techniczny

**Wejście:** Zatwierdzoną macierz ról i opis systemów tożsamości.

> Na podstawie [zatwierdzonych plików z datą i wersją] ułóż etapy utworzenia dostępu, zatwierdzenia, weryfikacji i odebrania uprawnień przy błędzie. Nie wpisuj sekretów do skryptu. Przygotuj zestawienie wersji, otwarte decyzje i plan kontroli. Wynik oddaj do [osoby zatwierdzającej] przed wysyłką lub zmianą danych.

**Sprawdź:** Przetestuj powtórne uruchomienie oraz przerwanie w połowie, bez duplikacji kont i grup.

### 4. Raport plików przed sprzątaniem i przegląd reguł zapory

**Wejście:** Wersję PowerShell, dozwolony katalog i politykę retencji; eksport reguł, listę usług i ścieżkę dostępu administracyjnego.

> Na podstawie [zatwierdzonych plików z datą i wersją] wykonaj kolejno etap 1 — raport plików przed sprzątaniem: Zaprojektuj skrypt tylko raportujący pliki tymczasowe starsze od wskazanej daty. Zwróć ścieżkę, rozmiar i datę; nie usuwaj plików. Etap 2 — przegląd reguł zapory: Wskaż reguły zbędne lub zbyt szerokie, wyjaśniając zależność od każdej usługi. Przygotuj kolejność testów i plan przywrócenia. Przygotuj materiał do przeglądu wraz z dowodami i punktami spornymi. Wynik oddaj do [osoby zatwierdzającej] przed wysyłką lub zmianą danych.

**Sprawdź:** Sprawdź na katalogu testowym, czy raport wyklucza dowiązania i ścieżki spoza zakresu; Potwierdź działanie zarządzania zdalnego przed ograniczeniem jakiegokolwiek portu.

### 5. Oś czasu błędu i jednostki organizacyjne ad ds

**Wejście:** Fragment logów z czasem, strefą czasową i opisem objawu; schemat domeny AD DS, role administratorów i wymagania delegacji.

> Na podstawie [zatwierdzonych plików z datą i wersją] wykonaj kolejno etap 1 — oś czasu błędu: Ułóż zdarzenia chronologicznie. Oddziel obserwacje od hipotez; dla każdej hipotezy podaj następny odczyt, który ją potwierdzi lub odrzuci. Etap 2 — jednostki organizacyjne ad ds: Zaproponuj drzewo OU oraz zakres delegacji. Wskaż osobno dziedziczenie GPO, grupy uprawnień i założenia wymagające decyzji. Przygotuj roboczy dokument, listę wyjątków i kryteria odbioru. Wynik oddaj do [osoby zatwierdzającej] przed wysyłką lub zmianą danych.

**Sprawdź:** Porównaj identyfikatory zdarzeń z surowym eksportem i sprawdź brakujące minuty; Sprawdź, czy propozycja dotyczy AD DS, a nie chmurowego katalogu Entra ID.

### 6. Diagnoza zapytania SQL i zasady dla urządzeń mobilnych

**Wejście:** Zapytanie, schemat tabel i zanonimizowany plan wykonania; typy urządzeń, model własności i obowiązujące wymagania.

> Na podstawie [zatwierdzonych plików z datą i wersją] wykonaj kolejno etap 1 — diagnoza zapytania SQL: Wskaż możliwe wąskie gardła i warianty zmiany. Dla każdego opisz wpływ na semantykę wyniku oraz koszt dodatkowego indeksu. Etap 2 — zasady dla urządzeń mobilnych: Przygotuj szkic zasad szyfrowania, dostępu i zgłoszenia utraty. Rozdziel urządzenia firmowe oraz prywatne; oznacz decyzje dla właściciela procesu. Przygotuj tabelę ustaleń, listę braków i pytania do właściciela. Wynik oddaj do [osoby zatwierdzającej] przed wysyłką lub zmianą danych.

**Sprawdź:** Porównaj wyniki i plany na reprezentatywnych danych bez wdrażania indeksu w produkcji; Sprawdź, czy procedura usunięcia danych nie obejmuje nieuzgodnionych danych prywatnych.

### 7. Test odtworzenia kopii i rezerwacje dhcp

**Wejście:** Listę usług, zależności, zatwierdzone RPO i RTO; plan adresacji, zakresy i listę rezerwacji bez danych osobowych.

> Na podstawie [zatwierdzonych plików z datą i wersją] wykonaj kolejno etap 1 — test odtworzenia kopii: Zaprojektuj próbę odtworzenia jednej usługi z kopii. Zwróć warunki wejścia, kolejność, pomiary czasu oraz dowody poprawności danych. Etap 2 — rezerwacje dhcp: Wykryj nakładające się zakresy, duplikaty adresów i brakujące informacje. Przygotuj raport oraz plan testów klienta po zmianie. Przygotuj krótką notę, rejestr źródeł i warianty do oceny. Wynik oddaj do [osoby zatwierdzającej] przed wysyłką lub zmianą danych.

**Sprawdź:** Odtwórz w odizolowanym środowisku i porównaj wynik z wymaganiami właściciela usługi; Zweryfikuj adresy statyczne i faktyczne dzierżawy, których nie ma w dokumentacji.

### 8. Pierścienie aktualizacji i alerty sieciowe

**Wejście:** Inwentarz systemów, okna serwisowe i zależności aplikacji; bazowe pomiary opóźnień, utraty pakietów i obciążenia.

> Na podstawie [zatwierdzonych plików z datą i wersją] wykonaj kolejno etap 1 — pierścienie aktualizacji: Podziel aktualizacje na pilotaż i kolejne grupy. Określ warunek zatrzymania, test biznesowy i odpowiedzialność za wycofanie. Etap 2 — alerty sieciowe: Zaproponuj alerty odnoszące się do objawów użytkownika. Dla każdego wskaż próg roboczy, czas trwania i sposób ograniczania powtórzeń. Przygotuj zestawienie wersji, otwarte decyzje i plan kontroli. Wynik oddaj do [osoby zatwierdzającej] przed wysyłką lub zmianą danych.

**Sprawdź:** Potwierdź możliwość odtworzenia usługi przed objęciem krytycznego systemu pilotażem; Odtwórz znany incydent i sprawdź, czy alert odróżnia go od zwykłego szczytu.

### 9. Przegląd dostępu vpn i konta potencjalnie nieaktywne

**Wejście:** Opis rozwiązania VPN, metody uwierzytelniania i grupy użytkowników; eksport aktywności, typ konta i listę wyjątków.

> Na podstawie [zatwierdzonych plików z datą i wersją] wykonaj kolejno etap 1 — przegląd dostępu vpn: Przygotuj listę kontroli dostępu, rejestrowania i odbierania uprawnień. Nie zakładaj konkretnego produktu bez danych o wersji.  Etap 2 — konta potencjalnie nieaktywne: Przygotuj raport kandydatów do przeglądu. Oddziel konta usługowe, urlopy i konta awaryjne; nie generuj automatycznego wyłączania. Przygotuj materiał do przeglądu wraz z dowodami i punktami spornymi. Wynik oddaj do [osoby zatwierdzającej] przed wysyłką lub zmianą danych.

**Sprawdź:** Porównaj listę z konfiguracją testową oraz procedurą dostępu awaryjnego; Właściciel potwierdza zasadność wyłączenia każdego konta na podstawie kilku sygnałów.

### 10. Diagnostyka dns i prognoza miejsca na dysku

**Wejście:** Nazwę problemowej usługi, wyniki zapytań i konfigurację resolverów; historię zajętości, przyrost danych i terminy zadań wsadowych.

> Na podstawie [zatwierdzonych plików z datą i wersją] wykonaj kolejno etap 1 — diagnostyka dns: Ułóż plan porównania odpowiedzi, pamięci podręcznej i delegacji. Wskaż, które wyniki rozstrzygają między błędem klienta a strefy. Etap 2 — prognoza miejsca na dysku: Policz orientacyjny czas do progu na podstawie jawnych założeń. Oddziel stały trend od jednorazowego skoku. Przygotuj roboczy dokument, listę wyjątków i kryteria odbioru. Wynik oddaj do [osoby zatwierdzającej] przed wysyłką lub zmianą danych.

**Sprawdź:** Sprawdź odpowiedzi z dwóch segmentów sieci i zapisuj czas wykonania pomiaru; Przelicz wynik w arkuszu i sprawdź, czy retencja może zmienić kierunek trendu.

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

W administracji IT szczególnie groźne jest pomieszanie podobnie brzmiących technologii. OU i GPO dotyczą Active Directory Domain Services; nie należy przenosić tych instrukcji wprost do Microsoft Entra ID. Zakres GPO opisuje [dokumentacja Windows Server](https://learn.microsoft.com/en-us/windows-server/identity/ad-ds/manage/group-policy/group-policy-overview). W promptach podawaj produkt i wersję, model tożsamości oraz miejsce wykonania.

Skrypt wygenerowany przez asystenta pozostaje kodem wymagającym przeglądu. Mechanizmy `SupportsShouldProcess` i `WhatIf` pomagają obejrzeć zamierzone zmiany, jeśli zostały poprawnie zaimplementowane; sama obecność przełącznika nie zastępuje testu. Zobacz [opis ShouldProcess w PowerShell](https://learn.microsoft.com/en-us/powershell/scripting/learn/deep-dives/everything-about-shouldprocess). Najpierw raport, potem test w wydzielonym zakresie, a dopiero po akceptacji rzeczywista zmiana.

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

Na pierwszy dzień wybierz jedno polecenie, przygotuj wejście i zapisz warunek odrzucenia odpowiedzi. Po próbie omów z właścicielem zadania, co wymagało poprawki. Jeżeli ten krok działa, przejdź do [promptów dla administracji biurowej](https://majchrzycki.com/blog/microsoft-copilot-23-praktyczne-prompty-dla-specjalistow-administracji), aby przygotować współpracę z sąsiednią rolą bez przenoszenia wszystkich jej decyzji do jednego promptu.
