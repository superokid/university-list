import * as Yup from 'yup';
export const EMAIL = 'Email';

export const VALIDATION_SCHEMA = Yup.object().shape({
  [EMAIL]: Yup.string().email().required('Required field'),
});
