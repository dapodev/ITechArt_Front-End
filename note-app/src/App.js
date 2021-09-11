import React, { useState } from 'react';
import {
  Switch,
  Route,
  BrowserRouter as Router,
  Redirect,
} from 'react-router-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from '@redux-saga/core';

import PrivateRoute from './components/common/PrivateRoute/PrivateRoute';
import About from './pages/About/About';
import MyNotes from './pages/MyNotes/MyNotes';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import SharedNotes from './pages/SharedNotes/SharedNotes';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import { CURRENT_USER_CELL, ROUTES } from './config/constants';
import { authorizeReducer } from './utils/reducers';
import { getCurrentUser } from './utils/selectors';
import { authWatcher } from './utils/saga/auth';

function App() {
  const [isLoggedIn, setLoggedIn] = useState(
    JSON.parse(localStorage.getItem(CURRENT_USER_CELL)) ? true : false
  );

  const initialState = {
    loggedInUser: JSON.parse(localStorage.getItem(CURRENT_USER_CELL)),
    isLoggedIn: isLoggedIn,
  };

  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    authorizeReducer,
    initialState,
    applyMiddleware(sagaMiddleware)
  );

  sagaMiddleware.run(authWatcher);

  store.subscribe(() => {
    setLoggedIn(getCurrentUser(store) ? true : false);
  });

  return (
    <Provider store={store}>
      <Router basename="/ITechArt_Front-End">
        <div style={{ backgroundColor: '#1f1f1f', minHeight: '100vh' }}>
          <Switch>
            <Route exact path={ROUTES.root}>
              <Redirect to={ROUTES.myNotes} />
            </Route>
            <Route path={ROUTES.myNotes}>
              <PrivateRoute>
                <MyNotes />
              </PrivateRoute>
            </Route>
            <Route path={ROUTES.sharedNotes}>
              <PrivateRoute>
                <SharedNotes />
              </PrivateRoute>
            </Route>
            <Route path={ROUTES.about}>
              <About />
            </Route>
            <Route path={ROUTES.notFound}>
              <NotFoundPage />
            </Route>
            <Route path={ROUTES.signIn}>
              <SignIn />
            </Route>
            <Route path={ROUTES.signUp}>
              <SignUp />
            </Route>
            <Redirect to={ROUTES.notFound} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
