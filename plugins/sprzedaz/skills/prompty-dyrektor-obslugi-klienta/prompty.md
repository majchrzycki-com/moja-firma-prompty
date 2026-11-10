# Biblioteka promptów: Dyrektor obsługi klienta

Źródło: [„Microsoft Copilot: 30 promptów dla obsługi”](https://majchrzycki.com/blog/zarzadzanie-z-microsoft-copilot-praktyczne-prompty-dla-dyrektora-obs%C5%82ugi-klienta-customer-service-director?utm_source=github&utm_medium=referral&utm_campaign=moja-firma-prompty&utm_content=prompty-dyrektor-obslugi-klienta), Krzysztof Majchrzycki, majchrzycki.com. Stan wpisu: 2026-11-11. Licencja MIT.

Prompty pisano pod Microsoft 365 Copilot. W innych narzędziach działają prompty z grupy „Dowolny czat”, a pozostałe wymagają załączenia pliku albo pracy etapami.

## Dowolny czat

Narzędzia: Anthropic Claude, OpenAI ChatGPT, Google Gemini, Microsoft 365 Copilot Chat.

### 1. Powód kontaktu

**Wejście:** Zanonimizowane zgłoszenia z jednej kolejki.

> Pogrupuj rzeczywiste potrzeby klientów, odróżnij objaw od przyczyny.

**Sprawdź:** Lider czyta próbkę oryginałów.

### 2. Priorytet kolejki

**Wejście:** Statusy spraw, zobowiązania SLA i wpływ na klienta.

> Zaproponuj kolejność według skutku oraz terminu bez automatycznej zmiany priorytetu.

**Sprawdź:** Dyspozytor potwierdza wyjątki.

### 3. Duplikaty zgłoszeń

**Wejście:** Identyfikatory i opisy zgłoszeń bez zbędnych danych osobowych.

> Wskaż możliwe duplikaty i rozbieżności do oceny pracownika.

**Sprawdź:** Nie scalaj rekordów automatycznie.

### 4. Ścieżka klienta

**Wejście:** Historia kontaktów i status rozwiązania.

> Odtwórz przekazania między kanałami oraz miejsca utraty kontekstu.

**Sprawdź:** Sprawdź kolejność zdarzeń.

### 5. Brak danych

**Wejście:** Opis sprawy i lista wymaganych informacji.

> Ułóż minimalny zestaw pytań niezbędnych do rozwiązania.

**Sprawdź:** Nie żądaj dokumentów bez potrzeby.

### 6. Weryfikacja tożsamości

**Wejście:** Zatwierdzona procedura identyfikacji klienta.

> Zaproponuj kroki zgodne z procedurą bez zdradzania danych konta.

**Sprawdź:** Security potwierdza scenariusz.

### 7. SLA zagrożone

**Wejście:** Czas otwarcia, kalendarz usługi i reguły SLA.

> Wyłap sprawy z ryzykiem przekroczenia terminu.

**Sprawdź:** System SLA potwierdza obliczenie.

### 8. Sprawa wielowątkowa

**Wejście:** Notatki z kilku zespołów i aktualny stan.

> Napisz neutralne podsumowanie dla następnego właściciela.

**Sprawdź:** Przekazujący zatwierdza historię.

### 9. Odpowiedź ze źródłem

**Wejście:** Zgłoszenie i aktualny artykuł bazy wiedzy.

> Zaproponuj odpowiedź ograniczoną do wskazanej procedury.

**Sprawdź:** Specjalista sprawdza wersję artykułu.

### 10. Niedostępna usługa

**Wejście:** Potwierdzony komunikat incydentowy.

> Napisz aktualizację bez wymyślania godziny naprawy.

**Sprawdź:** Incident manager zatwierdza.

## Aplikacje Microsoft 365

Narzędzia: Excel, Word, PowerPoint, Outlook, Teams z Microsoft 365 Copilot; w innym narzędziu załącz plik.

### 1. Wniosek o zwrot

**Aplikacja:** Word; pracuj na otwartym dokumencie roboczym.

**Wejście:** Polityka zwrotów i stan zamówienia.

> Wypisz kryteria do sprawdzenia, bez rozstrzygania uprawnienia klienta.

**Sprawdź:** Uprawniony pracownik podejmuje decyzję.

### 2. Skarga emocjonalna

**Aplikacja:** Word; pracuj na otwartym dokumencie roboczym.

**Wejście:** Treść skargi i potwierdzone fakty.

> Ułóż empatyczne potwierdzenie bez przyznawania nieustalonej winy.

**Sprawdź:** Lider sprawdza ton i zobowiązania.

### 3. Eskalacja ekspercka

**Aplikacja:** Word; pracuj na otwartym dokumencie roboczym.

**Wejście:** Opis sprawy i katalog kompetencji.

> Wskaż właściwy zespół oraz pytanie, które ma rozstrzygnąć.

**Sprawdź:** Odbiorca potwierdza przyjęcie.

### 4. Klient wraca

**Aplikacja:** Word; pracuj na otwartym dokumencie roboczym.

**Wejście:** Dwa kontakty i rezultat poprzedniej próby.

> Wskaż, dlaczego poprzednia odpowiedź nie zakończyła sprawy.

**Sprawdź:** Nie powtarzaj nieskutecznej instrukcji.

### 5. Wariant prostym językiem

**Aplikacja:** Word; pracuj na otwartym dokumencie roboczym.

**Wejście:** Zatwierdzona odpowiedź techniczna.

> Przeredaguj ją na jasny język bez zmiany warunków usługi.

**Sprawdź:** Ekspert porównuje znaczenie.

### 6. Zamknięcie sprawy

**Aplikacja:** Word; pracuj na otwartym dokumencie roboczym.

**Wejście:** Stan systemu i potwierdzona czynność.

> Zaproponuj komunikat z rezultatem i drogą powrotu.

**Sprawdź:** Sprawdź wykonanie czynności.

### 7. Jakość bazy wiedzy

**Aplikacja:** Word; pracuj na otwartym dokumencie roboczym.

**Wejście:** Artykuły i zgłoszenia nierozwiązane.

> Wskaż treści nieaktualne, sprzeczne lub trudne do znalezienia.

**Sprawdź:** Autor artykułu potwierdza poprawkę.

### 8. Powroty spraw

**Aplikacja:** Word; pracuj na otwartym dokumencie roboczym.

**Wejście:** Agregaty ponownych kontaktów w tym samym temacie.

> Porównaj tematy i kanały, zachowaj definicję ponownego kontaktu.

**Sprawdź:** Analityk sprawdza mianownik.

### 9. Ocena próbki odpowiedzi

**Aplikacja:** Word; pracuj na otwartym dokumencie roboczym.

**Wejście:** Anonimowa próbka i rubryka jakości.

> Oceń zgodność ze źródłem, ton i faktyczny następny krok.

**Sprawdź:** Osoba oceniająca kalibruje rubrykę.

### 10. Obciążenie zespołu

**Aplikacja:** Teams; pracuj na otwartym zapisie rozmowy lub spotkania.

**Wejście:** Wolumen spraw i dostępność ludzi.

> Wskaż godziny przeciążenia i zadania możliwe do przesunięcia.

**Sprawdź:** Menedżer potwierdza dyżury.

## Zadanie wieloetapowe

Narzędzia: Microsoft 365 Copilot Cowork, Anthropic Claude Cowork, tryb agenta OpenAI ChatGPT.

### 1. Plan szkolenia

**Wejście:** Powtarzające się błędy i kompetencje roli.

> Na podstawie [zatwierdzonych plików z datą i wersją] zaproponuj ćwiczenia na rzeczywistych typach spraw. Przygotuj plan ćwiczenie, dowód poprawy. Wynik oddaj do [osoby zatwierdzającej] przed wysyłką lub zmianą danych.

**Sprawdź:** Nie oceniaj osoby z pojedynczego błędu.

### 2. Pomiar pilota

**Wejście:** Stan bazowy i wyniki jednej kategorii spraw.

> Na podstawie [zatwierdzonych plików z datą i wersją] porównaj czas, poprawność, powroty oraz eskalacje. Przygotuj raport z ograniczeniami. Wynik oddaj do [osoby zatwierdzającej] przed wysyłką lub zmianą danych.

**Sprawdź:** Sprawdź porównywalność spraw.

### 3. Głos klienta

**Wejście:** Anonimowe opinie i statusy rozwiązań.

> Na podstawie [zatwierdzonych plików z datą i wersją] połącz sygnały jakościowe z etapem procesu, bez udawania reprezentatywności. Przygotuj lista problem, dowód, test. Wynik oddaj do [osoby zatwierdzającej] przed wysyłką lub zmianą danych.

**Sprawdź:** Zespół produktu potwierdza interpretację.

### 4. Powód kontaktu i priorytet kolejki

**Wejście:** Zanonimizowane zgłoszenia z jednej kolejki; statusy spraw, zobowiązania SLA i wpływ na klienta.

> Na podstawie [zatwierdzonych plików z datą i wersją] wykonaj kolejno etap 1 — powód kontaktu: pogrupuj rzeczywiste potrzeby klientów, odróżnij objaw od przyczyny. Etap 2 — priorytet kolejki: zaproponuj kolejność według skutku oraz terminu bez automatycznej zmiany priorytetu. Przygotuj tabela temat, przykład, luka oraz lista spraw i uzasadnień. Wynik oddaj do [osoby zatwierdzającej] przed wysyłką lub zmianą danych.

**Sprawdź:** Lider czyta próbkę oryginałów; dyspozytor potwierdza wyjątki.

### 5. Duplikaty zgłoszeń i ścieżka klienta

**Wejście:** Identyfikatory i opisy zgłoszeń bez zbędnych danych osobowych; historia kontaktów i status rozwiązania.

> Na podstawie [zatwierdzonych plików z datą i wersją] wykonaj kolejno etap 1 — duplikaty zgłoszeń: wskaż możliwe duplikaty i rozbieżności do oceny pracownika. Etap 2 — ścieżka klienta: odtwórz przekazania między kanałami oraz miejsca utraty kontekstu. Przygotuj pary zgłoszeń z dowodem oraz oś czasu z właścicielami. Wynik oddaj do [osoby zatwierdzającej] przed wysyłką lub zmianą danych.

**Sprawdź:** Nie scalaj rekordów automatycznie; sprawdź kolejność zdarzeń.

### 6. Brak danych i weryfikacja tożsamości

**Wejście:** Opis sprawy i lista wymaganych informacji; zatwierdzona procedura identyfikacji klienta.

> Na podstawie [zatwierdzonych plików z datą i wersją] wykonaj kolejno etap 1 — brak danych: ułóż minimalny zestaw pytań niezbędnych do rozwiązania. Etap 2 — weryfikacja tożsamości: zaproponuj kroki zgodne z procedurą bez zdradzania danych konta. Przygotuj wiadomość z pytaniami oraz checklista pracownika. Wynik oddaj do [osoby zatwierdzającej] przed wysyłką lub zmianą danych.

**Sprawdź:** Nie żądaj dokumentów bez potrzeby; security potwierdza scenariusz.

### 7. Sla zagrożone i sprawa wielowątkowa

**Wejście:** Czas otwarcia, kalendarz usługi i reguły SLA; notatki z kilku zespołów i aktualny stan.

> Na podstawie [zatwierdzonych plików z datą i wersją] wykonaj kolejno etap 1 — sla zagrożone: wyłap sprawy z ryzykiem przekroczenia terminu. Etap 2 — sprawa wielowątkowa: napisz neutralne podsumowanie dla następnego właściciela. Przygotuj lista termin, skutek, właściciel oraz stan, otwarte pytania, obietnice. Wynik oddaj do [osoby zatwierdzającej] przed wysyłką lub zmianą danych.

**Sprawdź:** System SLA potwierdza obliczenie; przekazujący zatwierdza historię.

### 8. Odpowiedź ze źródłem i niedostępna usługa

**Wejście:** Zgłoszenie i aktualny artykuł bazy wiedzy; potwierdzony komunikat incydentowy.

> Na podstawie [zatwierdzonych plików z datą i wersją] wykonaj kolejno etap 1 — odpowiedź ze źródłem: zaproponuj odpowiedź ograniczoną do wskazanej procedury. Etap 2 — niedostępna usługa: napisz aktualizację bez wymyślania godziny naprawy. Przygotuj tekst, źródło, krok klienta oraz krótka wiadomość i kolejny punkt kontaktu. Wynik oddaj do [osoby zatwierdzającej] przed wysyłką lub zmianą danych.

**Sprawdź:** Specjalista sprawdza wersję artykułu; incident manager zatwierdza.

### 9. Wniosek o zwrot i skarga emocjonalna

**Wejście:** Polityka zwrotów i stan zamówienia; treść skargi i potwierdzone fakty.

> Na podstawie [zatwierdzonych plików z datą i wersją] wykonaj kolejno etap 1 — wniosek o zwrot: wypisz kryteria do sprawdzenia, bez rozstrzygania uprawnienia klienta. Etap 2 — skarga emocjonalna: ułóż empatyczne potwierdzenie bez przyznawania nieustalonej winy. Przygotuj lista faktów i braków oraz odpowiedź i plan wyjaśnienia. Wynik oddaj do [osoby zatwierdzającej] przed wysyłką lub zmianą danych.

**Sprawdź:** Uprawniony pracownik podejmuje decyzję; lider sprawdza ton i zobowiązania.

### 10. Eskalacja ekspercka i klient wraca

**Wejście:** Opis sprawy i katalog kompetencji; dwa kontakty i rezultat poprzedniej próby.

> Na podstawie [zatwierdzonych plików z datą i wersją] wykonaj kolejno etap 1 — eskalacja ekspercka: wskaż właściwy zespół oraz pytanie, które ma rozstrzygnąć. Etap 2 — klient wraca: wskaż, dlaczego poprzednia odpowiedź nie zakończyła sprawy. Przygotuj notatka przekazania oraz lista luk i nowy krok. Wynik oddaj do [osoby zatwierdzającej] przed wysyłką lub zmianą danych.

**Sprawdź:** Odbiorca potwierdza przyjęcie; nie powtarzaj nieskutecznej instrukcji.

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

### Co wyróżnia decyzje dyrektora obsługi klienta?

W obsłudze liczy się wynik całej sprawy, nie tylko szybkość pierwszej wiadomości. Skrócenie czasu odpowiedzi może zwiększyć liczbę ponownych kontaktów, jeśli klient dostał tekst ogólny. Mierz poprawne zakończenie, czas do rozwiązania, powroty i eskalacje. Jeżeli organizacja korzysta z SLA, obowiązuje konkretny zakres umowy, kalendarz i wyjątki, nie szablon wygenerowany przez model.

### Kiedy propozycja odpowiedzi nie kończy sprawy?

Zanim pozwolisz Copilotowi tworzyć odpowiedź, ustal, czy klient prosi o informację, zmianę danych, reklamację czy wykonanie zobowiązania. Każda z tych sytuacji ma inne uprawnienia i dowody. Prośba o zwrot nie oznacza, że zwrot został zatwierdzony. Pytanie o termin dostawy nie upoważnia do podania terminu z poprzedniej sprawy. W szablonie odpowiedzi pokaż pracownikowi źródło oraz stan operacji. Jeżeli źródło jest nieaktualne, łatwiejszy w odczycie tekst może zwiększyć szkodę, bo klient potraktuje go jak pewne potwierdzenie.

Mierz pełną drogę sprawy. Pierwsza odpowiedź po kilku sekundach jest słabym wynikiem, jeśli klient wraca trzy razy i za każdym razem musi odtwarzać kontekst. Powiąż kontakty według identyfikatora sprawy, z zachowaniem zasad prywatności. Zapisz liczbę eskalacji, ponownych kontaktów i korekt po błędnej odpowiedzi. W próbie dołącz przypadki bez prawa do danych, z wyjątkiem od zasad i z awarią systemu. Użytkownik musi dostać uczciwy opis tego, co wiadomo, oraz drogę do człowieka.

Przejrzyj bazę wiedzy przed pilotem. Każdy artykuł powinien mieć właściciela, datę aktualizacji, zakres produktów oraz sygnał wycofania. Jeśli dwie instrukcje są sprzeczne, nie proś modelu o wybór bardziej przekonującej. Przekaż konflikt właścicielom procedury. Dopiero po usunięciu luki porównaj propozycję Copilota z odpowiedzią pracownika. Jeżeli narzędzie skraca przygotowanie tekstu, ale zwiększa liczbę korekt w zespole eksperckim, policz ten koszt w wyniku pilota.

Warunkiem poszerzenia pilota powinno być utrzymanie jakości na trudniejszych sprawach. Zespół może najpierw dopuścić Copilota do przygotowywania szkiców, potem do wskazywania artykułów wiedzy, a dopiero po sprawdzeniu uprawnień rozważyć działania w systemie. Każdy etap wymaga innego testu. Szczególnie ważne są sprawy, w których klient ma ograniczone prawo do informacji albo wcześniej otrzymał błędną obietnicę. Jeśli narzędzie nie potrafi wskazać pewnego źródła, powinno pomóc w eskalacji, a nie tworzyć coraz bardziej stanowczą odpowiedź.

Przy pierwszej próbie ogranicz zadanie do jednej decyzji, której przebieg znasz również bez AI. Pierwszy pilot może objąć jedną kategorię prostych pytań o status sprawy. Przygotuj zatwierdzoną bazę wiedzy, przykłady nieaktualnych artykułów, brak danych i klienta bez odpowiednich uprawnień. Oceniaj, czy propozycja odpowiedzi ma prawidłową podstawę, czy agent przekazał przypadek do człowieka i czy sprawa wróciła. Klient powinien zachować drogę do osoby odpowiedzialnej. W ten sposób można zobaczyć, czy narzędzie pomaga w pracy, czy jedynie szybciej tworzy dokument do poprawy. Pomiar obejmuje pełny czas do zaakceptowanego wyniku, liczbę korekt i skutki dla odbiorcy.

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

Dodatkowy punkt odniesienia dla tej roli to [dokumentacja Microsoft o SLA w Dynamics 365 Customer Service](https://learn.microsoft.com/en-us/dynamics365/customer-service/use/overview-service-level-agreements). Opis SLA dotyczy konkretnego produktu Dynamics 365; rzeczywiste zobowiązania obsługi wynikają z umów i własnej konfiguracji firmy. Użyj źródła do sformułowania pytań odbiorowych, a nie do przypisywania mu wyników własnej firmy. Dalszą perspektywę pokazują [prompty dla dyrektora operacyjnego](https://majchrzycki.com/blog/zarzadzanie-z-microsoft-copilot-praktyczne-prompty-dla-dyrektora-operacyjnego-chief-operations-officer); ten link prowadzi do sąsiedniej roli w procesie i ułatwia określenie punktu przekazania.
