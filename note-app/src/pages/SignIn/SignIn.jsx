import React, { useState } from 'react';
import { Formik } from 'formik';
import { Input } from 'antd';
import { Link, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import PageLayout from '../../components/common/PageLayout/PageLayout';
import { styles } from './styles';
import { Button, Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import {
  ACTION_TYPES,
  ROUTES,
  SNACKBAR_DURATION,
  USER_LIST_CELL,
} from '../../config/constants';
import { getIsLogged } from '../../utils/selectors';

const SignIn = ({ store }) => {
  const onLogin = (form) => {
    const userList = JSON.parse(localStorage.getItem(USER_LIST_CELL))
      ? JSON.parse(localStorage.getItem(USER_LIST_CELL))
      : [];

    if (userList.filter((user) => user.email === form.email).length === 0) {
      showMessage('No such user found!', 'error');
    } else {
      const userData = userList.filter((user) => user.email === form.email)[0];

      if (form.password === userData.password) {
        showMessage('Successfully logged in!', 'success');
        setTimeout(() => {
          store.dispatch({ type: ACTION_TYPES.signIn, payload: userData });
        }, SNACKBAR_DURATION);
      } else {
        showMessage('Incorrect password!', 'error');
      }
    }
  };

  const [isSnackOpened, setSnackOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertType, setAlertType] = useState('');

  const handleClose = (event, reason) => {
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

  if (getIsLogged(store)) {
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

SignIn.propTypes = {
  store: PropTypes.object.isRequired,
};

export default SignIn;
