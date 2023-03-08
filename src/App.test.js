import { render, screen } from '@testing-library/react';
import App from './App';

test('renders main component', () => {
  render(<App />);
  const linkElement = screen.getByText(/- cart empty -/i);
  expect(linkElement).toBeInTheDocument();
});
