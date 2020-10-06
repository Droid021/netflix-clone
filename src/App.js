/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Home, Browse, Signin, Signup } from './pages';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import { IsUserRedirect, ProtectedRoute } from './helpers/routes';

export default function App() {
  const user = null;

  return (
    <Router>
      <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_IN} exact>
        <Signin />
      </IsUserRedirect>

      <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_UP} exact>
        <Signup />
      </IsUserRedirect>

      <ProtectedRoute user={user} path={ROUTES.BROWSE} exact>
        <Browse />
      </ProtectedRoute>

      <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.HOME} exact>
        <Home />
      </IsUserRedirect>
    </Router>
  );
}
