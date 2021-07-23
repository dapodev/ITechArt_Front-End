import React from 'react';
import PropTypes from 'prop-types';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import { Input } from 'antd';

import { styles } from './styles';

const DisplayedNote = ({ activeNote, onEdited, setEditing }) => {
  const descOutputNode = React.createRef();
  const titleOutputNode = React.createRef();
  const changeNoteForm = React.createRef();
  const noteMenu = React.createRef();

  const [titleValue, setTitleValue] = React.useState('');
  const [descValue, setDescValue] = React.useState('');

  const onEditClick = (event) => {
    setTitleValue(activeNote.title);
    setDescValue(activeNote.description);
    setEditing(true);
    revertDisplay();
  };

  const onApplyChanges = (event) => {
    activeNote.title = titleValue;
    activeNote.description = descValue;
    if (onEdited) {
      onEdited();
    }
    setEditing(false);
    revertDisplay();
    event.preventDefault();
  };

  const onCanceled = (event) => {
    revertDisplay();
    setEditing(false);
  };

  const revertDisplay = () => {
    titleOutputNode.current.style.display = getRevertedDisplay(titleOutputNode);
    descOutputNode.current.style.display = getRevertedDisplay(descOutputNode);
    changeNoteForm.current.style.display = getRevertedDisplay(changeNoteForm);
    noteMenu.current.style.display = getRevertedDisplay(noteMenu);
  };

  const getRevertedDisplay = (refered) =>
    refered.current.style.display === 'none' ? 'block' : 'none';

  return (
    <div style={styles.wrapper}>
      {!activeNote ? (
        <p style={styles.noNoteMessage}>Select note to display</p>
      ) : (
        <div>
          <div style={styles.noteMenu} ref={noteMenu}>
            <Button style={styles.menuButton}>
              <DeleteIcon />
            </Button>
            <Button style={styles.menuButton} onClick={onEditClick}>
              <EditIcon />
            </Button>
          </div>
          <p style={styles.noteTitle} ref={titleOutputNode}>
            {activeNote.title}
          </p>
          <p style={styles.noteDescription} ref={descOutputNode}>
            {activeNote.description}
          </p>
          <form
            ref={changeNoteForm}
            style={styles.editPanel}
            onSubmit={onApplyChanges}
          >
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
            <Button style={styles.applyButton} onClick={onCanceled}>
              Cancel
            </Button>
          </form>
          <p style={styles.noteCreation}>{activeNote.creation}</p>
        </div>
      )}
    </div>
  );
};

DisplayedNote.propTypes = {
  activeNote: PropTypes.object,
  onEdited: PropTypes.func,
  setEditing: PropTypes.func,
};

export default DisplayedNote;
