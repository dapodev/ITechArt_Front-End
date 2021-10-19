import mongoose from 'mongoose';
import { CONNECTION_URI } from '../../config/database';
import STATUS_CODES from '../../modules/config/STATUS_CODES';

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
