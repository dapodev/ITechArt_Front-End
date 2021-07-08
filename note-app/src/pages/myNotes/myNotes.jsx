import React from 'react';
import NoteList from '../../components/note-list/noteList';
import { Styles } from './styles';

function MyNotes() {
  const notes = [
    {
      title: 'some title 1',
      description: 'some loooooooooooooooooooooong desc',
      creation: new Date().toDateString(),
      isActive: false,
    },
    {
      title: 'some title 2',
      description: 'somedesc',
      creation: new Date().toDateString(),
      isActive: false,
    },
    {
      title: 'some title 3',
      description: 'somedesc',
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
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <div>
        <h1 style={{ textAlign: 'center', color: '#f1c40f' }}>My notes</h1>
        <NoteList
          style={Styles.noteList}
          notes={noteList}
          onSelect={onSelectNote}
        ></NoteList>
      </div>
      <div>
        {
          activeNote === null ? 'Select note to display' : activeNote.title
        }
      </div>
    </div>
  );
}

export default MyNotes;
