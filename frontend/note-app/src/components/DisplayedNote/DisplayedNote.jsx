import React from 'react';
import PropTypes from 'prop-types';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import ShareIcon from '@mui/icons-material/Share';
import LockIcon from '@mui/icons-material/Lock';
import Button from '@material-ui/core/Button';

import { styles } from './styles';

const DisplayedNote = ({
  activeNote,
  isEditing,
  setEditing,
  refreshNotes,
  onDeleted,
  notes,
  onSharedChanged,
}) => {
  const onEditClick = () => {
    setEditing(true);
  };

  const deleteNote = () => {
    const newNoteList = notes.filter((note) => note.id !== activeNote.id);
    refreshNotes(newNoteList);
    onDeleted();
  };

  const onShareNote = () => {
    const newActive = { ...activeNote, isShared: true, };
    onSharedChanged(newActive);
  };

  const onLockNote = () => {
    const newActive = { ...activeNote, isShared: false };
    onSharedChanged(newActive);
  };

  return (
    <div style={{ ...styles.wrapper, display: isEditing ? 'none' : 'block' }}>
      {activeNote ? (
        <div>
          <div style={styles.noteMenu}>
            <Button test-data='deleteButton' style={styles.menuButton} onClick={deleteNote}>
              <DeleteIcon />
            </Button>
            <Button test-data='editButton' style={styles.menuButton} onClick={onEditClick}>
              <EditIcon />
            </Button>
            {activeNote.isShared ? (
              <Button style={styles.menuButton} onClick={onLockNote}>
                <LockIcon />
              </Button>
            ) : (
              <Button style={styles.menuButton} onClick={onShareNote}>
                <ShareIcon />
              </Button>
            )}
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
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  onSharedChanged: PropTypes.func.isRequired,
};

export default DisplayedNote;
