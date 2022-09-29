import express from 'express';
import { defaultRoutes } from './defaultRoutes';
import { usersRoutes } from './usersRoutes';

export const routes = express.Router();

routes.use(defaultRoutes);
routes.use('/users', usersRoutes)