export const styles = {
  itemWrapper: {
    backgroundColor: '#333333',
    color: '#609BEB',
    padding: '10px',
    margin: '10px',
    borderRadius: '3px',
    display: 'flex',
    justifyContent: 'space-between'
  },

  itemTitle: {
      textTransform: 'uppercase',
      fontWeight: 'bold',
      fontSize: '24px',
      margin: '5px 5px',
  },

  closeButton: {
    margin: '45px 0',
    color: '#609BEB',
    backgroundColor: 'transparent',
    height: '30px',
  },

  itemWrapper_active: {
    backgroundColor: 'rgb(255,255,255, 0.2)',
    color: '#f1c40f',
    boxShadow: '#f1c40f 0 0 5px',
    transition: '0.3s',
  }
};
