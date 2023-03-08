import { render, screen } from '@testing-library/react';
import Item from './Item';

test('renders Item component', () => {
  const { container } = render(<Item />)
  const hr = container.querySelector('hr')
  expect(hr).toBeInTheDocument();
});

test('renders add button', () => {
  render(<Item />)
  const addButton = screen.getByTestId("add-button")
  expect(addButton).toBeInTheDocument();
});

test('renders remove button', () => {
  render(<Item />)
  const addButton = screen.getByTestId("remove-button")
  expect(addButton).toBeInTheDocument();
});