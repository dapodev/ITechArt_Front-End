import express from 'express';
const app = express();

import dotenv from 'dotenv';
dotenv.config();

import greetingRouter from './modules/greeting/routes';
import notesRouter from './modules/notes/routes';
import requestLog from './utils/log/requestLog';
import { PORT } from './config/constants';

app.use(express.json());

app.use(requestLog);

app.use('/api/greetings', greetingRouter);

app.use('/api/notes', notesRouter);

app.listen(PORT, () => console.log(`Server started at port: ${PORT}`));
