import React from 'react';
import PropTypes from 'prop-types';

import { styles } from './styles';

const DisplayedNote = ({ activeNote }) => (
  <div style={styles.wrapper}>
    {activeNote ? (
      <div>
        <p style={styles.noteTitle}>{activeNote.title}</p>
        <p style={styles.noteDescription}>{activeNote.description}</p>
        <p style={styles.noteCreation}>{activeNote.creation}</p>
      </div>
    ) : (
      <p style={styles.noNoteMessage}>Select note to display</p>
    )}
  </div>
);

DisplayedNote.propTypes = {
  activeNote: PropTypes.object.isRequired,
};

export default DisplayedNote;
