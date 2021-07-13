import React from 'react';
import NoteItem from './__note-item/NoteItem';
import PropTypes from 'prop-types'

function NoteList({ style, notes, onSelect }) {
  return (
    <div style={style}>
      {notes.map((note, index) => {
        return <NoteItem note={note} key={index} onSelect={onSelect}></NoteItem>;
      })}
    </div>
  );
}

NoteList.propTypes = {
  style: PropTypes.object.isRequired,
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  onSelect: PropTypes.func.isRequired,
}

export default NoteList;
