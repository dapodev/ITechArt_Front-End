import React from 'react';
import PropTypes from 'prop-types';

import getNoteDescription from '../../../utils/getNoteDescription';
import { styles } from './styles';

const NoteItem = ({ note, onSelect, isActive }) => {
  const wrapperStyle = {
    ...styles.itemWrapper,
    ...(isActive && { ...styles.itemWrapper_active }),
  };

  return (
    <div style={wrapperStyle} onClick={onSelect.bind(null, note)}>
      <div style={styles.itemContent}>
        <p style={styles.itemTitle}>{note.title}</p>
        <p>{getNoteDescription(note)}</p>
        <p>{note.creation}</p>
      </div>
    </div>
  );
};

NoteItem.propTypes = {
  note: PropTypes.object.isRequired,
  onSelect: PropTypes.func,
  isActive: PropTypes.bool,
};

export default NoteItem;
