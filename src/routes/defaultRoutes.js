import { Router } from 'express';

const defaultRoutes = Router();

defaultRoutes.get('/', (req, res, next) => {
  res.redirect('/users')
});

module.exports = {
  defaultRoutes
};