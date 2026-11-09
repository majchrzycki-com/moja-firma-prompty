# Biblioteka promptów: Specjalista IT

Źródło: [„Copilot dla IT: 30 promptów z kontrolą wyników”](https://majchrzycki.com/blog/microsoft-copilot-23-praktyczne-prompty-dla-specjalistow-it-i-informatykow?utm_source=github&utm_medium=referral&utm_campaign=moja-firma-prompty&utm_content=prompty-specjalista-it), Krzysztof Majchrzycki, majchrzycki.com. Stan wpisu: 2026-11-11. Licencja MIT.

Prompty pisano pod Microsoft 365 Copilot. W innych narzędziach działają prompty z grupy „Dowolny czat”, a pozostałe wymagają załączenia pliku albo pracy etapami.

## Dowolny czat

Narzędzia: Anthropic Claude, OpenAI ChatGPT, Google Gemini, Microsoft 365 Copilot Chat.

### 1. Debugowanie PowerShell

> Na podstawie [zatwierdzony materiał do zadania „Debugowanie PowerShell”, data i wersja] przeanalizuj [kod] dla PowerShell [wersja] na [system]. Oczekiwany wynik to [opis], otrzymany błąd to [komunikat]. Oddziel potwierdzone błędy od hipotez. Zaproponuj minimalną poprawkę i test bez modyfikowania danych produkcyjnych.

**Sprawdź:** Sprawdź, czy poprawka usuwa przyczynę, a nie tylko ukrywa wyjątek. Zachowaj przykład, który wcześniej odtwarzał błąd.

### 2. Dokumentacja modułu CRM

> Na podstawie [zatwierdzony materiał do zadania „Dokumentacja modułu CRM”, data i wersja] na podstawie [specyfikacja i kod] przygotuj szkielet dokumentacji modułu CRM: odpowiedzialność, wejścia, wyjścia, zależności i błędy. Przy każdej funkcji wskaż źródło. Brakujące informacje oznacz jako pytania, nie dopisuj domyślnego zachowania.

**Sprawdź:** Porównaj opis z działającym modułem. Rozdziel funkcje istniejące od planowanych, aby dokumentacja nie obiecywała przyszłych możliwości.

### 3. Optymalizacja SQL

> Na podstawie [zatwierdzony materiał do zadania „Optymalizacja SQL”, data i wersja] dla [silnik i wersja], [schemat], [zapytanie] oraz [plan wykonania] wskaż możliwe przyczyny opóźnienia. Zaproponuj warianty zachowujące wynik. Opisz pomiar przed i po oraz koszt dodatkowych indeksów. Nie podawaj procentu przyspieszenia bez pomiaru.

**Sprawdź:** Porównaj również liczbę i zawartość rekordów. Szybsze zapytanie zwracające inne dane nie jest poprawną optymalizacją.

### 4. Automatyzacja kopii zapasowej

> Na podstawie [zatwierdzony materiał do zadania „Automatyzacja kopii zapasowej”, data i wersja] przygotuj projekt procedury backupu [baza, wersja, środowisko]. Uwzględnij retencję, szyfrowany transport, obsługę błędów i próbę odtworzenia. Sekrety mają pochodzić z zatwierdzonego mechanizmu przechowywania. Najpierw przedstaw plan oraz brakujące decyzje, bez wykonywania operacji.

**Sprawdź:** Odbiór oprzyj na odtworzeniu próbki w środowisku testowym. Samo istnienie pliku nie potwierdza użyteczności kopii.

### 5. Analiza logów

> Na podstawie [zatwierdzony materiał do zadania „Analiza logów”, data i wersja] przeanalizuj [zanonimizowane logi] z okresu [czas i strefa]. Zbuduj chronologię z identyfikatorami zdarzeń. Oddziel obserwacje od możliwych przyczyn. Dla każdej hipotezy podaj dodatkowy dowód potrzebny do jej potwierdzenia.

**Sprawdź:** Sprawdź kolejność czasową między usługami. Brak wpisu w dostarczonym fragmencie nie dowodzi, że zdarzenie nie wystąpiło.

### 6. Testy jednostkowe C#

> Na podstawie [zatwierdzony materiał do zadania „Testy jednostkowe C#”, data i wersja] dla [klasa i kontrakt zachowania] zaproponuj testy w [framework i wersja]. Obejmij normalne wejścia, wartości graniczne i błędy zależności. Wyjaśnij, jaki błąd wykrywa każdy test. Nie dopasowuj oczekiwań wyłącznie do obecnej implementacji.

**Sprawdź:** Uruchom testy i sprawdź, czy celowo błędna wersja funkcji rzeczywiście powoduje odpowiednią porażkę.

### 7. Architektura aplikacji

> Na podstawie [zatwierdzony materiał do zadania „Architektura aplikacji”, data i wersja] porównaj dwa warianty architektury dla [wymagania, ruch, zespół, budżet]. Uwzględnij prostsze rozwiązanie oraz podział na usługi. Opisz zależności, utrzymanie i warunki zmiany decyzji. Nie zakładaj z góry, że mikrousługi są potrzebne.

**Sprawdź:** Wybór oceń względem wymagań i kompetencji zespołu. Diagram sam nie rozstrzyga kosztu utrzymania.

### 8. Instrukcja resetowania hasła

> Na podstawie [zatwierdzony materiał do zadania „Instrukcja resetowania hasła”, data i wersja] z [zatwierdzona procedura organizacji] przygotuj instrukcję resetowania hasła dla pracownika. Użyj nazw widocznych w naszym interfejsie. Uwzględnij brak dostępu do metody weryfikacji i właściwy kontakt do wsparcia. Nie wymyślaj ustawień administratora.

**Sprawdź:** Przejdź instrukcję kontem testowym o właściwej roli. Sprawdź również ścieżkę, na której użytkownik potrzebuje pomocy.

### 9. Raport infrastruktury

> Na podstawie [zatwierdzony materiał do zadania „Raport infrastruktury”, data i wersja] na podstawie [zestawienie metryk] przygotuj raport za [okres]. Oddziel dostępność, incydenty, pojemność i działania. Podaj definicję każdego wskaźnika, źródło oraz braki danych. Nie porównuj okresów o różnym zakresie bez zaznaczenia różnicy.

**Sprawdź:** Ręcznie sprawdź przynajmniej jeden wskaźnik i jego mianownik. Brak pomiaru nie powinien stawać się zerem.

### 10. Przegląd firewalla

> Na podstawie [zatwierdzony materiał do zadania „Przegląd firewalla”, data i wersja] oceń [zanonimizowane reguły] względem [zatwierdzona macierz komunikacji]. Wskaż nadmiarowe zakresy i sprzeczności jako kandydatów do przeglądu. Nie zmieniaj konfiguracji. Dla propozycji opisz test dozwolonego ruchu i możliwość wycofania.

**Sprawdź:** Zweryfikuj zależności przed usunięciem reguły. Brak ruchu w krótkim oknie może nie obejmować procesu miesięcznego.

## Aplikacje Microsoft 365

Narzędzia: Excel, Word, PowerPoint, Outlook, Teams z Microsoft 365 Copilot; w innym narzędziu załącz plik.

### 1. Optymalizacja TypeScript

**Aplikacja:** Word; pracuj na otwartym dokumencie roboczym.

> Oceń [kod, wersja środowiska, pomiar] pod kątem wskazanego opóźnienia. Oddziel zmiany czytelności od wydajności. Zaproponuj najmniejszą zmianę i powtarzalny benchmark. Zachowaj kontrakt funkcji oraz obsługę błędów.

**Sprawdź:** Porównuj te same dane i warunki. Nie przyjmuj deklarowanego przyspieszenia bez uruchomienia pomiaru.

### 2. Migracja danych

**Aplikacja:** Word; pracuj na otwartym dokumencie roboczym.

> Przygotuj plan migracji z [MySQL, wersja] do [PostgreSQL, wersja] na podstawie [schematy]. Wskaż mapowanie typów, wartości puste, kodowanie i strefy czasowe. Zaproponuj próbę, kontrolę zgodności oraz wznowienie bez duplikatów. Najpierw plan, później projekt skryptu.

**Sprawdź:** Oprócz liczby rekordów sprawdź relacje oraz istotne sumy. Nie zaczynaj odbioru od pełnej bazy produkcyjnej.

### 3. Przypadki testowe logowania

**Aplikacja:** Word; pracuj na otwartym dokumencie roboczym.

> Z [wymagania logowania] utwórz przypadki testowe z warunkami wstępnymi i oczekiwanym wynikiem. Uwzględnij poprawne logowanie, błędy, wygaśnięcie sesji i odzyskanie dostępu. Oznacz wymagania, których nie da się jednoznacznie przetestować.

**Sprawdź:** Lista powinna obejmować zachowanie użytkownika i systemu. Same nazwy scenariuszy nie wystarczą do odtworzenia testu.

### 4. Analiza wymagań

**Aplikacja:** Excel; pracuj na otwartym arkuszu z danymi.

> Przeczytaj [specyfikacja]. Wypisz sprzeczności, niejednoznaczne pojęcia i brakujące kryteria akceptacji. Przy każdym problemie wskaż fragment źródła, konsekwencję oraz pytanie do właściciela wymagania. Nie rozstrzygaj brakujących decyzji za klienta.

**Sprawdź:** Zatwierdzone odpowiedzi zapisz w specyfikacji, żeby kolejne analizy korzystały z tych samych ustaleń.

### 5. Diagram architektury

**Aplikacja:** Word; pracuj na otwartym dokumencie roboczym.

> Na podstawie [spis komponentów i integracji] przygotuj tekstową definicję diagramu Mermaid. Oznacz kierunek danych i granice systemów. Elementy niepotwierdzone wypisz osobno. Nie dodawaj usług tylko dlatego, że występują w typowej architekturze.

**Sprawdź:** Sprawdź diagram z właścicielami integracji. Szablon generuje opis, a nie dowód rzeczywistego przepływu danych.

### 6. Komunikat o przerwie

**Aplikacja:** Word; pracuj na otwartym dokumencie roboczym.

> Napisz projekt wiadomości o przerwie [termin, strefa, zakres, kontakt]. Oddziel niedostępne funkcje od działających. Dodaj oczekiwane działanie użytkownika i termin następnej aktualizacji. Nie obiecuj czasu przywrócenia, którego nie potwierdzono.

**Sprawdź:** Przed wysłaniem porównaj daty z planem zmiany. Projekt wiadomości wymaga akceptacji osoby odpowiedzialnej za komunikację.

### 7. Przegląd trendów technologicznych

**Aplikacja:** Excel; pracuj na otwartym arkuszu z danymi.

> Na podstawie [aktualne materiały producentów i instytucji] wskaż pięć zmian istotnych dla [nasze systemy]. Podaj datę oraz źródło każdej informacji. Rozdziel dostępne funkcje, zapowiedzi i własne przewidywania. Bez aktualnego źródła oznacz temat do weryfikacji.

**Sprawdź:** Otwórz źródła i sprawdź daty. Prognoza modelu nie staje się potwierdzonym trendem przez przekonujący opis.

### 8. Plan odtwarzania po awarii

**Aplikacja:** Word; pracuj na otwartym dokumencie roboczym.

> Z [zależności aplikacji, uzgodnione RTO i RPO] przygotuj szkic odtwarzania. Wskaż kolejność, odpowiedzialnych, warunki startu i dowody poprawnego działania. Wypisz nieznane zależności. Nie deklaruj spełnienia celów bez próby odtworzenia.

**Sprawdź:** Przećwicz procedurę. Dostępność kopii, kont i dokumentacji trzeba potwierdzić w warunkach przewidzianych w scenariuszu.

### 9. Konfiguracja serwera

**Aplikacja:** Word; pracuj na otwartym dokumencie roboczym.

> Przygotuj projekt konfiguracji [Windows Server, wersja] według [zatwierdzony standard]. Oddziel sprawdzenie stanu od zmian. Opisz wymagane uprawnienia, ponowne uruchomienia, logowanie i zachowanie przy powtórnym wykonaniu. Nie uruchamiaj poleceń.

**Sprawdź:** Test wykonaj na przeznaczonej do tego maszynie. Zweryfikuj także stan częściowo skonfigurowany po nieudanej próbie.

### 10. Wydajność aplikacji

**Aplikacja:** Word; pracuj na otwartym dokumencie roboczym.

> Porównaj [metryki przed i podczas problemu] dla [wersja aplikacji]. Wskaż korelacje i alternatywne wyjaśnienia. Zaproponuj kolejne pomiary od najmniej ingerujących. Nie uznawaj jednoczesności zdarzeń za dowód przyczyny.

**Sprawdź:** Dobierz pomiar, który rozróżni hipotezy. Kolejny ogólny raport może nie przybliżyć diagnozy.

## Zadanie wieloetapowe

Narzędzia: Microsoft 365 Copilot Cowork, Anthropic Claude Cowork, tryb agenta OpenAI ChatGPT.

### 1. Dokumentacja api

> Na podstawie [zatwierdzonych plików z datą i wersją] z [kontrakt i przykłady] przygotuj projekt specyfikacji OpenAPI w [wersja]. Uwzględnij uwierzytelnianie, błędy i modele danych. Nie dopisuj endpointów. Niezgodności między kontraktem a przykładami pokaż w osobnej tabeli. Przygotuj tabelę ustaleń, listę braków i pytania do właściciela. Wynik oddaj do [osoby zatwierdzającej] przed wysyłką lub zmianą danych.

**Sprawdź:** Sprawdź składnię walidatorem i porównaj dokument z odpowiedziami środowiska testowego. Poprawny plik może nadal opisywać nieistniejące zachowanie.

### 2. Zapytanie o nieaktywne konta

> Na podstawie [zatwierdzonych plików z datą i wersją] dla [schemat i silnik] przygotuj zapytanie tylko do odczytu o konta bez logowania przez [okres]. Wyjaśnij granicę czasu, strefę i konta bez historii. Oddziel konta techniczne według [reguła]. Nie usuwaj ani nie blokuj kont. Przygotuj krótką notę, rejestr źródeł i warianty do oceny. Wynik oddaj do [osoby zatwierdzającej] przed wysyłką lub zmianą danych.

**Sprawdź:** Sprawdź przypadki dokładnie na granicy okresu. Wynik zapytania jest listą do oceny, nie automatyczną decyzją kadrową lub administracyjną.

### 3. Koszty azure

> Na podstawie [zatwierdzonych plików z datą i wersją] przeanalizuj [eksport kosztów, okres, waluta]. Oddziel wykorzystanie, zobowiązania i koszty jednorazowe. Wskaż kandydatów do optymalizacji wraz z brakującymi danymi. Nie zalecaj wyłączenia zasobu bez sprawdzenia właściciela i zależności. Przygotuj zestawienie wersji, otwarte decyzje i plan kontroli. Wynik oddaj do [osoby zatwierdzającej] przed wysyłką lub zmianą danych.

**Sprawdź:** Porównaj zakres eksportu z rachunkiem. Potencjalna oszczędność wymaga potwierdzenia po zmianie, przy zachowaniu potrzebnej jakości usługi.

### 4. Debugowanie powershell i dokumentacja modułu CRM

> Na podstawie [zatwierdzonych plików z datą i wersją] wykonaj kolejno etap 1 — debugowanie powershell: Przeanalizuj [kod] dla PowerShell [wersja] na [system]. Oczekiwany wynik to [opis], otrzymany błąd to [komunikat]. Oddziel potwierdzone błędy od hipotez. Zaproponuj minimalną poprawkę i test bez modyfikowania danych produkcyjnych. Etap 2 — dokumentacja modułu CRM: Na podstawie [specyfikacja i kod] przygotuj szkielet dokumentacji modułu CRM: odpowiedzialność, wejścia, wyjścia, zależności i błędy. Przy każdej funkcji wskaż źródło. Brakujące informacje oznacz jako pytania, nie dopisuj domyślnego zachowania. Przygotuj materiał do przeglądu wraz z dowodami i punktami spornymi. Wynik oddaj do [osoby zatwierdzającej] przed wysyłką lub zmianą danych.

**Sprawdź:** Sprawdź, czy poprawka usuwa przyczynę, a nie tylko ukrywa wyjątek. Zachowaj przykład, który wcześniej odtwarzał błąd; Porównaj opis z działającym modułem. Rozdziel funkcje istniejące od planowanych, aby dokumentacja nie obiecywała przyszłych możliwości.

### 5. Optymalizacja SQL i automatyzacja kopii zapasowej

> Na podstawie [zatwierdzonych plików z datą i wersją] wykonaj kolejno etap 1 — optymalizacja SQL: Dla [silnik i wersja], [schemat], [zapytanie] oraz [plan wykonania] wskaż możliwe przyczyny opóźnienia. Zaproponuj warianty zachowujące wynik. Opisz pomiar przed i po oraz koszt dodatkowych indeksów. Nie podawaj procentu przyspieszenia bez pomiaru. Etap 2 — automatyzacja kopii zapasowej: Przygotuj projekt procedury backupu [baza, wersja, środowisko]. Uwzględnij retencję, szyfrowany transport, obsługę błędów i próbę odtworzenia. Sekrety mają pochodzić z zatwierdzonego mechanizmu przechowywania. Najpierw przedstaw plan oraz brakujące decyzje, bez wykonywania operacji. Przygotuj roboczy dokument, listę wyjątków i kryteria odbioru. Wynik oddaj do [osoby zatwierdzającej] przed wysyłką lub zmianą danych.

**Sprawdź:** Porównaj również liczbę i zawartość rekordów. Szybsze zapytanie zwracające inne dane nie jest poprawną optymalizacją; Odbiór oprzyj na odtworzeniu próbki w środowisku testowym. Samo istnienie pliku nie potwierdza użyteczności kopii.

### 6. Analiza logów i testy jednostkowe c#

> Na podstawie [zatwierdzonych plików z datą i wersją] wykonaj kolejno etap 1 — analiza logów: Przeanalizuj [zanonimizowane logi] z okresu [czas i strefa]. Zbuduj chronologię z identyfikatorami zdarzeń. Oddziel obserwacje od możliwych przyczyn. Dla każdej hipotezy podaj dodatkowy dowód potrzebny do jej potwierdzenia. Etap 2 — testy jednostkowe c#: Dla [klasa i kontrakt zachowania] zaproponuj testy w [framework i wersja]. Obejmij normalne wejścia, wartości graniczne i błędy zależności. Wyjaśnij, jaki błąd wykrywa każdy test. Nie dopasowuj oczekiwań wyłącznie do obecnej implementacji. Przygotuj tabelę ustaleń, listę braków i pytania do właściciela. Wynik oddaj do [osoby zatwierdzającej] przed wysyłką lub zmianą danych.

**Sprawdź:** Sprawdź kolejność czasową między usługami. Brak wpisu w dostarczonym fragmencie nie dowodzi, że zdarzenie nie wystąpiło; Uruchom testy i sprawdź, czy celowo błędna wersja funkcji rzeczywiście powoduje odpowiednią porażkę.

### 7. Architektura aplikacji i instrukcja resetowania hasła

> Na podstawie [zatwierdzonych plików z datą i wersją] wykonaj kolejno etap 1 — architektura aplikacji: Porównaj dwa warianty architektury dla [wymagania, ruch, zespół, budżet]. Uwzględnij prostsze rozwiązanie oraz podział na usługi. Opisz zależności, utrzymanie i warunki zmiany decyzji. Nie zakładaj z góry, że mikrousługi są potrzebne. Etap 2 — instrukcja resetowania hasła: Z [zatwierdzona procedura organizacji] przygotuj instrukcję resetowania hasła dla pracownika. Użyj nazw widocznych w naszym interfejsie. Uwzględnij brak dostępu do metody weryfikacji i właściwy kontakt do wsparcia. Nie wymyślaj ustawień administratora. Przygotuj krótką notę, rejestr źródeł i warianty do oceny. Wynik oddaj do [osoby zatwierdzającej] przed wysyłką lub zmianą danych.

**Sprawdź:** Wybór oceń względem wymagań i kompetencji zespołu. Diagram sam nie rozstrzyga kosztu utrzymania; Przejdź instrukcję kontem testowym o właściwej roli. Sprawdź również ścieżkę, na której użytkownik potrzebuje pomocy.

### 8. Raport infrastruktury i przegląd firewalla

> Na podstawie [zatwierdzonych plików z datą i wersją] wykonaj kolejno etap 1 — raport infrastruktury: Na podstawie [zestawienie metryk] przygotuj raport za [okres]. Oddziel dostępność, incydenty, pojemność i działania. Podaj definicję każdego wskaźnika, źródło oraz braki danych. Nie porównuj okresów o różnym zakresie bez zaznaczenia różnicy. Etap 2 — przegląd firewalla: Oceń [zanonimizowane reguły] względem [zatwierdzona macierz komunikacji]. Wskaż nadmiarowe zakresy i sprzeczności jako kandydatów do przeglądu. Nie zmieniaj konfiguracji. Dla propozycji opisz test dozwolonego ruchu i możliwość wycofania. Przygotuj zestawienie wersji, otwarte decyzje i plan kontroli. Wynik oddaj do [osoby zatwierdzającej] przed wysyłką lub zmianą danych.

**Sprawdź:** Ręcznie sprawdź przynajmniej jeden wskaźnik i jego mianownik. Brak pomiaru nie powinien stawać się zerem; Zweryfikuj zależności przed usunięciem reguły. Brak ruchu w krótkim oknie może nie obejmować procesu miesięcznego.

### 9. Optymalizacja typescript i migracja danych

> Na podstawie [zatwierdzonych plików z datą i wersją] wykonaj kolejno etap 1 — optymalizacja typescript: Oceń [kod, wersja środowiska, pomiar] pod kątem wskazanego opóźnienia. Oddziel zmiany czytelności od wydajności. Zaproponuj najmniejszą zmianę i powtarzalny benchmark. Zachowaj kontrakt funkcji oraz obsługę błędów. Etap 2 — migracja danych: Przygotuj plan migracji z [MySQL, wersja] do [PostgreSQL, wersja] na podstawie [schematy]. Wskaż mapowanie typów, wartości puste, kodowanie i strefy czasowe. Zaproponuj próbę, kontrolę zgodności oraz wznowienie bez duplikatów. Najpierw plan, później projekt skryptu. Przygotuj materiał do przeglądu wraz z dowodami i punktami spornymi. Wynik oddaj do [osoby zatwierdzającej] przed wysyłką lub zmianą danych.

**Sprawdź:** Porównuj te same dane i warunki. Nie przyjmuj deklarowanego przyspieszenia bez uruchomienia pomiaru; Oprócz liczby rekordów sprawdź relacje oraz istotne sumy. Nie zaczynaj odbioru od pełnej bazy produkcyjnej.

### 10. Przypadki testowe logowania i analiza wymagań

> Na podstawie [zatwierdzonych plików z datą i wersją] wykonaj kolejno etap 1 — przypadki testowe logowania: Z [wymagania logowania] utwórz przypadki testowe z warunkami wstępnymi i oczekiwanym wynikiem. Uwzględnij poprawne logowanie, błędy, wygaśnięcie sesji i odzyskanie dostępu. Oznacz wymagania, których nie da się jednoznacznie przetestować. Etap 2 — analiza wymagań: Przeczytaj [specyfikacja]. Wypisz sprzeczności, niejednoznaczne pojęcia i brakujące kryteria akceptacji. Przy każdym problemie wskaż fragment źródła, konsekwencję oraz pytanie do właściciela wymagania. Nie rozstrzygaj brakujących decyzji za klienta. Przygotuj roboczy dokument, listę wyjątków i kryteria odbioru. Wynik oddaj do [osoby zatwierdzającej] przed wysyłką lub zmianą danych.

**Sprawdź:** Lista powinna obejmować zachowanie użytkownika i systemu. Same nazwy scenariuszy nie wystarczą do odtworzenia testu; Zatwierdzone odpowiedzi zapisz w specyfikacji, żeby kolejne analizy korzystały z tych samych ustaleń.

## Zasady pracy w tej roli (z wpisu)

### Przygotuj kontekst i określ dostęp

Microsoft proponuje cztery elementy polecenia: cel, kontekst, oczekiwania i źródło. Zaznacza też, że odpowiedzi mogą być błędne oraz różnić się między uruchomieniami. Zobacz [wskazówki pisania promptów](https://support.microsoft.com/en-us/microsoft-365-copilot/get-started-writing-prompts-in-microsoft-365-copilot).

W pracy technicznej dodaj wersję produktu, zakres dopuszczalnych zmian i test wyniku. Samo zdanie „jesteś ekspertem” nie zastępuje schematu bazy, fragmentu kodu ani komunikatu błędu. Jeśli nie masz tych danych, poproś najpierw o listę informacji potrzebnych do diagnozy.

[Zakres Copilot Chat](https://learn.microsoft.com/en-us/copilot/overview) zależy od dostępnego doświadczenia i konfiguracji. Nie zakładaj, że czat widzi repozytorium, logi lub całą dokumentację firmy tylko dlatego, że podasz ich nazwę. Udostępnij właściwy materiał dopuszczoną w organizacji drogą i sprawdź, czy odpowiedź rzeczywiście się do niego odnosi. Poniższe polecenia proszą o analizę lub projekt; nie wymagają samodzielnego wykonywania operacji przez agenta.

| Element kontekstu | Co dopisać | Co później sprawdzić |
|---|---|---|
| Środowisko | System, wersję, silnik bazy, biblioteki | Zgodność składni i funkcji |
| Źródło | Plik, fragment kodu, zakres logów | Czy wnioski wynikają z materiału |
| Granice | Odczyt, plan lub projekt zmiany | Czy odpowiedź nie rozszerza zadania |
| Odbiór | Test, oczekiwany wynik, przypadki brzegowe | Czy wynik można odtworzyć |

Przed przekazaniem materiału usuń hasła, tokeny i niepotrzebne dane osobowe. Zachowaj strukturę potrzebną do analizy, używając spójnych wartości zastępczych. W logach pozostaw relacje czasowe i identyfikatory korelacji w zanonimizowanej formie, jeśli są potrzebne do odtworzenia zdarzeń.

### Odbiór wyników i następny krok

| Rodzaj wyniku | Minimalna kontrola | Warunek odrzucenia |
|---|---|---|
| Kod lub zapytanie | Przegląd i próba na danych testowych | Zmiana poza zakresem lub inny wynik |
| Diagnoza | Dowody oraz test hipotezy | Pewna przyczyna bez potwierdzenia |
| Dokumentacja | Porównanie ze źródłem | Wymyślone funkcje lub pominięte warunki |
| Plan | Właściciel, zależności i kryteria odbioru | Niewykonalny krok lub brak odpowiedzialności |

Zmierz pełny czas zadania: przygotowanie materiału, rozmowę z Copilotem, kontrolę i poprawki. Porównaj go z wykonaniem bez asysty na podobnych przypadkach. Sam czas wygenerowania odpowiedzi pomija najważniejszy koszt pracy technicznej: potwierdzenie, że rozwiązanie działa.

Powtarzalne zadania osadź w [systemie pracy firmy](https://majchrzycki.com/system). Jeśli diagnoza prowadzi do potrzeby prostej aplikacji procesowej, zobacz [poradnik Power Apps](https://majchrzycki.com/blog/co-to-jest-microsoft-power-apps). W poniedziałek wybierz jeden prompt, zachowaj dane wejściowe i sprawdzony wynik. Z takiej pary zbudujesz użyteczny wzorzec dla zespołu.
