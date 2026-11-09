# Biblioteka promptów: Specjalista logistyki

Źródło: [„Microsoft Copilot: 30 promptów dla logistyki”](https://majchrzycki.com/blog/microsoft-copilot-praktyczne-prompty-dla-specjalistow-logistyki?utm_source=github&utm_medium=referral&utm_campaign=moja-firma-prompty&utm_content=prompty-logistyka), Krzysztof Majchrzycki, majchrzycki.com. Stan wpisu: 2026-11-11. Licencja MIT.

Prompty pisano pod Microsoft 365 Copilot. W innych narzędziach działają prompty z grupy „Dowolny czat”, a pozostałe wymagają załączenia pliku albo pracy etapami.

## Dowolny czat

Narzędzia: Anthropic Claude, OpenAI ChatGPT, Google Gemini, Microsoft 365 Copilot Chat.

### 1. Warianty tras

**Wejście:** Przygotuj punkty dostaw, pojemności pojazdów i okna odbioru.

> Przygotuj ograniczenia dla planisty tras i porównaj dostarczone warianty. Wskaż naruszenia oraz brakujące czasy przejazdu. Nie deklaruj trasy optymalnej bez obliczeń optymalizatora.

**Sprawdź:** Dyspozytor potwierdza aktualne warunki, ograniczenia pojazdu i wykonalność każdego odcinka.

### 2. Prognoza popytu

**Wejście:** Przygotuj historię zamówień, braki zapasu i promocje.

> Przygotuj zbiór do prognozowania, oznaczając anomalie i przerwy dostępności. Zaproponuj prosty punkt odniesienia oraz sposób oceny na odłożonym okresie.

**Sprawdź:** Nie utożsamiaj zerowej sprzedaży przy braku towaru z zerowym zapotrzebowaniem klientów.

### 3. Wydajność magazynu

**Wejście:** Przygotuj czasy operacji, wolumen i rodzaje zamówień.

> Porównaj etapy przyjęcia, kompletacji oraz wysyłki. Rozdziel czas pracy od oczekiwania i pokaż wpływ struktury zamówień na średnie.

**Sprawdź:** Sprawdź, czy zamówienia jednoelementowe i paletowe nie zostały ocenione wspólną normą.

### 4. Parametry zapasu

**Wejście:** Przygotuj popyt, lead time, poziom obsługi i obecne parametry.

> Wskaż produkty wymagające przeglądu parametrów. Pokaż warianty przy zmienności dostaw oraz braki danych; nie nadpisuj punktów zamawiania.

**Sprawdź:** Planista przelicza wyniki i potwierdza minimum dostawcy oraz rzeczywiste ograniczenia magazynu.

### 5. Terminowość dostawcy

**Wejście:** Przygotuj zamówienia, daty potwierdzone i rzeczywiste przyjęcia.

> Oblicz terminowość według przekazanej definicji. Oddziel opóźnienie dostawcy od zmiany terminu przez odbiorcę i pokaż częściowe dostawy.

**Sprawdź:** Zweryfikuj historię zmian terminów, zamiast porównywać tylko ostatnią datę w zamówieniu.

### 6. Dostępna zdolność

**Wejście:** Przygotuj plan zleceń, kalendarze zasobów i potwierdzone ograniczenia.

> Przygotuj bilans zapotrzebowania na zdolność względem dostępnych godzin. Wskaż przeciążenia oraz decyzje do uzgodnienia z produkcją.

**Sprawdź:** Nie traktuj czasu kalendarzowego jako pełnej dostępności; uwzględnij uzgodnione postoje i przezbrojenia.

### 7. Przyczyny zwrotów

**Wejście:** Przygotuj rejestr zwrotów, uszkodzenia i kanały dostawy.

> Pogrupuj powody i porównaj ich udział w dostawach. Oddziel zwrot handlowy od uszkodzenia transportowego oraz brakujących danych.

**Sprawdź:** Sprawdź próbkę dokumentów i mianownik dostaw dla każdego kanału transportowego.

### 8. Cross-docking

**Wejście:** Przygotuj godziny przyjazdów, odprawy ramp i plan wyjazdów.

> Zidentyfikuj połączenia możliwe do obsługi bez składowania. Dla każdego wskaż wymagany bufor oraz skutek opóźnienia dostawy wejściowej.

**Sprawdź:** Potwierdź zgodność etykiet, dostępność ramp i możliwość awaryjnego składowania jednostek.

### 9. Koszt transportu

**Wejście:** Przygotuj faktury, taryfy, trasy i parametry przesyłek.

> Rozłóż koszt na fracht, dopłaty i usługi dodatkowe. Wskaż odchylenia od umów oraz pozycje wymagające wyjaśnienia, bez automatycznej reklamacji.

**Sprawdź:** Porównaj dopłaty z okresem obowiązywania taryfy i faktycznymi cechami przesyłki.

### 10. Układ magazynu

**Wejście:** Przygotuj mapę lokalizacji, rotację SKU i ograniczenia składowania.

> Zaproponuj kandydatów do przesunięcia bliżej kompletacji. Uwzględnij gabaryt i częstotliwość pobrań, a miejsca wymagające oceny technicznej oznacz osobno.

**Sprawdź:** Sprawdź nośność, bezpieczeństwo ruchu i kompatybilność przechowywanych towarów przed zmianą.

## Aplikacje Microsoft 365

Narzędzia: Excel, Word, PowerPoint, Outlook, Teams z Microsoft 365 Copilot; w innym narzędziu załącz plik.

### 1. Ryzyko łańcucha dostaw

**Aplikacja:** Word; pracuj na otwartym dokumencie roboczym.

**Wejście:** Przygotuj kluczowe materiały, zależności i zatwierdzone scenariusze zakłóceń.

> Przygotuj plan pytań oraz wariantów reakcji. Dla każdej zależności wskaż czas do skutku i dane potrzebne do decyzji o buforze.

**Sprawdź:** Właściciel procesu potwierdza realną dostępność alternatywnego dostawcy, zamiast zakładać zamienność.

### 2. Ostatnia mila

**Aplikacja:** Word; pracuj na otwartym dokumencie roboczym.

**Wejście:** Przygotuj próby doręczeń, okna dostawy i przyczyny niepowodzeń.

> Porównaj typy nieudanych doręczeń i zaproponuj jeden test komunikacji lub organizacji. Nie przypisuj przyczyny klientowi bez potwierdzenia.

**Sprawdź:** Sprawdź poprawność kodowania prób oraz to, czy zmiana nie wydłuża czasu pozostałych dostaw.

### 3. Definicje KPI logistycznych

**Aplikacja:** Excel; pracuj na otwartym arkuszu z danymi.

**Wejście:** Przygotuj słownik zdarzeń, cele i obecne raporty.

> Opisz wzory wskaźników terminowości, kompletności i czasu realizacji. Przy każdym podaj zdarzenie początku, końca i regułę wyłączeń.

**Sprawdź:** Przelicz kilka zamówień częściowych i anulowanych, aby sprawdzić spójność definicji.

### 4. Automatyzacja magazynu

**Aplikacja:** Word; pracuj na otwartym dokumencie roboczym.

**Wejście:** Przygotuj wolumen, pracochłonność, oferty i koszty utrzymania.

> Zbuduj scenariusz kosztów automatyzacji z jawnymi założeniami. Uwzględnij integrację, przestoje i wariant niższego wolumenu; oddziel wycenę od hipotezy.

**Sprawdź:** Sprawdź wrażliwość wyniku na sezonowość oraz koszt obsługi wyjątków wymagających człowieka.

### 5. Przegląd floty

**Aplikacja:** Word; pracuj na otwartym dokumencie roboczym.

**Wejście:** Przygotuj przebiegi, dostępność, koszty i terminy obsługi.

> Wskaż pojazdy wymagające przeglądu kosztów lub harmonogramu. Oddziel awarie od planowej obsługi i przygotuj pytania do osoby odpowiedzialnej.

**Sprawdź:** Zweryfikuj stan techniczny w dokumentacji; analiza kosztowa nie przesądza o dopuszczeniu pojazdu.

### 6. Dane środowiskowe

**Aplikacja:** Excel; pracuj na otwartym arkuszu z danymi.

**Wejście:** Przygotuj zużycie paliwa, odległości i zatwierdzoną metodę obliczeń.

> Przygotuj strukturę zestawienia i zaznacz brakujące aktywności. Użyj wyłącznie dostarczonych współczynników z wersją źródła; nie mieszaj metod.

**Sprawdź:** Sprawdź jednostki, granice zestawienia i rozdzielenie pomiarów własnych od szacunków przewoźnika.

### 7. Dokumenty odprawy

**Aplikacja:** Word; pracuj na otwartym dokumencie roboczym.

**Wejście:** Przygotuj listę wymaganych dokumentów od agencji i dane przesyłki.

> Sprawdź kompletność pakietu oraz zgodność nazw, ilości i wartości między dokumentami. Nie wyznaczaj samodzielnie klasyfikacji taryfowej ani obowiązku podatkowego.

**Sprawdź:** Agencja lub uprawniony specjalista potwierdza klasyfikację oraz wymagania właściwe dla przesyłki.

### 8. Ocena trendu

**Aplikacja:** Excel; pracuj na otwartym arkuszu z danymi.

**Wejście:** Przygotuj materiały producentów technologii i opis problemu magazynu.

> Oddziel deklarowane możliwości od warunków działania. Przygotuj pytania do vendora i test demonstracyjny wykorzystujący typowy oraz nietypowy przypadek.

**Sprawdź:** Nie uznawaj demonstracji na wybranych paczkach za dowód wydajności dla całego asortymentu.

### 9. Proces zwrotnej logistyki

**Aplikacja:** Word; pracuj na otwartym dokumencie roboczym.

**Wejście:** Przygotuj kroki przyjęcia zwrotu, statusy towaru i decyzje jakości.

> Zaproponuj mapę stanów od odbioru do ponownego udostępnienia lub wycofania. Określ dowód wymagany do każdego przejścia.

**Sprawdź:** Potwierdź, że towar nie wraca do sprzedaży przed wymaganą kontrolą stanu.

### 10. Centra dystrybucyjne

**Aplikacja:** Word; pracuj na otwartym dokumencie roboczym.

**Wejście:** Przygotuj wolumeny, profile zamówień i koszty porównywanych centrów.

> Porównaj wyniki po rozdzieleniu typów operacji. Wskaż, które różnice mogą wynikać z obsługiwanego asortymentu, a nie efektywności.

**Sprawdź:** Sprawdź wspólne definicje kosztów i kompletność danych dla każdego centrum.

## Zadanie wieloetapowe

Narzędzia: Microsoft 365 Copilot Cowork, Anthropic Claude Cowork, tryb agenta OpenAI ChatGPT.

### 1. Plan pracy magazynu

**Wejście:** Przygotuj spodziewany wolumen, kompetencje i zatwierdzone ograniczenia grafików.

> Na podstawie [zatwierdzonych plików z datą i wersją] przygotuj zapotrzebowanie na obsadę według operacji. Pokaż godziny niedoboru oraz wariant przesunięcia zadań, bez publikowania grafiku. Przygotuj tabelę ustaleń, listę braków i pytania do właściciela. Wynik oddaj do [osoby zatwierdzającej] przed wysyłką lub zmianą danych.

**Sprawdź:** Kierownik sprawdza uprawnienia, rzeczywistą dostępność i zgodność z obowiązującymi zasadami pracy.

### 2. Koszt składowania

**Wejście:** Przygotuj zapas, wykorzystanie powierzchni i składniki kosztów.

> Na podstawie [zatwierdzonych plików z datą i wersją] rozdziel koszty stałe i zależne od wolumenu. Pokaż koszt według przyjętej jednostki oraz wpływ pustych miejsc i zapasu wolnorotującego. Przygotuj krótką notę, rejestr źródeł i warianty do oceny. Wynik oddaj do [osoby zatwierdzającej] przed wysyłką lub zmianą danych.

**Sprawdź:** Nie dziel kosztu jednocześnie przez palety i sztuki bez jawnego przelicznika.

### 3. Obieg dokumentów

**Wejście:** Przygotuj wzory dokumentów, identyfikatory przesyłek i listę wyjątków.

> Na podstawie [zatwierdzonych plików z datą i wersją] zaproponuj reguły nazewnictwa i kontroli kompletności. Powiąż dokument z przesyłką oraz wskaż, kto wyjaśnia brak lub sprzeczność. Przygotuj zestawienie wersji, otwarte decyzje i plan kontroli. Wynik oddaj do [osoby zatwierdzającej] przed wysyłką lub zmianą danych.

**Sprawdź:** Przetestuj reguły na dostawie częściowej, korekcie i przesyłce obejmującej kilka zamówień.

### 4. Warianty tras i prognoza popytu

**Wejście:** Przygotuj punkty dostaw, pojemności pojazdów i okna odbioru; przygotuj historię zamówień, braki zapasu i promocje.

> Na podstawie [zatwierdzonych plików z datą i wersją] wykonaj kolejno etap 1 — warianty tras: Przygotuj ograniczenia dla planisty tras i porównaj dostarczone warianty. Wskaż naruszenia oraz brakujące czasy przejazdu. Nie deklaruj trasy optymalnej bez obliczeń optymalizatora. Etap 2 — prognoza popytu: Przygotuj zbiór do prognozowania, oznaczając anomalie i przerwy dostępności. Zaproponuj prosty punkt odniesienia oraz sposób oceny na odłożonym okresie. Przygotuj materiał do przeglądu wraz z dowodami i punktami spornymi. Wynik oddaj do [osoby zatwierdzającej] przed wysyłką lub zmianą danych.

**Sprawdź:** Dyspozytor potwierdza aktualne warunki, ograniczenia pojazdu i wykonalność każdego odcinka; Nie utożsamiaj zerowej sprzedaży przy braku towaru z zerowym zapotrzebowaniem klientów.

### 5. Wydajność magazynu i parametry zapasu

**Wejście:** Przygotuj czasy operacji, wolumen i rodzaje zamówień; przygotuj popyt, lead time, poziom obsługi i obecne parametry.

> Na podstawie [zatwierdzonych plików z datą i wersją] wykonaj kolejno etap 1 — wydajność magazynu: Porównaj etapy przyjęcia, kompletacji oraz wysyłki. Rozdziel czas pracy od oczekiwania i pokaż wpływ struktury zamówień na średnie. Etap 2 — parametry zapasu: Wskaż produkty wymagające przeglądu parametrów. Pokaż warianty przy zmienności dostaw oraz braki danych; nie nadpisuj punktów zamawiania. Przygotuj roboczy dokument, listę wyjątków i kryteria odbioru. Wynik oddaj do [osoby zatwierdzającej] przed wysyłką lub zmianą danych.

**Sprawdź:** Sprawdź, czy zamówienia jednoelementowe i paletowe nie zostały ocenione wspólną normą; Planista przelicza wyniki i potwierdza minimum dostawcy oraz rzeczywiste ograniczenia magazynu.

### 6. Terminowość dostawcy i dostępna zdolność

**Wejście:** Przygotuj zamówienia, daty potwierdzone i rzeczywiste przyjęcia; przygotuj plan zleceń, kalendarze zasobów i potwierdzone ograniczenia.

> Na podstawie [zatwierdzonych plików z datą i wersją] wykonaj kolejno etap 1 — terminowość dostawcy: Oblicz terminowość według przekazanej definicji. Oddziel opóźnienie dostawcy od zmiany terminu przez odbiorcę i pokaż częściowe dostawy. Etap 2 — dostępna zdolność: Przygotuj bilans zapotrzebowania na zdolność względem dostępnych godzin. Wskaż przeciążenia oraz decyzje do uzgodnienia z produkcją. Przygotuj tabelę ustaleń, listę braków i pytania do właściciela. Wynik oddaj do [osoby zatwierdzającej] przed wysyłką lub zmianą danych.

**Sprawdź:** Zweryfikuj historię zmian terminów, zamiast porównywać tylko ostatnią datę w zamówieniu; Nie traktuj czasu kalendarzowego jako pełnej dostępności; uwzględnij uzgodnione postoje i przezbrojenia.

### 7. Przyczyny zwrotów i cross-docking

**Wejście:** Przygotuj rejestr zwrotów, uszkodzenia i kanały dostawy; przygotuj godziny przyjazdów, odprawy ramp i plan wyjazdów.

> Na podstawie [zatwierdzonych plików z datą i wersją] wykonaj kolejno etap 1 — przyczyny zwrotów: Pogrupuj powody i porównaj ich udział w dostawach. Oddziel zwrot handlowy od uszkodzenia transportowego oraz brakujących danych. Etap 2 — cross-docking: Zidentyfikuj połączenia możliwe do obsługi bez składowania. Dla każdego wskaż wymagany bufor oraz skutek opóźnienia dostawy wejściowej. Przygotuj krótką notę, rejestr źródeł i warianty do oceny. Wynik oddaj do [osoby zatwierdzającej] przed wysyłką lub zmianą danych.

**Sprawdź:** Sprawdź próbkę dokumentów i mianownik dostaw dla każdego kanału transportowego; Potwierdź zgodność etykiet, dostępność ramp i możliwość awaryjnego składowania jednostek.

### 8. Koszt transportu i układ magazynu

**Wejście:** Przygotuj faktury, taryfy, trasy i parametry przesyłek; przygotuj mapę lokalizacji, rotację SKU i ograniczenia składowania.

> Na podstawie [zatwierdzonych plików z datą i wersją] wykonaj kolejno etap 1 — koszt transportu: Rozłóż koszt na fracht, dopłaty i usługi dodatkowe. Wskaż odchylenia od umów oraz pozycje wymagające wyjaśnienia, bez automatycznej reklamacji. Etap 2 — układ magazynu: Zaproponuj kandydatów do przesunięcia bliżej kompletacji. Uwzględnij gabaryt i częstotliwość pobrań, a miejsca wymagające oceny technicznej oznacz osobno. Przygotuj zestawienie wersji, otwarte decyzje i plan kontroli. Wynik oddaj do [osoby zatwierdzającej] przed wysyłką lub zmianą danych.

**Sprawdź:** Porównaj dopłaty z okresem obowiązywania taryfy i faktycznymi cechami przesyłki; Sprawdź nośność, bezpieczeństwo ruchu i kompatybilność przechowywanych towarów przed zmianą.

### 9. Ryzyko łańcucha dostaw i ostatnia mila

**Wejście:** Przygotuj kluczowe materiały, zależności i zatwierdzone scenariusze zakłóceń; przygotuj próby doręczeń, okna dostawy i przyczyny niepowodzeń.

> Na podstawie [zatwierdzonych plików z datą i wersją] wykonaj kolejno etap 1 — ryzyko łańcucha dostaw: Przygotuj plan pytań oraz wariantów reakcji. Dla każdej zależności wskaż czas do skutku i dane potrzebne do decyzji o buforze. Etap 2 — ostatnia mila: Porównaj typy nieudanych doręczeń i zaproponuj jeden test komunikacji lub organizacji. Nie przypisuj przyczyny klientowi bez potwierdzenia. Przygotuj materiał do przeglądu wraz z dowodami i punktami spornymi. Wynik oddaj do [osoby zatwierdzającej] przed wysyłką lub zmianą danych.

**Sprawdź:** Właściciel procesu potwierdza realną dostępność alternatywnego dostawcy, zamiast zakładać zamienność; Sprawdź poprawność kodowania prób oraz to, czy zmiana nie wydłuża czasu pozostałych dostaw.

### 10. Definicje KPI logistycznych i automatyzacja magazynu

**Wejście:** Przygotuj słownik zdarzeń, cele i obecne raporty; przygotuj wolumen, pracochłonność, oferty i koszty utrzymania.

> Na podstawie [zatwierdzonych plików z datą i wersją] wykonaj kolejno etap 1 — definicje KPI logistycznych: Opisz wzory wskaźników terminowości, kompletności i czasu realizacji. Przy każdym podaj zdarzenie początku, końca i regułę wyłączeń. Etap 2 — automatyzacja magazynu: Zbuduj scenariusz kosztów automatyzacji z jawnymi założeniami. Uwzględnij integrację, przestoje i wariant niższego wolumenu; oddziel wycenę od hipotezy. Przygotuj roboczy dokument, listę wyjątków i kryteria odbioru. Wynik oddaj do [osoby zatwierdzającej] przed wysyłką lub zmianą danych.

**Sprawdź:** Przelicz kilka zamówień częściowych i anulowanych, aby sprawdzić spójność definicji; Sprawdź wrażliwość wyniku na sezonowość oraz koszt obsługi wyjątków wymagających człowieka.

## Zasady pracy w tej roli (z wpisu)

### Jak przygotować dane przed pierwszym promptem

Ten zestaw służy planistom i liderom logistyki pracującym na eksportach z systemów. Analiza historyczna wyjaśnia przeszłość, natomiast plan operacyjny musi uwzględniać dostępność dzisiejszych zasobów. Nie łącz tych dwóch stanów bez podania daty. Odróżniaj obietnicę dostawy dla klienta od wewnętrznego celu i rzeczywistego potwierdzenia przewoźnika.

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

Jeśli najpierw potrzebujesz uporządkować możliwości narzędzia, przeczytaj przewodnik po Copilocie dla firm. Następnie porównaj [współpracę logistyki z produkcją](https://majchrzycki.com/blog/microsoft-copilot-praktyczne-prompty-dla-specjalistow-produkcji), aby ustalić sposób przekazywania danych i wyników między rolami. Zacznij od jednej pracy, której jakość potrafisz samodzielnie ocenić.
