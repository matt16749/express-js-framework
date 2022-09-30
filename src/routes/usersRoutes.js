import { Router } from 'express';
const usersRoutes = Router();
const {
  setUsers,
  setUser,
} = require('../middleware/users');
const { setInternalParams } = require('../middleware');
const {
  editUserController,
  getUsersController,
  getUserController,
  updateUserController
} = require('../controllers/users');

usersRoutes.get(
  '/',
  setInternalParams,
  setUsers,
  getUsersController
);

usersRoutes.get(
  '/:id',
  setInternalParams,
  setUser,
  getUserController
);

usersRoutes.get(
  '/:id/edit',
  setInternalParams,
  setUser,
  editUserController
)

usersRoutes.post(
  '/updateUser',
  setInternalParams,
  setUser,
  updateUserController
)

module.exports = {
  usersRoutes
};