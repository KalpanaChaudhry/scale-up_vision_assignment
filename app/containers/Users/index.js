import React, { memo } from 'react';

import ArrowBack from '@material-ui/icons/ArrowBack';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Fab from '@material-ui/core/Fab';
import Grid from '@material-ui/core/Grid';
import { Helmet } from 'react-helmet';
import StudentCard from 'components/StudentsCard';
import Typography from '@material-ui/core/Typography';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { getUsers } from 'containers/App/selectors';
import { useHistory } from 'react-router-dom';

export function Users({ usersList }) {
  const history = useHistory();
  return (
    <>
      <Helmet>
        <title>Dashboard</title>
        <meta name="description" content="User Dashboard" />
      </Helmet>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Card>
            <CardHeader
              action={
                <Fab
                  variant="extended"
                  color="primary"
                  onClick={() => history.push('/register')}
                >
                  <ArrowBack />
                  Register
                </Fab>
              }
            />
            <CardContent>
              <Typography variant="h4">
                Total Users: {usersList.length}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        {usersList &&
          usersList.length &&
          usersList.map((user, index) => (
            <StudentCard student={user} key={`${user}_${index}`} />
          ))}
      </Grid>
    </>
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
)(Users);
