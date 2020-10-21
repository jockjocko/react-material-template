import React from 'react';
import { render } from '@testing-library/react';
import Copyright from './Copyright';
import { APP_NAME } from '../../Config';
import { BrowserRouter as Router } from 'react-router-dom';

test('renders copyright', () => {
  const { getByText } = render(
    <Router>
      <Copyright />
    </Router>
  );
  const linkElement = getByText(APP_NAME);
  expect(linkElement).toBeVisible();
});
