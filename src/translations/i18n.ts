import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// locales
import pt from './pt/pt.json';
import en from './en/en.json';
import es from './es/es.json';
import fr from './fr/fr.json';

const resources = {
  en: {
    translation: en,
  },
  pt: {
    translation: pt,
  },
  es: {
    translation: es,
  },
  fr: {
    translation: fr,
  },
};

const i18n = i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    debug: true,
    // lng: 'en',
    fallbackLng: 'en',
    keySeparator: false,
    interpolation: {
      escapeValue: false,
      formatSeparator: ',',
    },
    react: {
      useSuspense: true,
    },
    cache: {
      enabled: true,
    },
    detection: {
      order: [
        'querystring',
        'cookie',
        'localStorage',
        'sessionStorage',
        'navigator',
        'htmlTag',
      ],
      lookupQuerystring: 'lng',
      lookupCookie: 'i18next',
      lookupLocalStorage: 'lng',
      lookupSessionStorage: 'lng',

      // cache user language
      caches: ['localStorage'],
      excludeCacheFor: ['cimode'],
    },
  });

document.documentElement.lang = i18next.language;

export default i18n;
