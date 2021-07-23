import React from 'react';

import NoteList from '../../components/NoteList/NoteList';
import DisplayedNote from '../../components/DisplayedNote/DisplayedNote';
import { styles } from './styles';
import { NOTES } from '../../config/constants';

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
    setNoteList(noteList);
    saveNotesLocal(noteList);
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
          onEdited={onEdited}
          setEditing={setEditMode}
        />
      </div>
    </div>
  );
};

export default MyNotes;
