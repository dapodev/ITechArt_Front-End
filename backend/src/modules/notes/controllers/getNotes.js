import { getAllNotes } from "../../../db/providers/notes";

const getNotes = async (req, res) => {
  // some logics later;

  const notes = await getAllNotes();

  res.json(notes);
};

export default getNotes;
