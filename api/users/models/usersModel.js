'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var UsersSchema = new Schema({
  id: {
    type: String,
    default: null
  },
  name: {
    type: String,
    required: 'Kindly enter your name'
  },
  email: {
    type: String,
    required: 'Kindly enter your email'
  },
  password: {
    type: String,
    required: 'Kindly enter your password'
  },
  image: {
    type: String,
    default: null
  },
  current_location: {
    type: Object,
    default: null
  },
  location_history: {
    type: Object,
    default: null
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  deleted: {
    type: String,
    default: null
  },
});

module.exports = mongoose.model('users', UsersSchema);