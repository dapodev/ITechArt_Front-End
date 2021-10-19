import { updateNote as updNote } from '../../../db/providers/notes';

const updateNote = async (req, res, next) => {
  const { title, description, createdAt, updatedAt } = req.body;
  const { id } = req.params;

  try {
    const parsedId = parseInt(id);

    await updNote(parsedId, { title, description, createdAt, updatedAt });

    res.json({ parsedId, title, description, createdAt, updatedAt });
  } catch (err) {
    next(err);
  }
};

export default updateNote;
