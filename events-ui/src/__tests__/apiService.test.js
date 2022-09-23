import { rest } from 'msw';
import { setupServer } from 'msw/node';

import { apiUrl } from '../env';
import { createNewEvent } from '../apiService';

const server = setupServer(
  rest.post(`${apiUrl}/events`, (req, res, ctx) => {

    const { firstName, lastName, email, eventDate } = req.body;

    if (!firstName || !lastName || !email || !eventDate) {
      return res(
        ctx.status(400)
      );
    }

    return res(
      ctx.status(201),
      ctx.json({ message: 'Event created successfully.' })
    );
  })
);

beforeAll(() => server.listen());
afterAll(() => server.close());


test('should make api call and return api response code for correct data', async () => {
  const res = await createNewEvent('John', 'Smith', 'example@email.com', '2022-09-23');

  expect(res.status).toEqual(201);
});
