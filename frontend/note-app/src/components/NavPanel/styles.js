import { NAVPANEL_WIDTH } from "../../config/constants";

export const styles = {
  wrapper: {
    backgroundColor: '#282828',
    margin: '0px',
    minWidth: '280px',
    width: NAVPANEL_WIDTH,
    position: 'absolute',
    zIndex: '100',
    minHeight: '100vh',
    transition: '0.3s ease-out'
  },

  navMenu: {
    marginTop: '80px',
    listStyleType: 'none',
  },

  menuItem: {
    textDecoration: 'none',
  },

  menuButton: {
    color: '#609BEB',
    display: 'block',
    fontSize: '24px',
    margin: '30px auto',
  },
};
