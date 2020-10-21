import React, { ReactElement } from 'react';
import DashboardIcon from '@material-ui/icons/DashboardOutlined';

interface IRoute {
  name: string;
  icon: ReactElement;
  path: string;
}

export const Routes: Array<IRoute> = [{ name: 'Dashboard', icon: <DashboardIcon />, path: '' }];

export default Routes;
