import React from 'react';

import NoteList from '../../components/NoteList/NoteList';
import DisplayedNote from '../../components/DisplayedNote/DisplayedNote';
import { styles } from './styles';
import { NOTES } from '../../config/constants';

const MyNotes = () => {
  const [noteList, setNoteList] = React.useState(NOTES);
  const [activeNote, setActiveNote] = React.useState(null);

  const onSelectNote = (selectedNote) => setActiveNote(selectedNote);

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
        <DisplayedNote activeNote={activeNote} />
      </div>
    </div>
  );
};

export default MyNotes;
