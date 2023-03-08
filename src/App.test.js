import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders main component', () => {
  render(<App />)
  const linkElement = screen.getByText(/- cart empty -/i)
  expect(linkElement).toBeInTheDocument();
});

test('adds item to cart', () => {
  render(<App />)
  const addButton = screen.getAllByText("Add to cart")
  fireEvent.click(addButton[0])
  const cartTableElement = screen.getByText(/Item Name/i)
  expect(cartTableElement).toBeInTheDocument();
});

test('adds and removed item from cart', () => {
  render(<App />)
  const addButton = screen.getAllByText("Add to cart")
  fireEvent.click(addButton[0])
  const removeButton = screen.getAllByText("Remove from cart")
  fireEvent.click(removeButton[0])
  const cartTableElement = screen.queryByText("Item Name")
  expect(cartTableElement).toBeNull();
});