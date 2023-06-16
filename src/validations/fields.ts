import * as Yup from 'yup';
import config from './config';

const FIELDS = {
  email: Yup.string()
    .required('Required field')
    .email('Please enter a valid e-mail address')
    .min(6, 'Use 6 or more characters')
    .max(100, 'Only 100 symbols allowed'),
  password: Yup.string()
    .min(
      config.MIN_PASSWORD_LENGTH,
      `Use ${config.MIN_PASSWORD_LENGTH} or more characters`,
    )
    .max(
      config.MAX_PASSWORD_LENGTH,
      `Only ${config.MAX_PASSWORD_LENGTH} symbols allowed`,
    )
    .required('Required field'),
};

export default FIELDS;
