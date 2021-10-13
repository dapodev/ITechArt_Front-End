import { STATUS_CODES } from '../../config/constants';

const greetings = (request, response) => {
  const { name } = request.query;
  
  if (name) {
    const htmlResponse = `
        <h1>
          Hello, ${name}!
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
        errorMessage: `Error ${STATUS_CODES.INVALID_REQUEST}: query parameter 'name' expected.`,
        errorCode: STATUS_CODES.INVALID_REQUEST,
      })
    );
  }
};

export default greetings;
