import { SignUpValidations } from '../../../utils/validations/SignUpValidations';

let values;
let errors;

beforeEach(() => {
  values = {};
  errors = {};
});

test('signUpValidations correct email test', () => {
  values.email = 'correct.email@domen.zone';
  errors = SignUpValidations.reduce(
    (deltaErrors, validator) => validator(values, deltaErrors),
    {}
  );

  expect(errors.email).toBeUndefined();
});

test('signUpValidations incorrect email test', () => {
  values.email = 'correct.email@domen';
  errors = SignUpValidations.reduce(
    (deltaErrors, validator) => validator(values, deltaErrors),
    {}
  );

  expect(errors.email).not.toBeUndefined();
});

test('signUpValidations correct first name test', () => {
  values.firstName = 'Daniel';
  errors = SignUpValidations.reduce(
    (deltaErrors, validator) => validator(values, deltaErrors),
    {}
  );

  expect(errors.firstName).toBeUndefined();
});

test('signUpValidations incorrect first name test', () => {
  values.firstName = 'daniel';
  errors = SignUpValidations.reduce(
    (deltaErrors, validator) => validator(values, deltaErrors),
    {}
  );

  expect(errors.firstName).not.toBeUndefined();
});

test('signUpValidations correct last name test', () => {
  values.lastName = 'Apolo';
  errors = SignUpValidations.reduce(
    (deltaErrors, validator) => validator(values, deltaErrors),
    {}
  );

  expect(errors.lastName).toBeUndefined();
});

test('signUpValidations incorrect last name test', () => {
  values.lastName = 'IncorrectApolo';
  errors = SignUpValidations.reduce(
    (deltaErrors, validator) => validator(values, deltaErrors),
    {}
  );

  expect(errors.lastName).not.toBeUndefined();
});

test('signUpValidations correct bday test', () => {
  values.birth = new Date('2002-04-25');
  errors = SignUpValidations.reduce(
    (deltaErrors, validator) => validator(values, deltaErrors),
    {}
  );

  expect(errors.birth).toBeUndefined();
});

test('signUpValidations incorrect bday test', () => {
  values.birth = new Date('3000-01-01');
  errors = SignUpValidations.reduce(
    (deltaErrors, validator) => validator(values, deltaErrors),
    {}
  );

  expect(errors.birth).not.toBeUndefined();
});

test('signUpValidations correct password test', () => {
  values.password = '12345678';
  errors = SignUpValidations.reduce(
    (deltaErrors, validator) => validator(values, deltaErrors),
    {}
  );

  expect(errors.password).toBeUndefined();
});

test('signUpValidations incorrect password test', () => {
  values.password = '123';
  errors = SignUpValidations.reduce(
    (deltaErrors, validator) => validator(values, deltaErrors),
    {}
  );

  expect(errors.password).not.toBeUndefined();
});

test('signUpValidations correct confirm password test', () => {
    values.password = '12345678';
    values.confirmPassword = '12345678'
    errors = SignUpValidations.reduce(
      (deltaErrors, validator) => validator(values, deltaErrors),
      {}
    );
  
    expect(errors.confirmPassword).toBeUndefined();
  });
  
  test('signUpValidations incorrect confirm password test', () => {
    values.password = '12345678';
    values.confirmPassword = '12345';
    errors = SignUpValidations.reduce(
      (deltaErrors, validator) => validator(values, deltaErrors),
      {}
    );
  
    expect(errors.confirmPassword).not.toBeUndefined();
  });