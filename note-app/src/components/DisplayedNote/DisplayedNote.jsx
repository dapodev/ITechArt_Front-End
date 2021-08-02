import React from 'react';
import PropTypes from 'prop-types';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';

import { styles } from './styles';

const DisplayedNote = ({ activeNote, isEditing, setEditing }) => {
  const onEditClick = (event) => {
    setEditing(true);
  };

  return (
    <div style={{ ...styles.wrapper, display: isEditing ? 'none' : 'block' }}>
      {activeNote ? (
        <div>
          <div style={styles.noteMenu}>
            <Button style={styles.menuButton}>
              <DeleteIcon />
            </Button>
            <Button style={styles.menuButton} onClick={onEditClick}>
              <EditIcon />
            </Button>
          </div>
          <p style={styles.noteTitle}>{activeNote.title}</p>
          <p style={styles.noteDescription}>{activeNote.description}</p>
          <p style={styles.noteCreation}>{activeNote.creation}</p>
        </div>
      ) : (
        <p style={styles.noNoteMessage}>Select note to display</p>
      )}
    </div>
  );
};

DisplayedNote.propTypes = {
  activeNote: PropTypes.object,
  isEditing: PropTypes.bool.isRequired,
  setEditing: PropTypes.func.isRequired,
};

export default DisplayedNote;
