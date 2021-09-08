import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import { ExitToApp } from '@material-ui/icons';
import { connect } from 'react-redux';

import NoteList from '../../components/NoteList/NoteList';
import DisplayedNote from '../../components/DisplayedNote/DisplayedNote';
import { styles } from './styles';
import { NOTES, STORAGE_NOTES_CELL } from '../../config/constants';
import EditNotePanel from '../../components/EditNotePanel/EditNotePanel';
import PageLayout from '../../components/common/PageLayout/PageLayout';
import { mapStatetoProps } from '../../utils/maps/mapStateToProps';
import { mapDispatchToProps } from '../../utils/maps/mapDispatchToProps';

const MyNotes = ({ loggedInUser, signOut }) => {
  const [noteList, setNoteList] = useState(
    localStorage.getItem(`${loggedInUser.email}_${STORAGE_NOTES_CELL}`)
      ? JSON.parse(
          localStorage.getItem(`${loggedInUser.email}_${STORAGE_NOTES_CELL}`)
        )
      : NOTES
  );
  const [activeNote, setActiveNote] = useState(null);
  const [isEditOn, setEditMode] = useState(false);

  const onSelectNote = (selectedNote) =>
    isEditOn ? null : setActiveNote(selectedNote);

  const saveNotesLocal = (notes) =>
    localStorage.setItem(
      `${loggedInUser.email}_${STORAGE_NOTES_CELL}`,
      JSON.stringify(notes)
    );

  const onEdited = () => {
    setEditMode(false);
    setNoteList(noteList);
    saveNotesLocal(noteList);
  };

  const onCanceled = () => {
    setEditMode(false);
  };

  return (
    <PageLayout>
      <div style={styles.pageBody}>
        <div style={styles.sideNotePanel}>
          <NoteList
            style={styles.noteList}
            notes={noteList}
            onSelect={onSelectNote}
            activeNote={activeNote}
          />
          <Button
            onClick={() => {
              signOut();
            }}
            style={styles.logOutButton}
            title="Log out"
          >
            <ExitToApp style={styles.logOutIcon} />
          </Button>
        </div>
        <div style={styles.sideInfoDisplay}>
          <DisplayedNote
            activeNote={activeNote}
            isEditing={isEditOn}
            setEditing={setEditMode}
          />
          <div
            style={{
              ...styles.editPanelWrapper,
              display: isEditOn ? 'block' : 'none',
            }}
          >
            <EditNotePanel
              onEdited={onEdited}
              activeNote={activeNote}
              onCanceled={onCanceled}
            />
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

MyNotes.propTypes = {
  loggedInUser: PropTypes.object.isRequired,
  signOut: PropTypes.func.isRequired,
};

export default connect(mapStatetoProps, mapDispatchToProps)(MyNotes);