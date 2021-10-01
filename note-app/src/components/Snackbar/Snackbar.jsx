import React from 'react';
import { Snackbar as SB } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import PropTypes from 'prop-types';

const Snackbar = ({ isSnackOpened, alertType, handleClose, message }) => {
  return (
    <SB open={isSnackOpened}>
      <Alert
        severity={alertType}
        onClose={handleClose}
        onDurationChange={handleClose}
      >
        {message}
      </Alert>
    </SB>
  );
};

Snackbar.propTypes = {
  isSnackOpened: PropTypes.bool.isRequired,
  alertType: PropTypes.string.isRequired,
  handleClose: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
};

export default Snackbar;
