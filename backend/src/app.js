import express from 'express';
const app = express();

import greetingRouter from './modules/greeting/routes';
import notesRouter from './modules/notes/routes';
import { PORT } from './config/constants';

app.use(express.json());

app.use('/api/greetings', greetingRouter);

app.use('/api/notes', notesRouter);

app.listen(PORT, () => console.log(`Server started at port: ${PORT}`));
