import { ADD_USER } from './constants';

export function addUser(payload) {
  return {
    type: ADD_USER,
    payload,
  };
}
