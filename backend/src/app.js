import express from 'express';
const app = express();

import greetings from './handlers/greetings';
import { PORT } from './config/constants';
import { ROUTES } from './config/routes';

app.get(ROUTES.greetings, greetings);

app.listen(PORT, () => console.log(`Server started at port: ${PORT}`));
