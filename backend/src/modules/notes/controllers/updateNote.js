const updateNote = (req, res) => {
  const { title, description, createdAt, updatedAt } = req.body;
  const { id } = req.params;

  res.json({ id, title, description, createdAt, updatedAt });
};

export default updateNote;
