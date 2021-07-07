import React from 'react';
import NoteList from '../../components/note-list/noteList';
import { Styles } from './styles';

function myNotes({ noteList }) {
  return (
    <div>
      <h1 style={{ textAlign: 'center', color: '#f1c40f' }}>My notes</h1>
      <NoteList style={Styles.noteList} notes={noteList}></NoteList>
    </div>
  );
}

export default myNotes;
