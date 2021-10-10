import STATUS_CODES from '../../config/STATUS_CODES';
import { generateErrors, validateId } from './common';

const deleteNoteValidations = (req, res, next) => {
  const errors = generateErrors();

  const { id } = req.params;

  const idValidation = validateId(id);
  if (!idValidation.isValid) {
    errors.hasErrors = true;
    errors.id = idValidation.message;
  }

  if (errors.hasErrors) {
    res.status(STATUS_CODES.clientErrors.INVALID_REQUEST).json(errors);
  } else {
    next();
  }
};

export default deleteNoteValidations;
