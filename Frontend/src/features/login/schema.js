import * as yup from 'yup';

const Schema = yup.object().shape({
  first_name: yup
    .string()
    .required('Lirst name is reqired mate')
    .min(4, 'HAHA JOE, YOURE OUT OF LUCK TODAY'),

  last_name: yup
    .string()
    .required('Last name is required matey')
    .min(3, 'If your last name is JOE thats fine'),

  email: yup
    .string()
    .email('Must be a valid email address.')
    .required('We need this, come on hurry up'),

  password: yup
    .string()
    .required('Password is Required')
    .min(8, 'must contain 8 characters'),

  tos: yup
    .boolean()
    .required('The terms and conditions must be accepted')
    .oneOf([true], 'The terms and conditions must be accepted'),
});

export default Schema;
