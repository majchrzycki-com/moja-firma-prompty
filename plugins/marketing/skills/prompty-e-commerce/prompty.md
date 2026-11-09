# Biblioteka promptów: Specjalista e-commerce

Źródło: [„Microsoft Copilot: 30 promptów dla e-commerce”](https://majchrzycki.com/blog/microsoft-copilot-praktyczne-prompty-dla-specjalistow-e-commerce?utm_source=github&utm_medium=referral&utm_campaign=moja-firma-prompty&utm_content=prompty-e-commerce), Krzysztof Majchrzycki, majchrzycki.com. Stan wpisu: 2026-11-11. Licencja MIT.

Prompty pisano pod Microsoft 365 Copilot. W innych narzędziach działają prompty z grupy „Dowolny czat”, a pozostałe wymagają załączenia pliku albo pracy etapami.

## Dowolny czat

Narzędzia: Anthropic Claude, OpenAI ChatGPT, Google Gemini, Microsoft 365 Copilot Chat.

### 1. Opis produktu bez obietnic

**Wejście:** Przygotuj kartę techniczną, wariant produktu, grupę odbiorców i przykładowy opis marki.

> Napisz opis do 150 słów, oddzielając cechy od możliwych zastosowań. Przy każdej korzyści wskaż parametr, z którego wynika. Wypisz brakujące informacje.

**Sprawdź:** Porównaj wymiary, materiał, kompatybilność i zawartość zestawu z kartą właściwego wariantu.

### 2. Rekomendacje produktowe

**Wejście:** Przygotuj zanonimizowane koszyki, katalog dostępnych produktów i reguły wykluczeń.

> Zaproponuj pary produktów do testu rekomendacji. Oddziel współzakup od podobieństwa funkcjonalnego. Dla każdej pary podaj uzasadnienie oraz ograniczenie wynikające z danych.

**Sprawdź:** Wyklucz pozycje niedostępne oraz akcesoria niepasujące do danego modelu produktu.

### 3. Tytuły kart produktów

**Wejście:** Przygotuj nazwy producenta, identyfikatory SKU, atrybuty i zapytania ze sklepu.

> Przygotuj trzy schematy tytułów dla jednej kategorii. Zachowaj markę, model i cechę odróżniającą wariant. Nie dopisuj niepotwierdzonych superlatywów ani fraz niezwiązanych z produktem.

**Sprawdź:** Sprawdź, czy tytuły dwóch wariantów nie stały się identyczne po skróceniu.

### 4. Kampania e-mailowa

**Wejście:** Przygotuj zaakceptowany brief promocji, segment i warunki oferty.

> Napisz temat, preheader i treść wiadomości w dwóch wariantach. Użyj jednej głównej akcji; warunki promocji podaj bez skrótów zmieniających ich sens.

**Sprawdź:** Zweryfikuj termin, cenę, link docelowy oraz zgodność grupy odbiorców z zasadami wysyłki.

### 5. Opinie klientów

**Wejście:** Przygotuj eksport opinii bez nazwisk, identyfikatory produktów i okres.

> Pogrupuj opinie według problemu oraz etapu używania produktu. Zwróć liczebności, reprezentatywne fragmenty i tematy wymagające ręcznej interpretacji. Nie traktuj opinii jako reprezentacji wszystkich klientów.

**Sprawdź:** Sprawdź ręcznie próbkę ocen mieszanych, ironicznych i odnoszących się do dostawy.

### 6. Porzucenia koszyka

**Wejście:** Przygotuj lejek zdarzeń, definicje etapów, urządzenia i daty zmian sklepu.

> Wskaż etapy największego odpływu oraz hipotezy do sprawdzenia. Oddziel problemy pomiaru od zachowania klientów. Zaproponuj jeden test dla każdej hipotezy.

**Sprawdź:** Porównaj mianowniki etapów i sprawdź, czy blokowanie analityki nie zniekształca wyniku.

### 7. Posty produktowe

**Wejście:** Przygotuj kartę produktu, dostępne materiały i ograniczenia kanału.

> Opracuj trzy posty: pokaz zastosowania, wyjaśnienie parametru i odpowiedź na obiekcję. Wskaż potrzebny materiał wizualny, lecz nie twórz fikcyjnych wypowiedzi klientów.

**Sprawdź:** Sprawdź zgodność każdego zdania o produkcie z katalogiem i zasadami marki.

### 8. Warianty ceny

**Wejście:** Przygotuj koszt jednostkowy, opłaty, zwroty, obecne ceny i ograniczenia marży.

> Zbuduj tabelę scenariuszy ceny z jawnymi wzorami. Oddziel założony wolumen od znanej sprzedaży. Nie nazywaj wyniku prognozą bez modelu i walidacji.

**Sprawdź:** Przelicz marżę po rabacie, podatkach właściwych dla zestawienia i kosztach obsługi zamówienia.

### 9. Odpowiedź klientowi

**Wejście:** Przygotuj zanonimizowaną wiadomość, status zamówienia i zatwierdzone zasady obsługi.

> Napisz odpowiedź odnoszącą się do faktycznej sytuacji. Oddziel potwierdzony termin od przewidywanego. W razie braku danych sformułuj pytanie do opiekuna zamówienia.

**Sprawdź:** Potwierdź status w systemie przed wysłaniem i usuń obietnice poza uprawnieniami konsultanta.

### 10. Przegląd kampanii PPC

**Wejście:** Przygotuj raport kosztów, przychodów, atrybucji i listę ostatnich zmian.

> Porównaj grupy kampanii przy wspólnym oknie pomiaru. Wskaż kandydatów do eksperymentu, uwzględniając liczbę konwersji i niepewność. Nie zmieniaj budżetów.

**Sprawdź:** Sprawdź opóźnienia konwersji, duplikaty transakcji oraz wpływ sprzedaży brandowej na średnią.

## Aplikacje Microsoft 365

Narzędzia: Excel, Word, PowerPoint, Outlook, Teams z Microsoft 365 Copilot; w innym narzędziu załącz plik.

### 1. Odpowiedzi o produkcie

**Aplikacja:** Word; pracuj na otwartym dokumencie roboczym.

**Wejście:** Przygotuj pytania kupujących, instrukcję i kartę konkretnego modelu.

> Przygotuj krótkie odpowiedzi na dziesięć pytań o użytkowanie. Do każdej dodaj miejsce potwierdzenia w instrukcji. Oznacz pytania wymagające kontaktu z producentem.

**Sprawdź:** Zweryfikuj zalecenia bezpieczeństwa oraz różnice między starszą i obecną wersją produktu.

### 2. Cross-selling

**Aplikacja:** Word; pracuj na otwartym dokumencie roboczym.

**Wejście:** Przygotuj dane koszyków, koszty dostawy i mapę kompatybilności.

> Zaproponuj dodatki pomagające użyć głównego produktu. Podaj sytuację klienta, moment prezentacji oraz przypadek, w którym rekomendacja powinna zostać wyłączona.

**Sprawdź:** Sprawdź, czy dodatek jest potrzebny, a nie już dołączony do fabrycznego zestawu.

### 3. Poradnik zakupowy

**Aplikacja:** Word; pracuj na otwartym dokumencie roboczym.

**Wejście:** Przygotuj pytania klientów, parametry kategorii i katalog produktów.

> Przygotuj konspekt poradnika porównującego kryteria wyboru. Dla każdego kryterium wskaż konsekwencję użytkową i dane potrzebne do odpowiedzi. Nie promuj modelu bez uzasadnienia.

**Sprawdź:** Sprawdź, czy poradnik pomaga także odrzucić produkt niedopasowany do potrzeb odbiorcy.

### 4. Metaopisy kategorii

**Aplikacja:** Word; pracuj na otwartym dokumencie roboczym.

**Wejście:** Przygotuj zawartość kategorii, grupę odbiorców i wyróżniki faktycznej oferty.

> Napisz trzy zwięzłe metaopisy zgodne z zawartością strony. Nie obiecuj najniższej ceny, darmowej dostawy ani produktów, których nie potwierdza wejście.

**Sprawdź:** Porównaj obietnicę z aktualną kategorią i odrzuć opisy pasujące do dowolnego sklepu.

### 5. Sezonowość sprzedaży

**Aplikacja:** Word; pracuj na otwartym dokumencie roboczym.

**Wejście:** Przygotuj sprzedaż miesięczną, dostępność towaru i kalendarz promocji.

> Oddziel sezonowe wahania od skutków braku zapasu i promocji. Zaproponuj okres porównawczy oraz listę braków uniemożliwiających wiarygodne wnioski.

**Sprawdź:** Sprawdź, czy porównywane miesiące mają podobną liczbę dni handlowych i dostępnych SKU.

### 6. Program lojalnościowy

**Aplikacja:** Word; pracuj na otwartym dokumencie roboczym.

**Wejście:** Przygotuj regulamin, koszty nagród i zagregowane kohorty zakupowe.

> Porównaj dwa warianty nagradzania przy tej samej podstawie kosztowej. Wskaż ryzyko dotowania zakupów, które nastąpiłyby bez programu, oraz plan pomiaru.

**Sprawdź:** Przelicz koszt wykorzystanych punktów i odróżnij aktywność uczestników od efektu programu.

### 7. Persona oparta na dowodach

**Aplikacja:** Word; pracuj na otwartym dokumencie roboczym.

**Wejście:** Przygotuj wyniki badań klientów, wywiady i zachowania zakupowe.

> Zbuduj profil potrzeb, ograniczeń i kryteriów decyzji. Każdy element przypisz do materiału źródłowego; hipotezy umieść osobno. Nie wymyślaj wieku ani dochodu.

**Sprawdź:** Sprawdź, czy persona opisuje problem zakupowy, zamiast utrwalać stereotypy demograficzne.

### 8. Upselling z uzasadnieniem

**Aplikacja:** Word; pracuj na otwartym dokumencie roboczym.

**Wejście:** Przygotuj porównanie wariantów, różnice cen i scenariusze użytkowania.

> Napisz propozycję droższego wariantu tylko dla sytuacji uzasadniających dodatkową funkcję. Dodaj przypadki, w których tańszy produkt pozostaje wystarczający.

**Sprawdź:** Zweryfikuj, czy deklarowana korzyść wynika z różnicy funkcjonalnej, a nie samej ceny.

### 9. Scenariusz filmu

**Aplikacja:** Word; pracuj na otwartym dokumencie roboczym.

**Wejście:** Przygotuj produkt, instrukcję, dostępne ujęcia i limit czasu.

> Rozpisz demonstrację na ujęcia, wypowiedzi i napisy. Rozdziel czynności możliwe do pokazania od efektów wymagających dowodu. Nie symuluj opinii użytkowników.

**Sprawdź:** Sprawdź bezpieczeństwo demonstracji, czytelność napisów i zgodność prezentowanego wariantu z ofertą.

### 10. Wyszukiwarka sklepu

**Aplikacja:** Word; pracuj na otwartym dokumencie roboczym.

**Wejście:** Przygotuj zapytania bez wyników, kliknięcia i słownik katalogu.

> Zaproponuj synonimy, poprawki pisowni i przypadki wymagające zmiany katalogu. Dla każdej reguły podaj przykładowe zapytanie oraz niepożądane dopasowanie.

**Sprawdź:** Przetestuj reguły na zapytaniach wieloznacznych i nazwach modeli różniących się jednym znakiem.

## Zadanie wieloetapowe

Narzędzia: Microsoft 365 Copilot Cowork, Anthropic Claude Cowork, tryb agenta OpenAI ChatGPT.

### 1. Oferta z terminem

**Wejście:** Przygotuj zatwierdzone warunki, dostępny zapas i harmonogram promocji.

> Na podstawie [zatwierdzonych plików z datą i wersją] napisz komunikat ograniczenia czasowego bez fikcyjnej presji. Rozróżnij koniec promocji od wyczerpania zapasu. Zaproponuj treść po zakończeniu akcji. Przygotuj tabelę ustaleń, listę braków i pytania do właściciela. Wynik oddaj do [osoby zatwierdzającej] przed wysyłką lub zmianą danych.

**Sprawdź:** Potwierdź, że licznik i deklaracja dostępności odzwierciedlają rzeczywiste zasady kampanii.

### 2. Analiza procesu zwrotów

**Wejście:** Przygotuj zanonimizowane powody zwrotów, czasy obsługi i instrukcję procesu.

> Na podstawie [zatwierdzonych plików z datą i wersją] wskaż miejsca opóźnień i niejasne komunikaty. Zaproponuj zmianę jednego etapu oraz miernik jakości. Nie ograniczaj uprawnień klienta przez zmianę treści. Przygotuj krótką notę, rejestr źródeł i warianty do oceny. Wynik oddaj do [osoby zatwierdzającej] przed wysyłką lub zmianą danych.

**Sprawdź:** Właściciel procesu sprawdza aktualność zasad oraz rzeczywisty wpływ propozycji na obsługę klienta.

### 3. Spójność omnichannel

**Wejście:** Przygotuj mapę kanałów, zasady dostępności i przykładowe komunikaty.

> Na podstawie [zatwierdzonych plików z datą i wersją] porównaj obietnice ceny, odbioru i zwrotów między kanałami. Zwróć listę sprzeczności z właścicielem danych i propozycją źródła prawdy dla każdej informacji. Przygotuj zestawienie wersji, otwarte decyzje i plan kontroli. Wynik oddaj do [osoby zatwierdzającej] przed wysyłką lub zmianą danych.

**Sprawdź:** Przejdź jedną ścieżkę od reklamy do odbioru i sprawdź zgodność wszystkich komunikatów.

### 4. Opis produktu bez obietnic i rekomendacje produktowe

**Wejście:** Przygotuj kartę techniczną, wariant produktu, grupę odbiorców i przykładowy opis marki; przygotuj zanonimizowane koszyki, katalog dostępnych produktów i reguły wykluczeń.

> Na podstawie [zatwierdzonych plików z datą i wersją] wykonaj kolejno etap 1 — opis produktu bez obietnic: Napisz opis do 150 słów, oddzielając cechy od możliwych zastosowań. Przy każdej korzyści wskaż parametr, z którego wynika. Wypisz brakujące informacje. Etap 2 — rekomendacje produktowe: Zaproponuj pary produktów do testu rekomendacji. Oddziel współzakup od podobieństwa funkcjonalnego. Dla każdej pary podaj uzasadnienie oraz ograniczenie wynikające z danych. Przygotuj materiał do przeglądu wraz z dowodami i punktami spornymi. Wynik oddaj do [osoby zatwierdzającej] przed wysyłką lub zmianą danych.

**Sprawdź:** Porównaj wymiary, materiał, kompatybilność i zawartość zestawu z kartą właściwego wariantu; Wyklucz pozycje niedostępne oraz akcesoria niepasujące do danego modelu produktu.

### 5. Tytuły kart produktów i kampania e-mailowa

**Wejście:** Przygotuj nazwy producenta, identyfikatory SKU, atrybuty i zapytania ze sklepu; przygotuj zaakceptowany brief promocji, segment i warunki oferty.

> Na podstawie [zatwierdzonych plików z datą i wersją] wykonaj kolejno etap 1 — tytuły kart produktów: Przygotuj trzy schematy tytułów dla jednej kategorii. Zachowaj markę, model i cechę odróżniającą wariant. Nie dopisuj niepotwierdzonych superlatywów ani fraz niezwiązanych z produktem. Etap 2 — kampania e-mailowa: Napisz temat, preheader i treść wiadomości w dwóch wariantach. Użyj jednej głównej akcji; warunki promocji podaj bez skrótów zmieniających ich sens. Przygotuj roboczy dokument, listę wyjątków i kryteria odbioru. Wynik oddaj do [osoby zatwierdzającej] przed wysyłką lub zmianą danych.

**Sprawdź:** Sprawdź, czy tytuły dwóch wariantów nie stały się identyczne po skróceniu; Zweryfikuj termin, cenę, link docelowy oraz zgodność grupy odbiorców z zasadami wysyłki.

### 6. Opinie klientów i porzucenia koszyka

**Wejście:** Przygotuj eksport opinii bez nazwisk, identyfikatory produktów i okres; przygotuj lejek zdarzeń, definicje etapów, urządzenia i daty zmian sklepu.

> Na podstawie [zatwierdzonych plików z datą i wersją] wykonaj kolejno etap 1 — opinie klientów: Pogrupuj opinie według problemu oraz etapu używania produktu. Zwróć liczebności, reprezentatywne fragmenty i tematy wymagające ręcznej interpretacji. Nie traktuj opinii jako reprezentacji wszystkich klientów. Etap 2 — porzucenia koszyka: Wskaż etapy największego odpływu oraz hipotezy do sprawdzenia. Oddziel problemy pomiaru od zachowania klientów. Zaproponuj jeden test dla każdej hipotezy. Przygotuj tabelę ustaleń, listę braków i pytania do właściciela. Wynik oddaj do [osoby zatwierdzającej] przed wysyłką lub zmianą danych.

**Sprawdź:** Sprawdź ręcznie próbkę ocen mieszanych, ironicznych i odnoszących się do dostawy; Porównaj mianowniki etapów i sprawdź, czy blokowanie analityki nie zniekształca wyniku.

### 7. Posty produktowe i warianty ceny

**Wejście:** Przygotuj kartę produktu, dostępne materiały i ograniczenia kanału; przygotuj koszt jednostkowy, opłaty, zwroty, obecne ceny i ograniczenia marży.

> Na podstawie [zatwierdzonych plików z datą i wersją] wykonaj kolejno etap 1 — posty produktowe: Opracuj trzy posty: pokaz zastosowania, wyjaśnienie parametru i odpowiedź na obiekcję. Wskaż potrzebny materiał wizualny, lecz nie twórz fikcyjnych wypowiedzi klientów. Etap 2 — warianty ceny: Zbuduj tabelę scenariuszy ceny z jawnymi wzorami. Oddziel założony wolumen od znanej sprzedaży. Nie nazywaj wyniku prognozą bez modelu i walidacji. Przygotuj krótką notę, rejestr źródeł i warianty do oceny. Wynik oddaj do [osoby zatwierdzającej] przed wysyłką lub zmianą danych.

**Sprawdź:** Sprawdź zgodność każdego zdania o produkcie z katalogiem i zasadami marki; Przelicz marżę po rabacie, podatkach właściwych dla zestawienia i kosztach obsługi zamówienia.

### 8. Odpowiedź klientowi i przegląd kampanii ppc

**Wejście:** Przygotuj zanonimizowaną wiadomość, status zamówienia i zatwierdzone zasady obsługi; przygotuj raport kosztów, przychodów, atrybucji i listę ostatnich zmian.

> Na podstawie [zatwierdzonych plików z datą i wersją] wykonaj kolejno etap 1 — odpowiedź klientowi: Napisz odpowiedź odnoszącą się do faktycznej sytuacji. Oddziel potwierdzony termin od przewidywanego. W razie braku danych sformułuj pytanie do opiekuna zamówienia. Etap 2 — przegląd kampanii ppc: Porównaj grupy kampanii przy wspólnym oknie pomiaru. Wskaż kandydatów do eksperymentu, uwzględniając liczbę konwersji i niepewność. Nie zmieniaj budżetów. Przygotuj zestawienie wersji, otwarte decyzje i plan kontroli. Wynik oddaj do [osoby zatwierdzającej] przed wysyłką lub zmianą danych.

**Sprawdź:** Potwierdź status w systemie przed wysłaniem i usuń obietnice poza uprawnieniami konsultanta; Sprawdź opóźnienia konwersji, duplikaty transakcji oraz wpływ sprzedaży brandowej na średnią.

### 9. Odpowiedzi o produkcie i cross-selling

**Wejście:** Przygotuj pytania kupujących, instrukcję i kartę konkretnego modelu; przygotuj dane koszyków, koszty dostawy i mapę kompatybilności.

> Na podstawie [zatwierdzonych plików z datą i wersją] wykonaj kolejno etap 1 — odpowiedzi o produkcie: Przygotuj krótkie odpowiedzi na dziesięć pytań o użytkowanie. Do każdej dodaj miejsce potwierdzenia w instrukcji. Oznacz pytania wymagające kontaktu z producentem. Etap 2 — cross-selling: Zaproponuj dodatki pomagające użyć głównego produktu. Podaj sytuację klienta, moment prezentacji oraz przypadek, w którym rekomendacja powinna zostać wyłączona. Przygotuj materiał do przeglądu wraz z dowodami i punktami spornymi. Wynik oddaj do [osoby zatwierdzającej] przed wysyłką lub zmianą danych.

**Sprawdź:** Zweryfikuj zalecenia bezpieczeństwa oraz różnice między starszą i obecną wersją produktu; Sprawdź, czy dodatek jest potrzebny, a nie już dołączony do fabrycznego zestawu.

### 10. Poradnik zakupowy i metaopisy kategorii

**Wejście:** Przygotuj pytania klientów, parametry kategorii i katalog produktów; przygotuj zawartość kategorii, grupę odbiorców i wyróżniki faktycznej oferty.

> Na podstawie [zatwierdzonych plików z datą i wersją] wykonaj kolejno etap 1 — poradnik zakupowy: Przygotuj konspekt poradnika porównującego kryteria wyboru. Dla każdego kryterium wskaż konsekwencję użytkową i dane potrzebne do odpowiedzi. Nie promuj modelu bez uzasadnienia. Etap 2 — metaopisy kategorii: Napisz trzy zwięzłe metaopisy zgodne z zawartością strony. Nie obiecuj najniższej ceny, darmowej dostawy ani produktów, których nie potwierdza wejście. Przygotuj roboczy dokument, listę wyjątków i kryteria odbioru. Wynik oddaj do [osoby zatwierdzającej] przed wysyłką lub zmianą danych.

**Sprawdź:** Sprawdź, czy poradnik pomaga także odrzucić produkt niedopasowany do potrzeb odbiorcy; Porównaj obietnicę z aktualną kategorią i odrzuć opisy pasujące do dowolnego sklepu.

## Zasady pracy w tej roli (z wpisu)

### Jak przygotować dane przed pierwszym promptem

Punktem odniesienia jest poprawność oferty i doświadczenie kupującego. Ładniejszy opis nie stanowi dowodu wzrostu sprzedaży. W tym zestawie rozdzielamy tworzenie treści, analizę danych oraz decyzję o zmianie sklepu. Wynik analizy ma kończyć się propozycją testu, a tekst produktowy listą potwierdzonych cech. Nie przypisuj produktowi certyfikatów, efektów zdrowotnych ani dostępności na podstawie domysłu.

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

Jeśli najpierw potrzebujesz uporządkować możliwości narzędzia, przeczytaj przewodnik po Copilocie dla firm. Następnie porównaj [kontrolę jakości materiałów i procesów](https://majchrzycki.com/blog/microsoft-copilot-praktyczne-prompty-dla-specjalistow-jakosci), aby ustalić sposób przekazywania danych i wyników między rolami. Zacznij od jednej pracy, której jakość potrafisz samodzielnie ocenić.
