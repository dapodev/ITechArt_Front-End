export const mapStatetoProps = (state, ownProps = {}) => {
  const { isLoggedIn, loggedInUser } = state;

  return { isLoggedIn, loggedInUser, ...ownProps };
};
