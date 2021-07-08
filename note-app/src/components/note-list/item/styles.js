export const Styles = {
  itemWrapper: {
    backgroundColor: '#f1c40f',
    color: '#fff',
    fontFamily: 'Courier New',
    padding: '10px',
    margin: '10px',
    borderRadius: '7px',
    display: 'flex',
    justifyContent: 'space-between'
  },

  itemTitle: {
      textTransform: 'uppercase',
      textDecoration: 'underline',
      fontWeight: 'bold',
      fontSize: '24px',
      margin: '5px 0',
  },

  closeButton: {
    margin: '45px 0',
    color: 'orange',
    backgroundColor: 'rgb(255, 255, 255, 0.85)',
    height: '30px',
  },

  itemWrapper_active: {
    backgroundColor: '#fff',
    color: '#f1c40f',
    boxShadow: '#f1c40f 0 0 5px',
    transition: '0.3s',
  }
};
