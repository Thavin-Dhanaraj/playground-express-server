'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var AuthSchema = new Schema({
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
  Created_date: {
    type: Date,
    default: Date.now
  },
  deleted: {
    type: String,
    default: 0
  },
});

module.exports = mongoose.model('auth', AuthSchema);