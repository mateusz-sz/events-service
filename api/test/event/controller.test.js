const controller = require('../../src/event/controller');



describe('test new event creation', () => {

  const mockResponse = () => {
    const res = {};
    res.status = jest.fn().mockReturnValue(res);
    res.send = jest.fn().mockReturnValue(res);
    return res;
  };

  describe('test error codes and responses for bad data', () => {

    const res = mockResponse();

    test('should send a status code of 400 & a message when firstName is empty or not a string', async () => {
      const req = {
        body: {
          lastName: 'Smith',
          email: 'correct@email.com',
          eventDate: '2022-09-22T12:00:00.000Z'
        }
      };
  
  
      await controller.createEvent(req, res);
  
      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.send).toHaveBeenCalledWith({
        message: 'Invalid \'firstName\'. It should be a non-empty string, and it\'s required!'
      });
    });

    test('should send a status code of 400 & a message when lastName is empty or not a string', async () => {
      const req = {
        body: {
          firstName: 'John',
          lastName: '',
          email: 'correct@email.com',
          eventDate: '2022-09-22T12:00:00.000Z'
        }
      };

      await controller.createEvent(req, res);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.send).toHaveBeenCalledWith({
        message: 'Invalid \'lastName\'. It should be a non-empty string, and it\'s required!'
      });
    });

    test('should send a status code of 400 & a message when email is not valid', async () => {
      const req = {
        body: {
          firstName: 'John',
          lastName: 'Smith',
          email: 'notValid-email',
          eventDate: '2022-09-22T12:00:00.000Z'
        }
      };

      await controller.createEvent(req, res);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.send).toHaveBeenCalledWith({
        message: 'Invalid \'email\'. It should be a valid non-empty e-mail address, and it\'s required!'
      });
    });

    test('should send a status code of 400 & a message when eventDate is not a valid ISO 8001', async () => {
      const req = {
        body: {
          firstName: 'John',
          lastName: 'Smith',
          email: 'my@email.example.com',
          eventDate: '17 October 2010'
        }
      };

      await controller.createEvent(req, res);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.send).toHaveBeenCalledWith({
        message: '\'eventDate\' is required and must be in ISO 8601 date format.'
      });
    });
  });

  test('test proper event creation response', async () => {
    const req = {
      body: {
        firstName: 'John',
        lastName: 'Smith',
        email: 'good@email.com',
        eventDate: '2022-09-22T12:00:00.000Z'
      }
    };
    const res = mockResponse();

    await controller.createEvent(req, res);

    expect(res.status.toHaveBeenCalledWith(201));
  });

});
