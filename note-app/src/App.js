import React from 'react';
import {
  Switch,
  Route,
  BrowserRouter as Router,
  Redirect,
} from 'react-router-dom';

import { ROUTES } from './config/constants';
import About from './pages/About/About';
import MyNotes from './pages/MyNotes/MyNotes';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import SharedNotes from './pages/SharedNotes/SharedNotes';

function App() {
  return (
    <Router basename="/ITechArt_Front-End">
      <div style={{ backgroundColor: '#1f1f1f', minHeight: '100vh' }}>
        <Switch>
          <Route exact path={ROUTES.root}>
            <Redirect to={ROUTES.myNotes} />
          </Route>
          <Route path={ROUTES.myNotes}>
            <MyNotes />
          </Route>
          <Route path={ROUTES.sharedNotes}>
            <SharedNotes />
          </Route>
          <Route path={ROUTES.about}>
            <About />
          </Route>
          <Route path={ROUTES.notFound}>
            <NotFoundPage />
          </Route>
          <Redirect to={ROUTES.notFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
