import React from 'react';
import NoteList from '../../components/note-list/noteList';
import { Styles } from './styles';
import { TextField } from '@material-ui/core'

function MyNotes() {
  const notes = [
    {
      title: 'Finish task 1 React',
      description: 'Reat is sooooooooooooooooooooooooooooo cooooooooooooooooooool!!!',
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
    <div style={{ display: 'flex' }}>
      <div style={Styles.sideNotePanel}>
        <TextField variant='outlined' color='white' label='Search' style={{color: 'white', margin: '5px'}}></TextField>
        <NoteList
          style={Styles.noteList}
          notes={noteList}
          onSelect={onSelectNote}
        ></NoteList>
      </div>
      <div style={Styles.sideInfoDisplay}>
        {activeNote === null ? (
          <h4>Select note to display</h4>
        ) : (
          <div>
            <p>{activeNote.title}</p>
            <p>{activeNote.description}</p>
            <p>{activeNote.creation}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default MyNotes;
