import express from 'express';

import getNotes from '../controllers/getNotes';
import addNote from '../controllers/addNote';
import updateNote from '../controllers/updateNote';
import deleteNote from '../controllers/deleteNote';
import addNoteValidations from '../validations/addNoteValidations';
import deleteNoteValidations from '../validations/deleteNoteValidations';
import updateNoteValidations from '../validations/updateNoteValidations';

const notesRouter = express.Router();

notesRouter.get('/', getNotes);

notesRouter.post('/', addNoteValidations, addNote);

notesRouter.put('/:id', updateNoteValidations, updateNote);

notesRouter.delete('/:id', deleteNoteValidations, deleteNote);

export default notesRouter;
