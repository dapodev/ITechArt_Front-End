import {
  DEV_NOTETITLE_POSTFIX,
  TEST_NOTETITLE_POSTFIX,
} from 'config/constants';

const addDevPostfix = (req, res, next) => {
  const devEnv = process.env.NODEJS_DEV;

  if (devEnv) {
    req.body.title += DEV_NOTETITLE_POSTFIX;
  }

  next();
};

const addTestPostfix = (req, res, next) => {
  const testEnv = process.env.NODEJS_TEST;

  if (testEnv) {
    req.body.title += TEST_NOTETITLE_POSTFIX;
  }

  next();
};

export { addDevPostfix, addTestPostfix };
