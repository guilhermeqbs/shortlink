import { render, screen } from '@testing-library/react';
import App from './App';

test('renders URL shortener form', () => {
  render(<App />);
  const formElement = screen.getByText(/Cole o link abaixo/i);
  expect(formElement).toBeInTheDocument();
});
