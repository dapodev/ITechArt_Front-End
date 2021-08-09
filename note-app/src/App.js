import React from 'react';
import {
  Switch,
  Route,
  BrowserRouter as Router,
  Redirect,
} from 'react-router-dom';
import About from './pages/About/About';

import MyNotes from './pages/MyNotes/MyNotes';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import SharedNotes from './pages/SharedNotes/SharedNotes';

function App() {
  return (
    <Router basename='/ITechArt_Front-End'>
      <div style={{ backgroundColor: '#1f1f1f', minHeight: '100vh' }}>
        <Switch>
          <Route exact path="/">
            <Redirect to="/my-notes" />
          </Route>
          <Route path="/my-notes">
            <MyNotes />
          </Route>
          <Route path="/shared-notes">
            <SharedNotes notes={[]} />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/not-found">
            <NotFoundPage />
          </Route>
          <Redirect to="/not-found" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
