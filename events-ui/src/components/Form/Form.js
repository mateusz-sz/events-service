import './Form.css';
import { useState } from 'react';

import validateEmail from '../../utils/email-validator';

function Form({ onCreateNewEvent }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');

  const [firstNameErr, setFirstNameErr] = useState({});
  const [lastNameErr, setLastNameErr] = useState({});
  const [emailErr, setEmailErr] = useState({});
  const [dateErr, setDateErr] = useState({});

  const [sucessfullyCreated, setSuccessfullyCreated] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setSuccessfullyCreated(false);
    const isValid = validateForm(firstName, lastName, email, date);

    if (isValid) {
      // send to api
      const res = await onCreateNewEvent(firstName, lastName, email, date);

      // after successful submit reset form
      if (res && res.status === 201) {
        setSuccessfullyCreated(true);
        setFirstName('');
        setLastName('');
        setEmail('');
        setDate('');
      }
    }
  };

  const validateForm = (firstName, lastName, email, date) => {
    const firstNameErr = {};
    const lastNameErr = {};
    const emailErr = {};
    const dateErr = {};
    let isValid = true;

    if (!firstName.length) {
      firstNameErr.firstNameRequired = 'First name is required';
      isValid = false;
    }
    if (!lastName.length) {
      lastNameErr.lastNameRequired = 'Last name is required';
      isValid = false;
    }
    if (!email.length) {
      emailErr.emailRequired = 'E-mail is required';
      isValid = false;
    }
    else if (!validateEmail(email)) {
      emailErr.emailInvalid = 'E-mail is not valid';
      isValid = false;
    }
    if (!date.length) {
      dateErr.dateRequired = 'Date is required';
      isValid = false;
    }

    setFirstNameErr(firstNameErr);
    setLastNameErr(lastNameErr);
    setEmailErr(emailErr);
    setDateErr(dateErr);

    return isValid;
  };

  return (
    <div className='form-wrapper'>
      <form onSubmit={onSubmit} data-testid='create-event-form'>
        <input
          type='text'
          placeholder='First name'
          value={firstName}
          onChange={(e) => setFirstName(e.target.value.trim())}
          data-testid='first-name'
          required
        />
        {Object.keys(firstNameErr).map(key => {
          return <div key={key} className='error-message'>{firstNameErr[key]}</div>
        })}
        <input
          type='text'
          placeholder='Last name'
          value={lastName}
          onChange={(e) => setLastName(e.target.value.trim())}
          data-testid='last-name'
          required
        />
        {Object.keys(lastNameErr).map(key => {
          return <div key={key} className='error-message'>{lastNameErr[key]}</div>
        })}
        <input
          type='text'
          placeholder='e-mail address'
          value={email}
          onChange={(e) => setEmail(e.target.value.trim())}
          data-testid='email-input'
          required
        />
        {Object.keys(emailErr).map(key => {
          return <div key={key} className='error-message'>{emailErr[key]}</div>
        })}
        <input
          type='date'
          value={date}
          onChange={(e) => setDate(e.target.value.trim())}
          data-testid='date-input'
          required
        />
        {Object.keys(dateErr).map(key => {
          return <div key={key} className='error-message'>{dateErr[key]}</div>
        })}

        <button type='submit' className='btn-grad' data-testid='event-form-submit-button'>
          Submit
        </button>
        
      </form>
      {sucessfullyCreated &&
          <div className='success-message' data-testid='success-message'>
            Event created successfully!
          </div>
        }
    </div>
  );
}

export default Form;