'use strict'

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var movieSchema = Schema({
  name: {type: String, unique: true, required: [true,'The movie must have a name']},
  director: {type: String, required: [true,'The movie must have a director']},
  year: {type: Number, min: 1900},
}, {timestamps: true});

module.exports = mongoose.model('Movie',movieSchema);
