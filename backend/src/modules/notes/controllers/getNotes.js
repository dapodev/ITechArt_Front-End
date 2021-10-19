import { getAllNotes } from '../../../db/providers/notes';

const getNotes = async (req, res, next) => {
  try {
    const notes = await getAllNotes();
    res.json(notes);
  } catch (err) {
    next(err);
  }
};

export default getNotes;
