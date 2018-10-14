var express = require('express');
var router = express.Router();

var Movie = require('../models/movie');

router.get('/', function(req, res, next) {
  Movie.find({}, function(err, movies) {
    if(err){
      res.status(500).send(err.message);
    }else{
      res.status(200).jsonp(movies);
    }
   });
});

module.exports = router;
