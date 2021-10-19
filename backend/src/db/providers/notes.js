import Note from './../models/Note';
import CommonError from '../../errors/CommonError';
import STATUS_CODES from '../../modules/config/STATUS_CODES';

export const getAllNotes = async () => {
  return await Note.find({});
};

export const insertNote = async (note) => {
  if (await Note.findOne({ id: note.id })) {
    throw new CommonError(
      'Insert: ID already exists.',
      STATUS_CODES.clientErrors.INVALID_REQUEST
    );
  } else {
    await Note.create(note);
  }
};

export const removeNote = async (id) => {
  if (await Note.findOne({ id: id })) {
    await Note.deleteOne({ id: id });
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
      { id: id },
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
