import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Dashboard from './Dashboard';

test('renders the dashboard view', () => {
  const { getByText } = render(
    <Router>
      <Dashboard />
    </Router>
  );
  const dashboard = getByText('Dashboard');
  expect(dashboard).toBeVisible();
});
