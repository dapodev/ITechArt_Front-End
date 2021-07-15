import React from 'react';
import NoteList from '../../components/NoteList/NoteList';
import DisplayedNote from '../../components/DisplayedNote/DisplayedNote';
import { Styles } from './styles';

function MyNotes() {
  const notes = [
    {
      title: 'Finish task 1 React',
      description:
        'React is sooooooooooooooooooooooooooooo cooooooooooooooooooool!!!',
      creation: new Date('July 7, 2021 15:45:00').toDateString(),
      isActive: false,
    },
    {
      title: 'Have a lunch',
      description: 'Some meat balls are waiting for me..',
      creation: new Date('July 7, 2021 16:00:00').toDateString(),
      isActive: false,
    },
    {
      title: 'Just an empty note',
      description: 'Almost empty',
      creation: new Date().toDateString(),
      isActive: false,
    },
  ];

  const [noteList, setNoteList] = React.useState(notes);
  const [activeNote, setActiveNote] = React.useState(null);

  function onSelectNote(selectedNote) {
    setNoteList(
      noteList.map((note) => {
        if (note === selectedNote) {
          note.isActive = true;
          setActiveNote(selectedNote);
        } else {
          note.isActive = false;
        }
        return note;
      })
    );
  }

  return (
    <div style={Styles.pageBody}>
      <div style={Styles.sideNotePanel}>
        <NoteList
          style={Styles.noteList}
          notes={noteList}
          onSelect={onSelectNote}
        ></NoteList>
      </div>
      <div style={Styles.sideInfoDisplay}>
        <DisplayedNote activeNote={activeNote}></DisplayedNote>
      </div>
    </div>
  );
}

export default MyNotes;
