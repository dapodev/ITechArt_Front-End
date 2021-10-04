import { mapStateToProps } from '../../../utils/maps/mapStateToProps/index';
import { NOTES } from '../../../config/constants/index';

const STATE = {
  loggedInUser: {
    eMail: 'apo@dapo.dipo',
    password: 'somePassWord',
  },
  isLoggedIn: true,
  sharedNotes: NOTES,
  setSharedNotes: () => console.log('set shared'),
};

const PROPS = {
  style: {
    margin: '20px',
    backgroundColor: '#000',
  },

  notes: NOTES,
};

test('mapStateToProps -(own props) & -(additional parms test)', () => {
  const { loggedInUser, isLoggedIn, sharedNotes, setSharedNotes } = STATE;

  expect(mapStateToProps(STATE)).toEqual({
    loggedInUser,
    isLoggedIn,
    sharedNotes,
    setSharedNotes,
  });
});

test('mapStateToProps -(own props) & +(additional parms test)', () => {
  const { loggedInUser, isLoggedIn, sharedNotes, setSharedNotes } = STATE;

  expect(mapStateToProps({ ...STATE, someField: 'someValue' })).toEqual({
    loggedInUser,
    isLoggedIn,
    sharedNotes,
    setSharedNotes,
  });
});

test('mapStateToProps +(own props) & -(additional parms test)', () => {
  const { loggedInUser, isLoggedIn, sharedNotes, setSharedNotes } = STATE;

  expect(mapStateToProps(STATE, PROPS)).toEqual({
    loggedInUser,
    isLoggedIn,
    sharedNotes,
    setSharedNotes,
    ...PROPS,
  });
});

test('mapStateToProps +(own props) & +(additional parms test)', () => {
  const { loggedInUser, isLoggedIn, sharedNotes, setSharedNotes } = STATE;

  expect(mapStateToProps({ ...STATE, someField: 'someValue' }, PROPS)).toEqual({
    loggedInUser,
    isLoggedIn,
    sharedNotes,
    setSharedNotes,
    ...PROPS,
  });
});
