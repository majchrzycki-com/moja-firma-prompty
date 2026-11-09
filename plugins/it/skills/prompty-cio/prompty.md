# Biblioteka promptów: Dyrektor IT (CIO)

Źródło: [„Microsoft Copilot: 30 promptów dla CIO”](https://majchrzycki.com/blog/zarzadzanie-z-microsoft-copilot-praktyczne-prompty-dla-dyrektora-it-cio-chief-information-officer?utm_source=github&utm_medium=referral&utm_campaign=moja-firma-prompty&utm_content=prompty-cio), Krzysztof Majchrzycki, majchrzycki.com. Stan wpisu: 2026-11-11. Licencja MIT.

Prompty pisano pod Microsoft 365 Copilot. W innych narzędziach działają prompty z grupy „Dowolny czat”, a pozostałe wymagają załączenia pliku albo pracy etapami.

## Dowolny czat

Narzędzia: Anthropic Claude, OpenAI ChatGPT, Google Gemini, Microsoft 365 Copilot Chat.

### 1. Mapa usług

**Wejście:** CMDB i katalog usług z datą aktualizacji.

> Połącz usługi z właścicielami i krytycznymi zależnościami.

**Sprawdź:** Właściciele potwierdzają stan.

### 2. Dług techniczny

**Wejście:** Rejestr usterek i plan zmian.

> Pogrupuj dług według skutku operacyjnego.

**Sprawdź:** Nie szacuj kosztu bez danych.

### 3. Priorytet modernizacji

**Wejście:** Karty systemów i ograniczenia budżetu.

> Porównaj wymianę, utrzymanie i wycofanie.

**Sprawdź:** Architekt potwierdza zależności.

### 4. Mapa integracji

**Wejście:** Specyfikacje API i rejestr przepływów.

> Wskaż brakujące kontrakty danych i właścicieli.

**Sprawdź:** Sprawdź w dokumentacji systemów.

### 5. Plan migracji

**Wejście:** Inwentarz aplikacji i okna zmian.

> Ułóż etapy migracji z punktem powrotu.

**Sprawdź:** Zespół operacji akceptuje.

### 6. Przegląd dostępu

**Wejście:** Eksport grup i właścicieli zasobów.

> Wskaż nadmiernie szerokie przydziały do ręcznej kontroli.

**Sprawdź:** Administrator sprawdza uprawnienia.

### 7. Ryzyko Copilota

**Wejście:** Raport udostępniania i klasyfikacji danych.

> Wyznacz obszary potencjalnego oversharingu.

**Sprawdź:** Nie traktuj braku alarmu jako dowodu bezpieczeństwa.

### 8. Scenariusz incydentu

**Wejście:** Zatwierdzony playbook i opis zdarzenia.

> Uporządkuj decyzje eskalacyjne bez wykonywania akcji.

**Sprawdź:** Incident commander zatwierdza.

### 9. Kontrola backupu

**Wejście:** Raport kopii i ostatnie próby odtworzenia.

> Wskaż systemy bez potwierdzonego testu odtworzenia.

**Sprawdź:** Sprawdź logi testu.

### 10. Ćwiczenie awaryjne

**Wejście:** Zależności krytycznej usługi i runbook.

> Zaproponuj scenariusz awarii jednego vendora.

**Sprawdź:** Nie wykonuj na produkcji.

## Aplikacje Microsoft 365

Narzędzia: Excel, Word, PowerPoint, Outlook, Teams z Microsoft 365 Copilot; w innym narzędziu załącz plik.

### 1. Ocena vendora

**Aplikacja:** Word; pracuj na otwartym dokumencie roboczym.

**Wejście:** Umowa, SLA i mapa danych.

> Porównaj ryzyko wyjścia oraz odpowiedzialność za incydent.

**Sprawdź:** Zakupy oraz prawnik oceniają.

### 2. Rejestr podatności

**Aplikacja:** Excel; pracuj na otwartym arkuszu z danymi.

**Wejście:** Zweryfikowane wyniki skanowania i ekspozycja.

> Uszereguj naprawy według skutku i możliwości wykorzystania.

**Sprawdź:** Security potwierdza podatność.

### 3. Polityka urządzeń

**Aplikacja:** Word; pracuj na otwartym dokumencie roboczym.

**Wejście:** Obecne zasady i zgłoszone wyjątki.

> Zredaguj zmianę BYOD z granicami dostępu.

**Sprawdź:** Bezpieczeństwo i HR zatwierdzają.

### 4. Przegląd kosztów chmury

**Aplikacja:** Excel; pracuj na otwartym arkuszu z danymi.

**Wejście:** Raport kosztów i właściciele zasobów.

> Wskaż nieprzypisane koszty i możliwe testy optymalizacji.

**Sprawdź:** Finanse potwierdzają faktury.

### 5. Pojemność usługi

**Aplikacja:** Word; pracuj na otwartym dokumencie roboczym.

**Wejście:** Metryki obciążenia i znane limity.

> Opisz progi alarmowe i scenariusz wzrostu.

**Sprawdź:** SRE weryfikuje dane.

### 6. Jakość zmian

**Aplikacja:** Word; pracuj na otwartym dokumencie roboczym.

**Wejście:** Historia wdrożeń i awarii.

> Porównaj częstotliwość zmian z czasem przywrócenia.

**Sprawdź:** Nie myl korelacji z przyczyną.

### 7. Przegląd ticketów

**Aplikacja:** Word; pracuj na otwartym dokumencie roboczym.

**Wejście:** Anonimowe zgłoszenia i kategorie.

> Wykryj powracające przyczyny, nie tylko liczbę ticketów.

**Sprawdź:** Service desk potwierdza próbkę.

### 8. SLA wewnętrzne

**Aplikacja:** Word; pracuj na otwartym dokumencie roboczym.

**Wejście:** Katalog usług i uzgodnione potrzeby.

> Wskaż niespójne obietnice i brak miernika.

**Sprawdź:** Biznes akceptuje poziom.

### 9. Komunikat o awarii

**Aplikacja:** Word; pracuj na otwartym dokumencie roboczym.

**Wejście:** Potwierdzone fakty i status przywracania.

> Napisz komunikat bez niepewnego ETA.

**Sprawdź:** Incident commander zatwierdza.

### 10. Plan adopcji

**Aplikacja:** Word; pracuj na otwartym dokumencie roboczym.

**Wejście:** Role, licencje i cele użycia Copilota.

> Wybierz zadania pilota z miernikiem jakości.

**Sprawdź:** Sprawdź gotowość danych.

## Zadanie wieloetapowe

Narzędzia: Microsoft 365 Copilot Cowork, Anthropic Claude Cowork, tryb agenta OpenAI ChatGPT.

### 1. Przegląd licencji

**Wejście:** Stan przypisań i faktyczne wykorzystanie.

> Na podstawie [zatwierdzonych plików z datą i wersją] wyodrębnij konta do rozmowy z właścicielami. Przygotuj tabela licencja, koszt, użycie. Wynik oddaj do [osoby zatwierdzającej] przed wysyłką lub zmianą danych.

**Sprawdź:** Nie odbieraj automatycznie uprawnień.

### 2. Rada architektury

**Wejście:** Wniosek projektowy i standardy techniczne.

> Na podstawie [zatwierdzonych plików z datą i wersją] sformułuj warianty oraz nierozstrzygnięte ryzyka. Przygotuj notatka decyzji architektonicznej. Wynik oddaj do [osoby zatwierdzającej] przed wysyłką lub zmianą danych.

**Sprawdź:** Rada zatwierdza wyjątki.

### 3. Plan kwartału IT

**Wejście:** Zależności projektów, dostępność zespołu i incydenty.

> Na podstawie [zatwierdzonych plików z datą i wersją] ułóż plan z rezerwą operacyjną. Przygotuj tablica priorytet, właściciel, warunek. Wynik oddaj do [osoby zatwierdzającej] przed wysyłką lub zmianą danych.

**Sprawdź:** Sponsorzy potwierdzają terminy.

### 4. Mapa usług i dług techniczny

**Wejście:** CMDB i katalog usług z datą aktualizacji; rejestr usterek i plan zmian.

> Na podstawie [zatwierdzonych plików z datą i wersją] wykonaj kolejno etap 1 — mapa usług: połącz usługi z właścicielami i krytycznymi zależnościami. Etap 2 — dług techniczny: pogrupuj dług według skutku operacyjnego. Przygotuj tabela usługa, zależność, brak oraz lista ryzyko, koszt odkładania, opcja. Wynik oddaj do [osoby zatwierdzającej] przed wysyłką lub zmianą danych.

**Sprawdź:** Właściciele potwierdzają stan; nie szacuj kosztu bez danych.

### 5. Priorytet modernizacji i mapa integracji

**Wejście:** Karty systemów i ograniczenia budżetu; specyfikacje API i rejestr przepływów.

> Na podstawie [zatwierdzonych plików z datą i wersją] wykonaj kolejno etap 1 — priorytet modernizacji: porównaj wymianę, utrzymanie i wycofanie. Etap 2 — mapa integracji: wskaż brakujące kontrakty danych i właścicieli. Przygotuj macierz wariantów oraz lista interfejs, dane, ryzyko. Wynik oddaj do [osoby zatwierdzającej] przed wysyłką lub zmianą danych.

**Sprawdź:** Architekt potwierdza zależności; sprawdź w dokumentacji systemów.

### 6. Plan migracji i przegląd dostępu

**Wejście:** Inwentarz aplikacji i okna zmian; eksport grup i właścicieli zasobów.

> Na podstawie [zatwierdzonych plików z datą i wersją] wykonaj kolejno etap 1 — plan migracji: ułóż etapy migracji z punktem powrotu. Etap 2 — przegląd dostępu: wskaż nadmiernie szerokie przydziały do ręcznej kontroli. Przygotuj harmonogram z warunkami stop oraz lista grupa, zasób, właściciel. Wynik oddaj do [osoby zatwierdzającej] przed wysyłką lub zmianą danych.

**Sprawdź:** Zespół operacji akceptuje; administrator sprawdza uprawnienia.

### 7. Ryzyko copilota i scenariusz incydentu

**Wejście:** Raport udostępniania i klasyfikacji danych; zatwierdzony playbook i opis zdarzenia.

> Na podstawie [zatwierdzonych plików z datą i wersją] wykonaj kolejno etap 1 — ryzyko copilota: wyznacz obszary potencjalnego oversharingu. Etap 2 — scenariusz incydentu: uporządkuj decyzje eskalacyjne bez wykonywania akcji. Przygotuj lista zasób, skutek, naprawa oraz oś czasu, właściciel, dowód. Wynik oddaj do [osoby zatwierdzającej] przed wysyłką lub zmianą danych.

**Sprawdź:** Nie traktuj braku alarmu jako dowodu bezpieczeństwa; incident commander zatwierdza.

### 8. Kontrola backupu i ćwiczenie awaryjne

**Wejście:** Raport kopii i ostatnie próby odtworzenia; zależności krytycznej usługi i runbook.

> Na podstawie [zatwierdzonych plików z datą i wersją] wykonaj kolejno etap 1 — kontrola backupu: wskaż systemy bez potwierdzonego testu odtworzenia. Etap 2 — ćwiczenie awaryjne: zaproponuj scenariusz awarii jednego vendora. Przygotuj tabela usługa, RTO, próba oraz plan ćwiczenia i kryteria. Wynik oddaj do [osoby zatwierdzającej] przed wysyłką lub zmianą danych.

**Sprawdź:** Sprawdź logi testu; nie wykonuj na produkcji.

### 9. Ocena vendora i rejestr podatności

**Wejście:** Umowa, SLA i mapa danych; zweryfikowane wyniki skanowania i ekspozycja.

> Na podstawie [zatwierdzonych plików z datą i wersją] wykonaj kolejno etap 1 — ocena vendora: porównaj ryzyko wyjścia oraz odpowiedzialność za incydent. Etap 2 — rejestr podatności: uszereguj naprawy według skutku i możliwości wykorzystania. Przygotuj lista pytań i luk oraz tabela priorytet, właściciel, termin. Wynik oddaj do [osoby zatwierdzającej] przed wysyłką lub zmianą danych.

**Sprawdź:** Zakupy oraz prawnik oceniają; security potwierdza podatność.

### 10. Polityka urządzeń i przegląd kosztów chmury

**Wejście:** Obecne zasady i zgłoszone wyjątki; raport kosztów i właściciele zasobów.

> Na podstawie [zatwierdzonych plików z datą i wersją] wykonaj kolejno etap 1 — polityka urządzeń: zredaguj zmianę BYOD z granicami dostępu. Etap 2 — przegląd kosztów chmury: wskaż nieprzypisane koszty i możliwe testy optymalizacji. Przygotuj szkic zasad i otwarte pytania oraz tabela koszt, hipoteza, ryzyko. Wynik oddaj do [osoby zatwierdzającej] przed wysyłką lub zmianą danych.

**Sprawdź:** Bezpieczeństwo i HR zatwierdzają; finanse potwierdzają faktury.

## Zasady pracy w tej roli (z wpisu)

### Jak korzystać z tych promptów?

Każdy prompt podaje **wejście, instrukcję, format wyniku i kontrolę**. To szablon pracy z konkretnym, legalnie dostępnym materiałem, a nie polecenie, aby asystent sam wyszukał wszystkie informacje firmy. Microsoft opisuje [cel, kontekst, oczekiwania i źródło](https://support.microsoft.com/en-us/microsoft-365-copilot/get-started-writing-prompts-in-microsoft-365-copilot) jako składniki dobrego promptu. Własne źródło należy wskazać możliwie precyzyjnie: dokument, arkusz, zakres dat i wersję. Nie wklejaj do czatu danych, do których nie masz prawa dostępu.

Zakres odpowiedzi zależy od konta, licencji, ustawień i materiałów dostępnych użytkownikowi. [Dokumentacja Microsoft o źródłach Copilota](https://support.microsoft.com/en-us/microsoft-365-copilot/what-information-does-copilot-use-to-answer-my-prompt) podkreśla, że odpowiedzi mogą opierać się na danych pracy, dołączonych plikach lub sieci, a brak źródła może dać odpowiedź ogólną. Weryfikuj cytowany dokument i rzeczywiste dane, zanim wykorzystasz wynik w decyzji. Przy zadaniach dyrektora IT chodzi przede wszystkim o architektura, konta uprzywilejowane, incydenty i kontrakty IT; osoba odpowiedzialna za wynik to właściciel danej usługi.

| Przed uruchomieniem | Co trzeba ustalić | Dlaczego to ważne |
|---|---|---|
| Zakres | Okres, jednostka, wersja dokumentu i właściciel | Inny zakres daje pozornie porównywalny wynik |
| Dostęp | Kto może odczytać materiał i wynik | Uprawnienie do źródła nie oznacza prawa do dalszej dystrybucji |
| Odbiór | Osoba zatwierdzająca i próg błędu | Szkic nie jest decyzją ani dowodem |
| Braki | Jak oznaczać brak danych | Model nie powinien wypełniać luki wymyśloną liczbą |

Materiał jest uzupełnieniem [przewodnik po promptach dla liderów](https://majchrzycki.com/blog/microsoft-copilot-praktyczne-prompty-dla-nowoczesnych-liderow). W poniższych przykładach wybieraj tylko dane niezbędne do zadania. Jeśli wynik wymaga obliczenia, przeprowadź je w odpowiednim arkuszu lub systemie i uzgodnij z właścicielem danych. Jeśli wymaga interpretacji prawnej, finansowej lub kadrowej, skieruj go do właściwego specjalisty. Copilot przygotowuje szkic i pytania do analizy; nie przejmuje podpisu pod decyzją.

### Jak odebrać wynik, zanim trafi do decyzji?

Sprawdź w pierwszej kolejności, czy wynik opiera się na wskazanym wejściu. Zapisz nazwę pliku, wersję, okres i osobę odpowiedzialną za dane. Potem oceń, czy każdą ważną liczbę, twierdzenie i cytat da się odtworzyć w źródle. Nie traktuj płynnego języka jako dowodu. Przy konfliktach między dokumentami poproś o wskazanie obu wersji i przekazanie rozstrzygnięcia właścicielowi procesu.

| Kontrola | Pytanie odbiorowe | Reakcja na błąd |
|---|---|---|
| Podstawa | Czy użyto właściwej wersji źródła? | Popraw wejście i uruchom próbę ponownie |
| Zakres | Czy wynik obejmuje tylko wskazane zadanie? | Usuń nieuprawnione dane i założenia |
| Liczby | Czy można odtworzyć rachunek? | Zweryfikuj go w systemie źródłowym |
| Decyzja | Czy zaakceptował ją właściciel? | Pozostaw wynik jako szkic |

Zalecenia [Microsoft dotyczące nadzoru nad Copilotem](https://learn.microsoft.com/en-us/microsoft-365/copilot/copilot-controls/security-governance) wskazują ryzyko nadmiernego udostępniania informacji. Przed skalowaniem pracy z promptami przejrzyj uprawnienia do bibliotek i zespołów, zwłaszcza gdy materiał dotyczy architektura, konta uprzywilejowane, incydenty i kontrakty IT. To kontrola organizacyjna, której samo lepsze sformułowanie promptu nie zastąpi. Zasady retencji i audytu dopasuj do polityk organizacji oraz konfiguracji tenantów; nie zakładaj jednakowego działania w każdej firmie.

Specyfika tej roli wymaga dodatkowego punktu odniesienia: [zalecenia Microsoft dotyczące bezpieczeństwa i nadzoru](https://learn.microsoft.com/en-us/microsoft-365/copilot/copilot-controls/security-governance). Dokumentacja Microsoft odnosi się do dostępnych kontroli Microsoft 365. Stan bezpieczeństwa trzeba sprawdzić w konfiguracji własnego tenanta, także w systemach poza Microsoft 365. Źródło nie potwierdza jakości żadnego wyniku wygenerowanego dla firmy. Wykorzystaj je do przygotowania pytań odbiorowych, nie jako automatyczną odpowiedź na indywidualną sprawę.

### Od czego zacząć?

Wybierz jeden prompt używany co tydzień, przygotuj mały zestaw zatwierdzonych danych i porównaj pełny czas pracy z dotychczasowym sposobem. Policz również korekty, błędy i przypadki, których nie można było rozstrzygnąć. Po dwóch lub trzech cyklach ustal, czy proces pomaga podejmować lepszą decyzję, czy jedynie szybciej tworzy szkic. Jeżeli odpowiedzialność przechodzi do innego działu, zapisz punkt przekazania i dowód akceptacji. Kolejną perspektywę pokazują [prompty dla dyrektora kreatywnego](https://majchrzycki.com/blog/zarzadzanie-z-microsoft-copilot-praktyczne-prompty-dla-dyrektora-kreatywnego); potraktuj ją jako sąsiednią rolę, a nie zastępstwo dla właściciela obecnego procesu.
