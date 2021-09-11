import React from 'react';
import PropTypes from 'prop-types';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';

import { styles } from './styles';
import {
  getLocalCurrentUser,
  getLocalNoteList,
  setLocalNoteList,
} from '../../utils/localStorage';

const DisplayedNote = ({
  activeNote,
  isEditing,
  setEditing,
  refreshNotes,
  onDeleted,
}) => {
  const onEditClick = (event) => {
    setEditing(true);
  };

  const deleteNote = () => {
    const user = getLocalCurrentUser();
    const notes = getLocalNoteList(user);
    const newNoteList = notes.filter((note) => note.id !== activeNote.id);
    refreshNotes(newNoteList);
    setLocalNoteList(newNoteList, user);
    onDeleted();
  };

  return (
    <div style={{ ...styles.wrapper, display: isEditing ? 'none' : 'block' }}>
      {activeNote ? (
        <div>
          <div style={styles.noteMenu}>
            <Button style={styles.menuButton} onClick={deleteNote}>
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
  refreshNotes: PropTypes.func.isRequired,
  onDeleted: PropTypes.func.isRequired,
};

export default DisplayedNote;
