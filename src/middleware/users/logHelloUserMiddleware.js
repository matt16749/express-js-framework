const logHelloUserMiddleware = (req, res, next) => {
  console.log('hello user!');
  req.internalParams = { user: 'user1' };

  next();
}

module.exports = logHelloUserMiddleware;