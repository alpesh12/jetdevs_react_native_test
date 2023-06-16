import i18n from './i18next';

export const getLocaleConfig = () => {
  return {
    locale: i18n.language,
  };
};
