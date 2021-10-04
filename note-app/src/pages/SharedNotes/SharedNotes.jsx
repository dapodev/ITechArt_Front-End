import React from 'react';

import NoteList from '../../components/NoteList/NoteList';
import { styles } from './styles';
import PageLayout from '../../components/common/PageLayout/PageLayout';
import { connect } from 'react-redux';
import { mapStateToProps } from '../../utils/maps/mapStateToProps';

const SharedNotes = ({ sharedNotes, setSharedNotes }) => {
  return (
    <PageLayout>
      <div style={styles.pageContent}>
        <NoteList
          style={styles.sharedNotesList}
          notes={sharedNotes}
          baseNotes={sharedNotes}
          onSelect={() => {}}
          activeNote={null}
          onChangedOrder={(notes) => setSharedNotes(notes)}
        />
      </div>
    </PageLayout>
  );
};

export default connect(mapStateToProps)(SharedNotes);
