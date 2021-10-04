import React from 'react';
import PropTypes from 'prop-types';
import { Draggable } from 'react-beautiful-dnd';

import getNoteDescription from '../../../utils/getNoteDescription';
import { styles } from './styles';

const NoteItem = ({ note, onSelect, isActive, index }) => {
  const wrapperStyle = {
    ...styles.itemWrapper,
    ...(isActive && { ...styles.itemWrapper_active }),
  };

  return (
    <Draggable key={note.id} draggableId={`${note.id}`} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div style={wrapperStyle} onClick={() => onSelect(note)}>
            <div style={styles.itemContent}>
              <p style={styles.itemTitle}>{note.title}</p>
              <p>{getNoteDescription(note)}</p>
              <p>{note.creation}</p>
            </div>
          </div>
        </div>
      )}
    </Draggable>
  );
};

NoteItem.propTypes = {
  note: PropTypes.object.isRequired,
  onSelect: PropTypes.func,
  isActive: PropTypes.bool,
  index: PropTypes.number.isRequired,
};

export default NoteItem;
