import React from 'react';
import { Redirect } from 'react-router';

import { ROUTES } from '../../../config/constants';

const PrivateRoute = ({ children, isLogged }) => (
  <div>
    {isLogged ? (
      children
    ) : (
        <Redirect to={ROUTES.signIn} />
    )}
  </div>
);

export default PrivateRoute;
