import { Router } from 'express';

const defaultRoutes = Router();

defaultRoutes.get('/', (req, res, next) => {
  res.send("What's up doc ?!");
});

module.exports = {
  defaultRoutes
};