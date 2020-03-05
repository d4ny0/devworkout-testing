import React from 'react';
import { render } from '@testing-library/react';
import Home from '../Home';

it('renders the homepage correctly', () => {
  const { getByText } = render(<Home />);
  const linkElement = getByText(/DevWorkout - Frontend Testing/i);
  expect(linkElement).toBeInTheDocument();
});
