import React from 'react';

import NoteList from '../../components/NoteList/NoteList';
import DisplayedNote from '../../components/DisplayedNote/DisplayedNote';
import { styles } from './styles';

const MyNotes = () => {
  const NOTES = [
    {
      id: 1,
      title: 'Finish task 1 React',
      description:
        'React is sooooooooooooooooooooooooooooo cooooooooooooooooooool!!!',
      creation: new Date('July 7, 2021 15:45:00').toDateString(),
    },
    {
      id: 2,
      title: 'Have a lunch',
      description: 'Some meat balls are waiting for me..',
      creation: new Date('July 7, 2021 16:00:00').toDateString(),
    },
    {
      id: 3,
      title: 'Just an empty note',
      description: 'Almost empty',
      creation: new Date().toDateString(),
    },
  ];

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
