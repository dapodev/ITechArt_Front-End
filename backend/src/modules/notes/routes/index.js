import express from 'express';

import { addNoteValidations, updateNoteValidations } from '../validations';
import { getNotes, addNote, deleteNote, updateNote } from '../controllers';

const notesRouter = express.Router();

notesRouter.get('/', getNotes);

notesRouter.post('/', addNoteValidations, addNote);

notesRouter.put('/:id', updateNoteValidations, updateNote);

notesRouter.delete('/:id', deleteNote);

export default notesRouter;
