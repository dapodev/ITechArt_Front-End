import React from 'react';
import PropTypes from 'prop-types';

import NoteList from '../../components/NoteList/NoteList';
import { styles } from './styles';
import PageLayout from '../../components/common/PageLayout/PageLayout';

const SharedNotes = ({ notes }) => {
  return (
    <PageLayout>
      <div style={styles.pageContent}>
        <NoteList notes={notes} onSelect={() => {}} />
      </div>
    </PageLayout>
  );
};

SharedNotes.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object),
};

export default SharedNotes;
