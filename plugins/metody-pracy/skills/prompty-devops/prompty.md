# Biblioteka promptów: Zespół DevOps

Źródło: [„Copilot w DevOps: 30 promptów z testem i rollbackiem”](https://majchrzycki.com/blog/microsoft-copilot-w-devops-praktyczne-prompty-dla-zespolu-i-managerow?utm_source=github&utm_medium=referral&utm_campaign=moja-firma-prompty&utm_content=prompty-devops), Krzysztof Majchrzycki, majchrzycki.com. Stan wpisu: 2026-10-02. Licencja MIT.

Prompty pisano pod Microsoft 365 Copilot. W innych narzędziach działają prompty z grupy „Dowolny czat”, a pozostałe wymagają załączenia pliku albo pracy etapami.

## Dowolny czat

Narzędzia: Anthropic Claude, OpenAI ChatGPT, Google Gemini, Microsoft 365 Copilot Chat.

### 1. Backlog techniczny

> Na podstawie [zatwierdzony materiał do zadania „Backlog techniczny”, data i wersja] połącz problem operacyjny z mierzalnym warunkiem odbioru.

### 2. Pull request

> Na podstawie [zatwierdzony materiał do zadania „Pull request”, data i wersja] streść zmianę, ryzyka i brakujące testy.

### 3. Code review

> Na podstawie [zatwierdzony materiał do zadania „Code review”, data i wersja] wskaż problemy do weryfikacji bez automatycznej akceptacji.

### 4. Testy

> Na podstawie [zatwierdzony materiał do zadania „Testy”, data i wersja] wyprowadź przypadki z kontraktu i scenariuszy awarii.

### 5. Pipeline CI

> Na podstawie [zatwierdzony materiał do zadania „Pipeline CI”, data i wersja] przygotuj szkic etapów z bramkami i artefaktami.

### 6. Pipeline CD

> Na podstawie [zatwierdzony materiał do zadania „Pipeline CD”, data i wersja] ułóż promocję środowisk, akceptacje i rollback.

### 7. Infrastructure as Code

> Na podstawie [zatwierdzony materiał do zadania „Infrastructure as Code”, data i wersja] sprawdź idempotencję, sekrety i ryzyko destrukcji.

### 8. Konfiguracja

> Na podstawie [zatwierdzony materiał do zadania „Konfiguracja”, data i wersja] porównaj stan oczekiwany z dostarczonym stanem bieżącym.

### 9. Threat modeling

> Na podstawie [zatwierdzony materiał do zadania „Threat modeling”, data i wersja] wypisz zasoby, granice zaufania i scenariusze nadużyć.

### 10. Zależności

> Na podstawie [zatwierdzony materiał do zadania „Zależności”, data i wersja] wskaż przestarzałe lub ryzykowne pozycje do potwierdzenia.

## Aplikacje Microsoft 365

Narzędzia: Excel, Word, PowerPoint, Outlook, Teams z Microsoft 365 Copilot; w innym narzędziu załącz plik.

### 1. Plan wdrożenia

**Aplikacja:** Word; pracuj na otwartym dokumencie roboczym.

> Zdefiniuj pilotaż, obserwowalność i warunki zatrzymania.

### 2. Canary

**Aplikacja:** Word; pracuj na otwartym dokumencie roboczym.

> Przygotuj metryki promocji i automatycznego wycofania.

### 3. Alert

**Aplikacja:** Word; pracuj na otwartym dokumencie roboczym.

> Oceń działanie alertu i potrzebny kontekst runbooka.

### 4. Incydent

**Aplikacja:** Word; pracuj na otwartym dokumencie roboczym.

> Zbuduj oś czasu z potwierdzonych zdarzeń.

### 5. Diagnostyka

**Aplikacja:** Word; pracuj na otwartym dokumencie roboczym.

> Ułóż hipotezy i bezpieczną kolejność testów.

### 6. Postmortem

**Aplikacja:** Word; pracuj na otwartym dokumencie roboczym.

> Oddziel fakty, czynniki i działania systemowe od winy.

### 7. Runbook

**Aplikacja:** Word; pracuj na otwartym dokumencie roboczym.

> Przekształć wiedzę w kroki, kontrole i eskalacje.

### 8. Kontrola zmiany

**Aplikacja:** Word; pracuj na otwartym dokumencie roboczym.

> Wypisz brak testu, źródła, obserwowalności lub rollbacku.

### 9. Threat modeling

**Aplikacja:** Word; pracuj na otwartym dokumencie roboczym.

> Wypisz zasoby, granice zaufania i scenariusze nadużyć.

### 10. Zależności

**Aplikacja:** Word; pracuj na otwartym dokumencie roboczym.

> Wskaż przestarzałe lub ryzykowne pozycje do potwierdzenia.

## Zadanie wieloetapowe

Narzędzia: Microsoft 365 Copilot Cowork, Anthropic Claude Cowork, tryb agenta OpenAI ChatGPT.

### 1. Backlog techniczny i pull request

> Na podstawie [zatwierdzonych plików z datą i wersją] wykonaj kolejno etap 1 — backlog techniczny: Połącz problem operacyjny z mierzalnym warunkiem odbioru. Etap 2 — pull request: Streść zmianę, ryzyka i brakujące testy. Przygotuj tabelę ustaleń, listę braków i pytania do właściciela. Wynik oddaj do [osoby zatwierdzającej] przed wysyłką lub zmianą danych.

### 2. Code review i testy

> Na podstawie [zatwierdzonych plików z datą i wersją] wykonaj kolejno etap 1 — code review: Wskaż problemy do weryfikacji bez automatycznej akceptacji. Etap 2 — testy: Wyprowadź przypadki z kontraktu i scenariuszy awarii. Przygotuj krótką notę, rejestr źródeł i warianty do oceny. Wynik oddaj do [osoby zatwierdzającej] przed wysyłką lub zmianą danych.

### 3. Pipeline ci i pipeline cd

> Na podstawie [zatwierdzonych plików z datą i wersją] wykonaj kolejno etap 1 — pipeline ci: Przygotuj szkic etapów z bramkami i artefaktami.  Etap 2 — pipeline cd: Ułóż promocję środowisk, akceptacje i rollback. Przygotuj zestawienie wersji, otwarte decyzje i plan kontroli. Wynik oddaj do [osoby zatwierdzającej] przed wysyłką lub zmianą danych.

### 4. Infrastructure as code i konfiguracja

> Na podstawie [zatwierdzonych plików z datą i wersją] wykonaj kolejno etap 1 — infrastructure as code: Sprawdź idempotencję, sekrety i ryzyko destrukcji. Etap 2 — konfiguracja: Porównaj stan oczekiwany z dostarczonym stanem bieżącym. Przygotuj materiał do przeglądu wraz z dowodami i punktami spornymi. Wynik oddaj do [osoby zatwierdzającej] przed wysyłką lub zmianą danych.

### 5. Threat modeling i zależności

> Na podstawie [zatwierdzonych plików z datą i wersją] wykonaj kolejno etap 1 — threat modeling: Wypisz zasoby, granice zaufania i scenariusze nadużyć. Etap 2 — zależności: Wskaż przestarzałe lub ryzykowne pozycje do potwierdzenia. Przygotuj roboczy dokument, listę wyjątków i kryteria odbioru. Wynik oddaj do [osoby zatwierdzającej] przed wysyłką lub zmianą danych.

### 6. Plan wdrożenia i canary

> Na podstawie [zatwierdzonych plików z datą i wersją] wykonaj kolejno etap 1 — plan wdrożenia: Zdefiniuj pilotaż, obserwowalność i warunki zatrzymania. Etap 2 — canary: Przygotuj metryki promocji i automatycznego wycofania. Przygotuj tabelę ustaleń, listę braków i pytania do właściciela. Wynik oddaj do [osoby zatwierdzającej] przed wysyłką lub zmianą danych.

### 7. Alert i incydent

> Na podstawie [zatwierdzonych plików z datą i wersją] wykonaj kolejno etap 1 — alert: Oceń działanie alertu i potrzebny kontekst runbooka. Etap 2 — incydent: Zbuduj oś czasu z potwierdzonych zdarzeń. Przygotuj krótką notę, rejestr źródeł i warianty do oceny. Wynik oddaj do [osoby zatwierdzającej] przed wysyłką lub zmianą danych.

### 8. Diagnostyka i postmortem

> Na podstawie [zatwierdzonych plików z datą i wersją] wykonaj kolejno etap 1 — diagnostyka: Ułóż hipotezy i bezpieczną kolejność testów. Etap 2 — postmortem: Oddziel fakty, czynniki i działania systemowe od winy. Przygotuj zestawienie wersji, otwarte decyzje i plan kontroli. Wynik oddaj do [osoby zatwierdzającej] przed wysyłką lub zmianą danych.

### 9. Runbook i kontrola zmiany

> Na podstawie [zatwierdzonych plików z datą i wersją] wykonaj kolejno etap 1 — runbook: Przekształć wiedzę w kroki, kontrole i eskalacje. Etap 2 — kontrola zmiany: Wypisz brak testu, źródła, obserwowalności lub rollbacku. Przygotuj materiał do przeglądu wraz z dowodami i punktami spornymi. Wynik oddaj do [osoby zatwierdzającej] przed wysyłką lub zmianą danych.

### 10. Backlog techniczny, threat modeling oraz runbook

> Na podstawie [zatwierdzonych plików z datą i wersją] wykonaj kolejno etap 1 — backlog techniczny: Połącz problem operacyjny z mierzalnym warunkiem odbioru. Etap 2 — threat modeling: Wypisz zasoby, granice zaufania i scenariusze nadużyć. Etap 3 — runbook: Przekształć wiedzę w kroki, kontrole i eskalacje. Przygotuj roboczy dokument, listę wyjątków i kryteria odbioru. Wynik oddaj do [osoby zatwierdzającej] przed wysyłką lub zmianą danych.

## Zasady pracy w tej roli (z wpisu)

### Copilot nie zmienia zasad metodyki

Punktem odniesienia pozostaje [dokumentacja Microsoft Learn o DevOps](https://learn.microsoft.com/en-us/devops/what-is-devops). Narzędzie AI nie nadaje nowego znaczenia pojęciom, nie zmienia odpowiedzialności i nie usuwa potrzeby rozmowy. Jeśli odpowiedź Copilota jest sprzeczna ze źródłem metodyki albo z jawną polityką zespołu, poprawiasz prompt lub dane. Nie poprawiasz metodyki tak, aby pasowała do odpowiedzi.

[Microsoft uczy](https://learn.microsoft.com/en-us/training/modules/write-effective-prompts-do-more-prompting/), że dobry prompt obejmuje cel, kontekst, źródło i oczekiwania. W pracy zespołu DevOps źródłem powinny być aktualne artefakty: repozytorium, backlog, pipeline, testy, konfiguracja, telemetria, runbook i historia incydentów. Kontekst wyjaśnia, do jakiej rozmowy lub kontroli potrzebujesz wyniku. Oczekiwania określają format, definicje i sposób pokazania niepewności.

| Element promptu | Co wpisujesz | Czego unikasz |
| --- | --- | --- |
| Cel | Jedno zadanie możliwe do sprawdzenia | „Zarządzaj projektem lepiej” |
| Kontekst | Odbiorca, etap pracy i decyzja | Ogólny opis bez zastosowania |
| Źródła | Konkretne pliki, wersje i okres danych | Polecenie oparte na pamięci modelu |
| Format | Tabela faktów, braków, ryzyk i kroków | Esej, którego nie da się odebrać |
| Granica | Czego AI nie zatwierdza i nie wykonuje | Ukryte delegowanie odpowiedzialności |

Granica jest szczególnie ważna przy wdrożenie na produkcję, akceptacja ryzyka i reakcja na incydent. Copilot może porównać materiały, wyłapać sprzeczności i przygotować pytania. Decyzję podejmuje rola, która ma do tego mandat i ponosi konsekwencje. Jeżeli wynik miałby automatycznie wywołać działanie, dodaj osobną walidację, warunek zatrzymania i zapis akceptacji.

### Przygotuj dane przed przygotowaniem promptu

Najpierw ustal wersję źródeł. Ten sam dokument w folderze roboczym, wiadomości e-mail i zatwierdzonym repozytorium może mieć inną treść. W promptach podawaj nazwę, właściciela, datę i zakres. Gdy źródła są sprzeczne, poproś o tabelę różnic. Nie proś modelu, by sam zdecydował, która wersja obowiązuje.

Następnie usuń dane zbędne dla celu. [Dokumentacja prywatności Microsoft 365 Copilot](https://learn.microsoft.com/en-us/deployoffice/privacy/microsoft-365-copilot) podaje, że Copilot respektuje istniejące uprawnienia Microsoft 365, a prompty, odpowiedzi i dane z Microsoft Graph nie są używane do trenowania bazowych modeli. Nie oznacza to jednak, że każde istniejące uprawnienie jest właściwe. Jeżeli zespół udostępnił folder zbyt szeroko, Copilot nie naprawi tego błędu organizacyjnego.

Przed pierwszym użyciem wykonaj próbę na zamkniętym, dobrze znanym przykładzie. Osoba odpowiedzialna powinna znać prawidłowy wynik i potrafić wykryć pominięcie. Zapisz prompt, wersje dokumentów oraz otrzymaną odpowiedź. Taki test nie dowodzi, że każde kolejne użycie będzie poprawne, ale ujawnia niejasne instrukcje, błędne definicje i niepotrzebne dane, zanim wynik wpłynie na rzeczywistą pracę.

| Kontrola wejścia | Pytanie przed wysłaniem | Dowód |
| --- | --- | --- |
| Aktualność | Czy to zatwierdzona wersja? | Data i właściciel dokumentu |
| Dostęp | Czy odbiorca ma prawo zobaczyć dane? | Grupa lub etykieta dostępu |
| Minimalizacja | Czy każde pole jest potrzebne? | Lista usuniętych danych |
| Definicje | Czy miary i statusy znaczą to samo? | Słownik użyty w analizie |
| Kompletność | Jakich danych brakuje? | Jawna lista luk |

### Kontroluj wynik, zanim trafi do procesu

Najpierw sprawdź odwołania. Otwórz źródło i upewnij się, że wspiera dokładnie dane twierdzenie. Sam link nie jest dowodem. Dokument może dotyczyć innej wersji, produktu albo okresu. Jeśli odpowiedź łączy dwa źródła, sprawdź, czy używają tych samych definicji.

Potem sprawdź luki. Zadaj drugie polecenie: „Wypisz wszystkie zdania, których nie da się potwierdzić w podanych materiałach. Dla każdego wskaż brakujący dowód”. Nie proś o pewność wyrażoną procentem, jeżeli nie masz metody kalibracji. Wystarczy rozróżnienie: potwierdzone źródłem, interpretacja, hipoteza i brak danych.

Na końcu sprawdź zgodność z DevOps. Płynna odpowiedź może wprowadzić element z innej metody albo przenieść odpowiedzialność na niewłaściwą rolę. To nie zawsze jest błąd — zespoły mogą pracować hybrydowo — ale odstępstwo powinno być jawne i uzasadnione. Nie nazywaj procesu zgodnym z metodyką tylko dlatego, że używa jej słownictwa.

| Test wyniku | Pytanie | Gdy odpowiedź brzmi „nie” |
| --- | --- | --- |
| Pochodzenie | Czy każde ważne twierdzenie ma źródło? | Wróć do danych |
| Zgodność | Czy terminy zachowują znaczenie metodyki? | Popraw definicje |
| Odpowiedzialność | Czy decyzja ma ludzkiego właściciela? | Zatrzymaj użycie |
| Sprawdzalność | Czy wynik ma kryterium odbioru? | Zmień format promptu |
| Odwracalność | Czy można bezpiecznie wycofać zmianę? | Zmniejsz zakres testu |

### Typowe błędy

Pierwszy błąd to pytanie o „najlepszą decyzję”. Model nie zna wszystkich ograniczeń ani kosztów, a atrakcyjna rekomendacja może ukrywać brak danych. Proś o warianty, kryteria i skutki. Drugi błąd to ocena ludzi na podstawie metryk procesu. Copilot może zauważyć korelację, ale nie zna przyczyny i łatwo utrwala błędną interpretację. Analizuj system pracy, nie ranking osób.

Trzeci błąd to wprowadzanie wygenerowanej treści bez testu. Dotyczy to zarówno kodu, jak i planu, raportu czy polityki. Wymagaj drugiej osoby, ograniczonego pilotażu albo formalnej akceptacji zależnie od ryzyka. Czwarty błąd to długa rozmowa bez wersji. Gdy zmieniasz źródło lub cel, zapisz nowy prompt. Inaczej nie odtworzysz, skąd wziął się wynik.
