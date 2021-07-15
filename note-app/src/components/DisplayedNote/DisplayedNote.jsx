import React from 'react';
import PropTypes from 'prop-types';
import { Styles } from './styles'

function DisplayedNote({ activeNote }) {
  return (
    <div style={Styles.wrapper}>
      {activeNote === null ? (
        <p style={Styles.noNoteMessage}>Select note to display</p>
      ) : (
        <div>
          <p style={Styles.noteTitle}>{activeNote.title}</p>
          <p style={Styles.noteDescription}>{activeNote.description}</p>
          <p style={Styles.noteCreation}>{activeNote.creation}</p>
        </div>
      )}
    </div>
  );
}

DisplayedNote.propTypes = {
  activeNote: PropTypes.object.isRequired,
};

export default DisplayedNote;
