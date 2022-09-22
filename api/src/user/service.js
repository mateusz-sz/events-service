const pool = require('../../db');
const queries = require('./queries');

const getUsers = () => {
  return pool
    .query(queries.getUsers)
    .then(results => results.rows);
}

const getUserByEmail = (email) => {
  return pool
    .query(queries.getUserByEmail, [email])
    .then(results => results.rows[0]);
};

const addUser = (firstName, lastName, email) => {
  return pool
    .query(queries.addUser, [firstName, lastName, email])
    .then(results => results.rows[0]);
};


module.exports = {
  getUsers,
  getUserByEmail,
  addUser,
};
