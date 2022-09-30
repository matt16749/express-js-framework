const getUsersController = (req, res, next) => {
  const { users } = req.internalParams;

  try {
    // res.render('users/getUsers.hbs', { users });
    res.json({ users });
  } catch(e) {
    res.status(e.status || 500);
    res.render('error');
  }
}

module.exports = getUsersController;