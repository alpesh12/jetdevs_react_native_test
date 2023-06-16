import common from './common.json';
import errors from './errors.json';

export default {
  translation: {
    ...common.formAccountData,
    ...common.loginData,
    ...errors,
  },
};
