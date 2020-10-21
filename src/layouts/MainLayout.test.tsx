import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import MainLayout from './MainLayout';

test('renders the main layout without blowing up', () => {
  const { getByText } = render(
    <Router>
      <MainLayout>
        <div>child</div>
      </MainLayout>
    </Router>
  );
  const text = getByText('child');
  expect(text).toBeVisible();
});
