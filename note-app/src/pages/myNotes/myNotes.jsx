import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';
import { Button } from '@material-ui/core';
import { ExitToApp } from '@material-ui/icons';

import NoteList from '../../components/NoteList/NoteList';
import DisplayedNote from '../../components/DisplayedNote/DisplayedNote';
import { styles } from './styles';
import {
  ACTION_TYPES,
  NOTES,
  ROUTES,
  STORAGE_NOTES_CELL,
} from '../../config/constants';
import EditNotePanel from '../../components/EditNotePanel/EditNotePanel';
import PageLayout from '../../components/common/PageLayout/PageLayout';
import { getCurrentUser, getIsLogged } from '../../utils/selectors';

const MyNotes = ({ store }) => {
  const [noteList, setNoteList] = useState(
    localStorage.getItem(
      `${getCurrentUser(store)?.email}_${STORAGE_NOTES_CELL}`
    )
      ? JSON.parse(
          localStorage.getItem(
            `${getCurrentUser(store)?.email}_${STORAGE_NOTES_CELL}`
          )
        )
      : NOTES
  );
  const [activeNote, setActiveNote] = useState(null);
  const [isEditOn, setEditMode] = useState(false);

  const onSelectNote = (selectedNote) =>
    isEditOn ? null : setActiveNote(selectedNote);

  const saveNotesLocal = (notes) =>
    localStorage.setItem(
      `${getCurrentUser(store)?.email}_${STORAGE_NOTES_CELL}`,
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

  if (!getIsLogged(store)) {
    return <Redirect to={ROUTES.signIn} />;
  }

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
              store.dispatch({ type: ACTION_TYPES.signOut });
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
  store: PropTypes.object.isRequired,
};

export default MyNotes;
