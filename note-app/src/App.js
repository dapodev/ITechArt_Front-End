import React, { useState } from 'react';
import {
  Switch,
  Route,
  BrowserRouter as Router,
  Redirect,
} from 'react-router-dom';
import { createStore } from 'redux';

import { ACTION_TYPES, CURRENT_USER_CELL, ROUTES } from './config/constants';
import About from './pages/About/About';
import MyNotes from './pages/MyNotes/MyNotes';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import SharedNotes from './pages/SharedNotes/SharedNotes';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import { getCurrentUser } from './utils/selectors';

function App() {
  const reducer = (state, action) => {
    switch (action.type) {
      case ACTION_TYPES.signOut:
        localStorage.removeItem(CURRENT_USER_CELL);
        return { ...state, loggedInUser: null };
      case ACTION_TYPES.signIn:
        localStorage.setItem(CURRENT_USER_CELL, JSON.stringify(action.payload));
        return { ...state, loggedInUser: action.payload };
      default:
        break;
    }

    return state;
  };

  const [isLoggedIn, setLoggedIn] = useState(
    JSON.parse(localStorage.getItem(CURRENT_USER_CELL)) ? true : false
  );

  const initialState = {
    loggedInUser: JSON.parse(localStorage.getItem(CURRENT_USER_CELL)),
    isLoggedIn: isLoggedIn,
  };

  const store = createStore(reducer, initialState);

  store.subscribe(() => {
    setLoggedIn(getCurrentUser(store) ? true : false);
  });

  return (
    <Router basename="/ITechArt_Front-End">
      <div style={{ backgroundColor: '#1f1f1f', minHeight: '100vh' }}>
        <Switch>
          <Route exact path={ROUTES.root}>
            <Redirect to={ROUTES.myNotes} />
          </Route>
          <Route path={ROUTES.myNotes}>
            <MyNotes store={store} />
          </Route>
          <Route path={ROUTES.sharedNotes}>
            <SharedNotes store={store} />
          </Route>
          <Route path={ROUTES.about}>
            <About />
          </Route>
          <Route path={ROUTES.notFound}>
            <NotFoundPage />
          </Route>
          <Route path={ROUTES.signIn}>
            <SignIn store={store} />
          </Route>
          <Route path={ROUTES.signUp}>
            <SignUp store={store} />
          </Route>
          <Redirect to={ROUTES.notFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
