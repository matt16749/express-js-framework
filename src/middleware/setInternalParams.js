const setInternalParams = async (req, res, next) => {
  req.internalParams = {};

  next();
}

module.exports = setInternalParams;