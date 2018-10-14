var express = require('express');
var mongoose = require('mongoose');
var Track = require('../models/track');
var router = express.Router();

router.post('/', function(req, res, next) {
  var track = new Track({
    name: req.body.name,
    startTime: req.body.startTime,
    endTime: req.body.endTime,
    movie: new mongoose.Types.ObjectId(req.body.movieId)
  });

  track.save(function(err, track){
    if(err){
        return res.status(400).send(err.message);
    } else {
      res.status(200).jsonp(track);
    }
  });
});

module.exports = router;
