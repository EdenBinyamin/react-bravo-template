import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from './utils/translations/en';
import he from './utils/translations/he';
import 'react-i18next';

i18n.use(LanguageDetector).init({
  resources: {
    en,
    he,
  },
  lng: 'he',
  fallbackLng: 'he',
  debug: false,
  ns: ['translations'],
  defaultNS: 'translations',
  interpolation: {
    escapeValue: false,
    formatSeparator: ',',
  },
  react: {
    wait: true,
  },
});

export default i18n;

declare module 'react-i18next' {
  export interface Resources {
    translation: typeof en.translations;
  }
}
