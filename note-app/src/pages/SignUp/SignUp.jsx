import React, { useState } from 'react';
import { Formik } from 'formik';
import { Input } from 'antd';
import { Link, Redirect } from 'react-router-dom';
import { Button, Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import PropTypes from 'prop-types';

import PageLayout from '../../components/common/PageLayout/PageLayout';
import { styles } from './styles';
import {
  ACTION_TYPES,
  EMAIL_PATTERN,
  NAME_PATTERN,
  PASSWORD_PATTERN,
  ROUTES,
  USER_LIST_CELL,
  SNACKBAR_DURATION,
} from '../../config/constants';
import { getIsLogged } from '../../utils/selectors';

const SignUp = ({ store }) => {
  const emailValidator = new RegExp(EMAIL_PATTERN);
  const nameValidator = new RegExp(NAME_PATTERN);
  const passwordValidator = new RegExp(PASSWORD_PATTERN);

  const onRegistration = (form) => {
    const newUser = {
      email: form.email,
      password: form.password,
      firstName: form.firstName,
      lastName: form.lastName,
      birth: form.birth,
    };

    const userList = JSON.parse(localStorage.getItem(USER_LIST_CELL))
      ? JSON.parse(localStorage.getItem(USER_LIST_CELL))
      : [];

    if (userList.filter((user) => user.email === newUser.email).length > 0) {
      showMessage('User already exists!', 'error');
    } else {
      //sucessfully registered
      userList.push(newUser);

      localStorage.setItem(USER_LIST_CELL, JSON.stringify(userList));

      showMessage('Sucessfully registered.', 'success');
      setTimeout(() => {
        store.dispatch({ type: ACTION_TYPES.signIn, payload: newUser });
      }, SNACKBAR_DURATION);
    }
  };

  const validateForm = (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = 'E-mail is required!';
    } else if (!emailValidator.test(values.email)) {
      errors.email = 'E-mail is not in a correct form!';
    }

    if (!values.firstName) {
      errors.firstName = 'First name is neccessary!';
    } else if (!nameValidator.test(values.firstName)) {
      errors.firstName = 'First name has incorrect form.';
    }

    if (!values.lastName) {
      errors.lastName = 'Last name is neccessary!';
    } else if (!nameValidator.test(values.lastName)) {
      errors.lastName = 'Last name has incorrect form.';
    }

    if (!values.birth) {
      errors.birth = 'Birthday is required!';
    } else if (new Date() <= new Date(values.birth)) {
      errors.birth = 'Incorrect date!';
    }

    if (!values.password) {
      errors.password = 'Pick a password.';
    } else if (!passwordValidator.test(values.password)) {
      errors.password = 'Password is too weak.';
    }

    if (!values.confirmPassword) {
      errors.confirmPassword = 'Confirm your password.';
    } else if (values.password !== values.confirmPassword) {
      errors.confirmPassword = 'Passwords are not equal.';
    }

    return errors;
  };

  const [isSnackOpened, setSnackOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertType, setAlertType] = useState('');

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setSnackOpen(false);
  };

  const showMessage = (message, type = 'error') => {
    setAlertType(type);
    setAlertMessage(message);
    setSnackOpen(true);
    setTimeout(() => {
      setSnackOpen(false);
    }, SNACKBAR_DURATION);
  };

  if (getIsLogged(store)) {
    return <Redirect to={ROUTES.myNotes} />;
  }

  return (
    <PageLayout>
      <h1 style={styles.title}>Sign Up</h1>
      <Formik
        initialValues={{
          email: '',
          firstName: '',
          lastName: '',
          birth: '',
          password: '',
          confirmPassword: '',
        }}
        validate={validateForm}
        onSubmit={onRegistration}
      >
        {({ values, errors, handleChange, handleSubmit }) => (
          <form style={styles.loginForm} onSubmit={onRegistration}>
            <Input
              style={styles.input}
              placeholder="E-mail"
              name="email"
              value={values.email}
              onChange={handleChange}
            />
            <div style={styles.errorMessage}>{errors.email}</div>
            <Input
              style={styles.input}
              placeholder="First name"
              name="firstName"
              value={values.firstName}
              onChange={handleChange}
            />
            <div style={styles.errorMessage}>{errors.firstName}</div>
            <Input
              style={styles.input}
              placeholder="Last name"
              name="lastName"
              value={values.lastName}
              onChange={handleChange}
            />
            <div style={styles.errorMessage}>{errors.lastName}</div>
            <Input
              style={styles.datePicker}
              type="date"
              name="birth"
              value={values.birth}
              onChange={handleChange}
            />
            <div style={styles.errorMessage}>{errors.birth}</div>
            <Input
              style={styles.input}
              type="password"
              placeholder="Password"
              name="password"
              value={values.password}
              onChange={handleChange}
            />
            <div style={styles.errorMessage}>{errors.password}</div>
            <Input
              style={styles.input}
              type="password"
              placeholder="Confirm password"
              name="confirmPassword"
              value={values.confirmPassword}
              onChange={handleChange}
            />
            <div style={styles.errorMessage}>{errors.confirmPassword}</div>
            <Button style={styles.button} type="submit" onClick={handleSubmit}>
              Register
            </Button>
          </form>
        )}
      </Formik>
      <h3 style={styles.subtitle}>
        Already have an account?{' '}
        <Link style={styles.navLink} to={ROUTES.signIn}>
          Login
        </Link>
      </h3>
      <Snackbar open={isSnackOpened}>
        <Alert
          severity={alertType}
          onClose={handleClose}
          onDurationChange={handleClose}
        >
          {alertMessage}
        </Alert>
      </Snackbar>
    </PageLayout>
  );
};

SignUp.propTypes = {
  store: PropTypes.object.isRequired,
};

export default SignUp;
