const express = require('express');
const app = express();

const { STATUS_CODES, PORT } = require('./config/constants');
const { ROUTES } = require('./config/routes');
// const { PORT } = require('./config/constants');

app.get(ROUTES.greetings, (request, response) => {
  if (request.query.name) {
    const htmlResponse = `
      <h1>
        Hello, ${request.query.name}!
      </h1>
    `;
    response.status(STATUS_CODES.OK);
    response.set('Content-Type', 'text/html');
    response.send(htmlResponse);
  } else {
    response.status(STATUS_CODES.INVALID_REQUEST);
    response.set('Content-Type', 'application/json');
    response.send(
      JSON.stringify({
        errorMessage: `Error ${STATUS_CODES.INVALID_REQUEST}: query parameter "name" expected.`,
        errorCode: STATUS_CODES.INVALID_REQUEST,
      })
    );
  }
});

app.listen(PORT, () => console.log(`Server started at port: ${PORT}`));
