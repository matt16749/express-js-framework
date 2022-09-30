import { Router } from 'express';

const defaultRoutes = Router();

defaultRoutes.get('/', (req, res, next) => {
  res.render('root.hbs')
});

module.exports = {
  defaultRoutes
};