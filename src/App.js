/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Home, Browse, Signin, Signup } from './pages';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import { IsUserRedirect } from './helpers/routes';

export default function App() {
  const user = {};

  return (
    <Router>
      <Route exact path={ROUTES.BROWSE}>
        <Browse />
      </Route>

      <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_IN} exact>
        <Signin />
      </IsUserRedirect>

      <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_UP} exact>
        <Signup />
      </IsUserRedirect>

      <Route exact path={ROUTES.HOME}>
        <Home />
      </Route>
    </Router>
  );
}
