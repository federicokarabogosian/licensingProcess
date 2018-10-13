console.log('This script populates some test movies, tracks and songs to your database. Specified database as argument - e.g.: populatedb mongodb://your_username:your_password@your_dabase_url');

var userArgs = process.argv.slice(2);
if (!userArgs[0].startsWith('mongodb://')) {
    console.log('ERROR: You need to specify a valid mongodb URL as the first argument');
    return
}

var async = require('async')
var Movie = require('./models/movie')

var mongoose = require('mongoose');
var mongoDB = userArgs[0];
mongoose.connect(mongoDB,{useNewUrlParser: true});
mongoose.Promise = global.Promise;
var db = mongoose.connection;
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

var movies = []

function movieCreate(name, director, year, callback){
  //let movieDetail = {name: name, director: director, year: year};
  let movie = new Movie({name: name, director: director, year: year});

  movie.save(function (err) {
    if (err) {
      callback(err, null)
      return
    }
    console.log('New Movie: '+ movie)
    movies.push(movie)
    callback(null, movie)
  });
};

function createMovies(callback) {
  async.parallel([
    function(callback) {
      movieCreate('Alien', 'Ridley Scott', 1979, callback);
    },
    function(callback) {
      movieCreate('Blade Runner', 'Ridley Scott', 1982, callback);
    },
    function(callback) {
      movieCreate('Gladiator', 'Ridley Scott', 2000, callback);
    }
  ],
  callback);
};

async.series([
  createMovies
],
function(err, result){
  if(err) {
    console.log('ERROR: ' + err);
  }
  else {
    console.log('Finished');
  }
  mongoose.connection.close();
});
