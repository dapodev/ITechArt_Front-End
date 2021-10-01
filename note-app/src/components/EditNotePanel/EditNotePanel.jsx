import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import { Input } from 'antd';

import { styles } from './styles';

const EditNotePanel = ({ onEdited, activeNote, onCanceled }) => {
  const [titleValue, setTitleValue] = useState('');
  const [descValue, setDescValue] = useState('');

  useEffect(() => {
    setTitleValue(activeNote ? activeNote.title : '');
    setDescValue(activeNote ? activeNote.description : '');
  }, [activeNote]);

  const onApplyChanges = (event) => {
    event.preventDefault();

    activeNote.title = titleValue;
    activeNote.description = descValue;

    onEdited();
  };
  const onCancelClick = (event) => {
    onCanceled();
  };

  return (
    <form onSubmit={onApplyChanges}>
      <Input
        style={styles.noteInput}
        name="title"
        value={titleValue}
        onChange={(e) => setTitleValue(e.target.value)}
      />
      <Input
        style={styles.noteInput}
        name="desc"
        value={descValue}
        onChange={(e) => setDescValue(e.target.value)}
      />
      <Button type="submit" style={styles.applyButton}>
        Apply
      </Button>
      <Button test-data="cancelButton" style={styles.applyButton} onClick={onCancelClick}>
        Cancel
      </Button>
    </form>
  );
};

EditNotePanel.propTypes = {
  onEdited: PropTypes.func.isRequired,
  activeNote: PropTypes.object,
  onCanceled: PropTypes.func.isRequired,
};

export default EditNotePanel;
