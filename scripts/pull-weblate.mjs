import fs from 'node:fs/promises';

const API_KEY = process.env.WEBLATE_API_KEY || 'WKLEJ_SWOJ_KLUCZ_API';
const WEBLATE_URL = process.env.WEBLATE_URL || 'http://localhost:8080';
const PROJECT = 'cloudpulse-ops';

// 1. Pobierz pliki JSON (komponent: app-json)
for (const lang of ['en', 'pl', 'de']) {
  const url = `${WEBLATE_URL}/api/translations/${PROJECT}/app-json/${lang}/file/`;
  const res = await fetch(url, { headers: { Authorization: `Token ${API_KEY}` } });
  if (res.ok) {
    await fs.writeFile(`public/i18n/${lang}.json`, await res.text(), 'utf8');
    console.log(`[JSON] Zaktualizowano public/i18n/${lang}.json`);
  } else {
    console.warn(`[JSON] Pominięto ${lang} (HTTP ${res.status})`);
  }
}

// 2. Pobierz pliki XLIFF (komponent: app-xliff)
for (const lang of ['pl', 'de']) {
  const url = `${WEBLATE_URL}/api/translations/${PROJECT}/app-xliff/${lang}/file/`;
  const res = await fetch(url, { headers: { Authorization: `Token ${API_KEY}` } });
  if (res.ok) {
    await fs.writeFile(`src/locale/messages.${lang}.xlf`, await res.text(), 'utf8');
    console.log(`[XLIFF] Zaktualizowano src/locale/messages.${lang}.xlf`);
  } else {
    console.warn(`[XLIFF] Pominięto ${lang} (HTTP ${res.status})`);
  }
}
