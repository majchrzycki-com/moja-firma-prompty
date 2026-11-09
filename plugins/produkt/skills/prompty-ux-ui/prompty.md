# Biblioteka promptów: Projektant UX/UI

Źródło: [„Microsoft Copilot: 30 promptów dla projektantów UX/UI”](https://majchrzycki.com/blog/microsoft-copilot-praktyczne-prompty-dla-projektantow-ux-ui?utm_source=github&utm_medium=referral&utm_campaign=moja-firma-prompty&utm_content=prompty-ux-ui), Krzysztof Majchrzycki, majchrzycki.com. Stan wpisu: 2026-11-11. Licencja MIT.

Prompty pisano pod Microsoft 365 Copilot. W innych narzędziach działają prompty z grupy „Dowolny czat”, a pozostałe wymagają załączenia pliku albo pracy etapami.

## Dowolny czat

Narzędzia: Anthropic Claude, OpenAI ChatGPT, Google Gemini, Microsoft 365 Copilot Chat.

### 1. Koncepcje rozwiązania

**Wejście:** Brief produktu, problem użytkownika i ograniczenia wdrożenia.

> Zaproponuj trzy odmienne sposoby wykonania zadania. Dla każdego wskaż kompromis oraz pytanie rozstrzygające w badaniu.

**Sprawdź:** Sprawdź, czy warianty różnią się mechanizmem, a nie tylko kolorem i nazwą.

### 2. Ocena trendu interfejsu

**Wejście:** Przykłady trendu z datą i opis użytkowników produktu.

> Wyjaśnij, jaki problem trend może rozwiązać i kiedy utrudni pracę. Zaproponuj test dopasowania do naszego kontekstu.

**Sprawdź:** Nie uznawaj popularności rozwiązania za dowód poprawy użyteczności ani konwersji.

### 3. Paleta i kontrast

**Wejście:** Kolory marki, role tokenów i docelowe tła.

> Zaproponuj warianty przypisania kolorów do tekstu, powierzchni i stanów. Wskaż pary wymagające pomiaru kontrastu.

**Sprawdź:** Zmierz rzeczywiste pary kolorów narzędziem; deklaracja modelu nie stanowi wyniku pomiaru.

### 4. Persona oparta na badaniu

**Wejście:** Zanonimizowane wywiady i opis sposobu rekrutacji.

> Zsyntetyzuj cele, zadania i przeszkody potwierdzone wypowiedziami. Oddziel hipotezy od obserwacji; nie dopisuj demografii.

**Sprawdź:** Każde stwierdzenie o użytkowniku musi dać się powiązać z materiałem badawczym.

### 5. Hierarchia strony

**Wejście:** Treść strony, cele użytkowników i dane o zadaniach.

> Zaproponuj kolejność informacji wspierającą główne zadanie. Wyjaśnij, które informacje powinny pozostać widoczne przed decyzją.

**Sprawdź:** Sprawdź propozycję testem zrozumienia, a nie samą oceną estetyki makiety.

### 6. Znaczenie ikon

**Wejście:** Listę funkcji, kontekst użycia i przyjęty styl.

> Zaproponuj metafory ikon oraz etykiety tekstowe. Wskaż symbole, które mogą mieć kilka znaczeń.

**Sprawdź:** Przetestuj rozpoznawanie bez podpowiadania funkcji; ikona dekoracyjna nie zastępuje etykiety kontrolki.

### 7. Porównanie konkurencyjnych interfejsów

**Wejście:** Zrzuty i opisy tych samych zadań w trzech produktach.

> Porównaj liczbę decyzji, widoczność informacji i obsługę błędów. Oddziel obserwację od domysłu dotyczącego wyniku biznesowego.

**Sprawdź:** Nie przypisuj konkurentowi lepszej konwersji bez dostępnych danych o konwersji.

### 8. Informacja po dodaniu do koszyka

**Wejście:** Opis stanu produktu, opóźnień i możliwych błędów.

> Zaproponuj komunikaty i zachowanie interfejsu dla sukcesu, oczekiwania i niepowodzenia. Uwzględnij powtórne kliknięcie.

**Sprawdź:** Przetestuj brak połączenia oraz obsługę klawiaturą, nie tylko płynną animację.

### 9. Scenariusze użycia

**Wejście:** Potwierdzone potrzeby i warunki korzystania z produktu.

> Zbuduj trzy scenariusze zadania z przeszkodą i oczekiwanym rezultatem. Nie twórz fikcyjnych cytatów użytkowników.

**Sprawdź:** Porównaj scenariusze z rzeczywistym zakresem produktu i zaznacz przypadki jeszcze niezbadane.

### 10. Formularz rejestracji

**Wejście:** Pola, uzasadnienie ich zbierania i zanonimizowane błędy.

> Wskaż pola zbędne, niejasne etykiety i brakujące informacje pomocnicze. Zaproponuj wariant do testu.

**Sprawdź:** Sprawdź ukończenie zadania, jakość danych i błędy zamiast obiecywać wzrost o określony procent.

## Aplikacje Microsoft 365

Narzędzia: Excel, Word, PowerPoint, Outlook, Teams z Microsoft 365 Copilot; w innym narzędziu załącz plik.

### 1. Ruch w interfejsie

**Aplikacja:** Word; pracuj na otwartym dokumencie roboczym.

**Wejście:** Opis przejść między ekranami i cel animacji.

> Zaproponuj oszczędne sygnały zmiany stanu oraz wariant ograniczający ruch. Wyjaśnij, co użytkownik ma dzięki nim zrozumieć.

**Sprawdź:** Sprawdź ustawienie ograniczonego ruchu i sytuację, w której animacja nie zostanie odtworzona.

### 2. Plan oceny dostępności

**Aplikacja:** Word; pracuj na otwartym dokumencie roboczym.

**Wejście:** Opis komponentów, kod lub makiety i zakres audytu.

> Ułóż plan kontroli według WCAG 2.2, rozdzielając ocenę automatyczną i ręczną. Nie deklaruj zgodności na podstawie samego zrzutu.

**Sprawdź:** Przeprowadź test klawiatury, fokusu i nazw kontrolek w działającym interfejsie.

### 3. Układ strony produktowej

**Aplikacja:** Word; pracuj na otwartym dokumencie roboczym.

**Wejście:** Treści, priorytety decyzji klienta i ograniczenia urządzeń.

> Zaproponuj dwa układy z kolejnością informacji na małym ekranie. Wskaż miejsce wariantów produktu i warunków zakupu.

**Sprawdź:** Sprawdź długie nazwy, duże powiększenie tekstu i produkt niedostępny.

### 4. Brief ilustracji

**Aplikacja:** Word; pracuj na otwartym dokumencie roboczym.

**Wejście:** Cel komunikatu, wartości marki i miejsce użycia grafiki.

> Przygotuj koncepcje ilustracji wspierających sens tekstu. Wskaż, które są dekoracyjne, a które niosą informację.

**Sprawdź:** Nie umieszczaj kluczowych instrukcji wyłącznie w obrazie; sprawdź potrzebę tekstu alternatywnego.

### 5. Ścieżka rezerwacji

**Aplikacja:** Word; pracuj na otwartym dokumencie roboczym.

**Wejście:** Mapę ekranów i obserwacje problemów z testów.

> Wskaż miejsca zbędnego powtarzania danych i utraty postępu. Zaproponuj zmianę oraz sposób pomiaru jej wpływu.

**Sprawdź:** Test obejmuje cofnięcie kroku, przerwę w sesji i zmianę wcześniej wybranego wariantu.

### 6. Pierwsze użycie produktu

**Aplikacja:** Word; pracuj na otwartym dokumencie roboczym.

**Wejście:** Główne zadanie nowego użytkownika i wymagane informacje.

> Zaproponuj onboarding pozwalający wykonać zadanie bez zbędnego szkolenia. Oddziel konieczne zgody od wskazówek.

**Sprawdź:** Sprawdź ścieżkę pominięcia instrukcji oraz powrót do pomocy po pierwszym użyciu.

### 7. System typografii

**Aplikacja:** Word; pracuj na otwartym dokumencie roboczym.

**Wejście:** Typy treści, języki i dostępne kroje pisma.

> Zaproponuj hierarchię nagłówków, tekstu i opisów. Uwzględnij długie etykiety oraz dokumenty czytane na telefonie.

**Sprawdź:** Przetestuj powiększenie i zawijanie; ładna próbka alfabetu nie dowodzi czytelności długiej treści.

### 8. Wykres do decyzji

**Aplikacja:** Word; pracuj na otwartym dokumencie roboczym.

**Wejście:** Zestaw danych, jednostki i pytanie biznesowe odbiorcy.

> Dobierz formę wizualizacji do porównania lub trendu. Podaj tytuł, opis osi oraz ograniczenia interpretacji.

**Sprawdź:** Sprawdź skale, brakujące okresy i możliwość odczytu informacji bez rozróżniania kolorów.

### 9. Zaufanie do interfejsu

**Aplikacja:** Word; pracuj na otwartym dokumencie roboczym.

**Wejście:** Uwagi użytkowników i teksty komunikatów produktu.

> Wskaż elementy mogące budzić niepewność oraz propozycje wyjaśnień. Oznacz interpretacje wymagające rozmowy z użytkownikiem.

**Sprawdź:** Nie przypisuj emocji wszystkim odbiorcom na podstawie samego koloru lub układu.

### 10. Lokalizacja produktu

**Aplikacja:** Word; pracuj na otwartym dokumencie roboczym.

**Wejście:** Konkretny kraj, język i potwierdzone wymagania użytkowników.

> Przygotuj listę elementów do lokalizacji: formaty, długości, kierunek tekstu i treść pomocy. Unikaj stereotypów kulturowych.

**Sprawdź:** Lokalny recenzent sprawdza język oraz zrozumienie zadania w działającym prototypie.

## Zadanie wieloetapowe

Narzędzia: Microsoft 365 Copilot Cowork, Anthropic Claude Cowork, tryb agenta OpenAI ChatGPT.

### 1. Spójność marki

**Wejście:** Zatwierdzony system marki i przykłady niespójnych ekranów.

> Na podstawie [zatwierdzonych plików z datą i wersją] zaproponuj uporządkowanie nazw, tonów komunikatów i tokenów. Oddziel korektę spójności od zmiany tożsamości marki. Przygotuj tabelę ustaleń, listę braków i pytania do właściciela. Wynik oddaj do [osoby zatwierdzającej] przed wysyłką lub zmianą danych.

**Sprawdź:** Sprawdź, czy nowe warianty zachowują rozpoznawalność stanów błędu i działań użytkownika.

### 2. Nowy sposób interakcji

**Wejście:** Opis nowej technologii i obecne zadanie użytkownika.

> Na podstawie [zatwierdzonych plików z datą i wersją] zaproponuj hipotezę zastosowania oraz sytuację, w której klasyczny interfejs będzie prostszy. Wskaż koszt nauki. Przygotuj krótką notę, rejestr źródeł i warianty do oceny. Wynik oddaj do [osoby zatwierdzającej] przed wysyłką lub zmianą danych.

**Sprawdź:** Przetestuj rezultat zadania z reprezentatywnymi osobami zamiast oceniać wyłącznie efekt demonstracji.

### 3. Oszczędny interfejs

**Wejście:** Listę zasobów strony i potrzeby informacyjne użytkownika.

> Na podstawie [zatwierdzonych plików z datą i wersją] wskaż grafiki, wideo i interakcje możliwe do uproszczenia. Zachowaj informacje potrzebne do poprawnego wykonania zadania. Przygotuj zestawienie wersji, otwarte decyzje i plan kontroli. Wynik oddaj do [osoby zatwierdzającej] przed wysyłką lub zmianą danych.

**Sprawdź:** Zmierz transfer i wydajność po zmianie, bez deklarowania śladu środowiskowego bez modelu obliczeń.

### 4. Koncepcje rozwiązania i ocena trendu interfejsu

**Wejście:** Brief produktu, problem użytkownika i ograniczenia wdrożenia; przykłady trendu z datą i opis użytkowników produktu.

> Na podstawie [zatwierdzonych plików z datą i wersją] wykonaj kolejno etap 1 — koncepcje rozwiązania: Zaproponuj trzy odmienne sposoby wykonania zadania. Dla każdego wskaż kompromis oraz pytanie rozstrzygające w badaniu. Etap 2 — ocena trendu interfejsu: Wyjaśnij, jaki problem trend może rozwiązać i kiedy utrudni pracę. Zaproponuj test dopasowania do naszego kontekstu. Przygotuj materiał do przeglądu wraz z dowodami i punktami spornymi. Wynik oddaj do [osoby zatwierdzającej] przed wysyłką lub zmianą danych.

**Sprawdź:** Sprawdź, czy warianty różnią się mechanizmem, a nie tylko kolorem i nazwą; Nie uznawaj popularności rozwiązania za dowód poprawy użyteczności ani konwersji.

### 5. Paleta i kontrast i persona oparta na badaniu

**Wejście:** Kolory marki, role tokenów i docelowe tła; zanonimizowane wywiady i opis sposobu rekrutacji.

> Na podstawie [zatwierdzonych plików z datą i wersją] wykonaj kolejno etap 1 — paleta i kontrast: Zaproponuj warianty przypisania kolorów do tekstu, powierzchni i stanów. Wskaż pary wymagające pomiaru kontrastu. Etap 2 — persona oparta na badaniu: Zsyntetyzuj cele, zadania i przeszkody potwierdzone wypowiedziami. Oddziel hipotezy od obserwacji; nie dopisuj demografii. Przygotuj roboczy dokument, listę wyjątków i kryteria odbioru. Wynik oddaj do [osoby zatwierdzającej] przed wysyłką lub zmianą danych.

**Sprawdź:** Zmierz rzeczywiste pary kolorów narzędziem; deklaracja modelu nie stanowi wyniku pomiaru; Każde stwierdzenie o użytkowniku musi dać się powiązać z materiałem badawczym.

### 6. Hierarchia strony i znaczenie ikon

**Wejście:** Treść strony, cele użytkowników i dane o zadaniach; listę funkcji, kontekst użycia i przyjęty styl.

> Na podstawie [zatwierdzonych plików z datą i wersją] wykonaj kolejno etap 1 — hierarchia strony: Zaproponuj kolejność informacji wspierającą główne zadanie. Wyjaśnij, które informacje powinny pozostać widoczne przed decyzją. Etap 2 — znaczenie ikon: Zaproponuj metafory ikon oraz etykiety tekstowe. Wskaż symbole, które mogą mieć kilka znaczeń. Przygotuj tabelę ustaleń, listę braków i pytania do właściciela. Wynik oddaj do [osoby zatwierdzającej] przed wysyłką lub zmianą danych.

**Sprawdź:** Sprawdź propozycję testem zrozumienia, a nie samą oceną estetyki makiety; Przetestuj rozpoznawanie bez podpowiadania funkcji; ikona dekoracyjna nie zastępuje etykiety kontrolki.

### 7. Porównanie konkurencyjnych interfejsów i informacja po dodaniu do koszyka

**Wejście:** Zrzuty i opisy tych samych zadań w trzech produktach; opis stanu produktu, opóźnień i możliwych błędów.

> Na podstawie [zatwierdzonych plików z datą i wersją] wykonaj kolejno etap 1 — porównanie konkurencyjnych interfejsów: Porównaj liczbę decyzji, widoczność informacji i obsługę błędów. Oddziel obserwację od domysłu dotyczącego wyniku biznesowego. Etap 2 — informacja po dodaniu do koszyka: Zaproponuj komunikaty i zachowanie interfejsu dla sukcesu, oczekiwania i niepowodzenia. Uwzględnij powtórne kliknięcie. Przygotuj krótką notę, rejestr źródeł i warianty do oceny. Wynik oddaj do [osoby zatwierdzającej] przed wysyłką lub zmianą danych.

**Sprawdź:** Nie przypisuj konkurentowi lepszej konwersji bez dostępnych danych o konwersji; Przetestuj brak połączenia oraz obsługę klawiaturą, nie tylko płynną animację.

### 8. Scenariusze użycia i formularz rejestracji

**Wejście:** Potwierdzone potrzeby i warunki korzystania z produktu; pola, uzasadnienie ich zbierania i zanonimizowane błędy.

> Na podstawie [zatwierdzonych plików z datą i wersją] wykonaj kolejno etap 1 — scenariusze użycia: Zbuduj trzy scenariusze zadania z przeszkodą i oczekiwanym rezultatem. Nie twórz fikcyjnych cytatów użytkowników. Etap 2 — formularz rejestracji: Wskaż pola zbędne, niejasne etykiety i brakujące informacje pomocnicze. Zaproponuj wariant do testu. Przygotuj zestawienie wersji, otwarte decyzje i plan kontroli. Wynik oddaj do [osoby zatwierdzającej] przed wysyłką lub zmianą danych.

**Sprawdź:** Porównaj scenariusze z rzeczywistym zakresem produktu i zaznacz przypadki jeszcze niezbadane; Sprawdź ukończenie zadania, jakość danych i błędy zamiast obiecywać wzrost o określony procent.

### 9. Ruch w interfejsie i plan oceny dostępności

**Wejście:** Opis przejść między ekranami i cel animacji; opis komponentów, kod lub makiety i zakres audytu.

> Na podstawie [zatwierdzonych plików z datą i wersją] wykonaj kolejno etap 1 — ruch w interfejsie: Zaproponuj oszczędne sygnały zmiany stanu oraz wariant ograniczający ruch. Wyjaśnij, co użytkownik ma dzięki nim zrozumieć. Etap 2 — plan oceny dostępności: Ułóż plan kontroli według WCAG 2.2, rozdzielając ocenę automatyczną i ręczną. Nie deklaruj zgodności na podstawie samego zrzutu. Przygotuj materiał do przeglądu wraz z dowodami i punktami spornymi. Wynik oddaj do [osoby zatwierdzającej] przed wysyłką lub zmianą danych.

**Sprawdź:** Sprawdź ustawienie ograniczonego ruchu i sytuację, w której animacja nie zostanie odtworzona; Przeprowadź test klawiatury, fokusu i nazw kontrolek w działającym interfejsie.

### 10. Synteza opinii z testu użyteczności

**Wejście:** Notatki lub transkrypcje z sesji testu, scenariusze zadań i lista uczestników bez danych osobowych.

> Na podstawie [notatek z testu użyteczności z datą i numerami sesji] wykonaj kolejno etap 1: ponumeruj wypowiedzi i obserwacje, oddziel to, co uczestnik zrobił, od tego, co powiedział. Etap 2: pogrupuj problemy według zadań i podaj, ilu uczestników je napotkało. Każdy wniosek oprzyj na numerach wypowiedzi. Etap 3: oddziel problemy użyteczności od próśb o nowe funkcje i zaproponuj, co sprawdzić w kolejnej rundzie. Nie uogólniaj na wszystkich użytkowników i nie dopisuj przyczyn, których nikt nie wskazał. Wynik oddaj do [osoby zatwierdzającej] przed decyzją o zmianach.

**Sprawdź:** Sprawdź, czy każdy wniosek ma numer wypowiedzi; porównaj liczbę uczestników przy problemie z notatkami.

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

Praca UX wymaga rozróżnienia materiału badawczego od propozycji. Zdanie wygenerowane w stylu wypowiedzi klienta nie może później znaleźć się w raporcie jako cytat. Podobnie persona dopisana z wyobraźni jest hipotezą do sprawdzenia, nawet jeśli jej historia brzmi przekonująco. Zachowuj identyfikatory sesji i fragmenty wypowiedzi pozwalające wrócić do obserwacji.

Dostępność wymaga kontroli działającego produktu. [WCAG 2.2](https://www.w3.org/TR/WCAG22/) zawiera kryteria odnoszące się między innymi do kontrastu, obsługi klawiatury i fokusu. Copilot może pomóc ułożyć plan sprawdzenia, ale z samego opisu nie potwierdzi zgodności strony. Oddziel ocenę projektu od testu implementacji: poprawna etykieta na makiecie nie dowodzi, że kontrolka ma dostępną nazwę w kodzie.

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

Na pierwszy dzień wybierz jedno polecenie, przygotuj wejście i zapisz warunek odrzucenia odpowiedzi. Po próbie omów z właścicielem zadania, co wymagało poprawki. Jeżeli ten krok działa, przejdź do [promptów dla R&D, które pomagają formułować i weryfikować hipotezy](https://majchrzycki.com/blog/microsoft-copilot-praktyczne-prompty-dla-specjalistow-badan-i-rozwoju), aby przygotować współpracę z sąsiednią rolą bez przenoszenia wszystkich jej decyzji do jednego promptu.
