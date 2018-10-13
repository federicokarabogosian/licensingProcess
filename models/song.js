'use strict'

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var songSchema = Schema({
  name: {type: String, unique: true, required: [true,'The song must have a name']},
  artist: {type: String, required: [true,'The song must have an artist']},
  owner: {type: String, required: [true,'The song must have an owner']}
}, {timestamps: true});

module.exports = mongoose.model('Song',songSchema);
