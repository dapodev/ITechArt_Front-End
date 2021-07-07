import React from 'react';
import NoteItem from './item/NoteItem';

function NoteList({ style, notes }) {
  return (
    <div style={style}>
      {notes.map((note) => {
        return <NoteItem note={note}></NoteItem>;
      })}
    </div>
  );
}

export default NoteList;
