import React from 'react';

import PageLayout from '../../components/common/PageLayout/PageLayout';
import { styles } from './styles';

const About = () => {
  return (
    <PageLayout>
      <div style={styles.wrapper}>
        <h1 style={styles.title}>Overview</h1>
        <p style={styles.commonContent}>
          This app was perfomed during training course to get all the neccessary
          basics and skills of React development.{' '}
        </p>
        <p style={styles.commonContent}>
          It provides many usable features related to digital notes' using.{' '}
        </p>
        <p style={styles.commonContent}>
          You don't have to use paper notes anymore! This app will provide you a
          new way to store all the neccessary data without using an infinit
          amount of paper scraps.
        </p>
        <p style={styles.commonContent}>Good luck!</p>
        <h1 style={styles.title}>Functionality</h1>
        <p style={styles.commonContent}>
          For now Note-App provides such functions as:
          <ol>
            <li>
              <s>
                Creating of new notes and saving it to browser's local storage.
              </s>
            </li>
            <li>Inspecting of saved notes.</li>
            <li>Editing of saved notes.</li>
          </ol>
        </p>
        <h1 style={styles.title}>Future development</h1>
        <p style={styles.commonContent}>
          Features that should be implemented in the nearest future:
          <ol>
            <li>Deleting of saved notes.</li>
            <li>Ability to mark note with "important" label.</li>
            <li>Signing in/up.</li>
            <li>Sharing notes with the users of app.</li>
            <li>Guest mode.</li>
          </ol>
        </p>
        <h1 style={styles.title}>Contacts</h1>
        <p style={styles.commonContent}>
          Developer contacts:
          <br />
          e-mail: apolonik.danila2002@gmail.com
          <br />
          telegram: +375(44)482-90-32
          <br />
          viber: +375(44)482-90-32
          <br />
          instagram: @wooz1ewu_
          <br />
        </p>
      </div>
    </PageLayout>
  );
};

export default About;
