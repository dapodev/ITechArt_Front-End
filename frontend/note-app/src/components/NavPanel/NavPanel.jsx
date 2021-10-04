import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

import { styles } from './styles';
import { NAVPANEL_WIDTH, ROUTES } from '../../config/constants';

const NavPanel = ({ isOpened, setIsOpened }) => {
  const onMenuItemClick = (event) => {
    setIsOpened(false);
  };

  return (
    <div
      style={{ ...styles.wrapper, left: isOpened ? '0' : '-' + NAVPANEL_WIDTH }}
    >
      <ul style={styles.navMenu}>
        <li onClick={onMenuItemClick}>
          <Link to={ROUTES.myNotes} style={styles.menuItem}>
            <Button style={styles.menuButton}>My notes</Button>
          </Link>
        </li>
        <li onClick={onMenuItemClick}>
          <Link to={ROUTES.sharedNotes} style={styles.menuItem}>
            <Button style={styles.menuButton}>Shared notes</Button>
          </Link>
        </li>
        <li onClick={onMenuItemClick}>
          <Link to={ROUTES.about} style={styles.menuItem}>
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
