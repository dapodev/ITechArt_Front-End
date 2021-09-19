export const mapStatetoProps = (state, ownProps = {}) => {
  const { isLoggedIn, loggedInUser, sharedNotes, setSharedNotes } = state;

  return { isLoggedIn, loggedInUser, sharedNotes, setSharedNotes, ...ownProps };
};
