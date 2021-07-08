import React from 'react';
import PropTypes from 'prop-types';
import { Styles } from './styles';
import { Button } from '@material-ui/core';

function NoteItem({ note, onSelect }) {
  let wrapperStyle;

  if (note.isActive) {
    wrapperStyle = { ...Styles.itemWrapper, ...Styles.itemWrapper_active };
  } else {
    wrapperStyle = { ...Styles.itemWrapper };
  }

  return (
    <div style={wrapperStyle} onClick={onSelect.bind(null, note)}>
      <div style={Styles.itemContent}>
        <p style={Styles.itemTitle}>{note.title}</p>
        <p>
          {note.description.length < 20
            ? note.description
            : note.description.substring(0, 20) + '...'}
        </p>
        <p>
          <i>{note.creation}</i>
        </p>
      </div>
      <Button style={Styles.closeButton}>&#10008;</Button>
    </div>
  );
}

NoteItem.propTypes = {
  note: PropTypes.object.isRequired,
  onSelect: PropTypes.func,
};

export default NoteItem;
