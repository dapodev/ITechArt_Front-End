export const MAX_DESCRIPTION_LENGTH = 20;

export const NOTES = [
  {
    id: 1,
    title: 'Finish task 1 React',
    description:
      'React is sooooooooooooooooooooooooooooo cooooooooooooooooooool!!!',
    creation: new Date('July 7, 2021 15:45:00').toDateString(),
  },
  {
    id: 2,
    title: 'Have a lunch',
    description: 'Some meat balls are waiting for me..',
    creation: new Date('July 7, 2021 16:00:00').toDateString(),
  },
  {
    id: 3,
    title: 'Just an empty note',
    description: 'Almost empty',
    creation: new Date().toDateString(),
  },
];

export const STORAGE_NOTES_CELL = 'noteList';
export const USER_LIST_CELL = 'userList';
export const CURRENT_USER_CELL = 'currentUser';

export const NAVPANEL_WIDTH = '24.7vw';

export const ROUTES = {
  myNotes: '/my-notes',
  sharedNotes: '/shared-notes',
  about: '/about',
  notFound: '/not-found',
  signIn: '/sign-in',
  signUp: '/sign-up',
  root: '/',
};

export const EMAIL_PATTERN = '^[a-zA-Z0-9_.]+@[a-z]+.[a-z]+$'; // fix bug apollo@gma

export const NAME_PATTERN = '^[A-Z][a-z]+(-[A-Z][a-z]+)*$';

export const PASSWORD_PATTERN = '^[a-zA-Z0-9_.]{8,}$';

export const ACTION_TYPES = {
  signIn: 'LOG/IN',
  signOut: 'LOG/OUT',
};

export const SNACKBAR_DURATION = 2000;