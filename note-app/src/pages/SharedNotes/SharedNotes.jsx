import React from 'react';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';

import NoteList from '../../components/NoteList/NoteList';
import { styles } from './styles';
import PageLayout from '../../components/common/PageLayout/PageLayout';
import { getIsLogged } from '../../utils/selectors';
import { ROUTES } from '../../config/constants';

const SharedNotes = ({ store }) => {
  if (!getIsLogged(store)) {
    return <Redirect to={ROUTES.signIn} />;
  }

  return (
    <PageLayout>
      <div style={styles.pageContent}>
        <NoteList notes={[]} onSelect={() => {}} />
      </div>
    </PageLayout>
  );
};

SharedNotes.propTypes = {
  store: PropTypes.object.isRequired,
};

export default SharedNotes;
