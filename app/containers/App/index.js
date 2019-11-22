/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import { Route, Switch } from 'react-router-dom';

import Container from '@material-ui/core/Container';
import { Helmet } from 'react-helmet';
import HomePage from 'containers/Home';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import React from 'react';

export default function App() {
  return (
    <Container>
      <Helmet
        titleTemplate="%s - React.js Boilerplate"
        defaultTitle="React.js Boilerplate"
      >
        <meta name="description" content="A React.js Boilerplate application" />
      </Helmet>
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="" component={NotFoundPage} />
      </Switch>
    </Container>
  );
}
