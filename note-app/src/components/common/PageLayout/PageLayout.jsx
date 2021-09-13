import React, { useState } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import { ExitToApp } from '@material-ui/icons';
import { Button } from '@material-ui/core';
import { connect } from 'react-redux';

import NavPanel from '../../NavPanel/NavPanel';
import { styles } from './styles';
import { mapStatetoProps } from './../../../utils/maps/mapStateToProps';
import { mapDispatchToProps } from './../../../utils/maps/mapDispatchToProps';

const PageLayout = ({ children, loggedInUser, signOut }) => {
  const [isMenuShown, setMenuMode] = useState(false);

  const onMenuClick = () => {
    setMenuMode(!isMenuShown);
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.topMenu}>
        <NavPanel isOpened={isMenuShown} setIsOpened={setMenuMode} />
        <Button style={styles.menuButton} onClick={onMenuClick}>
          <MenuIcon style={styles.menuIcon} />
        </Button>
        {loggedInUser ? (
          <Button
            onClick={() => {
              signOut();
            }}
            style={styles.logOutButton}
            title="Log out"
          >
            <ExitToApp style={styles.logOutIcon} />
          </Button>
        ) : null}
      </div>
      <div style={styles.pageContent} onClick={() => setMenuMode(false)}>
        {children}
      </div>
    </div>
  );
};

export default connect(mapStatetoProps, mapDispatchToProps)(PageLayout);
