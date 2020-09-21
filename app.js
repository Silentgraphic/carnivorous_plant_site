const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
require('dotenv').config();

const indexRouter = require('./routes/index');
const plantsRouter = require('./routes/plants');
const growingplantsRouter = require('./routes/growing_cps');
const { error } = require('console');

var app = express();

//Check for database UUID
var connection_uuid = (function () {
  let uuid = process.env.DATABASE_UUID;
  if (typeof uuid === 'undefined') {
    throw new Error('No database UUID defined');
  }
  else {
    return uuid;
  }
})();

//connect to the database
const connection = mongoose.connect(connection_uuid, { useNewUrlParser: true, useUnifiedTopology: true });

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', () => {
  console.error.bind(console, 'MongoDB connection error:');
  db = mongoose.disconnect();
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/plants', plantsRouter);
app.use('/growingplants', growingplantsRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
