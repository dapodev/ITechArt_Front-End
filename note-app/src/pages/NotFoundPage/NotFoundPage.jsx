import React from 'react';

import PageLayout from '../../components/common/PageLayout/PageLayout';
import notFoundImage from './../../icons/not-found.png';
import { styles } from './styles';

const NotFoundPage = () => (
  <PageLayout>
    <div>
      <h1 style={styles.title}>Page not found</h1>
      <h3 style={styles.subtitle}>Please, check if url is correct..</h3>
      <div>
        <img src={notFoundImage} style={styles.imageWrapper} alt="loading..." />
      </div>
    </div>
  </PageLayout>
);

export default NotFoundPage;
