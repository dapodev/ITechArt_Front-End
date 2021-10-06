import express from 'express';

import getNotes from '../controllers/getNotes';
import addNote from '../controllers/addNote';
import updateNote from '../controllers/updateNote';
import deleteNote from '../controllers/deleteNote';

const notesRouter = express.Router();

notesRouter.get('/', getNotes);

notesRouter.post('/', addNote);

notesRouter.put('/:id', updateNote);

notesRouter.delete('/:id', deleteNote)

export default notesRouter;
