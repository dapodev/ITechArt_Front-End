import CommonError from '../../../errors/CommonError';
import STATUS_CODES from '../../config/constants/statusCodes';
import { getNotesByPage } from '../../../db/providers/notes';
import { isDate, isInteger } from '../../../utils/typeChecks';

const getNotes = async (req, res, next) => {
  const { page = 1 } = req.query;

  //filters
  const { dateFrom, dateTo, name } = req.query;

  try {
    if (isInteger(page) && +page > 0) {
      //filter then page select!!
      const parsedPageNumber = +page;

      let notesPayload = await getNotesByPage(parsedPageNumber);
      //filtration
      if (isDate(dateFrom)) {
        notesPayload = notesPayload.filter(
          (note) => new Date(note.createdAt) >= new Date(dateFrom)
        );
      }

      if (isDate(dateTo)) {
        notesPayload = notesPayload.filter(
          (note) => new Date(note.createdAt) <= new Date(dateTo)
        );
      }

      if (name && typeof name === 'string') {
        notesPayload = notesPayload.filter((note) => note.title.contains(name));
      }

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

export default getNotes;
