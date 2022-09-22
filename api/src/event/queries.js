const getEvents = 'SELECT * FROM events';
const getEventsWithUserData = 'SELECT events.id, first_name, last_name, email, date FROM events JOIN users ON events.owner_id=users.id';

const addEvent = 'INSERT INTO events (owner_id, date) VALUES ($1, $2) RETURNING id';

module.exports = {
  getEvents,
  getEventsWithUserData,
  addEvent,
};