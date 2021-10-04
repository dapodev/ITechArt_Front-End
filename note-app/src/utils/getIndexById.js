const getIndexById = (notes, id) => {
  let res = -1;

  notes.forEach((note, index) => {
    if (note.id === id) {
      res = index;
    }
  });

  return res;
};

export default getIndexById;