import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AddIcon from '@material-ui/icons/Add';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import SearchIcon from '@material-ui/icons/Search';
import { Button } from '@material-ui/core';

import AddNotePanel from './AddNotePanel/AddNotePanel';
import FilterByDatePanel from './FilterByDatePanel/FilterByDatePanel';
import { styles } from './styles';

const NotePanelMenu = ({ refreshNotes, displayNotes, resetActiveNote }) => {
  const [isAddNoteShown, setAddNoteShown] = useState(false);
  const closeAddNotePanel = () => setAddNoteShown(false);
  const onAddedNote = (notes) => refreshNotes(notes);

  const [isFilterByDateShown, setFilterByDateShown] = useState(false);
  const closeFilterByDatePanel = () => setFilterByDateShown(false);
  const onFiltered = (notes) => displayNotes(notes);

  return (
    <div style={styles.menuWrapper}>
      <Button
        style={styles.commonButton}
        title="Add note"
        onClick={() => setAddNoteShown(true)}
      >
        <AddIcon style={styles.commonIcon} />
      </Button>
      <Button
        style={styles.commonButton}
        title="Filter by date"
        onClick={() => setFilterByDateShown(true)}
      >
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
      <FilterByDatePanel
        shown={isFilterByDateShown}
        handleClose={closeFilterByDatePanel}
        style={styles.popUpPanel}
        onFiltered={onFiltered}
      />
    </div>
  );
};

NotePanelMenu.propTypes = {
  refreshNotes: PropTypes.func.isRequired,
  displayNotes: PropTypes.func.isRequired,
  resetActiveNote: PropTypes.func.isRequired,
};

export default NotePanelMenu;
