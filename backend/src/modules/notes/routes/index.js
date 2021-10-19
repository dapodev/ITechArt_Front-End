import express from 'express';

import connect from '../../../db/connection/connect';
import commonErrorHandler from '../../../errors/handlers/commonErrorHandler';
import { addNoteValidations, updateNoteValidations } from '../validations';
import { getNotes, addNote, deleteNote, updateNote } from '../controllers';

const notesRouter = express.Router();

notesRouter.use(connect);

notesRouter.get('/', getNotes);

notesRouter.post('/', addNoteValidations, addNote);

notesRouter.put('/:id', updateNoteValidations, updateNote);

notesRouter.delete('/:id', deleteNote);

notesRouter.use(commonErrorHandler);

export default notesRouter;
