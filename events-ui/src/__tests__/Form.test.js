import { render, screen, fireEvent } from '@testing-library/react';
import Form from '../components/Form/Form';


const clickSubmit = () => {
  fireEvent.click(screen.getByTestId('event-form-submit-button'));
};


test('should render form with 4 required inputs and a submit button', () => {
  render(<Form onCreateNewEvent={() => {}} />);

  const formInputs = {
    firstName: screen.getByTestId('first-name'),
    lastName: screen.getByTestId('last-name'),
    email: screen.getByTestId('email-input'),
    date: screen.getByTestId('date-input'),
  };

  Object.keys(formInputs).forEach(key => {
    expect(formInputs[key]).toBeInTheDocument();
    expect(formInputs[key]).toBeRequired();
  });

  expect(screen.getByTestId('event-form-submit-button')).toBeInTheDocument();
});

test('should call onCreateNewEvent prop when clicked submit with correctly fulfilled form', () => {

  const onCreateStub = jest.fn();

  render(<Form onCreateNewEvent={onCreateStub} />);

  const formInputs = {
    firstName: screen.getByTestId('first-name'),
    lastName: screen.getByTestId('last-name'),
    email: screen.getByTestId('email-input'),
    date: screen.getByTestId('date-input'),
  };

  fireEvent.change(formInputs.firstName, { target: { value: 'John' } });
  fireEvent.change(formInputs.lastName, { target: { value: 'Smith' } });
  fireEvent.change(formInputs.email, { target: { value: 'correct@email.com' } });
  fireEvent.change(formInputs.date, { target: { value: '2022-09-22' } });

  clickSubmit();


  expect(onCreateStub).toHaveBeenCalledTimes(1);
  expect(onCreateStub).toHaveBeenCalledWith('John', 'Smith', 'correct@email.com', '2022-09-22');
});

test('should display "E-mail is not valid" message, when submit clicked and e-mail is not valid', () => {
  render(<Form onCreateNewEvent={() => {}} />);

  fireEvent.change(
    screen.getByPlaceholderText('e-mail address'),
    { target: { value: 'invalid.email' } }
  )

  clickSubmit();


  expect(screen.getByText('E-mail is not valid')).toBeInTheDocument();
});

test('should not call onCreateEvent prop when firstName is empty and submit is clicked', () => {
  const onCreateStub = jest.fn();

  render(<Form onCreateNewEvent={onCreateStub} />);

  clickSubmit();

  expect(onCreateStub).toHaveBeenCalledTimes(0);
});
