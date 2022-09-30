import { Router } from 'express';
const usersRoutes = Router();
const {
  setUsers
} = require('../middleware/users');
const { setInternalParams } = require('../middleware');
const {
  getUsersController
} = require('../controllers/users');

usersRoutes.get(
  '/',
  setInternalParams,
  setUsers,
  getUsersController
);

module.exports = {
  usersRoutes
};