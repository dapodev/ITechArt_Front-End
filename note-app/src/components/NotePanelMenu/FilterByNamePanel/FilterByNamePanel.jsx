import React from 'react';
import PropTypes from 'prop-types';
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';
import { Button } from '@material-ui/core';
import { Formik } from 'formik';
import { Input } from 'antd';

import { styles } from './styles';
import {
  getLocalCurrentUser,
  getLocalNoteList,
} from '../../../utils/localStorage';

const FilterByNamePanel = ({ shown, style, handleClose, onFiltered }) => {
  const wrapperStyle = { ...styles.panelWrapper, ...(style || null) };
  const handleFilter = (data) => {
    const user = getLocalCurrentUser();
    const notes = getLocalNoteList(user);

    const filteredList = notes.filter((note) =>
      note.title.toUpperCase().includes(data.title.toUpperCase())
    );

    onFiltered(filteredList);
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
      <p style={styles.title}>Filter by name</p>
      <Formik
        initialValues={{
          title: '',
        }}
        onSubmit={handleFilter}
      >
        {({ values, handleChange, handleSubmit }) => (
          <form style={styles.loginForm}>
            <Input
              style={styles.input}
              placeholder="Note title"
              name="title"
              value={values.title}
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

FilterByNamePanel.propTypes = {
  shown: PropTypes.bool.isRequired,
  style: PropTypes.object,
  handleClose: PropTypes.func.isRequired,
  onFiltered: PropTypes.func.isRequired,
};

export default FilterByNamePanel;
