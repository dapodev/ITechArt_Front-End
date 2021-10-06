import express from 'express';
const app = express();

import greetingRouter from './modules/greeting/routes';
import { PORT } from './config/constants';

app.use('/api/greetings', greetingRouter);

app.listen(PORT, () => console.log(`Server started at port: ${PORT}`));
