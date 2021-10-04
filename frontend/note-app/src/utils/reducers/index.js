import { ACTION_TYPES } from '../../config/constants';
import { CURRENT_USER_CELL } from '../../config/constants';
import { setLocalUserList } from '../localStorage';

export const authorizeReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.signOut:
      localStorage.removeItem(CURRENT_USER_CELL);
      return { ...state, loggedInUser: null };
    case ACTION_TYPES.signIn:
      localStorage.setItem(CURRENT_USER_CELL, JSON.stringify(action.payload));
      return { ...state, loggedInUser: action.payload };
    case ACTION_TYPES.signUp:
      setLocalUserList(action.payload);
      return state;
    default:
      break;
  }

  return state;
};
