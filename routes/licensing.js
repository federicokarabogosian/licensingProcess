var express = require('express');
var mongoose = require('mongoose');
var Licensing = require('../models/licensing');
var router = express.Router();

router.post('/', function(req, res, next) {
  var licensing = new Licensing({
    status: req.body.status,
    contract: req.body.contract,
    track: new mongoose.Types.ObjectId(req.body.trackId),
    song: new mongoose.Types.ObjectId(req.body.songId)
  });

  licensing.save(function(err, licensing){
    if(err){
        //console.log('ERROR: ' + err);
        return res.status(400).send(err.message);
    } else {
      res.status(200).jsonp(licensing);
    }
  });
});

module.exports = router;
