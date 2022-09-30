const updateUserController = (req, res, next) => {
  const { user } = req.internalParams;

  try {
    res.json({ user })
  } catch(e) {
    res.status(e.status || 500);
    res.render('error');
  }
}

module.exports = updateUserController;