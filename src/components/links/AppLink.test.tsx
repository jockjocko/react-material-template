import React from 'react';
import { render } from '@testing-library/react';
import AppLink from './AppLink';
import { BrowserRouter as Router } from 'react-router-dom';

test('renders a link with correct text', () => {
  const { getByText } = render(
    <Router>
      <AppLink to={'/'}>Link</AppLink>
    </Router>
  );
  const element = getByText('Link');
  expect(element).toBeVisible();
});
