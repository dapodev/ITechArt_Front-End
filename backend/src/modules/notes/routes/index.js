import express from 'express';

import getNotes from '../controllers/getNotes';
import addNote from '../controllers/addNote';
import updateNote from '../controllers/updateNote';
import deleteNote from '../controllers/deleteNote';
import addNoteValidations from '../validations/addNoteValidations';
import updateNoteValidations from '../validations/updateNoteValidations';
import connect from '../../../db/connection/connect';
import commonErrorHandler from '../../../errors/handlers/commonErrorHandler';

const notesRouter = express.Router();

notesRouter.use(connect);

notesRouter.get('/', getNotes);

notesRouter.post('/', addNoteValidations, addNote);

notesRouter.put('/:id', updateNoteValidations, updateNote);

notesRouter.delete('/:id', deleteNote);

notesRouter.use(commonErrorHandler);

export default notesRouter;
