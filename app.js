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
