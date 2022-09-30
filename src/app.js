const AdminJS = require('adminjs')
const AdminJSExpress = require('@adminjs/express')
import * as AdminJSObjection from '@adminjs/objection'
const User = require('./models/user');
import createError from 'http-errors';
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
const bodyParser = require('body-parser');
import { routes } from './routes';

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));


AdminJS.registerAdapter({
  Resource: AdminJSObjection.Resource,
  Database: AdminJSObjection.Database
})
const admin = new AdminJS({
  rootPath: '/admin',
  resources: [User]
})
const adminRouter = AdminJSExpress.buildRouter(admin)
app.use(admin.options.rootPath, adminRouter)
app.use('/', routes);

app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

