import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Link as NavLink, LinkProps } from 'react-router-dom';
import { Omit } from '@material-ui/types';
import clsx from 'clsx';
import { createStyles, makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    gutters: theme.mixins.gutters(),
  })
);

interface ListItemLinkProps {
  icon?: React.ReactElement;
  primary: string;
  to: string;
}

export const ListItemLink: React.FunctionComponent<ListItemLinkProps> = (props: ListItemLinkProps) => {
  const { icon, primary, to } = props;
  const classes = useStyles();

  const renderLink = React.useMemo(
    () =>
      React.forwardRef<any, Omit<LinkProps, 'to'>>((itemProps, ref) => <NavLink to={to} ref={ref} {...itemProps} />),
    [to]
  );

  return (
    <li>
      <ListItem className={clsx(classes.gutters)} button component={renderLink}>
        {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
        <ListItemText primary={primary} />
      </ListItem>
    </li>
  );
};

export default ListItemLink;
