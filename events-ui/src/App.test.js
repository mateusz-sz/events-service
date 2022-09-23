import { render, screen } from '@testing-library/react';
import App from './App';

test('should render App component with create event form', () => {
  render(<App />);
  const form = screen.getByTestId('create-event-form');
  expect(form).toBeInTheDocument();
});
