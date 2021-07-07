import React from 'react';
import { Styles } from './styles';
import { Button } from '@material-ui/core'

function NoteItem({ note }) {
  return (
    <div style={Styles.itemWrapper}>
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

export default NoteItem;
