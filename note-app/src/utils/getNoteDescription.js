import { MAX_DESCRIPTION_LENGTH } from "../config/constants";

const getNoteDescription = (note) =>
  note.description
    ? note.description < MAX_DESCRIPTION_LENGTH
      ? note.description
      : note.description.substring(0, MAX_DESCRIPTION_LENGTH) + '...'
    : '';

export default getNoteDescription;