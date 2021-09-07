import { ACTION_TYPES } from '../../../config/constants';

export const mapDispatchToProps = (dispatch) => {
  return {
    signInRequest: (userData) =>
      dispatch({ type: ACTION_TYPES.signInRequest, payload: userData }),
    signUpRequest: (userData) =>
      dispatch({ type: ACTION_TYPES.signUpRequest, payload: userData }),
    signOut: () => dispatch({ type: ACTION_TYPES.signOut }),
  };
};
