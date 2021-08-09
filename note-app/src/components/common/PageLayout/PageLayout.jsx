import React, { useState } from 'react';
import { BrowserRouter as div } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import { Button } from '@material-ui/core';

import NavPanel from '../../NavPanel/NavPanel';
import { styles } from './styles';

const PageLayout = ({ children }) => {
  const [isMenuShown, setMenuMode] = useState(false);

  const onMenuClick = (event) => {
    setMenuMode(!isMenuShown);
  };

  return (
    <div>
      <div>
        <NavPanel isOpened={isMenuShown} setIsOpened={setMenuMode} />
        <Button
          style={{
            borderRadius: '50%',
            position: 'relative', // fix this bug somehow
            zIndex: '1000',
          }}
          onClick={onMenuClick}
        >
          <MenuIcon
            style={{
              color: '#609BEB',
              width: '32px',
              height: '32px',
              margin: '10px',
            }}
          />
        </Button>
      </div>
      <div style={styles.pageContent} onClick={() => setMenuMode(false)}>
        {children}
      </div>
    </div>
  );
};

export default PageLayout;
