# Biblioteka promptów: Finansista

Źródło: [„Copilot dla finansistów: 20 promptów i kontrola obliczeń”](https://majchrzycki.com/blog/microsoft-copilot-praktyczne-prompty-dla-finansistow?utm_source=github&utm_medium=referral&utm_campaign=moja-firma-prompty&utm_content=prompty-finansista), Krzysztof Majchrzycki, majchrzycki.com. Stan wpisu: 2026-11-11. Licencja MIT.

Prompty pisano pod Microsoft 365 Copilot. W innych narzędziach działają prompty z grupy „Dowolny czat”, a pozostałe wymagają załączenia pliku albo pracy etapami.

## Dowolny czat

Narzędzia: Anthropic Claude, OpenAI ChatGPT, Google Gemini, Microsoft 365 Copilot Chat.

### 1. Trendy finansowe

> Na podstawie [uzgodnione zestawienie, data i wersja] opisz zmiany przychodów, kosztów i marży za [okres]. Podaj wartości bazowe i wzory. Oddziel obserwacje od hipotez o przyczynach. Nie przypisuj zmian działaniom firmy bez potwierdzających danych.

**Sprawdź:** porównaj zakres działalności między okresami. Przejęcie albo zmiana klasyfikacji kosztów psuje prostą ocenę trendu. Przelicz jedną marżę ręcznie.

### 2. Prognoza w trzech scenariuszach

> Na podstawie [dane historyczne] i [zatwierdzone założenia] przygotuj strukturę prognozy na [horyzont]. Rozdziel historię od prognozy. Dla trzech scenariuszy pokaż zmieniane parametry i zależności. Brakujące założenia wypisz jako pytania.

**Sprawdź:** czy scenariusze różnią się mechanizmem (cena, wolumen, termin płatności), a nie tylko dowolnym procentem wzrostu. Czy założenia mają właściciela.

### 3. Rentowność produktów

> Porównaj [produkty] według [przychody i uzgodnione koszty]. Pokaż wynik przed i po alokacji kosztów wspólnych. Opisz klucze podziału i ich wpływ. Nie proponuj zamknięcia produktu na podstawie jednej alokacji.

**Sprawdź:** które koszty rzeczywiście znikną razem z produktem. Koszt przypisany nie zawsze jest kosztem możliwym do uniknięcia.

### 4. Kapitał obrotowy

> Dla [należności, zapasy, zobowiązania] przygotuj zestawienie według [zatwierdzone definicje wskaźników]. Pokaż okresy i mianowniki. Rozdziel opóźnienia, spory i uzgodnione terminy. Wskaż pozycje do wyjaśnienia. Nie zakładaj, że gotówka zostanie od razu uwolniona.

**Sprawdź:** jakość danych o terminach i jeden wskaźnik policzony ręcznie. Saldo księgowe i realna szansa na odzyskanie środków to różne pytania.

### 5. Porównanie ofert finansowania

> Zestaw [obecne finansowanie] i [warunki otrzymanych ofert]. Porównaj terminy, koszty i ograniczenia przy tych samych założeniach. Wskaż brakujące dane i pytania do finansującego. Nie wybieraj optymalnej oferty.

**Sprawdź:** zgodność z dokumentami ofert. Sama stopa nominalna nie wyczerpuje porównania, bo liczą się też prowizje i zabezpieczenia.

### 6. Wrażliwość wyniku na cenę

> Z uproszczonego modelu: przychód 1000, koszty zmienne 600, koszty stałe 250. Policz wynik i marżę, a potem wpływ spadku ceny o 5% przy niezmienionym wolumenie i kosztach. Pokaż wzory krok po kroku. Nie zakładaj reakcji popytu ani zmian kosztów.

**Sprawdź:** wynik wyjściowy to 150 (marża 15%). Po spadku ceny przychód to 950, wynik 100, marża 10,53%. Wynik spada o 33,3%, a marża o 4,47 punktu procentowego. Jeśli odpowiedź podaje „spadek o 5%”, pomyliła cenę z wynikiem. Przelicz wzory na swoich danych w arkuszu.

### 7. Przegląd założeń modelu

> Poniżej opis założeń mojego modelu [wklejone założenia z oznaczeniem komórek lub arkuszy]. Wskaż niespójności: założenia, które sobie przeczą, brakujące założenia (np. nakłady inwestycyjne, podatek, kapitał obrotowy) i parametry bez źródła. Przy każdej uwadze podaj, których dwóch założeń dotyczy. Nie poprawiaj ich, nie proponuj nowych wartości.

**Sprawdź:** każda uwaga wskazuje dwa konkretne założenia z Twojej listy. Uwaga bez wskazania pozostaje opinią. Czy niespójność jest rzeczywista, rozstrzyga właściciel modelu.

### 8. Próg rentowności

> Dla produktu: cena 100, koszt zmienny na sztukę 40, koszty stałe w okresie 60 000. Policz próg rentowności w sztukach i w przychodzie. Pokaż wzór i jednostki. Wskaż, które założenia (stałość kosztów, jedna cena) decydują o wyniku. Nie rekomenduj decyzji.

**Sprawdź:** marża na sztukę to 60, a próg to 60 000 / 60 = **1000 sztuk**, czyli przychód 100 000. Sprawdź odwrotnie: 1000 × 60 = 60 000. Przy kilku produktach z różnymi cenami jeden wzór nie wystarczy, a Copilot nie zastępuje własnego rachunku.

## Aplikacje Microsoft 365

Narzędzia: Excel, Word, PowerPoint, Outlook, Teams z Microsoft 365 Copilot; w innym narzędziu załącz plik.

### 1. Excel: prognoza płynności

> Z [saldo początkowe, harmonogram wpływów i wydatków] przygotuj model na [okres]. Rozdziel terminy potwierdzone i szacowane. Pokaż saldo końcowe i pozycje o niepewnym terminie. Nie utożsamiaj przychodu z wpływem gotówki.

**Sprawdź:** czy saldo otwarcia zgadza się z wyciągiem i czy ten sam wpływ nie wystąpił w dwóch źródłach.

### 2. Excel: NPV i IRR

> Dla [harmonogram nakładów i przepływów] zaproponuj formuły NPV i IRR według [stopa dyskontowa podana przeze mnie]. Pokaż momenty przepływów i założenia. Nie dobieraj stopy samodzielnie i nie wydawaj rekomendacji inwestycyjnej.

**Sprawdź:** **Sprawdź na przykładzie:** nakład 1000 w roku 0, wpływy po 400 w latach 1 do 3, stopa 10%. Wynik: NPV około −5,26, IRR około 9,70%. Jeśli formuła daje co innego, błąd jest w formule (np. nakład z niewłaściwym okresem), nie w teorii.

### 3. Excel: ceny, wolumen, zakres

> Z [zestawienie kosztów] oddziel zmiany cen, wolumenu i zakresu usług, jeśli dane na to pozwalają. Wskaż pozycje do wyjaśnienia i potrzebne dowody. Nie traktuj każdego wzrostu jako nieefektywności.

**Sprawdź:** czy suma rozbicia równa się całkowitej zmianie. Jeśli kolumny z wolumenem nie ma, Copilot ma o tym napisać, a nie zgadywać.

### 4. PowerPoint: komentarz dla zarządu

> Przygotuj projekt komentarza do [uzgodnione wskaźniki] na otwartej prezentacji. Przy każdej liczbie wskaż tabelę źródłową. Rozdziel wykonanie, odchylenie i hipotezę przyczyny. Zakończ listą decyzji, do których brakuje informacji.

**Sprawdź:** czy każda liczba na slajdzie istnieje w tabeli źródłowej i czy opis nie zamienia korelacji w przyczynę.

### 5. Excel: przeliczenie walut

> W kolumnie „Kwota EUR” i kolumnie „Kurs” dodaj kolumnę „Kwota PLN” jako iloczyn obu wartości. Pokaż formułę i zakres. Wiersze bez kursu albo z kursem tekstowym oznacz osobno i nie uzupełniaj kursu samodzielnie. Pokaż sumę w PLN.

**Sprawdź:** **Sprawdź na przykładzie:** 1000 EUR przy kursie 4,30 daje 4300 PLN, 2500 EUR przy kursie 4,25 daje 10 625 PLN, suma **14 925 PLN**. Kursy są przykładowe. W prawdziwym pliku źródło i datę kursu ustalasz sam, a księgowe zasady przeliczenia nie wynikają z promptu.

### 6. Excel: zmiana rok do roku

> Do tabeli z przychodem i wynikiem za dwa okresy dodaj kolumny: zmiana procentowa przychodu, zmiana wyniku, marża w obu okresach i zmiana marży w punktach procentowych. Pokaż formuły. Oznacz wiersze z zerową lub ujemną wartością bazową, dla których zmiana procentowa jest myląca.

**Sprawdź:** **Sprawdź na przykładzie:** przychód 400 i 460 daje +15%, marża 10% i 12% daje +2 punkty procentowe, a wynik rośnie z 40 do 55,2, czyli o 38%. Zmiana marży w punktach to nie zmiana w procentach.

### 7. Outlook: ustalenia o zmianie budżetu

> Streść wskazany wątek o zmianie budżetu: kwoty, kto je zaproponował, kto zatwierdził, jakie warunki i terminy. Rozdziel propozycje od zatwierdzeń. Nie zmieniaj liczb ani ich nie zaokrąglaj. Wypisz pytania, na które w wątku nie ma odpowiedzi.

**Sprawdź:** otwórz ostatnią wiadomość i każdą wymienioną kwotę znajdź w wątku. „Zatwierdzone” bez wskazanej wiadomości nie jest zatwierdzeniem.

## Zadanie wieloetapowe

Narzędzia: Microsoft 365 Copilot Cowork, Anthropic Claude Cowork, tryb agenta OpenAI ChatGPT.

### 1. Komentarz miesięczny z rejestrem źródeł

> Z [zatwierdzone pliki z datą i wersją] przygotuj komentarz do wyników za [okres], tabelę ustaleń i rejestr źródeł. Każda liczba ma wskazany plik i komórkę. Odchylenia opisz bez przypisywania przyczyn. Braki pokaż osobno.

**Sprawdź:** wylosuj pięć liczb i znajdź je w źródle.

### 2. Porównanie konkurentów

> Porównaj [publiczne sprawozdania] według [zdefiniowane wskaźniki]. Wskaż okres, walutę, standard i zakres konsolidacji. Oznacz różnice ograniczające porównanie. Nie uzupełniaj nieujawnionych informacji szacunkiem bez wyraźnej etykiety.

**Sprawdź:** przypisy w sprawozdaniach. Identyczna nazwa wskaźnika nie gwarantuje identycznej definicji.

### 3. Rentowność kanałów sprzedaży

> Porównaj [kanały] z uwzględnieniem uzgodnionych kosztów pozyskania, realizacji i zwrotów. Oddziel dane mierzone od alokowanych. Pokaż wpływ alternatywnego klucza podziału. Nie wybieraj kanału wyłącznie według przychodu.

**Sprawdź:** czy klienci korzystający z kilku kanałów nie są liczeni wielokrotnie.

### 4. Zestawienie wniosków inwestycyjnych

> Z [pliki wniosków inwestycyjnych] i [wzór zestawienia] przygotuj tabelę: wniosek, nakład, okres, przepływy, stopa dyskontowa podana przeze mnie, NPV, brakujące dane. Wnioski z brakami nie wchodzą do porównania, tylko na listę pytań. Pokaż, z której komórki pochodzi każda liczba. Nie ustalaj rankingu ani rekomendacji.

**Sprawdź:** przelicz NPV jednego wniosku samodzielnie na przykładzie z promptu 2 w aplikacjach (około −5,26). Liczba wniosków w tabeli i na liście pytań zgadza się z liczbą plików.

### 5. Aktualizacja prognozy z rejestrem zmian

> Z [poprzednia wersja prognozy], [wykonanie za zamknięte okresy] i [zatwierdzone zmiany założeń] przygotuj nową wersję i rejestr zmian: pozycja, wartość przed, wartość po, przyczyna z listy zatwierdzonych zmian. Zmian bez uzasadnienia na liście nie wprowadzaj, wypisz je osobno.

**Sprawdź:** suma zmian w rejestrze równa się różnicy między sumą nowej i poprzedniej prognozy. Okresy zamknięte w nowej wersji pokrywają się z wykonaniem. Wersję zatwierdza osoba odpowiedzialna za prognozę.

## Zasady pracy w tej roli (z wpisu)

### Ustal, co Copilot ma przygotować

[Microsoft ostrzega](https://support.microsoft.com/en-us/excel/copilot/frequently-asked-questions-about-copilot-in-excel), że Copilot w Excelu może się mylić, i odradza go przy decyzjach w obszarach takich jak finanse. Zaleca sprawdzenie wszystkiego, co stworzy. Używaj go więc do przygotowania zestawienia, listy pytań albo szkicu modelu do sprawdzenia, a decyzję zostaw człowiekowi. Zwykły czat nie czyta też automatycznie ERP, banku ani plików firmy. Wskaż źródła, które faktycznie podajesz.

[Microsoft 365 Copilot](https://majchrzycki.com/blog/microsoft-365-copilot) nazywa się teraz Microsoft Copilot, a czat to Microsoft Copilot Chat. Starsze nazwy zostają w licencjach i interfejsach w okresie przejściowym ([źródło](https://learn.microsoft.com/en-us/microsoft-365/copilot/enterprise-data-protection)). Cowork, czyli agent do zadań wieloetapowych, jest według dokumentacji dostępny dla licencji Premium i rozliczany według zużycia. Dostęp zależy od ustawień administratora ([źródło](https://learn.microsoft.com/en-us/microsoft-365/copilot/microsoft-365-copilot-overview)).

Własny model powinien jawnie pokazywać założenia, zakres komórek i sposób liczenia. Wynik zapisany tylko w akapicie jest trudniejszy do sprawdzenia niż rachunek w arkuszu.

| Pole wejściowe | Co ustalić przed analizą | Typowy błąd |
|---|---|---|
| Okres | Miesiąc, rok i data odcięcia | Porównanie pełnego i niepełnego okresu |
| Waluta | Waluta źródła i zasada przeliczenia | Dodawanie kwot bez konwersji |
| Kwota | Netto, brutto, jednostki lub tysiące | Mieszanie różnych podstaw |
| Zakres | Spółki, produkty, centra kosztów | Pominięcie części działalności |
| Wersja | Budżet zatwierdzony, prognoza, wykonanie | Porównanie dwóch różnych planów |

Zachowaj kopię wejścia i roboczą wersję modelu. Poproś o oznaczanie braków zamiast uzupełniania ich przypuszczeniem. Przekazuj tylko dane potrzebne do zadania, zgodnie z zasadami firmy.

### Przykład kontroli obliczenia

W przykładzie syntetycznym budżet przychodów wynosi 200 tysięcy PLN, a wykonanie 220 tysięcy. Odchylenie to 20 tysięcy, czyli 10% budżetu. Budżet kosztów to 150 tysięcy, wykonanie 176 tysięcy, więc wynik spada z 50 do 44 tysięcy mimo wzrostu przychodów.

Marża (wynik podzielony przez przychód) zmienia się z 25% na 20%, czyli maleje o 5 punktów procentowych. To nie jest spadek o 5%. Opis „sprzedaż wzrosła, więc poprawiła się rentowność” byłby tu błędny. Te liczby służą tylko pokazaniu kontroli.

| Kontrola | Pytanie przed przekazaniem analizy |
|---|---|
| Dane | Czy zgadzają się sumy, waluty, okres i korekty? |
| Formuły | Czy znane przypadki dają oczekiwany wynik? |
| Interpretacja | Czy wniosek wynika z liczb, czy jest hipotezą? |
| Odpowiedzialność | Kto zatwierdza materiał i dalsze działanie? |

W poniedziałek wybierz jeden zamknięty okres i odtwórz znaną analizę z pomocą promptu. Porównaj wynik i pełny czas pracy, razem ze sprawdzaniem. Podobny podział na materiał roboczy i odpowiedzialność za wynik opisujemy w [promptach dla księgowych](https://majchrzycki.com/blog/microsoft-copilot-praktyczne-prompty-dla-ksiegowych), a ogólne zasady w [przewodniku AI w codziennej pracy](https://majchrzycki.com/blog/filar/ai-w-codziennej-pracy).
