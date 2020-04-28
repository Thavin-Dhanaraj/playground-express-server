'use strict';
module.exports = function(app) {
  var auth = require('../controllers/authController');
  var VerifyToken = require('../../../middleware/verifyToken');



  // auth Routes
  app.route('/register')
    .post(auth.register_api_user);


  app.route('/me')
    .get(VerifyToken ,auth.read_api_user);
};