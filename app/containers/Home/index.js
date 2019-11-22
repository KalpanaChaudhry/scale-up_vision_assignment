import React, { memo, useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';

import DashboardPage from 'containers/Users/Loadable';
import RegisterPage from 'containers/RegisterPage/Loadable';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { getUsers } from 'containers/App/selectors';
import reducer from 'containers/App/reducer';
import { useInjectReducer } from 'utils/injectReducer';

const key = 'app';

export function Home({ usersList }) {
  useInjectReducer({ key, reducer });
  const history = useHistory();

  useEffect(() => {
    if (usersList && Array.isArray(usersList) && usersList.length > 0) {
      history.push('/dashboard');
    } else {
      history.push('/register');
    }
  }, []);

  return (
    <Switch>
      <Route exact path="/dashboard" component={DashboardPage} />
      <Route exact path="/register" component={RegisterPage} />
    </Switch>
  );
}

const mapStateToProps = createStructuredSelector({
  usersList: getUsers() || [],
});

export function mapDispatchToProps() {
  return {};
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Home);
