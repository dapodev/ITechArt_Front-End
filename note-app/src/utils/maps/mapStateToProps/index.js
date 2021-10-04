export const mapStateToProps = (state, ownProps = {}) => {
  const { isLoggedIn, loggedInUser, sharedNotes, setSharedNotes } = state;

  return { isLoggedIn, loggedInUser, sharedNotes, setSharedNotes, ...ownProps };
};
