# Biblioteka promptów: Prawnik

Źródło: [„Copilot dla prawników: 20 promptów i sprawdzanie źródeł”](https://majchrzycki.com/blog/microsoft-copilot-praktyczne-prompty-dla-prawnikow?utm_source=github&utm_medium=referral&utm_campaign=moja-firma-prompty&utm_content=prompty-prawnik), Krzysztof Majchrzycki, majchrzycki.com. Stan wpisu: 2026-11-11. Licencja MIT.

Prompty pisano pod Microsoft 365 Copilot. W innych narzędziach działają prompty z grupy „Dowolny czat”, a pozostałe wymagają załączenia pliku albo pracy etapami.

## Dowolny czat

Narzędzia: Anthropic Claude, OpenAI ChatGPT, Google Gemini, Microsoft 365 Copilot Chat.

### 1. Mapa obowiązków z umowy

> Z [umowa i załączniki, wersja] wypisz obowiązki każdej strony, terminy i warunki płatności. Przy każdej pozycji podaj numer postanowienia. Oddziel zapis umowy od pytania interpretacyjnego. Nie dopisuj brakujących klauzul.

**Sprawdź:** otwórz umowę i porównaj każdą pozycję z numerem postanowienia. Pozycja bez numeru nie wchodzi do wyniku. Treść prawną sprawdza prawnik.

### 2. Porównanie dwóch wersji

> Porównaj [wersja A] i [wersja B] punkt po punkcie. Zwróć tabelę: numer, treść zmiany, pytanie do prowadzącego. Skutków nie oceniaj, jeśli nie masz załączników.

**Sprawdź:** porównaj tabelę z dokumentem. Zmiany w odesłaniach i definicjach łatwo uciekają, więc zajrzyj tam osobno.

### 3. Chronologia sprawy

> Z [zatwierdzone akta] ułóż chronologię zdarzeń. Odróżnij datę zdarzenia od daty dokumentu i wskaż źródło każdego faktu. Sprzeczne daty pokaż osobno i nie rozstrzygaj ich bez dowodu.

**Sprawdź:** każdy wpis ma wskazany dokument, a jego data zgadza się z oryginałem.

### 4. Pytania do klienta

> Na podstawie [cel sprawy] i [przekazane dokumenty] przygotuj listę brakujących faktów i pytań do klienta. Przy każdym pytaniu napisz, jaki dokument lub decyzję może wyjaśnić. Nie zakładaj odpowiedzi klienta.

**Sprawdź:** czy każde pytanie dotyczy czegoś, czego faktycznie brakuje w przekazanych dokumentach.

### 5. Przegląd wskazanych źródeł

> Dla [kwestia, jurysdykcja, stan na datę] uporządkuj wyłącznie [wskazane akty i orzeczenia]. Podaj dokładne oznaczenia i fragmenty wspierające każdą tezę. Braki w zbiorze oznacz jako braki, a nie jako brak regulacji.

**Sprawdź:** otwórz każdy akt w źródle urzędowym (np. ISAP, EUR-Lex), potwierdź, że fragment istnieje i jest obowiązujący na datę zdarzeń. Copilot może wskazać fragment, którego w akcie nie ma. Nie cytuj niczego, czego nie otwarto w źródle. Wynik sprawdza prawnik.

### 6. Streszczenie umowy dla osoby spoza prawa

> Z [umowa i załączniki, wersja] przygotuj jednostronicowe streszczenie dla osoby nieprawniczej: przedmiot, czas obowiązywania, wynagrodzenie, zasady wypowiedzenia, kary umowne i zasady odpowiedzialności. Przy każdej pozycji podaj numer postanowienia. Nie oceniaj ważności zapisów ani ryzyka. Gdy zapis jest niejasny, napisz to wprost i go nie interpretuj.

**Sprawdź:** porównaj każdą pozycję z numerem postanowienia i szukaj uproszczeń, które zmieniają sens (np. „może” zamiast „powinien”). Streszczenie trafia do biznesu dopiero po akceptacji prawnika.

### 7. Odesłania i załączniki

> Z [umowa i komplet załączników] wypisz wszystkie odesłania do załączników, definicji i innych dokumentów. Dla każdego podaj miejsce odesłania i status: jest w pakiecie / brak w pakiecie / niejednoznaczne. Policz odesłania. Nie zakładaj treści brakujących załączników.

**Sprawdź:** wyszukaj w dokumencie słowa „załącznik” i „zgodnie z” i porównaj liczbę trafień z liczbą w wyniku. Wynik jest pomocą w porządkowaniu pakietu, treść prawną sprawdza prawnik.

### 8. Stanowiska stron w korespondencji

> Z [pisma stron w sprawie] zbuduj tabelę: kwestia, stanowisko strony A, stanowisko strony B, dokument i data. Cytuj tylko to, co jest w pismach. Kwestie, w których strony się nie odniosły do siebie, pokaż osobno. Nie oceniaj racji stron.

**Sprawdź:** otwórz po jednym piśmie dla każdej strony i potwierdź, że stanowisko jest przypisane właściwej stronie. Zamiana stron w tabeli to klasyczny błąd narzędzia. Wynik sprawdza prawnik.

## Aplikacje Microsoft 365

Narzędzia: Excel, Word, PowerPoint, Outlook, Teams z Microsoft 365 Copilot; w innym narzędziu załącz plik.

### 1. Word: spójność dokumentu

> Przejrzyj ten dokument pod kątem niespójnych nazw stron, dat, numerów paragrafów i niezdefiniowanych pojęć. Wypisz miejsca i proponowane poprawki osobno. Nie poprawiaj po cichu postanowień merytorycznych.

**Sprawdź:** przyjmuj poprawki pojedynczo, w trybie śledzenia zmian. Zmiany treści postanowień ocenia prawnik.

### 2. Outlook: wątek korespondencji

> Streść wskazany wątek: ustalenia, propozycje, kwestie otwarte i terminy. Przy każdym punkcie wskaż wiadomość i nadawcę. Odróżnij propozycję od uzgodnienia i nie pomijaj późniejszej korekty.

**Sprawdź:** otwórz wskazane wiadomości. Szczególnie ostatnią, bo to ona zwykle zmienia wcześniejsze ustalenia.

### 3. Teams: ustalenia ze spotkania

> Z [transkrypcja/notatki ze spotkania] przygotuj listę decyzji, zadań i pytań otwartych. Dodaj osobę wskazaną w materiale i fragment, z którego wynika ustalenie. Nie przypisuj zadania na podstawie domysłu.

**Sprawdź:** Copilot w Teams korzysta z treści po spotkaniu, jeśli była transkrypcja lub nagranie ([źródło](https://learn.microsoft.com/en-us/microsoft-365/copilot/microsoft-copilot-requirements)). **Sprawdź:** potwierdź listę z uczestnikami.

### 4. Excel: kontrola terminów

> Z podanej tabeli terminów przygotuj widok pozycji bez źródła, właściciela lub potwierdzenia daty. Pokaż sposób obliczenia odstępu do terminu. Daty do sprawdzenia w umowie oznacz osobno. Nie zmieniaj dat źródłowych.

**Sprawdź:** wylicz dwa terminy ręcznie. Terminy prawne liczy prawnik, Copilot nie zastępuje formuły ani sprawdzenia obliczeń.

### 5. Word: tabela pojęć zdefiniowanych

> Z tego dokumentu zbuduj tabelę pojęć zdefiniowanych: pojęcie, miejsce definicji, liczba użyć. Osobno wskaż pojęcia używane z wielkiej litery bez definicji oraz definicje, których nigdzie nie użyto. Niczego nie poprawiaj w tekście.

**Sprawdź:** wyszukaj dwa pojęcia z tabeli w dokumencie (Ctrl+F) i porównaj liczbę użyć. Czy pojęcie użyte w innym znaczeniu niż w definicji jest błędem, ocenia prawnik.

### 6. Outlook: prośba o brakujące dokumenty

> Na podstawie wskazanego wątku i [indeks dokumentów] przygotuj szkic wiadomości do kontrahenta z listą dokumentów, których jeszcze nie otrzymaliśmy. Przy każdej pozycji podaj, gdzie była o nią prośba w wątku. Nie formułuj stanowiska prawnego ani terminów, których nie ma w wątku. Niczego nie wysyłaj.

**Sprawdź:** czy lista braków zgadza się z indeksem i czy żaden dokument z folderu nie figuruje jako brakujący. Treść wiadomości zatwierdza prowadzący sprawę przed wysyłką.

### 7. PowerPoint: stan sprawy dla zarządu

> Na podstawie [zatwierdzona notatka prawnika] przygotuj trzy slajdy dla zarządu: stan sprawy, decyzje do podjęcia, otwarte pytania. Używaj wyłącznie sformułowań z notatki, bez własnych ocen ryzyka. Na każdym slajdzie wskaż akapit notatki, z którego pochodzi treść.

**Sprawdź:** porównaj każde zdanie slajdu z notatką. Copilot lubi „wygładzać” zastrzeżenia, a tu każde zastrzeżenie prawnika ma zostać. Slajdy zatwierdza autor notatki.

## Zadanie wieloetapowe

Narzędzia: Microsoft 365 Copilot Cowork, Anthropic Claude Cowork, tryb agenta OpenAI ChatGPT.

### 1. Porównanie rund negocjacji

> Porównaj [wersja przed negocjacjami], [wersja po negocjacjach] i [zatwierdzony mandat]. Przygotuj listę zmian, ustępstw wymagających zgody i rozbieżności z mandatem. Zatrzymaj się przed wysłaniem czegokolwiek kontrahentowi.

**Sprawdź:** każda rozbieżność z mandatem ma wskazane postanowienie i punkt mandatu. Bez mandatu na wejściu prompt nie ma sensu, bo nie ma z czym porównać.

### 2. Rejestr due diligence

> Z [indeks, otrzymane pliki, lista pytań] przygotuj rejestr wersji, braków i odpowiedzi. Powiąż każdy wniosek z identyfikatorem dokumentu. Brak pliku nie oznacza, że zobowiązanie nie istnieje.

**Sprawdź:** liczba plików w rejestrze zgadza się z folderem, a wnioski prawne zostawiasz prawnikowi.

### 3. Przekazanie sprawy zastępcy

> Z [zatwierdzony folder sprawy] przygotuj pakiet: ostatnia wersja dokumentu, terminy, otwarte pytania i decyzje. Wskaż źródła i luki. Nie udostępniaj pakietu nikomu, kto nie ma potwierdzonego dostępu.

**Sprawdź:** czy terminy w pakiecie zgadzają się z dokumentami, a zastępca widzi tylko to, do czego ma uprawnienia.

### 4. Przegląd umów względem wzoru firmy

> Z [wzór umowy firmy] i [folder umów do przeglądu] przygotuj tabelę: umowa, klauzula wzorcowa, status (zgodna / odbiega / brak), numer postanowienia w umowie. Przy statusie „odbiega” zacytuj oba zapisy obok siebie. Nie oceniaj skutków odstępstw. Brak klauzuli oznacz jako brak w dokumencie, nie jako brak regulacji.

**Sprawdź:** wybierz trzy umowy i porównaj ręcznie jedną klauzulę z każdej. Liczba umów w tabeli zgadza się z folderem. Oceny odstępstw dokonuje prawnik.

### 5. Rejestr wzorów i polityk

> Z [folder wzorów i polityk] przygotuj rejestr: dokument, wersja, data ostatniej zmiany, właściciel, status przeglądu. Daty bierz z treści dokumentu i osobno z właściwości pliku, a różnice zaznacz. Braki wpisz jako braki. Niczego nie przenoś ani nie zmieniaj w folderze.

**Sprawdź:** liczba pozycji zgadza się z liczbą plików w folderze, a daty w trzech wybranych dokumentach zgadzają się z ich treścią. Który dokument jest obowiązujący, rozstrzyga prawnik.

## Zasady pracy w tej roli (z wpisu)

### Z czego korzystasz

[Microsoft 365 Copilot](https://majchrzycki.com/blog/microsoft-365-copilot) nazywa się teraz Microsoft Copilot, a czat to Microsoft Copilot Chat. Starsze nazwy zostają w licencjach i interfejsach w okresie przejściowym ([źródło](https://learn.microsoft.com/en-us/microsoft-365/copilot/enterprise-data-protection)). Chat opiera się głównie na danych z sieci, a dokumenty firmy wykorzystuje, gdy je wkleisz lub załączysz. Pełna licencja uziemia odpowiedzi w danych pracy przez Microsoft Graph ([źródło](https://learn.microsoft.com/en-us/microsoft-365/copilot/microsoft-365-copilot-overview)). Copilot pokazuje tylko dane, do których masz prawo odczytu ([źródło](https://learn.microsoft.com/en-us/microsoft-365/copilot/microsoft-365-copilot-privacy)). To nie jest dostęp do akt, orzeczeń ani aktualnych przepisów. Do tych potrzebujesz źródeł urzędowych.

Cowork, czyli agent do zadań wieloetapowych, jest według dokumentacji dostępny dla licencji Premium i rozliczany według zużycia. Dostęp zależy też od ustawień administratora.

### Jak odebrać wynik, żeby nie pomylić szkicu z opinią

Prawnik sprawdza cztery rzeczy: **istnienie źródła, zgodność przytoczonej treści, wersję obowiązującą na datę zdarzeń i zastosowanie do sprawy**. Otwórz dokument niezależnie od odpowiedzi modelu. Pytanie „czy jesteś pewien?” nie jest weryfikacją. Przy Cowork sprawdź też, jakie pliki zmienił i które działania wymagały zatwierdzenia.

Przepisy, zwłaszcza o ochronie danych i sztucznej inteligencji, czytaj w źródłach urzędowych: [ISAP](https://isap.sejm.gov.pl/) i [EUR-Lex](https://eur-lex.europa.eu/). Kto za co odpowiada przy konkretnej umowie lub wdrożeniu, ocenia prawnik.

Na pierwszy tydzień wybierz jedno zadanie na materiałach publicznych lub syntetycznych, na przykład mapę obowiązków z umowy w Chat. Zachowaj wejście, wynik i uwagi prawnika. Podobny podział na materiał roboczy i odpowiedzialność za wynik znajdziesz w [promptach dla finansistów](https://majchrzycki.com/blog/microsoft-copilot-praktyczne-prompty-dla-finansistow), a ogólne zasady w [przewodniku AI w codziennej pracy](https://majchrzycki.com/blog/filar/ai-w-codziennej-pracy).
