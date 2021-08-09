import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

import { styles } from './styles';
import { NAVPANEL_WIDTH } from '../../config/constants';

const NavPanel = ({ isOpened, setIsOpened }) => {
  const onMenuClick = (event) => {
    if (event.target.nodeName === 'SPAN') {
      setIsOpened(false);
    }
  };

  return (
    <div
      style={{ ...styles.wrapper, left: isOpened ? '0' : '-' + NAVPANEL_WIDTH }}
      onClick={onMenuClick}
    >
      <ul style={styles.navMenu}>
        <li>
          <Link to="/my-notes" style={styles.menuItem}>
            <Button style={styles.menuButton}>My notes</Button>
          </Link>
        </li>
        <li>
          <Link to="/shared-notes" style={styles.menuItem}>
            <Button style={styles.menuButton}>Shared notes</Button>
          </Link>
        </li>
        <li>
          <Link to="/about" style={styles.menuItem}>
            <Button style={styles.menuButton}>About</Button>
          </Link>
        </li>
      </ul>
    </div>
  );
};

NavPanel.propTypes = {
  isOpened: PropTypes.bool.isRequired,
  setIsOpened: PropTypes.func.isRequired,
};

export default NavPanel;
