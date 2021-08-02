import React from 'react';

import NoteList from '../../components/NoteList/NoteList';
import DisplayedNote from '../../components/DisplayedNote/DisplayedNote';
import { styles } from './styles';
import { NOTES } from '../../config/constants';
import EditNotePanel from '../../components/EditNotePanel/EditNotePanel';

const MyNotes = () => {
  const [noteList, setNoteList] = React.useState(
    JSON.parse(localStorage.getItem('noteList'))
      ? JSON.parse(localStorage.getItem('noteList'))
      : NOTES
  );
  const [activeNote, setActiveNote] = React.useState(null);
  const [isEditOn, setEditMode] = React.useState(false);

  const onSelectNote = (selectedNote) =>
    isEditOn ? null : setActiveNote(selectedNote);

  const saveNotesLocal = (notes) =>
    localStorage.setItem('noteList', JSON.stringify(notes));

  const onEdited = () => {
    setEditMode(false);
    setNoteList(noteList);
    saveNotesLocal(noteList);
  };

  const onCanceled = () => {
    setEditMode(false);
  };

  return (
    <div style={styles.pageBody}>
      <div style={styles.sideNotePanel}>
        <NoteList
          style={styles.noteList}
          notes={noteList}
          onSelect={onSelectNote}
          activeNote={activeNote}
        />
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
  );
};

export default MyNotes;
