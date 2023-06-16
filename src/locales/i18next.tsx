import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translate from './translation';

const { en } = translate;

i18n.use(initReactI18next).init({
  // lng: RNLocalize.getLocales()[0].languageCode,
  compatibilityJSON: 'v3',
  fallbackLng: 'en',
  resources: {
    en,
  },
});
export default i18n;
