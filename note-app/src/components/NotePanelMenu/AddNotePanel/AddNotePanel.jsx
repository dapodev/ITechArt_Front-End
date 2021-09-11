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
  setLocalNoteList,
} from '../../../utils/localStorage';

const AddNotePanel = ({ shown, style, handleClose, onAdded }) => {
  const wrapperStyle = { ...styles.panelWrapper, ...(style || null) };

  const onAddNote = async (data) => {
    const currentUser = getLocalCurrentUser();
    const notes = getLocalNoteList(currentUser);

    //console.log(notes);

    const newNote = {
      id: await getFreeNoteId(notes),
      title: data.title || 'Default title',
      description: data.description || 'Default description',
      creation: new Date().toDateString(),
    };

    notes.push(newNote);
    setLocalNoteList(notes, currentUser);
    onAdded(notes);
    handleClose();
  };

  const getFreeNoteId = (notes) => {
    let id = 0;
    while (true) {
      if (!notes.filter((note) => note.id === id).length) break;
      id++;
    }

    return id;
  };

  return shown ? (
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
              >
                <CheckIcon style={styles.commonIcon} />
              </Button>
              <Button style={styles.commonButton} onClick={handleClose}>
                <ClearIcon style={styles.commonIcon} />
              </Button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  ) : null;
};

AddNotePanel.propTypes = {
  shown: PropTypes.bool.isRequired,
  style: PropTypes.object,
  handleClose: PropTypes.func.isRequired,
  onAdded: PropTypes.func.isRequired,
};

export default AddNotePanel;
