const pool = require('../../db');
const queries = require('./queries');

const userService = require('../user/service');
const validateEmail = require('../utils/email-validator');
const isISODate = require('is-iso-date');

const getEvents = (req, res) => {
  pool.query(queries.getEventsWithUserData, (error, results) => {
    if (error) {
      res.status(500).send({ message: 'Could not get events.' });
    }
    else {
      res.status(200).json(results.rows);
    }
  });
};

const createEvent = async (req, res) => {
  const { firstName, lastName, email, eventDate } = req.body;

  // check if firstName is given
  if (typeof firstName !== 'string' || !firstName.length) {
    return res
      .status(400)
      .send({ message: 'Invalid \'firstName\'. It should be a non-empty string, and it\'s required!' });
  }

  // check if lastName is given
  if (typeof lastName !== 'string' || !lastName.length) {
    return res
      .status(400)
      .send({ message: 'Invalid \'lastName\'. It should be a non-empty string, and it\'s required!' });
  }

  // check if email is valid
  if (!validateEmail(email)) {
    return res
      .status(400)
      .send({ message: 'Invalid \'email\'. It should be a valid non-empty e-mail address, and it\'s required!' });
  }

  // check if date is given and if its date
  if (!isISODate(eventDate)) {
    return res
      .status(400)
      .send({ message: '\'eventDate\' is required and must be in ISO 8601 date format.' });
  }

  try {
    const { id: userId } = await userService.addUser(firstName, lastName, email);
    const results = await pool.query(queries.addEvent, [userId, eventDate]);

    res.status(201).send({ message: 'Event created successfully.' });

  } catch (e) {
    res.status(500).send({ message: 'Error. Could not create a new event.' });

    throw new Error(e);
  }
};


module.exports = {
  getEvents,
  createEvent,
};