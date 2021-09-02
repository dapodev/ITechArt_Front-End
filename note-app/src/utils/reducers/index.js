import { ACTION_TYPES } from "../../config/constants";
import { CURRENT_USER_CELL } from "../../config/constants";

export const AuthorizeReducer = (state, action) => {
    switch (action.type) {
      case ACTION_TYPES.signOut:
        localStorage.removeItem(CURRENT_USER_CELL);
        return { ...state, loggedInUser: null };
      case ACTION_TYPES.signIn:
        localStorage.setItem(CURRENT_USER_CELL, JSON.stringify(action.payload));
        return { ...state, loggedInUser: action.payload };
      default:
        break;
    }

    return state;
  };