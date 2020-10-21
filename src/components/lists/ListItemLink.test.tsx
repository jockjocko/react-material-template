import React from 'react';
import { render } from '@testing-library/react';
import ListItemLink from './ListItemLink';
import { BrowserRouter as Router } from 'react-router-dom';
import DashboardIcon from '@material-ui/icons/Dashboard';

test('renders a link with correct text', () => {
  const { getByText } = render(
    <Router>
      <ListItemLink primary={'Dashboard'} icon={<DashboardIcon />} to={'/'} />
    </Router>
  );
  const text = getByText('Dashboard');
  expect(text).toBeVisible();
});
