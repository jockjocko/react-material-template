import React from 'react';
import { Typography, Link } from '@material-ui/core';
import { Link as NavLink } from 'react-router-dom';
import { APP_NAME } from '../../Config';

export const Copyright: React.FunctionComponent = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link component={NavLink} to="/" color="inherit">
        {APP_NAME}
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
};

export default Copyright;
