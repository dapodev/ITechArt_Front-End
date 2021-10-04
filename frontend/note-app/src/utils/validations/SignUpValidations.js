import {
  EMAIL_PATTERN,
  NAME_PATTERN,
  PASSWORD_PATTERN,
} from '../../config/constants';

const nameValidator = new RegExp(NAME_PATTERN);
const emailValidator = new RegExp(EMAIL_PATTERN);
const passwordValidator = new RegExp(PASSWORD_PATTERN);

const validateEmail = (values, errors) => {
  if (!values.email) {
    errors.email = 'E-mail is required!';
  } else if (!emailValidator.test(values.email)) {
    errors.email = 'E-mail is not in a correct form!';
  }

  return errors;
};

const validateFirstName = (values, errors) => {
  if (!values.firstName) {
    errors.firstName = 'First name is neccessary!';
  } else if (!nameValidator.test(values.firstName)) {
    errors.firstName = 'First name has incorrect form.';
  }

  return errors;
};

const validateLastName = (values, errors) => {
  if (!values.lastName) {
    errors.lastName = 'Last name is neccessary!';
  } else if (!nameValidator.test(values.lastName)) {
    errors.lastName = 'Last name has incorrect form.';
  }

  return errors;
};

const validateBirthday = (values, errors) => {
  if (!values.birth) {
    errors.birth = 'Birthday is required!';
  } else if (new Date() <= new Date(values.birth)) {
    errors.birth = 'Incorrect date!';
  }

  return errors;
};

const validatePassword = (values, errors) => {
  if (!values.password) {
    errors.password = 'Pick a password.';
  } else if (!passwordValidator.test(values.password)) {
    errors.password = 'Password is too weak.';
  }

  return errors;
};

const validateConfirmPassword = (values, errors) => {
  if (!values.confirmPassword) {
    errors.confirmPassword = 'Confirm your password.';
  } else if (values.password !== values.confirmPassword) {
    errors.confirmPassword = 'Passwords are not equal.';
  }

  return errors;
};

export const SignUpValidations = [
  validateEmail,
  validateFirstName,
  validateLastName,
  validateBirthday,
  validatePassword,
  validateConfirmPassword,
];
