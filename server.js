const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const exphbs = require('express-hbs');

const gens = require('./src/consts/generals');
const entrypage = require('./src/responsePages/entrypage');

const app = express();
require('dotenv').config();

const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const dbConfig = require('./src/config/dbconnect-config');
const ModelCollection = require('./src/db/models');

const userModel = ModelCollection.UserModel;

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
const hbxOpts = {
  extname: '.hbs',
  defaultLayout: path.join(__dirname, `${gens.ly}/layout.hbs`),
  partialsDir: path.join(__dirname, gens.pti),
  layoutsDir: path.join(__dirname, gens.ly)
};
app.engine(gens.hbs, exphbs.express4(hbxOpts));
app.set('view engine', gens.hbs);
app.set('views', path.join(__dirname, gens.pti));

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, gens.imgPath, 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

app.use('/', entrypage);
// app.use('/users', users);


// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  // render the error page
  res.status(err.status || 500);
  res.json({
    err: req.app.get('env') === 'development' ? err : {},
    message: err.message
  });
});

module.exports = app;
