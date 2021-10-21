import mongoose from 'mongoose'; // make absolute pathes

import { CONNECTION_URI } from '../../config/database.js';
import STATUS_CODES from '../../modules/config/constants/statusCodes';
// import STATUS_CODES from 'modules/config/constants/statusCodes';

const connect = async (req, res, next) => {
  try {
    await mongoose.connect(CONNECTION_URI);
    next();
  } catch (err) {
    res
      .status(STATUS_CODES.serverErrors.SERVICE_UNAVAILABLE)
      .send('Could not connect to database');
    console.error(err);
  }
};

export default connect;
