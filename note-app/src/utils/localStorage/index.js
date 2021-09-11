import {
  USER_LIST_CELL,
  STORAGE_NOTES_CELL,
  CURRENT_USER_CELL,
} from '../../config/constants';

export const getLocalUserList = () => {
  const userList = JSON.parse(localStorage.getItem(USER_LIST_CELL));

  return userList || [];
};

export const setLocalUserList = (users) => {
  localStorage.setItem(USER_LIST_CELL, JSON.stringify(users));
};

export const setLocalNoteList = (notes, loggedInUser) =>
  localStorage.setItem(
    `${loggedInUser.email}_${STORAGE_NOTES_CELL}`,
    JSON.stringify(notes)
  );

export const getLocalNoteList = (loggedInUser) => {
  return JSON.parse(
    localStorage.getItem(`${loggedInUser.email}_${STORAGE_NOTES_CELL}`)
  );
};

export const getLocalCurrentUser = () => {
  return JSON.parse(localStorage.getItem(CURRENT_USER_CELL));
};
