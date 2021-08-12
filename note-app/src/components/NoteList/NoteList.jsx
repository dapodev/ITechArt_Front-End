import React from 'react';
import PropTypes from 'prop-types';

import NoteItem from './NoteItem/NoteItem';

const NoteList = ({ style, notes, onSelect, activeNote }) => (
  <div style={style}>
    {notes.map((note, index) => (
      <NoteItem
        note={note}
        key={index}
        onSelect={onSelect}
        isActive={activeNote?.id === note.id}
      />
    ))}
  </div>
);

NoteList.propTypes = {
  style: PropTypes.object.isRequired,
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  onSelect: PropTypes.func.isRequired,
  activeNote: PropTypes.object,
};

export default NoteList;
