import * as Yup from 'yup';
import FIELDS from './fields';

export default Yup.object().shape({
  email: FIELDS.email,
  password: FIELDS.password,
});
