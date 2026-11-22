# CloudPulse Ops — Angular + Weblate i18n Starter (JSON + XLIFF)

Kompletny projekt testowy dla lokalnego Weblate (`http://localhost:8080`) zawierający:
- **4 podstrony**: Dashboard (karty KPI, tabela klastrów), Incydenty (filtrowanie, statusy), Billing (plany cenowe), Ustawienia (formularz).
- **2 komponenty współdzielone**: `NavbarComponent` (nawigacja + przełącznik EN/PL/DE) oraz `KpiCardComponent`.
- **Hybrydowe i18n**:
  - `public/i18n/{en,pl,de}.json` (`@ngx-translate/core`) — w `pl.json` i `de.json` celowo brakuje części kluczy i sekcji, żeby przetestować paski postępu, interpolację zmiennych (`{{region}}`, `{{days}}`) oraz walidację w Weblate.
  - `src/locale/messages.{,pl,de}.xlf` (`@angular/localize`) — gotowe pliki XLIFF 1.2 z opisami kontekstowymi (`<note>`).

## Szybki start

1. Zainstaluj zależności i uruchom aplikację:
   ```bash
   npm install
   npm start
   ```
2. Spakuj paczki do wrzucenia do Weblate:
   - `public/i18n/*.json` -> spakuj jako `json-bundle.zip`
   - `src/locale/*.xlf` -> spakuj jako `xliff-bundle.zip`
3. W Weblate utwórz projekt `cloudpulse-ops` i dwa komponenty:
   - **Komponent 1 (`app-json`)**: Upload ZIP (`json-bundle.zip`), format `JSON nested structure file`, maska `*.json`, plik bazowy `en.json`.
   - **Komponent 2 (`app-xliff`)**: Upload ZIP (`xliff-bundle.zip`), format `XLIFF 1.2 translation file`, maska `messages.*.xlf`, szablon źródłowy `messages.xlf`.
4. Po przetłumaczeniu w Weblate wpisz swój token w `scripts/pull-weblate.mjs` i pobierz zmiany:
   ```bash
   npm run weblate:pull
   ```
