import React from 'react';
import PropTypes from 'prop-types';
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';
import { Button } from '@material-ui/core';
import { Formik } from 'formik';
import { Input } from 'antd';

import { styles } from './styles';
import {
  DEFAULT_NOTE_DESCRIPTION,
  DEFAULT_NOTE_TITLE,
} from '../../../config/constants';

const AddNotePanel = ({ shown, style, handleClose, onAdded, notes }) => {
  const wrapperStyle = { ...styles.panelWrapper, ...(style || null) };

  const onAddNote = (data) => {
    const newNoteList = Array.from(notes);

    const newNote = {
      id: getFreeNoteId(notes),
      title: data.title || DEFAULT_NOTE_TITLE,
      description: data.description || DEFAULT_NOTE_DESCRIPTION,
      creation: new Date().toDateString(),
    };

    newNoteList.push(newNote);
    onAdded(newNoteList);
    handleClose();
  };

  const getFreeNoteId = (notes) => {
    let id = 0;
    while (id <= notes.length) {
      // eslint-disable-next-line no-loop-func
      if (!notes.filter((note) => note.id === id).length) {
        break;
      }
      id++;
    }

    return id;
  };

  return (
    shown && (
      <div style={wrapperStyle}>
        <p style={styles.title}>Add note</p>
        <Formik
          initialValues={{
            title: '',
            description: '',
          }}
          onSubmit={onAddNote}
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
              <Input
                style={styles.input}
                placeholder="Note description"
                name="description"
                value={values.description}
                onChange={handleChange}
              />
              <div style={styles.buttonsContainer}>
                <Button
                  style={styles.commonButton}
                  type="submit"
                  onClick={handleSubmit}
                  title="Add note"
                >
                  <CheckIcon style={styles.commonIcon} />
                </Button>
                <Button
                  style={styles.commonButton}
                  onClick={handleClose}
                  title="Cancel"
                >
                  <ClearIcon style={styles.commonIcon} />
                </Button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    )
  );
};

AddNotePanel.propTypes = {
  shown: PropTypes.bool.isRequired,
  style: PropTypes.object,
  handleClose: PropTypes.func.isRequired,
  onAdded: PropTypes.func.isRequired,
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default AddNotePanel;
