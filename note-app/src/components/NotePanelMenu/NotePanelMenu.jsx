import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AddIcon from '@material-ui/icons/Add';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import SearchIcon from '@material-ui/icons/Search';
import { Button } from '@material-ui/core';

import { styles } from './styles';
import AddNotePanel from './AddNotePanel/AddNotePanel';

const NotePanelMenu = ({ refreshNotes }) => {
  const [isAddNoteShown, setAddNoteShown] = useState(false);
  const closeAddNotePanel = () => {
    setAddNoteShown(false);
  };
  const onAddedNote = (notes) => {
    refreshNotes(notes);
  };

  return (
    <div style={styles.menuWrapper}>
      <Button
        style={styles.commonButton}
        title="Add note"
        onClick={() => {
          setAddNoteShown(true);
        }}
      >
        <AddIcon style={styles.commonIcon} />
      </Button>
      <Button style={styles.commonButton} title="Filter by date">
        <CalendarTodayIcon style={styles.commonIcon} />
      </Button>
      <Button style={styles.commonButton} title="Filter by name">
        <SearchIcon style={styles.commonIcon} />
      </Button>
      <AddNotePanel
        shown={isAddNoteShown}
        style={styles.popUpPanel}
        handleClose={closeAddNotePanel}
        onAdded={onAddedNote}
      />
    </div>
  );
};

NotePanelMenu.propTypes = {
  refreshNotes: PropTypes.func.isRequired,
};

export default NotePanelMenu;
