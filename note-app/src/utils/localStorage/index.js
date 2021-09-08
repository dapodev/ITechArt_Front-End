import { USER_LIST_CELL } from '../../config/constants';

export const getLocalUserList = () => {
  const userList = JSON.parse(localStorage.getItem(USER_LIST_CELL));

  return userList || [];
};

export const setLocalUserList = (users) => {
  localStorage.setItem(USER_LIST_CELL, JSON.stringify(users));
};
