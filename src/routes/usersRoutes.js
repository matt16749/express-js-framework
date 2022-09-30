import { Router } from 'express';
const usersRoutes = Router();
const {
  setUsers,
  setUser,
} = require('../middleware/users');
const { setInternalParams } = require('../middleware');
const {
  getUsersController,
  getUserController,
  updateUserController
} = require('../controllers/users');

/**
 * @swagger
 * /:
 *   get:
 *     summary: Retrieve a list of JSONPlaceholder users.
 *     description: Retrieve a list of users from JSONPlaceholder. Can be used to populate a list of fake users when prototyping or testing an API.
 *     responses:
 *       200:
 *         description: A list of users.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 users:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         description: The user ID.
 *                         example: 0
 *                       firstName:
 *                         type: string
 *                         description: The user's firstName.
 *                         example: Matt
 *                       lastName:
 *                         type: string
 *                         description: The user's lastName.
 *                         example: Chan
 *                       email:
 *                         type: string
 *                         description: The user's name.
 *                         example: matt@bar.com
 *                       createdAt:
 *                         type: timestamp
 *                         description: When the user was created.
 *                       updatedAt:
 *                         type: timestamp
 *                         description: When the user was last updated.
 *                       lastLogin:
 *                         type: timestamp
 *                         description: When the user last logged in.
 *
 */
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

usersRoutes.post(
  '/updateUser',
  setInternalParams,
  setUser,
  updateUserController
)

module.exports = {
  usersRoutes
};