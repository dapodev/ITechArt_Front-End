import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AddIcon from '@material-ui/icons/Add';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import SearchIcon from '@material-ui/icons/Search';
import { Button } from '@material-ui/core';

import AddNotePanel from './AddNotePanel/AddNotePanel';
import FilterByDatePanel from './FilterByDatePanel/FilterByDatePanel';
import FilterByNamePanel from './FilterByNamePanel/FilterByNamePanel';
import { styles } from './styles';

const NotePanelMenu = ({ refreshNotes, displayNotes, notes }) => {
  const [isAddNoteShown, setAddNoteShown] = useState(false);
  const closeAddNotePanel = () => setAddNoteShown(false);
  const onAddedNote = (notes) => refreshNotes(notes);

  const [isFilterByDateShown, setFilterByDateShown] = useState(false);
  const closeFilterByDatePanel = () => setFilterByDateShown(false);

  const [isFilterByNameShown, setFilterByNameShown] = useState(false);
  const closeFilterByNamePanel = () => setFilterByNameShown(false);

  const onFiltered = (notes) => displayNotes(notes);

  return (
    <div style={styles.menuWrapper}>
      <Button
        style={styles.commonButton}
        title="Add note"
        test-data="addNoteButton"
        onClick={() => setAddNoteShown(true)}
      >
        <AddIcon style={styles.commonIcon} />
      </Button>
      <Button
        style={styles.commonButton}
        title="Filter by date"
        onClick={() => setFilterByDateShown(true)}
        test-data="dateFilterButton"
      >
        <CalendarTodayIcon style={styles.commonIcon} />
      </Button>
      <Button
        style={styles.commonButton}
        title="Filter by name"
        onClick={() => setFilterByNameShown(true)}
        test-data="nameFilterButton"
        >
        <SearchIcon style={styles.commonIcon} />
      </Button>
      <AddNotePanel
        shown={isAddNoteShown}
        style={styles.popUpPanel}
        handleClose={closeAddNotePanel}
        onAdded={onAddedNote}
        notes={notes}
        test-data="addNotePanel"
      />
      <FilterByDatePanel
        shown={isFilterByDateShown}
        handleClose={closeFilterByDatePanel}
        style={styles.popUpPanel}
        onFiltered={onFiltered}
        notes={notes}
        test-data="filterByDatePanel"
      />
      <FilterByNamePanel
        shown={isFilterByNameShown}
        handleClose={closeFilterByNamePanel}
        style={styles.popUpPanel}
        onFiltered={onFiltered}
        notes={notes}
        test-data="filterByNamePanel"
      />
    </div>
  );
};

NotePanelMenu.propTypes = {
  refreshNotes: PropTypes.func.isRequired,
  displayNotes: PropTypes.func.isRequired,
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default NotePanelMenu;
