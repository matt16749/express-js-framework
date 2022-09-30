const editUserController = (req, res, next) => {
  const { user } = req.internalParams;

  try {
    res.render('users/editUser.hbs', { user });
  } catch(e) {
    res.status(e.status || 500);
    res.render('error');
  }
}

module.exports = editUserController;