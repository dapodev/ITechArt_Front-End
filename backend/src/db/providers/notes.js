import Note from './../models/Note';
import CommonError from '../../errors/CommonError';
import STATUS_CODES from '../../modules/config/constants/statusCodes';
import { PAGINATION_SIZE } from '../../modules/config/constants';
import { isDate } from '../../utils/typeChecks';

export const getAllNotes = async () => {
  return await Note.find({ deleted: false });
};

export const getNotesByPage = async (page, filters) => {
  const result = await Note.find({
    deleted: false,
    title: {
      $regex: filters.name || '',
      $options: 'i',
    },
    createdAt: {
      $gte: new Date(isDate(filters.dateFrom) ? filters.dateFrom : null),
      $lte: isDate(filters.dateTo) ? new Date(filters.dateTo) : new Date(),
    },
  })
    .limit(PAGINATION_SIZE)
    .skip((page - 1) * PAGINATION_SIZE);

  return result;
};

export const insertNote = async (note) => {
  const duplicate = await Note.findOne({ id: note.id, deleted: false });

  if (duplicate) {
    throw new CommonError(
      'Insert: ID already exists.',
      STATUS_CODES.clientErrors.INVALID_REQUEST
    );
  } else {
    await Note.create(note);
  }
};

export const removeNote = async (id) => {
  const noteToRemove = await Note.findOne({ id: id, deleted: false });

  if (noteToRemove) {
    await Note.updateOne(
      { id: id, deleted: false },
      {
        deleted: true,
      }
    );
  } else {
    throw new CommonError(
      'Delete: No notes with provided ID found.',
      STATUS_CODES.clientErrors.INVALID_REQUEST
    );
  }
};

export const updateNote = async (id, data) => {
  if (await Note.findOne({ id: id })) {
    await Note.updateOne(
      { id: id, deleted: false },
      {
        title: data.title,
        description: data.description,
        createdAt: data.createdAt,
        updatedAt: data.updatedAt,
      }
    );
  } else {
    throw new CommonError(
      'Update: No notes with provided ID found.',
      STATUS_CODES.clientErrors.INVALID_REQUEST
    );
  }
};
