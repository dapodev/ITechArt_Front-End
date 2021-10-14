const addNote = (req, res) => {
  //some logics later;

  const { id, title, description, createdAt, updatedAt } = req.body;

  res.json({ id, title, description, createdAt, updatedAt });
};

export default addNote;
