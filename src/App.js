/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import FaqsContainer from './containers/faqs';
import { FooterContainer } from './containers/footer';
import JumbotronContainer from './containers/jumbotron';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as ROUTES from './constants/routes';

export default function App() {
  return (
    <Router>
      <Route exact path={ROUTES.HOME}>
        <JumbotronContainer />
        <FaqsContainer />
        <FooterContainer />
      </Route>
    </Router>
  );
}
