import React, { useState } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import { Button } from '@material-ui/core';

import NavPanel from '../../NavPanel/NavPanel';
import { styles } from './styles';

const PageLayout = ({ children }) => {
  const [isMenuShown, setMenuMode] = useState(false);

  const onMenuClick = () => {
    setMenuMode(!isMenuShown);
  };

  return (
    <div style={styles.wrapper}>
      <div>
        <NavPanel isOpened={isMenuShown} setIsOpened={setMenuMode} />
        <Button style={styles.menuButton} onClick={onMenuClick}>
          <MenuIcon style={styles.menuIcon} />
        </Button>
      </div>
      <div style={styles.pageContent} onClick={() => setMenuMode(false)}>
        {children}
      </div>
    </div>
  );
};

export default PageLayout;
