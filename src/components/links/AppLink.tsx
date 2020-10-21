import React from 'react';
import { Omit } from '@material-ui/types';
import { Link } from '@material-ui/core';
import { Link as NavLink, LinkProps } from 'react-router-dom';

interface AppLinkProps {
  to: string;
  children: React.ReactNode;
}

export const AppLink: React.FunctionComponent<AppLinkProps> = (props: AppLinkProps) => {
  const { to, children } = props;

  const renderLink = React.useMemo(
    () =>
      React.forwardRef<any, Omit<LinkProps, 'to'>>((itemProps, ref) => <NavLink to={to} ref={ref} {...itemProps} />),
    [to]
  );

  return <Link component={renderLink}>{children}</Link>;
};

export default AppLink;
