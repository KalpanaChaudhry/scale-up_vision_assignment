import { createSelector } from 'reselect';
import { initialState } from './reducer';

const usersState = state => state.app || initialState;

// get students list
const getUsers = () =>
  createSelector(
    usersState,
    app => app.users,
  );
export { getUsers };
