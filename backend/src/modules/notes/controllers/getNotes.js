import CommonError from '../../../errors/CommonError';
import STATUS_CODES from '../../config/constants/statusCodes';
import { getAllNotes, getNotesByPage } from '../../../db/providers/notes';
import { isDate, isInteger } from '../../../utils/typeChecks';

const getNotes = async (req, res, next) => {
  const { page = 1 } = req.query;

  const { dateFrom, dateTo, name } = req.query;

  const notes =
    dateFrom || dateTo || name
      ? await getFilteredNotes(dateFrom, dateTo, name)
      : await getAllNotes();

  try {
    if (isInteger(page) && +page > 0) {
      const parsedPageNumber = +page;

      let notesPayload = await getNotesByPage(parsedPageNumber, notes);

      res.json(notesPayload);
    } else {
      throw new CommonError(
        'Provided page number has incorrect value.',
        STATUS_CODES.clientErrors.INVALID_REQUEST
      );
    }
  } catch (err) {
    next(err);
  }
};

const getFilteredNotes = async (dateFrom, dateTo, name) => {
  let filteredNotes = await getAllNotes();

  if (isDate(dateFrom)) {
    filteredNotes = filteredNotes.filter(
      (note) => new Date(note.createdAt) >= new Date(dateFrom)
    );
  }

  if (isDate(dateTo)) {
    filteredNotes = filteredNotes.filter(
      (note) => new Date(note.createdAt) <= new Date(dateTo)
    );
  }

  if (name && typeof name === 'string') {
    filteredNotes = filteredNotes.filter((note) => note.title.includes(name));
  }

  return filteredNotes;
};

export default getNotes;
