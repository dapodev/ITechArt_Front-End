import { insertNote } from './../../../db/providers/notes';

const addNote = async (req, res, next) => {
  const { id, title, description, createdAt, updatedAt } = req.body;

  const note = {
    id: parseInt(id),
    title: title,
    description: description,
    createdAt: createdAt,
    updatedAt: updatedAt,
  };

  try {
    await insertNote(note);
    res.json({ id, title, description, createdAt, updatedAt });
  } catch (err) {
    next(err);
  }
};

export default addNote;
