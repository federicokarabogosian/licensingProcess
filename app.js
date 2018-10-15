var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');

// Routers
var indexRouter = require('./routes/index');
var trackRouter = require('./routes/track');
var licensingRouter = require('./routes/licensing');
var movieRouter = require('./routes/movie');
var songRouter = require('./routes/song');

var app = express();

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// Load middleware
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//
app.use('/', indexRouter);
app.use('/track', trackRouter);
app.use('/licensing', licensingRouter);
app.use('/movie', movieRouter);
app.use('/song', songRouter);

module.exports = app;
