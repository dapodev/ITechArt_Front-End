import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import NoteList from '../../components/NoteList/NoteList';
import DisplayedNote from '../../components/DisplayedNote/DisplayedNote';
import EditNotePanel from '../../components/EditNotePanel/EditNotePanel';
import PageLayout from '../../components/common/PageLayout/PageLayout';
import NotePanelMenu from '../../components/NotePanelMenu/NotePanelMenu';
import getFreeId from '../../utils/getFreeId';
import { styles } from './styles';
import { NOTES, STORAGE_NOTES_CELL } from '../../config/constants';
import { mapStatetoProps } from '../../utils/maps/mapStateToProps';
import { mapDispatchToProps } from '../../utils/maps/mapDispatchToProps';
import { setLocalNoteList } from '../../utils/localStorage';
import getIndexById from '../../utils/getIndexById';

const MyNotes = ({ loggedInUser, sharedNotes, setSharedNotes }) => {
  const [noteList, setNoteList] = useState(
    localStorage.getItem(`${loggedInUser.email}_${STORAGE_NOTES_CELL}`)
      ? JSON.parse(
          localStorage.getItem(`${loggedInUser.email}_${STORAGE_NOTES_CELL}`)
        )
      : NOTES
  );
  const [displayedNotes, setDisplayedNotes] = useState(noteList);
  const [activeNote, setActiveNote] = useState(null);
  const [isEditOn, setEditMode] = useState(false);

  const onSelectNote = (selectedNote) =>
    isEditOn ? null : setActiveNote(selectedNote);

  const onEdited = () => {
    setEditMode(false);
    setNoteList(noteList);
    setLocalNoteList(noteList, loggedInUser);
  };

  // const resetActiveNote = () => setActiveNote(null);

  useEffect(() => {
    setDisplayedNotes(noteList);
    setLocalNoteList(noteList, loggedInUser);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [noteList]);

  useEffect(
    () =>
      displayedNotes.forEach((dispNote) =>
        noteList.forEach((note) => {
          if (dispNote.id === note.id) {
            note = dispNote;
          }
        })
      ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [displayedNotes]
  );

  const onCanceled = () => setEditMode(false);

  const onSharedChanged = (noteState) => {
    const newNoteList = Array.from(noteList);

    const changedNote = newNoteList.filter(
      (note) => note.id === noteState.id
    )[0];

    changedNote.isShared = noteState.isShared;
    const prevId = changedNote.shareId;
    console.log(getFreeId(sharedNotes))
    changedNote.shareId = changedNote.isShared ? getFreeId(sharedNotes) : null;
    updateSharedNotes(changedNote, prevId);
    setNoteList(newNoteList);
  };

  const updateSharedNotes = (note, sharedId) => {
    if (note?.isShared) {
      const newSharedNote = {
        id: note.shareId,
        title: note.title,
        description: note.description,
        creation: note.creation,
      };

      sharedNotes.push(newSharedNote);
      console.log(sharedNotes);

      setSharedNotes(sharedNotes);
    } else {
      //remove
      const rmIndex = getIndexById(sharedNotes, sharedId);

      if (rmIndex >= 0) {
        sharedNotes.splice(rmIndex, 1);
      }

      console.log('unshared -> ', rmIndex);
      console.log(sharedNotes);
      setSharedNotes(sharedNotes);
    }
  };

  return (
    <PageLayout>
      <div style={styles.pageBody}>
        <div style={styles.sideNotePanel}>
          <NotePanelMenu
            refreshNotes={setNoteList}
            displayNotes={setDisplayedNotes}
            notes={noteList}
          />
          <NoteList
            style={styles.noteList}
            notes={displayedNotes}
            baseNotes={noteList}
            onSelect={onSelectNote}
            activeNote={activeNote}
            onChangedOrder={(notes) => setNoteList(notes)}
          />
        </div>
        <div style={styles.sideInfoDisplay}>
          <DisplayedNote
            activeNote={activeNote}
            isEditing={isEditOn}
            setEditing={setEditMode}
            refreshNotes={setNoteList}
            onDeleted={() => setActiveNote(null)}
            notes={noteList}
            onSharedChanged={onSharedChanged}
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
};

export default connect(mapStatetoProps, mapDispatchToProps)(MyNotes);
