'use strict';
module.exports = function(app) {
  var users = require('../controllers/usersController');
  var VerifyToken = require('../../../middleware/verifyToken');



  // Usesrs Routes
  app.route('/users')
    .get(VerifyToken ,users.list_all_users)
    .post(VerifyToken ,users.create_a_user);

  app.route('/users/login')
    .post(users.login_a_user)

  app.route('/users/register')
    .post(users.register_a_user)

  app.route('/users/:userId')
    .get(VerifyToken ,users.read_a_user)
    .put(VerifyToken ,users.update_a_user)
    .delete(VerifyToken ,users.delete_a_user);
};