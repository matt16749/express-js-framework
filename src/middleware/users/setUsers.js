const User = require('../../models/user');

const getUsers = async () => {
  const users = await User.query();

  return users;
}

const setUsers = async (req, res, next) => {
  const users = await getUsers();
  req.internalParams = {};
  req.internalParams.users = users;

  next();
}

module.exports = setUsers;