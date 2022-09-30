const getUserController = (req, res, next) => {
  const { user } = req.internalParams;

  try {
    res.render('users/getUser.hbs', { user });
  } catch(e) {
    res.status(e.status || 500);
    res.render('error');
  }
}

module.exports = getUserController;