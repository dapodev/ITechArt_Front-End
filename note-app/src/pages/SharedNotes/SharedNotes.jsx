import React from 'react';

import NoteList from '../../components/NoteList/NoteList';
import { styles } from './styles';
import PageLayout from '../../components/common/PageLayout/PageLayout';

const SharedNotes = () => {
  return (
    <PageLayout>
      <div style={styles.pageContent}>
        <NoteList notes={[]} onSelect={() => {}} />
      </div>
    </PageLayout>
  );
};

export default SharedNotes;
