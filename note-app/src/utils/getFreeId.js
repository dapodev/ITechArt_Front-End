const getFreeId = (notes) => {
  let id = 0;

  while (id <= notes.length) {
    // eslint-disable-next-line no-loop-func
    if (!notes.filter((note) => note.id === id).length) {
      break;
    }
    id++;
  }

  return id;
};

export default getFreeId;
