import { render, screen } from '@testing-library/react';
import Cart from './Cart';

test('renders Cart component', () => {
  render(<Cart cart={[]} />)
  const cartHeading = screen.getByTestId("cart-heading")
  expect(cartHeading).toBeInTheDocument();
});