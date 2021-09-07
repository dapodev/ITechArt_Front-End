import { put, takeEvery } from 'redux-saga/effects';

import { ACTION_TYPES, SNACKBAR_DURATION } from '../../../config/constants';
import { getLocalUserList } from '../../localStorage';

const delay = (ms) =>
  new Promise((res) => {
    setTimeout(res, ms);
  });

function* signInWorker(action) {
  const { email, password, showMessage } = action.payload;
  const users = getLocalUserList();
  const userSearchResult = users.filter((user) => user.email === email);

  if (userSearchResult.length === 0) {
    showMessage('No such user found!', 'error');
  } else {
    const userData = userSearchResult[0];

    if (password === userData.password) {
      showMessage('Successfully logged in!', 'success');

      yield delay(SNACKBAR_DURATION);
      yield put({ type: ACTION_TYPES.signIn, payload: userData });
    } else {
      showMessage('Incorrect password!', 'error');
    }
  }
}

function* signUpWorker(action) {
  const { newUser, showMessage } = action.payload;
  const users = getLocalUserList();

  if (users.filter((user) => user.email === newUser.email).length > 0) {
    showMessage('User already exists!', 'error');
  } else {
    //sucessfully registered
    users.push(newUser);
    yield put({ type: ACTION_TYPES.signUp, payload: users });

    showMessage('Sucessfully registered.', 'success');

    yield delay(SNACKBAR_DURATION);
    yield put({ type: ACTION_TYPES.signIn, payload: newUser });
  }
}

export function* authWatcher() {
  yield takeEvery(ACTION_TYPES.signInRequest, signInWorker);
  yield takeEvery(ACTION_TYPES.signUpRequest, signUpWorker);
}
