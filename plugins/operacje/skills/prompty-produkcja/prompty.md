# Biblioteka promptów: Specjalista produkcji

Źródło: [„Microsoft Copilot: 30 promptów dla produkcji”](https://majchrzycki.com/blog/microsoft-copilot-praktyczne-prompty-dla-specjalistow-produkcji?utm_source=github&utm_medium=referral&utm_campaign=moja-firma-prompty&utm_content=prompty-produkcja), Krzysztof Majchrzycki, majchrzycki.com. Stan wpisu: 2026-10-02. Licencja MIT.

Prompty pisano pod Microsoft 365 Copilot. W innych narzędziach działają prompty z grupy „Dowolny czat”, a pozostałe wymagają załączenia pliku albo pracy etapami.

## Dowolny czat

Narzędzia: Anthropic Claude, OpenAI ChatGPT, Google Gemini, Microsoft 365 Copilot Chat.

### 1. Harmonogram zleceń

**Wejście:** Przygotuj zlecenia, terminy, czasy operacji i kalendarz maszyn.

> Porównaj dwa warianty kolejności zleceń. Wskaż kolizje zasobów, opóźnienia i brakujące ograniczenia. Nie obiecuj wykonalności, jeśli brakuje danych o przezbrojeniu.

**Sprawdź:** Planista potwierdza dostęp materiału, narzędzi i obsady przed przekazaniem harmonogramu na halę.

### 2. Wydajność linii

**Wejście:** Przygotuj liczby sztuk, czasy pracy i kody przestojów.

> Rozdziel straty czasu według ich przyczyn zapisanych w danych. Pokaż różnice między zmianami, uwzględniając asortyment, oraz wskaż niezakodowane zdarzenia.

**Sprawdź:** Porównaj próbkę zdarzeń z dziennikiem operatora i odrzuć automatyczne przypisanie winy zmianie.

### 3. Potrzeby materiałowe

**Wejście:** Przygotuj plan produkcji, BOM, zapas i potwierdzone dostawy.

> Przygotuj zestawienie potencjalnych braków z datą wystąpienia. Pokaż użyte przeliczniki i pozycje wymagające potwierdzenia wersji receptury.

**Sprawdź:** Zweryfikuj jednostki, uzysk oraz to, czy zarezerwowany zapas jest dostępny dla danego zlecenia.

### 4. Jakość partii

**Wejście:** Przygotuj wyniki kontroli, wielkość partii i słownik wad.

> Porównaj udział wad według produktu i warunków procesu. Oddziel pomiar od hipotezy przyczynowej; wskaż dane potrzebne do następnego testu.

**Sprawdź:** Dział jakości sprawdza reprezentatywność próbki i status partii przed jakąkolwiek decyzją o zwolnieniu.

### 5. Energia na produkcji

**Wejście:** Przygotuj odczyty energii, wolumen i czasy postoju.

> Porównaj zużycie na jednostkę oraz zużycie podczas postoju. Oddziel zmianę miksu produktów od zmiany sprawności. Zaproponuj pomiar potwierdzający potencjalną stratę.

**Sprawdź:** Sprawdź granice licznika i nie przypisuj całego poboru zakładu jednej linii produkcyjnej.

### 6. Obsługa predykcyjna

**Wejście:** Przygotuj historię awarii, pomiary stanu i instrukcje urządzenia.

> Przygotuj hipotezy sygnałów poprzedzających awarię oraz plan ich walidacji. Nie wyznaczaj daty awarii ani terminów obsługi bez dowodu.

**Sprawdź:** Utrzymanie ruchu sprawdza jakość czujników i zgodność propozycji z wymaganiami producenta maszyny.

### 7. Przepływ materiału

**Wejście:** Przygotuj mapę procesu, czasy oczekiwania i ruch pojemników.

> Wskaż miejsca gromadzenia produkcji w toku. Przy każdym oddziel przyczynę możliwą od obserwowanej i zaproponuj pomiar w konkretnym punkcie.

**Sprawdź:** Potwierdź na hali, czy bufor pełni funkcję ochronną przed zmiennością dostaw lub operacji.

### 8. Wielkość partii

**Wejście:** Przygotuj koszt przezbrojenia, popyt i ograniczenia technologiczne.

> Porównaj kilka dopuszczalnych wielkości partii pod względem czasu, zapasu i terminowości. Pokaż założenia zamiast wskazywać jedno bezwarunkowe optimum.

**Sprawdź:** Technolog potwierdza minimalną partię i wpływ zmiany na jakość oraz stabilność procesu.

### 9. Wąskie gardło

**Wejście:** Przygotuj obciążenie stanowisk, kolejki i dostępność zasobów.

> Wskaż kandydata na ograniczenie przepływu i dowody za tą hipotezą. Zaproponuj obserwację pozwalającą odróżnić trwałe ograniczenie od jednorazowego zakłócenia.

**Sprawdź:** Sprawdź, czy skrócenie operacji faktycznie zwiększyłoby przepływ całego procesu.

### 10. Przezbrojenia

**Wejście:** Przygotuj nagraną sekwencję czynności, czasy i zatwierdzone zasady pracy.

> Podziel czynności na możliwe do przygotowania wcześniej i wymagające postoju. Wskaż pytania do zespołu, nie zmieniając zabezpieczeń maszyny.

**Sprawdź:** Operator i utrzymanie ruchu oceniają propozycję podczas kontrolowanej próby z zachowaniem bezpieczeństwa.

## Aplikacje Microsoft 365

Narzędzia: Excel, Word, PowerPoint, Outlook, Teams z Microsoft 365 Copilot; w innym narzędziu załącz plik.

### 1. Koszt zlecenia

**Aplikacja:** Excel; pracuj na otwartym arkuszu z danymi.

**Wejście:** Przygotuj materiały, robociznę, energię i reguły alokacji.

> Zbuduj zestawienie kosztów według dostarczonego modelu. Oddziel koszt rzeczywisty od normatywnego i pokaż źródło odchylenia oraz brakujące pozycje.

**Sprawdź:** Controlling potwierdza rozliczenie braków, poprawek i kosztów pośrednich bez podwójnego naliczenia.

### 2. Kontrola na stanowisku

**Aplikacja:** Word; pracuj na otwartym dokumencie roboczym.

**Wejście:** Przygotuj plan kontroli, instrukcję i przykłady niezgodności.

> Przygotuj szkic czytelnej checklisty operatora. Zachowaj tolerancje, jednostki i regułę reakcji na niezgodność; nie upraszczaj punktów krytycznych.

**Sprawdź:** Jakość i operator sprawdzają checklistę przy rzeczywistym stanowisku przed jej zatwierdzeniem.

### 3. Warunki pracy zespołów

**Aplikacja:** Teams; pracuj na otwartym zapisie rozmowy lub spotkania.

**Wejście:** Przygotuj zagregowane wyniki, obsadę i profil zleceń.

> Porównaj warunki realizacji zadań między zmianami. Wskaż wpływ doświadczenia, dostępności materiału i awarii; nie twórz rankingu pojedynczych pracowników.

**Sprawdź:** Kierownik weryfikuje kontekst zmian i omawia usprawnienia procesu zamiast automatycznych ocen osób.

### 4. Układ hali

**Aplikacja:** Word; pracuj na otwartym dokumencie roboczym.

**Wejście:** Przygotuj mapę stanowisk, przepływy i ograniczenia infrastruktury.

> Zaproponuj warianty do przeglądu technicznego. Pokaż wpływ na transport, dostęp serwisowy i zapas w toku oraz punkty wymagające pomiaru.

**Sprawdź:** Uprawnione osoby oceniają drogi, zabezpieczenia i możliwość przeniesienia urządzeń przed decyzją.

### 5. Wymagania procesu

**Aplikacja:** Word; pracuj na otwartym dokumencie roboczym.

**Wejście:** Przygotuj zatwierdzone wymagania, instrukcje i dokumenty odbiorowe.

> Powiąż wymagania z dowodami w dokumentacji. Zwróć luki i sprzeczności z dokładnym odwołaniem; nie ogłaszaj zgodności całej produkcji.

**Sprawdź:** Ekspert potwierdza właściwą wersję wymagania i wystarczalność dowodu dla konkretnego procesu.

### 6. Odpady produkcyjne

**Aplikacja:** Word; pracuj na otwartym dokumencie roboczym.

**Wejście:** Przygotuj ilości odpadu, rodzaje materiału i przyczyny braków.

> Przygotuj bilans materiałowy i wskaż miejsca niewyjaśnionych różnic. Rozdziel odpad technologiczny od niezgodnego wyrobu oraz materiału do ponownego użycia.

**Sprawdź:** Sprawdź jednostki i status materiału; nie zakładaj możliwości ponownego wykorzystania bez oceny.

### 7. Czas cyklu

**Aplikacja:** Word; pracuj na otwartym dokumencie roboczym.

**Wejście:** Przygotuj znaczniki czasu, definicję cyklu i serię produktów.

> Porównaj rozkład czasów zamiast samej średniej. Wskaż długie cykle i możliwe błędy rejestracji, zachowując informację o typie wyrobu.

**Sprawdź:** Potwierdź, czy równoległe operacje i mikropostoje są liczone tak samo w każdym stanowisku.

### 8. Zapas przy linii

**Aplikacja:** Excel; pracuj na otwartym arkuszu z danymi.

**Wejście:** Przygotuj zużycie, częstotliwość uzupełnień i dostępne miejsce.

> Zaproponuj warianty bufora materiału przy stanowisku. Dla każdego pokaż odporność na opóźnienie dostawy oraz koszt zajętej przestrzeni.

**Sprawdź:** Sprawdź dopuszczalne warunki przechowywania i ryzyko pomylenia podobnych komponentów.

### 9. Ocena automatyzacji

**Aplikacja:** Word; pracuj na otwartym dokumencie roboczym.

**Wejście:** Przygotuj opis czynności, częstość, wariantowość i oferty.

> Przygotuj kryteria próby automatyzacji obejmujące przypadki trudne. Oddziel nominalną wydajność vendora od oczekiwanego wyniku dla naszego asortymentu.

**Sprawdź:** Próba obejmuje zmianę wariantu, błąd materiału i powrót do pracy po zatrzymaniu.

### 10. Replanowanie produkcji

**Aplikacja:** Word; pracuj na otwartym dokumencie roboczym.

**Wejście:** Przygotuj aktualne wykonanie, zmianę zamówienia i ograniczenia zasobów.

> Wskaż skutki zmiany priorytetu dla pozostałych zleceń. Przygotuj warianty decyzji z listą przesuniętych terminów, zamiast ukrywać koszt przyspieszenia.

**Sprawdź:** Planista potwierdza nowy plan z logistyką i właścicielami zobowiązań wobec klientów.

## Zadanie wieloetapowe

Narzędzia: Microsoft 365 Copilot Cowork, Anthropic Claude Cowork, tryb agenta OpenAI ChatGPT.

### 1. Przegląd zdarzeń bhp

**Wejście:** Przygotuj zanonimizowane opisy zdarzeń i obowiązujące instrukcje.

> Na podstawie [zatwierdzonych plików z datą i wersją] pogrupuj obserwacje i przygotuj pytania do specjalisty BHP. Oddziel fakt od przypuszczenia; nie twórz samodzielnie instrukcji pracy niebezpiecznej. Przygotuj tabelę ustaleń, listę braków i pytania do właściciela. Wynik oddaj do [osoby zatwierdzającej] przed wysyłką lub zmianą danych.

**Sprawdź:** Specjalista ocenia zagrożenia na miejscu i zatwierdza działania zgodnie z właściwą procedurą.

### 2. Zaopatrzenie stanowisk

**Wejście:** Przygotuj trasy dostaw wewnętrznych, potrzeby i czasy uzupełniania.

> Na podstawie [zatwierdzonych plików z datą i wersją] porównaj rytm dostaw z rytmem zużycia. Wskaż braki synchronizacji i propozycję próby na jednym obszarze, uwzględniając obsługę wyjątków. Przygotuj krótką notę, rejestr źródeł i warianty do oceny. Wynik oddaj do [osoby zatwierdzającej] przed wysyłką lub zmianą danych.

**Sprawdź:** Sprawdź, czy poprawa jednej linii nie przenosi kolejki na magazyn lub sąsiednie stanowisko.

### 3. Spójność oee

**Wejście:** Przygotuj zatwierdzone definicje dostępności, wydajności, jakości i dane.

> Na podstawie [zatwierdzonych plików z datą i wersją] przelicz składowe OEE zgodnie z podanym słownikiem. Pokaż każdy licznik, mianownik i wyłączenie. Wskaż dane niespójne zamiast je automatycznie poprawiać. Przygotuj zestawienie wersji, otwarte decyzje i plan kontroli. Wynik oddaj do [osoby zatwierdzającej] przed wysyłką lub zmianą danych.

**Sprawdź:** Porównaj rachunek w arkuszu i sprawdź, czy czas planowany oraz sztuki dobre mają wspólny zakres.

### 4. Harmonogram zleceń i wydajność linii

**Wejście:** Przygotuj zlecenia, terminy, czasy operacji i kalendarz maszyn; przygotuj liczby sztuk, czasy pracy i kody przestojów.

> Na podstawie [zatwierdzonych plików z datą i wersją] wykonaj kolejno etap 1 — harmonogram zleceń: Porównaj dwa warianty kolejności zleceń. Wskaż kolizje zasobów, opóźnienia i brakujące ograniczenia. Nie obiecuj wykonalności, jeśli brakuje danych o przezbrojeniu. Etap 2 — wydajność linii: Rozdziel straty czasu według ich przyczyn zapisanych w danych. Pokaż różnice między zmianami, uwzględniając asortyment, oraz wskaż niezakodowane zdarzenia. Przygotuj materiał do przeglądu wraz z dowodami i punktami spornymi. Wynik oddaj do [osoby zatwierdzającej] przed wysyłką lub zmianą danych.

**Sprawdź:** Planista potwierdza dostęp materiału, narzędzi i obsady przed przekazaniem harmonogramu na halę; Porównaj próbkę zdarzeń z dziennikiem operatora i odrzuć automatyczne przypisanie winy zmianie.

### 5. Potrzeby materiałowe i jakość partii

**Wejście:** Przygotuj plan produkcji, BOM, zapas i potwierdzone dostawy; przygotuj wyniki kontroli, wielkość partii i słownik wad.

> Na podstawie [zatwierdzonych plików z datą i wersją] wykonaj kolejno etap 1 — potrzeby materiałowe: Przygotuj zestawienie potencjalnych braków z datą wystąpienia. Pokaż użyte przeliczniki i pozycje wymagające potwierdzenia wersji receptury. Etap 2 — jakość partii: Porównaj udział wad według produktu i warunków procesu. Oddziel pomiar od hipotezy przyczynowej; wskaż dane potrzebne do następnego testu. Przygotuj roboczy dokument, listę wyjątków i kryteria odbioru. Wynik oddaj do [osoby zatwierdzającej] przed wysyłką lub zmianą danych.

**Sprawdź:** Zweryfikuj jednostki, uzysk oraz to, czy zarezerwowany zapas jest dostępny dla danego zlecenia; Dział jakości sprawdza reprezentatywność próbki i status partii przed jakąkolwiek decyzją o zwolnieniu.

### 6. Energia na produkcji i obsługa predykcyjna

**Wejście:** Przygotuj odczyty energii, wolumen i czasy postoju; przygotuj historię awarii, pomiary stanu i instrukcje urządzenia.

> Na podstawie [zatwierdzonych plików z datą i wersją] wykonaj kolejno etap 1 — energia na produkcji: Porównaj zużycie na jednostkę oraz zużycie podczas postoju. Oddziel zmianę miksu produktów od zmiany sprawności. Zaproponuj pomiar potwierdzający potencjalną stratę. Etap 2 — obsługa predykcyjna: Przygotuj hipotezy sygnałów poprzedzających awarię oraz plan ich walidacji. Nie wyznaczaj daty awarii ani terminów obsługi bez dowodu. Przygotuj tabelę ustaleń, listę braków i pytania do właściciela. Wynik oddaj do [osoby zatwierdzającej] przed wysyłką lub zmianą danych.

**Sprawdź:** Sprawdź granice licznika i nie przypisuj całego poboru zakładu jednej linii produkcyjnej; Utrzymanie ruchu sprawdza jakość czujników i zgodność propozycji z wymaganiami producenta maszyny.

### 7. Przepływ materiału i wielkość partii

**Wejście:** Przygotuj mapę procesu, czasy oczekiwania i ruch pojemników; przygotuj koszt przezbrojenia, popyt i ograniczenia technologiczne.

> Na podstawie [zatwierdzonych plików z datą i wersją] wykonaj kolejno etap 1 — przepływ materiału: Wskaż miejsca gromadzenia produkcji w toku. Przy każdym oddziel przyczynę możliwą od obserwowanej i zaproponuj pomiar w konkretnym punkcie. Etap 2 — wielkość partii: Porównaj kilka dopuszczalnych wielkości partii pod względem czasu, zapasu i terminowości. Pokaż założenia zamiast wskazywać jedno bezwarunkowe optimum. Przygotuj krótką notę, rejestr źródeł i warianty do oceny. Wynik oddaj do [osoby zatwierdzającej] przed wysyłką lub zmianą danych.

**Sprawdź:** Potwierdź na hali, czy bufor pełni funkcję ochronną przed zmiennością dostaw lub operacji; Technolog potwierdza minimalną partię i wpływ zmiany na jakość oraz stabilność procesu.

### 8. Wąskie gardło i przezbrojenia

**Wejście:** Przygotuj obciążenie stanowisk, kolejki i dostępność zasobów; przygotuj nagraną sekwencję czynności, czasy i zatwierdzone zasady pracy.

> Na podstawie [zatwierdzonych plików z datą i wersją] wykonaj kolejno etap 1 — wąskie gardło: Wskaż kandydata na ograniczenie przepływu i dowody za tą hipotezą. Zaproponuj obserwację pozwalającą odróżnić trwałe ograniczenie od jednorazowego zakłócenia. Etap 2 — przezbrojenia: Podziel czynności na możliwe do przygotowania wcześniej i wymagające postoju. Wskaż pytania do zespołu, nie zmieniając zabezpieczeń maszyny. Przygotuj zestawienie wersji, otwarte decyzje i plan kontroli. Wynik oddaj do [osoby zatwierdzającej] przed wysyłką lub zmianą danych.

**Sprawdź:** Sprawdź, czy skrócenie operacji faktycznie zwiększyłoby przepływ całego procesu; Operator i utrzymanie ruchu oceniają propozycję podczas kontrolowanej próby z zachowaniem bezpieczeństwa.

### 9. Koszt zlecenia i kontrola na stanowisku

**Wejście:** Przygotuj materiały, robociznę, energię i reguły alokacji; przygotuj plan kontroli, instrukcję i przykłady niezgodności.

> Na podstawie [zatwierdzonych plików z datą i wersją] wykonaj kolejno etap 1 — koszt zlecenia: Zbuduj zestawienie kosztów według dostarczonego modelu. Oddziel koszt rzeczywisty od normatywnego i pokaż źródło odchylenia oraz brakujące pozycje. Etap 2 — kontrola na stanowisku: Przygotuj szkic czytelnej checklisty operatora. Zachowaj tolerancje, jednostki i regułę reakcji na niezgodność; nie upraszczaj punktów krytycznych. Przygotuj materiał do przeglądu wraz z dowodami i punktami spornymi. Wynik oddaj do [osoby zatwierdzającej] przed wysyłką lub zmianą danych.

**Sprawdź:** Controlling potwierdza rozliczenie braków, poprawek i kosztów pośrednich bez podwójnego naliczenia; Jakość i operator sprawdzają checklistę przy rzeczywistym stanowisku przed jej zatwierdzeniem.

### 10. Warunki pracy zespołów i układ hali

**Wejście:** Przygotuj zagregowane wyniki, obsadę i profil zleceń; przygotuj mapę stanowisk, przepływy i ograniczenia infrastruktury.

> Na podstawie [zatwierdzonych plików z datą i wersją] wykonaj kolejno etap 1 — warunki pracy zespołów: Porównaj warunki realizacji zadań między zmianami. Wskaż wpływ doświadczenia, dostępności materiału i awarii; nie twórz rankingu pojedynczych pracowników. Etap 2 — układ hali: Zaproponuj warianty do przeglądu technicznego. Pokaż wpływ na transport, dostęp serwisowy i zapas w toku oraz punkty wymagające pomiaru. Przygotuj roboczy dokument, listę wyjątków i kryteria odbioru. Wynik oddaj do [osoby zatwierdzającej] przed wysyłką lub zmianą danych.

**Sprawdź:** Kierownik weryfikuje kontekst zmian i omawia usprawnienia procesu zamiast automatycznych ocen osób; Uprawnione osoby oceniają drogi, zabezpieczenia i możliwość przeniesienia urządzeń przed decyzją.

## Zasady pracy w tej roli (z wpisu)

### Jak przygotować dane przed pierwszym promptem

Dla produkcji najważniejsze jest odróżnienie możliwości obliczeniowej od wykonalności na hali. Harmonogram musi pasować do maszyn, materiałów, kompetencji i ograniczeń technologicznych jednocześnie. W tym zestawie analiza kończy się listą pytań albo propozycją próby. Wdrożenie pozostaje osobnym krokiem, z osobą odpowiedzialną, kryteriami przerwania i pomiarem skutków.

Najpierw ustal, z jakiego konta i narzędzia korzystasz. Dostępne źródła zależą od licencji oraz konfiguracji administratora; samo wymienienie systemu w poleceniu nie podłącza jego danych. [Microsoft opisuje źródła odpowiedzi Copilota](https://support.microsoft.com/en-us/microsoft-365-copilot/what-information-does-copilot-use-to-answer-my-prompt). Jeśli pracujesz na eksporcie, zapisz datę, zakres i znaczenie kolumn. Dołącz wyłącznie materiał dopuszczony do tego zastosowania.

Używaj firmowego środowiska zatwierdzonego do pracy z daną klasą informacji. Dostęp do danych Microsoft 365 jest ograniczony uprawnieniami zalogowanej osoby. [Opis architektury Microsoft](https://learn.microsoft.com/en-us/microsoft-365/copilot/microsoft-365-copilot-architecture) nie zastępuje sprawdzenia, komu później udostępnisz wygenerowany dokument. Szczególnie uważnie traktuj informacje osobowe, umowne i nieopublikowane.

W każdym zadaniu wpisz cel, kontekst, źródło oraz oczekiwany rezultat — to elementy opisane w [poradniku tworzenia promptów Microsoft](https://support.microsoft.com/en-us/microsoft-365-copilot/write-a-great-prompt-in-microsoft-365-copilot). Warto dodać lokalną regułę: „Pracuj na wskazanym pakiecie. Nie uzupełniaj luk domysłem. Przy każdej liczbie lub ważnym ustaleniu pokaż miejsce w źródle. Oddziel propozycję od faktu”. Taka instrukcja pomaga w odbiorze, lecz nie gwarantuje poprawności odpowiedzi.

| Zanim zaczniesz | Co przygotować | Po czym poznasz brak gotowości |
|---|---|---|
| Zakres zadania | Jeden proces, okres i odbiorca wyniku | Polecenie obejmuje wszystkie działania działu |
| Materiał źródłowy | Wersja pliku, definicje i dozwolony zakres | Nie wiadomo, skąd pochodzi wartość lub zapis |
| Kryterium wyniku | Format oraz sposób sprawdzenia przez człowieka | Oczekiwanie brzmi tylko „zoptymalizuj” |
| Odpowiedzialność | Osoba sprawdzająca i zatwierdzająca użycie | Szkic może trafić dalej bez przeglądu |

### Jak odebrać wynik i przeprowadzić mały test

Nie oceniaj odpowiedzi wyłącznie po stylu. Wybierz trzy ważne ustalenia i wróć do dokumentu źródłowego. Przy danych liczbowych sprawdź również jednostkę, okres i podstawę procentu. Przy tekście sprawdź, czy skrócenie nie usunęło warunku, wyjątku albo zastrzeżenia. Jeżeli nie możesz odtworzyć pochodzenia kluczowego zdania, wynik wraca do poprawy.

| Wynik kontroli | Decyzja | Następny krok |
|---|---|---|
| Źródła istnieją, sens zachowany | Przyjmij jako materiał roboczy | Przekaż do właściwej osoby zatwierdzającej |
| Brakuje części danych | Zawęź zadanie | Uzupełnij konkretny plik albo pole wejściowe |
| Pojawił się niepotwierdzony fakt | Odrzuć daną część | Wskaż błąd i ponów pracę na źródle |
| Propozycja zmienia proces | Zaplanuj oddzielną próbę | Ustal kryterium sukcesu i warunek przerwania |

Do pierwszego testu wybierz jedno powtarzalne zadanie o znanym wyniku. Zapisz czas przygotowania wejścia, pracy z odpowiedzią i kontroli. Porównaj całość z wykonaniem bez asystenta, przy tej samej jakości końcowej. Szybsze wygenerowanie tekstu nie jest oszczędnością, jeśli później trzeba go długo poprawiać. Zapisz także rodzaje błędów, aby zdecydować, czy problem leży w danych, instrukcji czy niedopasowaniu zadania.

Po kilku próbach zachowaj najlepsze polecenie razem z przykładowym wejściem i checklistą odbioru. Usuń z przykładu dane, których nie należy rozpowszechniać. Przy kolejnym użyciu potwierdź wersję dokumentu i odbiorcę — gotowy prompt nie zamraża stanu organizacji. Jeśli zadanie wymaga stałego pobierania danych lub wykonywania operacji w systemie, potrzebny jest osobno zaprojektowany i sprawdzony proces integracji.

Jeśli najpierw potrzebujesz uporządkować możliwości narzędzia, przeczytaj przewodnik po Copilocie dla firm. Następnie porównaj [prompty dla logistyki i przepływu materiałów](https://majchrzycki.com/blog/microsoft-copilot-praktyczne-prompty-dla-specjalistow-logistyki), aby ustalić sposób przekazywania danych i wyników między rolami. Zacznij od jednej pracy, której jakość potrafisz samodzielnie ocenić.
