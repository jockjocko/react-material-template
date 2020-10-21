import React from 'react';
import { render } from '@testing-library/react';
import Page from './Page';

test('renders without blowing up', () => {
  const mockChild = <div>Child</div>;
  const { getByText } = render(<Page children={mockChild} title="child" />);
  const element = getByText('Child');
  expect(element).toBeVisible();
});
