import env from './env';

export const createNewEvent = async (firstName, lastName, email, date) => {
  const url = `${env.apiUrl}/events`;

  if (!firstName || !lastName || !email || !date) {
    throw Error('Create new event requires 4 parameters: firstName, lastName, email, date');
  }

  const requestBody = {
    firstName,
    lastName,
    email,
    eventDate: new Date(date).toISOString(),
  }
  

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody),
    });

    return response;

  } catch(e) {
    console.error('Create new event error: ', e);

    throw Error(e);
  }
};
