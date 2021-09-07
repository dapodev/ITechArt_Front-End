import React, { useState } from 'react';
import { Formik } from 'formik';
import { Input } from 'antd';
import { Link, useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import PageLayout from '../../components/common/PageLayout/PageLayout';
import { styles } from './styles';
import {
  ROUTES,
  SNACKBAR_DURATION,
} from '../../config/constants';
import { SignUpValidations } from '../../utils/validations/SignUpValidations';
import { mapStatetoProps } from '../../utils/maps/mapStateToProps';
import { mapDispatchToProps } from '../../utils/maps/mapDispatchToProps';
import Snackbar from '../../components/Snackbar/Snackbar';

const SignUp = ({ isLoggedIn, signUpRequest }) => {
  const onRegistration = (form) => {
    const newUser = {
      email: form.email,
      password: form.password,
      firstName: form.firstName,
      lastName: form.lastName,
      birth: form.birth,
    };

    signUpRequest({newUser, showMessage});
  };

  const validateForm = (values) => {
    return SignUpValidations.reduce(
      (deltaErrors, validator) => validator(values, deltaErrors),
      {}
    );
  };

  const [isSnackOpened, setSnackOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertType, setAlertType] = useState('');

  const handleClose = () => {
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

  const history = useHistory();

  if (isLoggedIn) {
    history.push(ROUTES.myNotes);
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
      <Snackbar
        isSnackOpened={isSnackOpened}
        handleClose={handleClose}
        message={alertMessage}
        alertType={alertType}
      />
    </PageLayout>
  );
};

SignUp.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  signUpRequest: PropTypes.func.isRequired,
}

export default connect(mapStatetoProps, mapDispatchToProps)(SignUp);
