const User = require('../../models/user');

const getUser = async (userId) => {
  const users = await User.query().findOne({ id: userId });

  return users;
}

const setUser = async (req, res, next) => {
  const { id: userId } = req.params;

  const user = await getUser(userId);

  req.internalParams = {};
  req.internalParams.user = user;

  next();
}

module.exports = setUser;