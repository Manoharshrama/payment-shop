import { render, screen } from '@testing-library/react';
import App from './App';

test('Choose Your Payment Method', () => {
  render(<App />);
  const linkElement = screen.getByText(/Choose Your Payment Method/i);
  expect(linkElement).toBeInTheDocument();
});
