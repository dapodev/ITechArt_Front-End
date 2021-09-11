import React from 'react';
import PropTypes from 'prop-types';
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';
import { Formik } from 'formik';
import { Button } from '@material-ui/core';
import { Input } from 'antd';

import { styles } from './styles';
import {
  getLocalNoteList,
  getLocalCurrentUser,
} from '../../../utils/localStorage';

const FilterByDatePanel = ({ shown, style, handleClose, onFiltered }) => {
  const wrapperStyle = { ...styles.panelWrapper, ...(style || null) };

  const handleFilter = (data) => {
    const user = getLocalCurrentUser();
    const notes = getLocalNoteList(user);

    const filteredNotes = notes.filter(
      (note) =>
        new Date(note.creation) >=
          (data.from ? new Date(data.from) : new Date(note.creation)) &&
        new Date(note.creation) <=
          (data.to ? new Date(data.to) : new Date(note.creation))
    );

    onFiltered(filteredNotes);
    handleClose();
  };

  const handleReset = () => {
    const user = getLocalCurrentUser();
    const notes = getLocalNoteList(user);

    onFiltered(notes);

    handleClose();
  };

  return shown ? (
    <div style={wrapperStyle}>
      <p style={styles.title}>Filter notes by date</p>
      <Formik
        initialValues={{
          from: '',
          to: '',
        }}
        onSubmit={handleFilter}
      >
        {({ values, handleChange, handleSubmit }) => (
          <form style={styles.loginForm}>
            <Input
              style={styles.datePicker}
              type="date"
              name="from"
              title="Date from"
              value={values.from}
              onChange={handleChange}
            />
            <Input
              style={styles.datePicker}
              type="date"
              name="to"
              title="Date to"
              value={values.to}
              onChange={handleChange}
            />
            <div style={styles.buttonsContainer}>
              <Button
                style={styles.commonButton}
                type="submit"
                onClick={handleSubmit}
                title="Apply"
              >
                <CheckIcon style={styles.commonIcon} />
              </Button>
              <Button
                style={styles.commonButton}
                onClick={handleReset}
                title="Reset"
              >
                <ClearIcon style={styles.commonIcon} />
              </Button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  ) : null;
};

FilterByDatePanel.propTypes = {
  shown: PropTypes.bool.isRequired,
  style: PropTypes.object,
  handleClose: PropTypes.func.isRequired,
  onFiltered: PropTypes.func.isRequired,
};

export default FilterByDatePanel;
