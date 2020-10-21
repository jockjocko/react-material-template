import React from 'react';
import { Helmet } from 'react-helmet';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { APP_NAME } from '../../Config';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

type Props = {
  children: React.ReactNode;
  title: string;
  className?: string;
};

const Page: React.FunctionComponent<Props> = ({ title, children, className }) => {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)}>
      <Helmet>
        <title>{title + ` - ${APP_NAME}`}</title>
      </Helmet>
      {children}
    </div>
  );
};

export default Page;
