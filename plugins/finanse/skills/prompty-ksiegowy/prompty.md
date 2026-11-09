# Biblioteka promptów: Księgowy

Źródło: [„Copilot dla księgowych: 20 promptów, które da się sprawdzić”](https://majchrzycki.com/blog/microsoft-copilot-praktyczne-prompty-dla-ksiegowych?utm_source=github&utm_medium=referral&utm_campaign=moja-firma-prompty&utm_content=prompty-ksiegowy), Krzysztof Majchrzycki, majchrzycki.com. Stan wpisu: 2026-11-11. Licencja MIT.

Prompty pisano pod Microsoft 365 Copilot. W innych narzędziach działają prompty z grupy „Dowolny czat”, a pozostałe wymagają załączenia pliku albo pracy etapami.

## Dowolny czat

Narzędzia: Anthropic Claude, OpenAI ChatGPT, Google Gemini, Microsoft 365 Copilot Chat.

### 1. Potencjalne duplikaty

Prompt ma przygotować listę do kontroli, nie usuwać rekordów. Identyczne wiersze mogą oznaczać błąd importu, ale mogą też być dwiema prawdziwymi transakcjami.

```text
Pracuj wyłącznie na tabeli Faktury.
Znajdź potencjalne duplikaty według klucza:
Dokument + Kontrahent + Kwota PLN.
Nie usuwaj ani nie zmieniaj wierszy.
Zwróć: ID wierszy, wspólne wartości i powód oznaczenia.
Podaj liczbę wszystkich wierszy oraz sumę kwot przed korektą.
Jeśli dane nie pozwalają rozstrzygnąć sprawy, napisz, czego brakuje.
```

**Sprawdź:** Oczekiwany wynik: para **F2 i F3**, cztery wiersze, suma **6765,00 PLN**. Sprawdź, czy odpowiedź nie pominęła kolumny i nie uznała samego numeru faktury za klucz. W większej tabeli ten sam numer może mieć kilku dostawców. Dalej decyduje człowiek, po dokumencie źródłowym. Do kolejnego ćwiczenia przyjmujemy założenie, że **F3 to potwierdzone powtórzenie techniczne** i wypada z tabeli roboczej.

### 2. Uzgodnienie faktur z wpłatami

```text
Użyj Faktur bez wiersza F3 oraz tabeli Wpłaty.
Dopasuj wpłaty wyłącznie po dokładnym numerze dokumentu.
Nie dopasowuj po podobnej kwocie ani podobnym tekście.
Zwróć tabelę: ID faktury, dokument, kwota faktury,
ID dopasowanych wpłat, suma wpłat, nierozliczona różnica.
Osobno pokaż wpłaty bez pasującej faktury.
Nie oznaczaj różnicy jako przeterminowanej: nie masz terminów płatności.
Niczego nie księguj.
```

**Sprawdź:**

| Dokument | Wpłata dopasowana | Różnica |
|---|---:|---:|
| FV/001 | 1230,00 PLN | 0,00 PLN |
| FV/002 | 2000,00 PLN | 460,00 PLN |
| FV/003 | 0,00 PLN | 615,00 PLN |

P3 (**100,00 PLN**) zostaje nieprzypisana. Faktury po wyłączeniu F3 to **4305,00 PLN**, dopasowane wpłaty **3230,00 PLN**, różnica **1075,00 PLN**. Samo odjęcie wszystkich wpłat dałoby 975,00 PLN i ukryłoby nieprzypisaną płatność. Taki błąd wygląda wiarygodnie w płynnej odpowiedzi, więc policz sumy niezależnie w arkuszu. Płatności zbiorcze, kompensaty i różnice kursowe wymagają osobnych reguł.

### 3. Odchylenie bez wymyślania przyczyn

Plan kosztów usług obcych to 10 000 PLN, wykonanie 12 500 PLN. Copilot dostaje tylko te dwie liczby i nie zna powodów.

```text
Przygotuj roboczy komentarz do odchylenia kosztów usług obcych.
Dane: plan 10 000 PLN, wykonanie 12 500 PLN.
Oblicz różnicę kwotową i procentową względem planu. Pokaż wzór.
Nie zakładaj przyczyny wzrostu.
Oddziel: potwierdzone liczby, hipotezy do sprawdzenia,
pytania do właściciela kosztu.
Maksymalnie 120 słów.
```

**Sprawdź:** Wynik: **2500 PLN ponad plan, czyli 25%**, bo (12 500 − 10 000) / 10 000. Dobra odpowiedź proponuje sprawdzenie liczby usług czy cen, ale żadnej z tych możliwości nie podaje jako faktu. Przy planie równym zero procent względem planu nie istnieje, więc nie akceptuj wartości, którą narzędzie mimo to poda.

### 4. Checklista zamknięcia a dokumenty

Zamiast prosić o „listę obowiązków przy zamknięciu”, podaj zatwierdzoną checklistę firmy i wykaz dokumentów, które faktycznie masz.

```text
Porównaj załączoną checklistę zamknięcia z wykazem dokumentów.
Korzystaj wyłącznie z tych dwóch źródeł.
Dla każdej pozycji podaj: wymagany dokument, znaleziony odpowiednik,
jego identyfikator, status: znaleziony / brak w wykazie / do wyjaśnienia.
Podobna nazwa nie jest dowodem kompletności.
Nie dopisuj obowiązków ani terminów spoza checklisty.
```

**Sprawdź:** Kryterium odbioru: każda pozycja checklisty jest rozliczona, a każdy status „znaleziony” ma konkretny odpowiednik. Dodaj do próbki dwa podobnie nazwane dokumenty z różnych okresów. Zobaczysz, czy narzędzie je rozróżnia, czy bierze pierwszy podobny tytuł.

### 5. Wiadomość o niejasnej wpłacie

Wiemy tylko, że wpłata P3 nie ma pary w tabeli faktur. Nie wiemy, czy jest błędna.

```text
Przygotuj szkic wiadomości do osoby odpowiedzialnej za uzgodnienia.
Fakt: wpłata P3, 100 PLN, opis FV/999, nie ma odpowiednika
w tabeli Faktury.
Poproś o wskazanie dokumentu lub sposobu rozliczenia.
Nie pisz o zaległości ani obowiązku zwrotu.
Nie wymyślaj numeru rachunku, daty ani danych adresata.
Temat i treść do 90 słów. Niczego nie wysyłaj.
```

**Sprawdź:** Sprawdź, czy szkic zawiera tylko potwierdzone informacje i czy neutralna prośba nie zamieniła się w wezwanie do zapłaty. Wysyłka to osobna decyzja po akceptacji.

### 6. Faktury z KSeF a rejestr zakupów

Ten prompt wymaga dwóch własnych list: faktur pobranych z KSeF i rejestru, który prowadzisz.

```text
Porównaj dwie listy: faktury z KSeF i rejestr zakupów.
Dopasuj po numerze dokumentu i NIP sprzedawcy.
Pokaż: faktury tylko w KSeF, faktury tylko w rejestrze,
różnice kwot przy tym samym numerze.
Nie zgaduj brakujących danych. Niczego nie księguj.
Podaj liczbę wierszy w każdej liście przed porównaniem.
```

**Sprawdź:** Kryterium odbioru: liczby wierszy zgadzają się z eksportami, a każda pozycja z wyniku ma odpowiednik w jednej z list. Zasady KSeF omawia osobna sekcja niżej.

### 7. Propozycja kont do zatwierdzenia

Copilot nie zna planu kont firmy, dopóki go nie wkleisz. Prompt ma przygotować propozycję dla księgowego, nie dekretację.

```text
Użyj wyłącznie załączonego fragmentu zatwierdzonego planu kont
oraz listy opisów faktur kosztowych (ID wiersza, opis, kwota).
Dla każdego wiersza zaproponuj jedno konto z tego planu
i napisz, który fragment opisu o tym zdecydował.
Jeśli opis pasuje do kilku kont albo do żadnego, nie wybieraj:
oznacz „do wyjaśnienia” i zadaj pytanie.
Nie twórz kont spoza planu. Niczego nie księguj.
```

**Sprawdź:** każde proponowane konto istnieje we wklejonym planie, a pozycje „do wyjaśnienia” mają konkretne pytanie. Weź trzy wiersze, które znasz, i porównaj z dotychczasową praktyką. Decyzję o dekretacji podejmuje księgowy.

### 8. Wiekowanie należności na dzień odcięcia

Dane przykładowe, syntetyczne. Data odcięcia: 30.09.2026. Faktury z terminem płatności: A, 20.09.2026, 1000,00 PLN; B, 25.08.2026, 2000,00 PLN; C, 01.07.2026, 500,00 PLN; D, 10.10.2026, 300,00 PLN.

```text
Dla załączonej listy nierozliczonych faktur policz dni po terminie
na dzień odcięcia 30.09.2026 (data odcięcia minus termin płatności).
Przypisz do koszyków: niewymagalne, 1-30, 31-60, 61-90, powyżej 90 dni.
Pokaż dla każdej faktury liczbę dni i koszyk, potem sumy koszyków.
Nie oceniaj, czy należność jest do odzyskania. Niczego nie księguj.
```

**Sprawdź:** A ma 10 dni (koszyk 1-30, 1000,00 PLN), B ma 36 dni (31-60, 2000,00 PLN), C ma 91 dni (powyżej 90, 500,00 PLN), D nie jest jeszcze wymagalna (300,00 PLN). Suma koszyków to **3800,00 PLN** i musi równać się sumie listy. Brzegi koszyków (90 i 91 dni) to miejsce, w którym narzędzia najczęściej się mylą.

### 9. Kompletność danych na fakturze zakupu

```text
Porównaj załączoną fakturę zakupu z listą pól wymaganych
w naszej wewnętrznej procedurze (lista niżej).
Dla każdego pola podaj: wartość odczytana z dokumentu,
miejsce na dokumencie, status: jest / brak / nieczytelne.
Nie oceniaj zgodności faktury z przepisami.
Nie uzupełniaj pól z innych źródeł niż ta faktura.
[lista pól wymaganych w procedurze firmy]
```

**Sprawdź:** otwórz fakturę i potwierdź trzy odczytane wartości, w tym kwotę i numer. Status „jest” bez wartości z dokumentu jest błędem. Wymogi formalne faktur ustalasz z przepisów i doradcą, a nie z odpowiedzi Copilota.

## Aplikacje Microsoft 365

Narzędzia: Excel, Word, PowerPoint, Outlook, Teams z Microsoft 365 Copilot; w innym narzędziu załącz plik.

### 1. Excel: duplikaty i suma kontrolna

> W tym arkuszu wskaż wiersze o tym samym numerze dokumentu, kontrahencie i kwocie. Dodaj kolumnę „do wyjaśnienia”, ale nie usuwaj rekordów. Pokaż użyty klucz, liczbę wierszy i sumę kwot przed i po wyłączeniu potwierdzonego powtórzenia. Różnicę wyjaśnij identyfikatorami wierszy.

**Sprawdź:** Na próbce wynik ma być taki sam jak w prompcie 1 z czatu. Jeśli nie jest, popraw zakres, zanim ruszysz prawdziwy plik.

### 2. Excel: wzór odchylenia

> Na podstawie kolumn Plan i Wykonanie zaproponuj formułę różnicy kwotowej i procentowej. Obsłuż plan równy zero osobnym opisem zamiast wyniku. Przyczyny odchyleń pokaż jako pytania, nie fakty.

**Sprawdź:** Tu Copilot daje wzór, a nie wynik. Wzór wklejasz i sprawdzasz na wierszu z planem 10 000 i wykonaniem 12 500: ma wyjść 25%. Copilot nie zastępuje formuły ani sprawdzenia obliczeń.

### 3. Excel: koniec okresu

> Wskaż rekordy, w których data dokumentu, operacji i księgowania wypadają po różnych stronach granicy okresu [okres]. Zwróć identyfikator, trzy daty i powód oznaczenia. Nie zmieniaj dat.

**Sprawdź:** Odbiór: wybierz kilka oznaczonych wierszy i porównaj z dokumentami. Przeniesienie zapisu między okresami zawsze decyduje księgowy.

### 4. Teams: ustalenia po spotkaniu

> Ze wskazanej notatki ze spotkania o zamknięciu miesiąca wypisz ustalenia, osoby odpowiedzialne i pytania otwarte. Odróżnij propozycję od decyzji. Nie przypisuj zadań na podstawie domysłu.

**Sprawdź:** Copilot w Teams korzysta z treści po spotkaniu, jeśli była transkrypcja lub nagranie ([źródło](https://learn.microsoft.com/en-us/microsoft-365/copilot/microsoft-copilot-requirements)). Bez nich nie ma z czego streszczać, a agent i tak może spróbować. Potwierdź listę z uczestnikami.

### 5. Excel: suma w podsumowaniu a dane

> Porównaj sumę kwot w arkuszu „Podsumowanie” z sumą wierszy w arkuszu „Dane”. Jeśli różnica jest niezerowa, wskaż wiersze, które ją tłumaczą: ukryte, odfiltrowane, z kwotą zapisaną jako tekst lub z pustą datą. Niczego nie poprawiaj, pokaż tylko identyfikatory wierszy i różnicę.

**Sprawdź:** policz sumę niezależnie funkcją SUMA na pełnej kolumnie i porównaj z obiema wartościami. Różnica po wskazanych wierszach ma wynosić zero. Jeśli nie wynosi, Copilot pominął przyczynę. Poprawki wprowadza księgowy.

### 6. Outlook: wątek z dostawcą o korekcie faktury

> Streść wskazany wątek z dostawcą: numer faktury, ustalona zmiana kwoty, brakujący dokument korygujący i kto ma następny ruch. Przy każdym punkcie wskaż wiadomość. Przygotuj szkic odpowiedzi z prośbą o brakujący dokument. Nie podawaj kwot, których nie ma w wątku. Niczego nie wysyłaj.

**Sprawdź:** otwórz ostatnią wiadomość w wątku, bo to ona zwykle zmienia wcześniejsze ustalenia. Kwoty i numer faktury w szkicu porównaj z dokumentem. Wysyłka to osobna decyzja.

## Zadanie wieloetapowe

Narzędzia: Microsoft 365 Copilot Cowork, Anthropic Claude Cowork, tryb agenta OpenAI ChatGPT.

### 1. Pakiet zamknięcia miesiąca

> Z [checklista], [wykaz plików] i [uzgodnienia] przygotuj rejestr dokumentów, braków i pytań do właścicieli. Przy każdym statusie wskaż plik i wersję. Oddaj pakiet księgowemu, bez oznaczania miesiąca jako zamkniętego.

**Sprawdź:** Odbiór: każdy status wskazuje plik. Pozycje bez pliku mają status „brak”, a nie „prawdopodobnie jest”.

### 2. Uzgodnienie banku i faktur

> Z [eksport faktur], [wyciąg bankowy] i [reguła dopasowania] przygotuj tabelę dopasowań, wyjątków i sum. Najpierw porównaj liczbę rekordów, potem zastosuj klucz, na końcu pokaż pozycje bez pary. Nie zmieniaj zapisów.

**Sprawdź:** Odbiór: sumy zgodne z niezależnym obliczeniem, liczba rekordów zgodna z eksportami. To ten sam test co na próbce, tylko na większym zbiorze.

### 3. Przegląd kartoteki dostawców

> Z [kartoteka], [faktury] i [zasady weryfikacji] przygotuj listę możliwych duplikatów i braków identyfikacyjnych. Podobna nazwa nie potwierdza tożsamości. Listę oddaj do kontroli przed jakimkolwiek scaleniem.

**Sprawdź:** Odbiór: każda para na liście ma wskazane pole, które ją łączy (NIP, rachunek, adres), a scalenie wykonuje człowiek.

### 4. Pakiet dokumentów dla audytora

> Z [lista żądań audytora], [folder dokumentów] i [wykaz plików] przygotuj rejestr: żądanie, plik, wersja, status (jest / brak / do wyjaśnienia). Nie zmieniaj nazw plików ani nie wysyłaj pakietu. Pozycje bez pliku zostaw ze statusem „brak” i dopisz pytanie do właściciela dokumentu.

**Sprawdź:** Odbiór: liczba żądań w rejestrze zgadza się z listą audytora, a każdy status „jest” wskazuje istniejący plik. Wylosuj pięć pozycji i otwórz pliki. Wysyłkę do audytora zatwierdza księgowy odpowiedzialny za kontakt.

### 5. Ceny z umów a faktury

> Z [umowy z cennikami] i [faktury z ostatnich trzech miesięcy] zestaw cenę umowną z zafakturowaną dla każdej pozycji. Pokaż tylko rozbieżności: pozycja, punkt umowy, faktura, różnica kwotowa. Pozycje, których nie da się powiązać z umową, wypisz osobno. Nie ustalaj, która strona ma rację.

**Sprawdź:** Odbiór: każda rozbieżność wskazuje punkt umowy i numer faktury, a jedną różnicę przeliczasz ręcznie. Umowy po aneksach mają w pakiecie aneks, inaczej wynik porówna nieaktualne ceny.

## Zasady pracy w tej roli (z wpisu)

### Najpierw ustal, z którego Copilota korzystasz

[Microsoft 365 Copilot](https://majchrzycki.com/blog/microsoft-365-copilot) nazywa się teraz Microsoft Copilot, a Copilot Chat to Microsoft Copilot Chat. Starsze nazwy zostają w licencjach i interfejsach w okresie przejściowym ([źródło](https://learn.microsoft.com/en-us/microsoft-365/copilot/enterprise-data-protection)). Czat z załączonym plikiem i Copilot w Excelu nie mają tego samego kontekstu. Sam Copilot Chat opiera się głównie na danych z sieci, a dane firmy wykorzystuje, gdy je wkleisz albo załączysz ([źródło](https://learn.microsoft.com/en-us/microsoft-365/copilot/microsoft-365-copilot-overview)). Nazwa systemu księgowego wpisana w prompt nie tworzy z nim połączenia. W przykładach źródłem są tabele, które sam podajesz.

Cowork, czyli agent do zadań wieloetapowych, jest według dokumentacji dostępny dla licencji Premium i rozliczany według zużycia. Dostęp zależy też od ustawień administratora ([źródło](https://learn.microsoft.com/en-us/microsoft-365/copilot/microsoft-365-copilot-overview)).

### Przygotuj dane, których wynik znasz

Dane poniżej są **syntetyczne**, nie pochodzą od klienta. Każdy wiersz ma identyfikator, żeby odpowiedź dało się odnieść do źródła. Kwoty brutto w PLN; nie liczymy podatku.

Tabela „Faktury”:

| ID wiersza | Dokument | Kontrahent | Kwota PLN |
|---|---|---|---:|
| F1 | FV/001 | Alfa | 1230,00 |
| F2 | FV/002 | Beta | 2460,00 |
| F3 | FV/002 | Beta | 2460,00 |
| F4 | FV/003 | Gamma | 615,00 |

Tabela „Wpłaty”:

| ID wpłaty | Dokument w opisie | Kwota PLN |
|---|---|---|
| P1 | FV/001 | 1230,00 |
| P2 | FV/002 | 2000,00 |
| P3 | FV/999 | 100,00 |

Zachowaj oryginalne tabele osobno od wyników próby. W prawdziwym eksporcie dodaj walutę, datę i identyfikator kontrahenta.

> **Warunek próby:** najpierw sprawdź, czy narzędzie widzi cztery wiersze faktur i trzy wpłaty. Jeśli odczytało inny zakres, popraw wejście, zanim poprosisz o wnioski.

### KSeF: co wiadomo ze źródeł urzędowych

Terminy z [oficjalnej strony KSeF](https://ksef.podatki.gov.pl/etapy-wdrozenia-ksef/), według stanu z 5 października 2026. Obowiązek wystawiania faktur w KSeF obowiązuje od 1 lutego 2026 dla podatników ze sprzedażą (z VAT) powyżej 200 mln zł za 2024 rok, od 1 kwietnia 2026 dla pozostałych przedsiębiorców i od 1 stycznia 2027 dla najmniejszych, ze sprzedażą do 10 000 zł miesięcznie. Odbierać faktury w KSeF mogą wszyscy od 1 lutego 2026. Według [planu wdrożenia na gov.pl](https://www.gov.pl/web/finanse/krajowy-system-e-faktur--plan-wdrozenia) do końca 2026 roku nie będzie kar za błędy w fakturowaniu przez KSeF. Dokładny zakres tego okresu i swoją sytuację sprawdź w tych źródłach lub u doradcy podatkowego. Copilot nie jest źródłem przepisów. Może najwyżej porównać dwie listy, jak w prompcie 6.

### Ochrona danych i granice polecenia

Do pierwszej próby użyj danych syntetycznych. Przed pracą na prawdziwych dokumentach sprawdź zasady firmy i uprawnienia odbiorców pliku. Usuń dane osobowe i numery rachunków, jeśli zadanie ich nie potrzebuje. Microsoft opisuje, że prompty i odpowiedzi w Copilot z kontami służbowymi nie służą do trenowania modeli bazowych ([źródło](https://learn.microsoft.com/en-us/microsoft-365/copilot/microsoft-365-copilot-privacy)). To nie jest zgoda firmy na przekazywanie każdego dokumentu.

### Jak ocenić próbę przed pracą na większym zbiorze

Nie oceniaj po długości odpowiedzi. Zapisz czas przygotowania danych, sprawdzenia wyniku i poprawek. Dopiero suma pokaże, czy to pomaga.

| Kryterium | Co musi się zgadzać |
|---|---|
| Zakres | Wszystkie wskazane tabele i wiersze |
| Reguły | Dokładnie uzgodniony klucz dopasowania |
| Liczby | Sumy potwierdzone niezależnym obliczeniem |
| Wyjątki | Widoczne braki i niedopasowania |
| Wnioski | Bez przyczyn i terminów, których nie ma w danych |
| Działania | Brak niezatwierdzonych zmian i wysyłek |

Jeśli zakres jest zły, zatrzymaj próbę i popraw wejście. Jeśli rachunek się nie zgadza, popraw regułę. Na początek wystarczą dwie małe tabele i jeden prompt, którego wynik potrafisz udokumentować od pierwszego wiersza do sumy. Podobne polecenia dla kontrolerów znajdziesz w [promptach dla finansistów](https://majchrzycki.com/blog/microsoft-copilot-praktyczne-prompty-dla-finansistow), a ogólne zasady pracy z asystentem w [przewodniku AI w codziennej pracy](https://majchrzycki.com/blog/filar/ai-w-codziennej-pracy).
