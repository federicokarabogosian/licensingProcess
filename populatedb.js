console.log('This script populates some test movies, tracks and songs to your database. Specified database as argument - e.g.: populatedb mongodb://your_username:your_password@your_dabase_url');

var userArgs = process.argv.slice(2);
if (!userArgs[0].startsWith('mongodb://')) {
    console.log('ERROR: You need to specify a valid mongodb URL as the first argument');
    return
}

var async = require('async')
var Movie = require('./models/movie')
var Track = require('./models/track')
var Song = require('./models/song')

var mongoose = require('mongoose');
var mongoDB = userArgs[0];
mongoose.connect(mongoDB,{useNewUrlParser: true});
mongoose.Promise = global.Promise;
var db = mongoose.connection;
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

var movies = []
var tracks = []
var songs = []

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

function trackCreate(name, startTime, endTime, movie, callback){
  let track = new Track({name: name, startTime: startTime, endTime: endTime, movie: movie});
  track.save(function (err) {
    if (err) {
      callback(err, null)
      return
    }
    console.log('New Track: '+ track)
    tracks.push(track)
    callback(null, track)
  });
};

function songCreate(name, artist, owner, callback){
  let song = new Song({name: name, artist: artist, owner: owner});
  song.save(function (err) {
    if (err) {
      callback(err, null)
      return
    }
    console.log('New Song: '+ song)
    tracks.push(song)
    callback(null, song)
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

function createTracks(callback) {
  async.parallel([
    function(callback) {
      trackCreate('Track001', 0, 2000, movies[0], callback);
    },
    function(callback) {
      trackCreate('Track002', 2001, 5000, movies[0], callback);
    },
    function(callback) {
      trackCreate('End titles', 9000, 2000, movies[1],callback);
    }
  ],
  callback);
};

function createSongs(callback) {
  async.parallel([
    function(callback) {
      songCreate('Blade Runner (End Titles)', 'Vangelis','Universal Music Group', callback);
    },
    function(callback) {
      songCreate('Symphony No. 2, Romantic', 'Howard Hanson', 'Intrada Records', callback);
    },
    function(callback) {
      songCreate('The Landing', 'Lionel Newman', 'Sony', callback);
    }
  ],
  callback);
};

async.series([
  createMovies,
  createTracks,
  createSongs
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
