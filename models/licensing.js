'use strict'

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var licensingSchema = Schema({
  status: {type: String, required: [true,'The licensing must have a status']},
  contract: String,
  track: {type: Schema.Types.ObjectId, ref: 'Track', required: [true,'The licensing must be associated with a track']},
  song: {type: Schema.Types.ObjectId, ref: 'Song', required: [true,'The licensing must be associated with a song']}
}, {timestamps: true});

module.exports = mongoose.model('Licensing',licensingSchema);
