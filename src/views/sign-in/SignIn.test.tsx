import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import SignIn from './SignIn';

test('renders the Sign in view', () => {
  const { getByText } = render(
    <Router>
      <SignIn />
    </Router>
  );
  const signIn = getByText('Sign In');
  expect(signIn).toBeVisible();
});
