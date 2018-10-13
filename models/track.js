'use strict'

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var trackSchema = Schema({
  name: {type: String, unique: true, required: [true,'The track must have a name']},
  startTime: {type: Number, min: 0, required: [true,'The track must have a start time']},
  endTime: {type: Number, min: 0, required: [true,'The track must have a end time']},
  movie: {type: Schema.Types.ObjectId, ref: 'Movie', required: [true,'The track must be associated with a movie']}
}, {timestamps: true});

module.exports = mongoose.model('Track',trackSchema);
