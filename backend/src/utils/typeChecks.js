import { ID_PATTERN } from '../modules/notes/validations/constants';

export const isInteger = (value) => {
  switch (typeof value) {
    case 'number':
      return Number.isInteger(value);
    case 'string':
      return ID_PATTERN.test(value);
    default:
      return false;
  }
};
