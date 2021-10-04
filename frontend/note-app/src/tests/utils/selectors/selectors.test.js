import { getCurrentUser, getIsLogged } from './../../../utils/selectors/index';

const isLoggedIn = true;
const loggedInUser = {
  email: 'email',
  password: 'password',
};

const storePlug = {
  state: {
    isLoggedIn: isLoggedIn,
    loggedInUser: loggedInUser,
  },

  getState: function () {
    return this.state;
  },
};

test('getCurrentUser test', () => {
  expect(getCurrentUser(storePlug)).toStrictEqual(loggedInUser);
});

test('getIsLogged test', () => {
  expect(getIsLogged(storePlug)).toStrictEqual(isLoggedIn);
});
