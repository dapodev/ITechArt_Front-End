export const getCurrentUser = (store) => {
  return store.getState().loggedInUser;
};

export const getIsLogged = (store) => {
  return store.getState().isLoggedIn;
};
