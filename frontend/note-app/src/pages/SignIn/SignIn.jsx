import React, { useState } from 'react';
import { Formik } from 'formik';
import { Input } from 'antd';
import { Link, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import PageLayout from '../../components/common/PageLayout/PageLayout';
import Snackbar from '../../components/Snackbar/Snackbar';
import { styles } from './styles';
import { Button } from '@material-ui/core';
import { ROUTES, SNACKBAR_DURATION } from '../../config/constants';
import { mapStateToProps } from '../../utils/maps/mapStateToProps';
import { mapDispatchToProps } from '../../utils/maps/mapDispatchToProps';

const SignIn = ({ isLoggedIn, signInRequest }) => {
  const onLogin = (form) => {
    const authData = {
      email: form.email,
      password: form.password,
    };
    signInRequest({ ...authData, showMessage });
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
      <h1 style={styles.title}>Sign In</h1>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={onLogin}
      >
        {({ values, handleChange, handleSubmit }) => (
          <form style={styles.loginForm}>
            <Input
              style={styles.input}
              placeholder="E-mail"
              name="email"
              value={values.email}
              onChange={handleChange}
            />
            <Input
              style={styles.input}
              type="password"
              placeholder="Password"
              name="password"
              value={values.password}
              onChange={handleChange}
            />
            <Button style={styles.button} type="submit" onClick={handleSubmit}>
              Login
            </Button>
          </form>
        )}
      </Formik>
      <h3 style={styles.subtitle}>
        Don't have account yet?{' '}
        <Link style={styles.navLink} to={ROUTES.signUp}>
          Register
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

SignIn.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  signInRequest: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
