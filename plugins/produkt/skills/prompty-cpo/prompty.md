# Biblioteka promptów: Dyrektor produktu (CPO)

Źródło: [„Microsoft Copilot: 30 promptów dla CPO”](https://majchrzycki.com/blog/zarzadzanie-z-microsoft-copilot-praktyczne-prompty-dla-dyrektora-produktow-cpo-chief-product-officer?utm_source=github&utm_medium=referral&utm_campaign=moja-firma-prompty&utm_content=prompty-cpo), Krzysztof Majchrzycki, majchrzycki.com. Stan wpisu: 2026-10-02. Licencja MIT.

Prompty pisano pod Microsoft 365 Copilot. W innych narzędziach działają prompty z grupy „Dowolny czat”, a pozostałe wymagają załączenia pliku albo pracy etapami.

## Dowolny czat

Narzędzia: Anthropic Claude, OpenAI ChatGPT, Google Gemini, Microsoft 365 Copilot Chat.

### 1. Mapa zadań użytkownika

**Wejście:** Badania i obserwacje użycia produktu.

> Pogrupuj cele użytkownika bez wskazywania od razu funkcji.

**Sprawdź:** Badacz sprawdza kontekst obserwacji.

### 2. Powracający problem

**Wejście:** Anonimowe zgłoszenia oraz liczba użytkowników.

> Odróżnij częstotliwość kontaktu od skali trudności.

**Sprawdź:** Nie utożsamiaj zgłoszeń z populacją.

### 3. Segmenty potrzeb

**Wejście:** Zatwierdzone segmenty i wyniki badań.

> Porównaj różne zadania oraz warunki użycia.

**Sprawdź:** Sprawdź reprezentację segmentów.

### 4. Ścieżka przez produkt

**Wejście:** Zdarzenia analityczne i relacje użytkowników.

> Odtwórz kroki od zamiaru do zakończenia zadania.

**Sprawdź:** Analityk sprawdza definicje zdarzeń.

### 5. Weryfikacja wartości

**Wejście:** Hipoteza i stan bazowy produktu.

> Zaproponuj wynik użytkownika oraz miernik, który go przybliża.

**Sprawdź:** Badacz ocenia związek miary z potrzebą.

### 6. Wywiad odkrywczy

**Wejście:** Pytanie badawcze i profil rozmówcy.

> Napisz neutralne pytania o przeszłe zachowania.

**Sprawdź:** Nie pytaj tylko o deklarowane chęci.

### 7. Analiza rezygnacji

**Wejście:** Agregaty lejka i obserwacje jakościowe.

> Wskaż etapy z największą niepewnością przyczyn.

**Sprawdź:** Nie nazywaj korelacji przyczyną.

### 8. Alternatywy rozwiązania

**Wejście:** Potwierdzony problem i ograniczenia.

> Porównaj zmianę tekstu, procesu oraz nową funkcję.

**Sprawdź:** Zespół techniczny ocenia wykonalność.

### 9. Zakres MVP

**Wejście:** Cel testu i ograniczenie czasu.

> Wybierz minimum potrzebne do rozstrzygnięcia hipotezy.

**Sprawdź:** Sponsor akceptuje kompromis.

### 10. Priorytet backlogu

**Wejście:** Karty problemów z dowodami i wysiłkiem.

> Uszereguj według wartości, ryzyka oraz kosztu opóźnienia.

**Sprawdź:** CPO zatwierdza wagi.

## Aplikacje Microsoft 365

Narzędzia: Excel, Word, PowerPoint, Outlook, Teams z Microsoft 365 Copilot; w innym narzędziu załącz plik.

### 1. Konflikt interesariuszy

**Aplikacja:** Word; pracuj na otwartym dokumencie roboczym.

**Wejście:** Prośby sprzedaży, wsparcia i użytkowników.

> Wskaż wspólny problem oraz rzeczywiste rozbieżności.

**Sprawdź:** Interesariusze potwierdzają opis.

### 2. Kryteria akceptacji

**Aplikacja:** Word; pracuj na otwartym dokumencie roboczym.

**Wejście:** Wybrany problem i projekt funkcji.

> Zapisz obserwowalne zachowania, także błędy i brak dostępu.

**Sprawdź:** QA sprawdza przypadki graniczne.

### 3. Komunikat o zmianie

**Aplikacja:** Word; pracuj na otwartym dokumencie roboczym.

**Wejście:** Zatwierdzony zakres wydania.

> Napisz opis korzyści bez obietnic funkcji jeszcze niewdrożonych.

**Sprawdź:** Product owner sprawdza build.

### 4. Plan eksperymentu

**Aplikacja:** Word; pracuj na otwartym dokumencie roboczym.

**Wejście:** Warianty i definicja sukcesu.

> Zaproponuj test, czas oraz warunek zatrzymania.

**Sprawdź:** Analityk ocenia próbę.

### 5. Ryzyko dostępności

**Aplikacja:** Word; pracuj na otwartym dokumencie roboczym.

**Wejście:** Makiety i scenariusze zadań.

> Wskaż trudności w klawiaturze, treści oraz stanach błędu.

**Sprawdź:** Tester sprawdza prototyp.

### 6. Obsługa migracji

**Aplikacja:** Word; pracuj na otwartym dokumencie roboczym.

**Wejście:** Stara i nowa ścieżka produktu.

> Ułóż plan przejścia z komunikacją i opcją powrotu.

**Sprawdź:** Support potwierdza gotowość.

### 7. Jakość danych

**Aplikacja:** Word; pracuj na otwartym dokumencie roboczym.

**Wejście:** Definicje zdarzeń i raport użycia.

> Wyłap brakujące zdarzenia oraz podwójne naliczenia.

**Sprawdź:** Data team naprawia instrumentację.

### 8. Pomiar ukończenia zadania

**Aplikacja:** Word; pracuj na otwartym dokumencie roboczym.

**Wejście:** Zdarzenia końca procesu i badania użytkowników.

> Porównaj ukończenie, czas i powroty do wsparcia.

**Sprawdź:** Nie zastępuj badań samymi kliknięciami.

### 9. Koszt utrzymania

**Aplikacja:** Excel; pracuj na otwartym arkuszu z danymi.

**Wejście:** Warianty architektury i obciążenie zespołu.

> Pokaż koszt zmian w kolejnych wersjach.

**Sprawdź:** Engineering potwierdza szacunki.

### 10. Przegląd po wydaniu

**Aplikacja:** Word; pracuj na otwartym dokumencie roboczym.

**Wejście:** Metryki oraz zgłoszenia po zmianie.

> Oddziel regresje od nowych potrzeb.

**Sprawdź:** Porównaj podobne okresy.

## Zadanie wieloetapowe

Narzędzia: Microsoft 365 Copilot Cowork, Anthropic Claude Cowork, tryb agenta OpenAI ChatGPT.

### 1. Wycofanie funkcji

**Wejście:** Użycie, zależności i zobowiązania wobec klientów.

> Na podstawie [zatwierdzonych plików z datą i wersją] przygotuj plan wygaszenia bez porzucenia aktywnych użytkowników. Przygotuj plan komunikacji i migracji. Wynik oddaj do [osoby zatwierdzającej] przed wysyłką lub zmianą danych.

**Sprawdź:** Customer success potwierdza klientów.

### 2. Roadmapa warunkowa

**Wejście:** Dowody, zależności i limity zasobów.

> Na podstawie [zatwierdzonych plików z datą i wersją] zapisz kolejność inicjatyw wraz z warunkami zmiany. Przygotuj roadmapa z bramkami. Wynik oddaj do [osoby zatwierdzającej] przed wysyłką lub zmianą danych.

**Sprawdź:** Nie przedstawiaj hipotezy jako terminu.

### 3. Ocena portfela

**Wejście:** Wyniki kilku produktów i wspólne koszty.

> Na podstawie [zatwierdzonych plików z datą i wersją] porównaj wartość dla użytkownika z ciężarem utrzymania. Przygotuj macierz decyzji i niewiadomych. Wynik oddaj do [osoby zatwierdzającej] przed wysyłką lub zmianą danych.

**Sprawdź:** Zarząd zatwierdza alokację.

### 4. Mapa zadań użytkownika i powracający problem

**Wejście:** Badania i obserwacje użycia produktu; anonimowe zgłoszenia oraz liczba użytkowników.

> Na podstawie [zatwierdzonych plików z datą i wersją] wykonaj kolejno etap 1 — mapa zadań użytkownika: pogrupuj cele użytkownika bez wskazywania od razu funkcji. Etap 2 — powracający problem: odróżnij częstotliwość kontaktu od skali trudności. Przygotuj tabela zadanie, dowód, bariera oraz lista hipotez i luk. Wynik oddaj do [osoby zatwierdzającej] przed wysyłką lub zmianą danych.

**Sprawdź:** Badacz sprawdza kontekst obserwacji; nie utożsamiaj zgłoszeń z populacją.

### 5. Segmenty potrzeb i ścieżka przez produkt

**Wejście:** Zatwierdzone segmenty i wyniki badań; zdarzenia analityczne i relacje użytkowników.

> Na podstawie [zatwierdzonych plików z datą i wersją] wykonaj kolejno etap 1 — segmenty potrzeb: porównaj różne zadania oraz warunki użycia. Etap 2 — ścieżka przez produkt: odtwórz kroki od zamiaru do zakończenia zadania. Przygotuj macierz segment, zadanie, ograniczenie oraz mapa miejsc rezygnacji. Wynik oddaj do [osoby zatwierdzającej] przed wysyłką lub zmianą danych.

**Sprawdź:** Sprawdź reprezentację segmentów; analityk sprawdza definicje zdarzeń.

### 6. Weryfikacja wartości i wywiad odkrywczy

**Wejście:** Hipoteza i stan bazowy produktu; pytanie badawcze i profil rozmówcy.

> Na podstawie [zatwierdzonych plików z datą i wersją] wykonaj kolejno etap 1 — weryfikacja wartości: zaproponuj wynik użytkownika oraz miernik, który go przybliża. Etap 2 — wywiad odkrywczy: napisz neutralne pytania o przeszłe zachowania. Przygotuj karta hipotezy i pomiaru oraz scenariusz z dopytaniem. Wynik oddaj do [osoby zatwierdzającej] przed wysyłką lub zmianą danych.

**Sprawdź:** Badacz ocenia związek miary z potrzebą; nie pytaj tylko o deklarowane chęci.

### 7. Analiza rezygnacji i alternatywy rozwiązania

**Wejście:** Agregaty lejka i obserwacje jakościowe; potwierdzony problem i ograniczenia.

> Na podstawie [zatwierdzonych plików z datą i wersją] wykonaj kolejno etap 1 — analiza rezygnacji: wskaż etapy z największą niepewnością przyczyn. Etap 2 — alternatywy rozwiązania: porównaj zmianę tekstu, procesu oraz nową funkcję. Przygotuj lista etap, możliwy powód, test oraz tabela wariant, koszt, dowód. Wynik oddaj do [osoby zatwierdzającej] przed wysyłką lub zmianą danych.

**Sprawdź:** Nie nazywaj korelacji przyczyną; zespół techniczny ocenia wykonalność.

### 8. Zakres mvp i priorytet backlogu

**Wejście:** Cel testu i ograniczenie czasu; karty problemów z dowodami i wysiłkiem.

> Na podstawie [zatwierdzonych plików z datą i wersją] wykonaj kolejno etap 1 — zakres mvp: wybierz minimum potrzebne do rozstrzygnięcia hipotezy. Etap 2 — priorytet backlogu: uszereguj według wartości, ryzyka oraz kosztu opóźnienia. Przygotuj lista w zakresie i poza zakresem oraz macierz decyzji z założeniami. Wynik oddaj do [osoby zatwierdzającej] przed wysyłką lub zmianą danych.

**Sprawdź:** Sponsor akceptuje kompromis; CPO zatwierdza wagi.

### 9. Konflikt interesariuszy i kryteria akceptacji

**Wejście:** Prośby sprzedaży, wsparcia i użytkowników; wybrany problem i projekt funkcji.

> Na podstawie [zatwierdzonych plików z datą i wersją] wykonaj kolejno etap 1 — konflikt interesariuszy: wskaż wspólny problem oraz rzeczywiste rozbieżności. Etap 2 — kryteria akceptacji: zapisz obserwowalne zachowania, także błędy i brak dostępu. Przygotuj notatka opcje i skutki oraz scenariusze akceptacyjne. Wynik oddaj do [osoby zatwierdzającej] przed wysyłką lub zmianą danych.

**Sprawdź:** Interesariusze potwierdzają opis; QA sprawdza przypadki graniczne.

### 10. Komunikat o zmianie i plan eksperymentu

**Wejście:** Zatwierdzony zakres wydania; warianty i definicja sukcesu.

> Na podstawie [zatwierdzonych plików z datą i wersją] wykonaj kolejno etap 1 — komunikat o zmianie: napisz opis korzyści bez obietnic funkcji jeszcze niewdrożonych. Etap 2 — plan eksperymentu: zaproponuj test, czas oraz warunek zatrzymania. Przygotuj release note i lista źródeł oraz karta eksperymentu. Wynik oddaj do [osoby zatwierdzającej] przed wysyłką lub zmianą danych.

**Sprawdź:** Product owner sprawdza build; analityk ocenia próbę.

## Zasady pracy w tej roli (z wpisu)

### Jak przygotować materiał do pracy z Copilotem?

Microsoft opisuje [cel, kontekst, oczekiwania i źródło](https://support.microsoft.com/en-us/microsoft-365-copilot/get-started-writing-prompts-in-microsoft-365-copilot) jako składniki promptu. W poniższych przykładach wejście oznacza konkretny dokument, zakres dat lub wyciąg z systemu, do którego użytkownik ma dostęp. Instrukcja wskazuje zadanie i granice. Format wyniku ma ułatwić porównanie wariantów, a kontrola kieruje uwagę na możliwy błąd. Nie trzeba wklejać całego repozytorium wiedzy do jednego czatu. Wybierz najmniejszy zakres, który pozwala odpowiedzieć na pytanie.

Copilot korzysta z różnych źródeł zależnie od konta, uprawnień i ustawień. [Microsoft wyjaśnia zakres tych źródeł](https://support.microsoft.com/en-us/microsoft-365-copilot/what-information-does-copilot-use-to-answer-my-prompt) oraz potrzebę sprawdzania cytatów. Gdy materiał nie jest dostępny, odpowiedź może być ogólna. Przed wykonaniem promptu sprawdź więc właściciela danych, ostatnią aktualizację i prawo do ich użycia. Jeżeli wynik wymaga obliczenia, uzgodnij liczby w systemie źródłowym. Jeżeli wymaga decyzji wobec klienta lub pracownika, zachowaj człowieka w punkcie zatwierdzenia.

| Element wejścia | Pytanie przed uruchomieniem | Skutek braku |
|---|---|---|
| Wersja | Czy to ostatni zatwierdzony materiał? | Odpowiedź może odtwarzać przestarzałą regułę |
| Zakres | Które konta, okresy lub produkty obejmuje próba? | Wynik miesza nieporównywalne przypadki |
| Definicja | Co oznacza używany wskaźnik lub status? | Ten sam termin może mieć różny mianownik |
| Właściciel | Kto może potwierdzić wynik i zlecić zmianę? | Szkic zostaje pomylony z decyzją |

### Co wyróżnia decyzje CPO?

W produkcie łatwo pomylić liczbę zgłoszeń z ważnością potrzeby. Duży klient może zgłaszać mało, ale mierzyć się z istotnym problemem; popularna funkcja może nie poprawiać zadania. Dlatego decyzje łącz dane użycia, badania jakościowe, koszt dostarczenia i cele organizacji. GOV.UK opisuje ocenę całej ścieżki użytkownika, a nie tylko jednego ekranu; to użyteczna analogia dla produktu komercyjnego, nie gotowy standard każdej firmy.

### Jak odróżnić potrzebę użytkownika od żądanej funkcji?

Zgłoszenie „dodaj eksport do arkusza” może oznaczać różne problemy: brak raportu, trudność przekazania danych, potrzebę kontroli lub obejście błędu interfejsu. Copilot może ułożyć hipotezy i pytania do rozmowy, ale nie powinien przepisać żądania na gotowe wymaganie. Zbierz obserwacje, sprawdź rzeczywisty przebieg zadania i oszacuj, ilu użytkowników dotyczy problem. Dopiero wtedy porównaj warianty: zmianę treści, uproszczenie procesu, integrację albo nową funkcję.

Zanim wybierzesz metrykę, nazwij rezultat użytkownika. Liczba kliknięć w nowy przycisk nie mówi jeszcze, czy klient ukończył zadanie. Ustal początek i koniec ścieżki, przypadki przerwania oraz kontakt z pomocą. Dla funkcji używanej rzadko miesięczna aktywność może być myląca; ważniejszy będzie sukces w chwili potrzeby. Połącz dane zdarzeń z badaniem użytkowników. Jeśli obie metody dają sprzeczny obraz, zbadaj definicje oraz próbę, zamiast wybierać wygodniejszy wykres.

Roadmapa powinna pokazywać zależności i warunki, a nie tylko daty. Zespół może obiecać klientowi termin tylko dla zakresu, który został potwierdzony przez właścicieli. Przy hipotezach stosuj bramki: co musimy zobaczyć w teście, aby kontynuować, zmienić pomysł lub go zamknąć? Copilot może pomóc przygotować porównywalne karty decyzji, ale wagi kryteriów ustala CPO z biznesem. W raporcie po wydaniu uwzględnij również utrzymanie i wycofanie funkcji, bo ich koszt wpływa na kolejny wybór.

CPO powinien odróżniać decyzję o budowie od decyzji o udostępnieniu. Prototyp może dowieść, że użytkownik rozumie rozwiązanie, lecz nie potwierdza jeszcze wydajności, bezpieczeństwa ani gotowości obsługi. Przed wydaniem zapisz kryteria dostępności, działania przy błędzie, sposób mierzenia ukończenia zadania i właściciela wsparcia. Po wydaniu porównaj nowe zachowania z założeniem, a nie z samą liczbą użytkowników. Jeśli wynik jest słaby, wróć do problemu i danych jakościowych; kolejne funkcje nie zawsze usuną przyczynę porzucania ścieżki. Uwzględnij użytkowników, którzy rzadko korzystają z produktu, lecz wykonują krytyczne zadanie; średnia aktywność może ukryć ich problem. W raporcie pokaż ich ścieżkę osobno, z zachowaniem prywatności i wielkości próby.

Przy pierwszej próbie ogranicz zadanie do jednej decyzji, której przebieg znasz również bez AI. Pierwszy pilot może dotyczyć porządkowania zgłoszeń o jednej trudnej czynności w produkcie. Zespół daje Copilotowi zanonimizowane obserwacje, definicję zdarzeń i istniejące ograniczenia. Wynikiem ma być mapa hipotez oraz brakujących dowodów. Następnie badacz i product manager rozmawiają z użytkownikami, a zespół techniczny ocenia koszt. CPO decyduje dopiero po wspólnym przeglądzie. W ten sposób można zobaczyć, czy narzędzie pomaga w pracy, czy jedynie szybciej tworzy dokument do poprawy. Pomiar obejmuje pełny czas do zaakceptowanego wyniku, liczbę korekt i skutki dla odbiorcy.

Wspólne zasady dla 30 przykładów: nadaj wejściu nazwę, datę i zakres; usuń zbędne dane osobowe; poproś o oznaczenie braków; porównaj wynik ze źródłem; zostaw zmianę danych oraz wysyłkę uprawnionej osobie. Dzięki temu same prompty mogą skupić się na odrębnych zadaniach i kontrolach. Materiał rozwija [prompty dla liderów](https://majchrzycki.com/blog/microsoft-copilot-praktyczne-prompty-dla-nowoczesnych-liderow), ale nie zastępuje procedur działu.

### Jak ocenić cały proces?

Po wykonaniu promptu sprawdź więcej niż poprawność zdania. Czy materiał wejściowy był aktualny? Czy wynik podał dowody dla ważnych twierdzeń? Czy brak danych został oznaczony? Czy decyzja trafiła do właściwego właściciela? Zapisz liczbę powrotów i poprawek. Wybierz kilka spraw prostych oraz kilka trudnych, w tym przypadek z danymi sprzecznymi lub niedostępnymi. Nie oceniaj jakości wyłącznie na przykładach, które model rozwiązuje bez oporu.

| Kryterium pilota | Dowód do zebrania | Sygnał zatrzymania |
|---|---|---|
| Trafność | Porównanie ze źródłem i oceną eksperta | Niepoparte twierdzenie w ważnej sprawie |
| Czas całego zadania | Praca od wejścia do akceptacji | Korekty zabierają więcej czasu niż wcześniej |
| Uprawnienia | Sprawdzenie odbiorców wejścia i wyniku | Ujawnienie danych poza właściwy zespół |
| Odpowiedzialność | Zapis właściciela i decyzji | Nikt nie potrafi wyjaśnić wyniku |

[Microsoft opisuje kontrole bezpieczeństwa i nadzoru](https://learn.microsoft.com/en-us/microsoft-365/copilot/copilot-controls/security-governance), w tym ryzyko nadmiernego udostępniania danych w Microsoft 365. Konkretne narzędzia zależą od licencji i konfiguracji. Przed rozszerzeniem pilota sprawdź bibliotekę, grupy dostępu i politykę organizacji. Samo polecenie „nie ujawniaj” nie naprawia błędnych uprawnień.

Dodatkowy punkt odniesienia dla tej roli to [GOV.UK Service Manual o pomiarze całej usługi](https://www.gov.uk/service-manual/measuring-success/measuring-the-success-of-your-service). Przewodnik GOV.UK dotyczy usług publicznych. W tekście służy jako analogia do pomiaru ścieżki użytkownika, nie jako obowiązek dla produktów komercyjnych. Użyj źródła do sformułowania pytań odbiorowych, a nie do przypisywania mu wyników własnej firmy. Dalszą perspektywę pokazują [prompty dla dyrektora przychodów](https://majchrzycki.com/blog/zarzadzanie-z-microsoft-copilot-praktyczne-prompty-dla-dyrektora-przychodow-cro-chief-revenue-officer); ten link prowadzi do sąsiedniej roli w procesie i ułatwia określenie punktu przekazania.
