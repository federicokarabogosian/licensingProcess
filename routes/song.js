var express = require('express');
var router = express.Router();

var Song = require('../models/song');

router.get('/', function(req, res, next) {
  Song.find({}, function(err, songs) {
    if(err){
      res.status(500).send(err.message);
    }else{
      res.status(200).jsonp(songs);
    }
   });
});

module.exports = router;
