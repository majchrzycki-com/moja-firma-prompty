# Biblioteka promptów: Specjalista badań i rozwoju

Źródło: [„Microsoft Copilot: 30 promptów dla działu R&D”](https://majchrzycki.com/blog/microsoft-copilot-praktyczne-prompty-dla-specjalistow-badan-i-rozwoju?utm_source=github&utm_medium=referral&utm_campaign=moja-firma-prompty&utm_content=prompty-badania-i-rozwoj), Krzysztof Majchrzycki, majchrzycki.com. Stan wpisu: 2026-11-11. Licencja MIT.

Prompty pisano pod Microsoft 365 Copilot. W innych narzędziach działają prompty z grupy „Dowolny czat”, a pozostałe wymagają załączenia pliku albo pracy etapami.

## Dowolny czat

Narzędzia: Anthropic Claude, OpenAI ChatGPT, Google Gemini, Microsoft 365 Copilot Chat.

### 1. Mapa kierunków technologii

**Wejście:** Zestaw publikacji z identyfikatorami, datami i zakresem projektu.

> Pogrupuj kierunki badań oraz wskaż dowody i ograniczenia każdego z nich. Oddziel wyniki laboratoryjne od zastosowań przemysłowych.

**Sprawdź:** Sprawdź oryginalne publikacje i warunki eksperymentu, zanim przeniesiesz wniosek do projektu.

### 2. Nowe zastosowanie technologii

**Wejście:** Potwierdzone parametry rozwiązania i ograniczenia produkcyjne.

> Zaproponuj pięć zastosowań, wskazując potrzebę użytkownika i wymaganie techniczne. Oznacz każde założenie bez dowodu.

**Sprawdź:** Odrzuć koncepcje wymagające parametru, którego technologia dotąd nie osiągnęła.

### 3. Przegląd procesu badawczego

**Wejście:** Mapę etapów, czasy oczekiwania i źródła poprawek.

> Wskaż czynności możliwe do uproszczenia bez zmiany kryterium jakości. Zaproponuj pomiar wpływu jednego usprawnienia.

**Sprawdź:** Nie zmniejszaj liczby powtórzeń tylko po to, by osiągnąć założoną oszczędność czasu.

### 4. Porównanie technologii konkurentów

**Wejście:** Publiczne specyfikacje i wyniki testów według znanej metody.

> Zestaw parametry wraz z warunkami pomiaru. Wskaż pola nieporównywalne oraz informacje wymagające własnego testu.

**Sprawdź:** Sprawdź jednostki, tolerancje i zakres pracy; liczby bez warunków mogą wprowadzać w błąd.

### 5. Opis rozwiązania dla rzecznika

**Wejście:** Zatwierdzony opis techniczny i listę znanych rozwiązań.

> Uporządkuj problem, mechanizm i różnice techniczne. Przygotuj pytania dla rzecznika, bez deklaracji zdolności patentowej.

**Sprawdź:** Sprawdź kompletność opisu i zasady poufności przed przekazaniem materiału poza firmę.

### 6. Ryzyko technologiczne

**Wejście:** Założenia projektu, wyniki prób i granice akceptacji.

> Ułóż rejestr niepewności technicznych z eksperymentem rozstrzygającym. Oddziel ryzyko pomiaru od ryzyka rozwiązania.

**Sprawdź:** Najpierw weryfikuj założenie, którego obalenie unieważni dalsze kosztowne etapy.

### 7. Rezerwacja zasobów badawczych

**Wejście:** Dostępność aparatury, kompetencje i zależności eksperymentów.

> Zaproponuj harmonogram prac z buforem na powtórzenia. Pokaż konflikty zasobów i skutki przesunięcia badania.

**Sprawdź:** Potwierdź kalibrację urządzeń oraz dostępność osób uprawnionych do wykonania pomiaru.

### 8. Synteza literatury

**Wejście:** Pełne teksty wybranych prac i pytanie przeglądu.

> Przygotuj tabelę metoda, próba, wynik, ograniczenie i identyfikator źródła. Nie uzupełniaj brakujących publikacji z pamięci.

**Sprawdź:** Zweryfikuj każdą referencję oraz to, czy cytowane twierdzenie pochodzi z wyników czy dyskusji.

### 9. Hipoteza do obalenia

**Wejście:** Dotychczasowe wyniki, mechanizm teoretyczny i obserwowany problem.

> Zaproponuj hipotezy z przewidywaniem i wynikiem, który je obali. Wskaż konkurencyjne wyjaśnienia obserwacji.

**Sprawdź:** Odrzuć hipotezę, której nie da się odróżnić od alternatywy dostępnym pomiarem.

### 10. Plan eksperymentu

**Wejście:** Czynniki, odpowiedź mierzoną i ograniczenia liczby prób.

> Zaproponuj plan do konsultacji z ekspertem metodologicznym. Uwzględnij kontrolę, losowanie, powtórzenia i czynniki zakłócające.

**Sprawdź:** Sprawdź uzasadnienie liczebności i metodę analizy przed zebraniem danych.

## Aplikacje Microsoft 365

Narzędzia: Excel, Word, PowerPoint, Outlook, Teams z Microsoft 365 Copilot; w innym narzędziu załącz plik.

### 1. Eksploracja danych

**Aplikacja:** Word; pracuj na otwartym dokumencie roboczym.

**Wejście:** Słownik zmiennych, próbkę danych i opis sposobu zbierania.

> Zaproponuj kroki kontroli jakości i analizy eksploracyjnej. Rozdziel obserwowane związki od wyjaśnień przyczynowych.

**Sprawdź:** Uruchom analizę w odtwarzalnym środowisku i zachowaj kod, wersje oraz reguły wykluczeń.

### 2. Scenariusze popytu

**Aplikacja:** Word; pracuj na otwartym dokumencie roboczym.

**Wejście:** Dane rynkowe ze źródłami i zakres zastosowań technologii.

> Zbuduj warianty popytu zależne od jawnych założeń. Wskaż wrażliwość wyniku na cenę, adopcję i dostępność.

**Sprawdź:** Nie traktuj jednego scenariusza jako prognozy przychodu bez potwierdzenia modelu sprzedaży.

### 3. Transfer do produkcji

**Aplikacja:** Word; pracuj na otwartym dokumencie roboczym.

**Wejście:** Wyniki prototypu, ograniczenia procesu i kryteria jakości.

> Przygotuj listę różnic między próbą laboratoryjną a produkcją. Zaproponuj kolejność walidacji tych różnic.

**Sprawdź:** Sprawdź powtarzalność, tolerancje i warunki dostaw materiałów przed obietnicą wydajności.

### 4. Mapa wymagań produktu

**Aplikacja:** Word; pracuj na otwartym dokumencie roboczym.

**Wejście:** Zatwierdzoną listę rynków i źródła wymagań dostarczone przez eksperta.

> Przypisz wymagania do dowodów oraz właścicieli. Oznacz brak interpretacji lub aktualnego dokumentu zamiast deklarować zgodność.

**Sprawdź:** Osoba odpowiedzialna za zgodność zatwierdza zakres i aktualność wymagań.

### 5. Koncepcje nowego produktu

**Aplikacja:** Word; pracuj na otwartym dokumencie roboczym.

**Wejście:** Kompetencje techniczne i potwierdzone problemy odbiorców.

> Zaproponuj koncepcje z najważniejszą niepewnością i minimalnym testem. Oddziel atrakcyjność pomysłu od wykonalności technicznej.

**Sprawdź:** Przy każdej koncepcji wskaż dowód potrzebny przed finansowaniem kolejnego etapu.

### 6. Badanie użytkowania prototypu

**Aplikacja:** Word; pracuj na otwartym dokumencie roboczym.

**Wejście:** Cel prototypu, zadania i kryteria rekrutacji.

> Przygotuj scenariusz obserwacji oraz neutralne pytania. Oddziel błąd konstrukcji od niezrozumienia instrukcji.

**Sprawdź:** Przeprowadź próbę scenariusza i sprawdź, czy moderator nie sugeruje oczekiwanej odpowiedzi.

### 7. Przesłanki komercjalizacji

**Aplikacja:** Word; pracuj na otwartym dokumencie roboczym.

**Wejście:** Parametry rozwiązania, rozmowy z odbiorcami i model kosztów.

> Uporządkuj argumenty za wejściem na rynek i niewiadome. Zwróć warunki kontynuacji oraz zatrzymania.

**Sprawdź:** Potwierdź gotowość do zapłaty i koszty obsługi, nie tylko zainteresowanie demonstracją.

### 8. Przegląd projektu R&D

**Aplikacja:** Word; pracuj na otwartym dokumencie roboczym.

**Wejście:** Kamienie milowe i wyniki eksperymentów, także nieudanych.

> Przygotuj materiał na przegląd pokazujący, czego się dowiedzieliśmy. Oddziel postęp wiedzy od liczby wykonanych czynności.

**Sprawdź:** Sprawdź, czy decyzja o kontynuacji odnosi się do dowodów, a nie kosztów już poniesionych.

### 9. Mapa dokumentów patentowych

**Aplikacja:** Word; pracuj na otwartym dokumencie roboczym.

**Wejście:** Wyniki wyszukiwania, numery publikacji i zakres zapytania.

> Pogrupuj dokumenty według rozwiązywanego problemu. Zachowaj identyfikatory i nie utożsamiaj liczby dokumentów z liczbą wynalazków.

**Sprawdź:** Zweryfikuj rodziny i status w odpowiednim rejestrze; lista nie rozstrzyga swobody działania.

### 10. Wspólny język zespołów

**Aplikacja:** Teams; pracuj na otwartym zapisie rozmowy lub spotkania.

**Wejście:** Słowniki pojęć mechaników, analityków i zespołu produktu.

> Wskaż terminy używane w różnych znaczeniach. Przygotuj propozycję definicji z przykładem i właścicielem uzgodnienia.

**Sprawdź:** Prześledź jeden przypadek przez zespoły i sprawdź, czy definicja zachowuje sens pomiaru.

## Zadanie wieloetapowe

Narzędzia: Microsoft 365 Copilot Cowork, Anthropic Claude Cowork, tryb agenta OpenAI ChatGPT.

### 1. Zakres oceny środowiskowej

**Wejście:** Skład materiałowy, etapy życia produktu i dostępne pomiary.

> Na podstawie [zatwierdzonych plików z datą i wersją] zaproponuj granice analizy oraz listę brakujących danych. Oddziel bezpośredni pomiar od przyjętego współczynnika. Przygotuj tabelę ustaleń, listę braków i pytania do właściciela. Wynik oddaj do [osoby zatwierdzającej] przed wysyłką lub zmianą danych.

**Sprawdź:** Ekspert potwierdza metodę; model nie powinien dopisywać emisji ani współczynników z pamięci.

### 2. Cel prototypu

**Wejście:** Najważniejszą niepewność i dostępne metody wykonania.

> Na podstawie [zatwierdzonych plików z datą i wersją] porównaj prototyp fizyczny, symulację i prosty model. Oceń, które pytanie każdy wariant może rzeczywiście rozstrzygnąć. Przygotuj krótką notę, rejestr źródeł i warianty do oceny. Wynik oddaj do [osoby zatwierdzającej] przed wysyłką lub zmianą danych.

**Sprawdź:** Nie wybieraj najszybszej demonstracji, jeśli nie odwzorowuje krytycznego warunku działania.

### 3. Projekt z partnerem badawczym

**Wejście:** Cel, dostępne zasoby i uzgodniony zakres wymiany wiedzy.

> Na podstawie [zatwierdzonych plików z datą i wersją] przygotuj plan wspólnego eksperymentu z odpowiedzialnością i rezultatem odbioru. Wskaż kwestie praw do wyników do uzgodnienia. Przygotuj zestawienie wersji, otwarte decyzje i plan kontroli. Wynik oddaj do [osoby zatwierdzającej] przed wysyłką lub zmianą danych.

**Sprawdź:** Zatwierdź zasady udostępniania danych i publikacji przed rozpoczęciem współpracy.

### 4. Mapa kierunków technologii i nowe zastosowanie technologii

**Wejście:** Zestaw publikacji z identyfikatorami, datami i zakresem projektu; potwierdzone parametry rozwiązania i ograniczenia produkcyjne.

> Na podstawie [zatwierdzonych plików z datą i wersją] wykonaj kolejno etap 1 — mapa kierunków technologii: Pogrupuj kierunki badań oraz wskaż dowody i ograniczenia każdego z nich. Oddziel wyniki laboratoryjne od zastosowań przemysłowych. Etap 2 — nowe zastosowanie technologii: Zaproponuj pięć zastosowań, wskazując potrzebę użytkownika i wymaganie techniczne. Oznacz każde założenie bez dowodu. Przygotuj materiał do przeglądu wraz z dowodami i punktami spornymi. Wynik oddaj do [osoby zatwierdzającej] przed wysyłką lub zmianą danych.

**Sprawdź:** Sprawdź oryginalne publikacje i warunki eksperymentu, zanim przeniesiesz wniosek do projektu; Odrzuć koncepcje wymagające parametru, którego technologia dotąd nie osiągnęła.

### 5. Przegląd procesu badawczego i porównanie technologii konkurentów

**Wejście:** Mapę etapów, czasy oczekiwania i źródła poprawek; publiczne specyfikacje i wyniki testów według znanej metody.

> Na podstawie [zatwierdzonych plików z datą i wersją] wykonaj kolejno etap 1 — przegląd procesu badawczego: Wskaż czynności możliwe do uproszczenia bez zmiany kryterium jakości. Zaproponuj pomiar wpływu jednego usprawnienia. Etap 2 — porównanie technologii konkurentów: Zestaw parametry wraz z warunkami pomiaru. Wskaż pola nieporównywalne oraz informacje wymagające własnego testu. Przygotuj roboczy dokument, listę wyjątków i kryteria odbioru. Wynik oddaj do [osoby zatwierdzającej] przed wysyłką lub zmianą danych.

**Sprawdź:** Nie zmniejszaj liczby powtórzeń tylko po to, by osiągnąć założoną oszczędność czasu; Sprawdź jednostki, tolerancje i zakres pracy; liczby bez warunków mogą wprowadzać w błąd.

### 6. Opis rozwiązania dla rzecznika i ryzyko technologiczne

**Wejście:** Zatwierdzony opis techniczny i listę znanych rozwiązań; założenia projektu, wyniki prób i granice akceptacji.

> Na podstawie [zatwierdzonych plików z datą i wersją] wykonaj kolejno etap 1 — opis rozwiązania dla rzecznika: Uporządkuj problem, mechanizm i różnice techniczne. Przygotuj pytania dla rzecznika, bez deklaracji zdolności patentowej.  Etap 2 — ryzyko technologiczne: Ułóż rejestr niepewności technicznych z eksperymentem rozstrzygającym. Oddziel ryzyko pomiaru od ryzyka rozwiązania. Przygotuj tabelę ustaleń, listę braków i pytania do właściciela. Wynik oddaj do [osoby zatwierdzającej] przed wysyłką lub zmianą danych.

**Sprawdź:** Sprawdź kompletność opisu i zasady poufności przed przekazaniem materiału poza firmę; Najpierw weryfikuj założenie, którego obalenie unieważni dalsze kosztowne etapy.

### 7. Rezerwacja zasobów badawczych i synteza literatury

**Wejście:** Dostępność aparatury, kompetencje i zależności eksperymentów; pełne teksty wybranych prac i pytanie przeglądu.

> Na podstawie [zatwierdzonych plików z datą i wersją] wykonaj kolejno etap 1 — rezerwacja zasobów badawczych: Zaproponuj harmonogram prac z buforem na powtórzenia. Pokaż konflikty zasobów i skutki przesunięcia badania. Etap 2 — synteza literatury: Przygotuj tabelę metoda, próba, wynik, ograniczenie i identyfikator źródła. Nie uzupełniaj brakujących publikacji z pamięci. Przygotuj krótką notę, rejestr źródeł i warianty do oceny. Wynik oddaj do [osoby zatwierdzającej] przed wysyłką lub zmianą danych.

**Sprawdź:** Potwierdź kalibrację urządzeń oraz dostępność osób uprawnionych do wykonania pomiaru; Zweryfikuj każdą referencję oraz to, czy cytowane twierdzenie pochodzi z wyników czy dyskusji.

### 8. Hipoteza do obalenia i plan eksperymentu

**Wejście:** Dotychczasowe wyniki, mechanizm teoretyczny i obserwowany problem; czynniki, odpowiedź mierzoną i ograniczenia liczby prób.

> Na podstawie [zatwierdzonych plików z datą i wersją] wykonaj kolejno etap 1 — hipoteza do obalenia: Zaproponuj hipotezy z przewidywaniem i wynikiem, który je obali. Wskaż konkurencyjne wyjaśnienia obserwacji. Etap 2 — plan eksperymentu: Zaproponuj plan do konsultacji z ekspertem metodologicznym. Uwzględnij kontrolę, losowanie, powtórzenia i czynniki zakłócające. Przygotuj zestawienie wersji, otwarte decyzje i plan kontroli. Wynik oddaj do [osoby zatwierdzającej] przed wysyłką lub zmianą danych.

**Sprawdź:** Odrzuć hipotezę, której nie da się odróżnić od alternatywy dostępnym pomiarem; Sprawdź uzasadnienie liczebności i metodę analizy przed zebraniem danych.

### 9. Eksploracja danych i scenariusze popytu

**Wejście:** Słownik zmiennych, próbkę danych i opis sposobu zbierania; dane rynkowe ze źródłami i zakres zastosowań technologii.

> Na podstawie [zatwierdzonych plików z datą i wersją] wykonaj kolejno etap 1 — eksploracja danych: Zaproponuj kroki kontroli jakości i analizy eksploracyjnej. Rozdziel obserwowane związki od wyjaśnień przyczynowych. Etap 2 — scenariusze popytu: Zbuduj warianty popytu zależne od jawnych założeń. Wskaż wrażliwość wyniku na cenę, adopcję i dostępność. Przygotuj materiał do przeglądu wraz z dowodami i punktami spornymi. Wynik oddaj do [osoby zatwierdzającej] przed wysyłką lub zmianą danych.

**Sprawdź:** Uruchom analizę w odtwarzalnym środowisku i zachowaj kod, wersje oraz reguły wykluczeń; Nie traktuj jednego scenariusza jako prognozy przychodu bez potwierdzenia modelu sprzedaży.

### 10. Transfer do produkcji i mapa wymagań produktu

**Wejście:** Wyniki prototypu, ograniczenia procesu i kryteria jakości; zatwierdzoną listę rynków i źródła wymagań dostarczone przez eksperta.

> Na podstawie [zatwierdzonych plików z datą i wersją] wykonaj kolejno etap 1 — transfer do produkcji: Przygotuj listę różnic między próbą laboratoryjną a produkcją. Zaproponuj kolejność walidacji tych różnic.  Etap 2 — mapa wymagań produktu: Przypisz wymagania do dowodów oraz właścicieli. Oznacz brak interpretacji lub aktualnego dokumentu zamiast deklarować zgodność. Przygotuj roboczy dokument, listę wyjątków i kryteria odbioru. Wynik oddaj do [osoby zatwierdzającej] przed wysyłką lub zmianą danych.

**Sprawdź:** Sprawdź powtarzalność, tolerancje i warunki dostaw materiałów przed obietnicą wydajności; Osoba odpowiedzialna za zgodność zatwierdza zakres i aktualność wymagań.

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

Przegląd literatury i analiza patentów wymagają identyfikatorów pozwalających wrócić do dokumentu. Zapisuj DOI, numer publikacji patentowej, datę wyszukiwania i pełne zapytanie. EPO opisuje [wyszukiwanie dokumentów w Espacenet po numerach](https://www.epo.org/en/searching-for-patents/helpful-resources/patent-knowledge-news/did-you-know-how-perform-search). Copilot może pomóc uporządkować dostarczony zestaw, ale nie należy uznawać rozmowy za kompletny przegląd stanu techniki.

Wynik negatywny jest częścią wiedzy projektu. Jeśli asystent ma tylko udane próby, może zaproponować mechanizm, który został już odrzucony. W briefie umieść warunki badań, nieudane warianty i granice pomiaru. Przy liczbach zachowaj jednostki, tolerancje oraz identyfikator próbki. Odtwarzalność obliczeń sprawdzaj w narzędziu analitycznym, zamiast polegać na wyjaśnieniu zapisanym wyłącznie w czacie.

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

Na pierwszy dzień wybierz jedno polecenie, przygotuj wejście i zapisz warunek odrzucenia odpowiedzi. Po próbie omów z właścicielem zadania, co wymagało poprawki. Jeżeli ten krok działa, przejdź do [promptów dla bezpieczeństwa pomocnych w ochronie wiedzy badawczej](https://majchrzycki.com/blog/microsoft-copilot-praktyczne-prompty-dla-specjalistow-bezpieczenstwa), aby przygotować współpracę z sąsiednią rolą bez przenoszenia wszystkich jej decyzji do jednego promptu.
