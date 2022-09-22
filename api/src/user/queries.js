const getUsers = 'SELECT * FROM users';
const getUserById = 'SELECT * FROM users WHERE id = $1';
const getUserByEmail = 'SELECT u FROM users u WHERE u.email = $1';

const addUser = 'INSERT INTO users (first_name, last_name, email) VALUES($1, $2, $3) RETURNING id';

module.exports = {
  getUsers,
  getUserById,
  getUserByEmail,
  addUser,
};
