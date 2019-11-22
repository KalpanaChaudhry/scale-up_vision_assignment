import produce from 'immer';
import { ADD_USER } from './constants';

export const initialState = {
  users: [],
};

const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case ADD_USER:
        console.log('coming in reducer', action.payload);
        draft.users.push(action.payload);
        break;
      default:
        break;
    }
  });

export default appReducer;
