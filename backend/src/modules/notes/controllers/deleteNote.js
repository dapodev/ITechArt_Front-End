const deleteNote = (req, res) => {
  // some logics here later;

  const { id } = req.params;

  const responseBody = { success: true, id: id };

  res.json(responseBody);
};

export default deleteNote;
