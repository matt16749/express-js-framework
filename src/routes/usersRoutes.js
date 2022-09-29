import { Router } from 'express';
const usersRoutes = Router();
const {
  logHelloUserMiddleware
} = require('../middleware/users');
const {
  getUsersController
} = require('../controllers/users');

usersRoutes.get(
  '/',
  logHelloUserMiddleware,
  getUsersController
);

module.exports = {
  usersRoutes
};