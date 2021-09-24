import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

import { ROUTES } from '../../../config/constants';
import { mapStateToProps } from '../../../utils/maps/mapStateToProps';

const PrivateRoute = ({ children, isLoggedIn }) => (
  <div>
    {isLoggedIn ? (
      children
    ) : (
        <Redirect to={ROUTES.signIn} />
    )}
  </div>
);

export default connect(mapStateToProps)(PrivateRoute);
