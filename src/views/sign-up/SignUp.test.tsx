import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import SignUp from './SignUp';

test('renders the Sign up view', () => {
  const { getByText } = render(
    <Router>
      <SignUp />
    </Router>
  );
  const signUp = getByText('Sign Up');
  expect(signUp).toBeVisible();
});
