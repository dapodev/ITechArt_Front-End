import express from 'express';

import { addNoteValidations, updateNoteValidations } from '../validations';
import { getNotes, addNote, deleteNote, updateNote } from '../controllers';

import connect from 'db/connection/connect';
import commonErrorHandler from 'errors/handlers/commonErrorHandler';
import { addDevPostfix, addTestPostfix } from 'utils/env';

const notesRouter = express.Router();

notesRouter.use(connect);

notesRouter.get('/', getNotes);

notesRouter.post(
  '/',
  addNoteValidations,
  [addDevPostfix, addTestPostfix],
  addNote
);

notesRouter.put('/:id', updateNoteValidations, updateNote);

notesRouter.delete('/:id', deleteNote);

notesRouter.use(commonErrorHandler);

export default notesRouter;
