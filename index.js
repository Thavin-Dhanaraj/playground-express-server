require('dotenv').config();
var cors = require('cors')
var express = require('express'),
  app = express(),
  port = process.env.PORT || 3001,
  mongoose = require('mongoose'),
  User = require('./api/users/models/usersModel'), //created model loading here
  auth = require('./api/auth/models/authModel'), //created model loading here
  bodyParser = require('body-parser');
  

const uri = "mongodb+srv://thavin:thavin1234@almighty-sn6qa.mongodb.net/poc?retryWrites=true&w=majority";
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect(uri, { useNewUrlParser: true , useUnifiedTopology: true });
require('./api/users/models/usersModel'); 

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/users/routes/usersRouter'); //importing route
routes(app); //register the route
var routes = require('./api/auth/routes/authRouter'); //importing route
routes(app); //register the route


app.listen(port);

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

console.log('RESTful API server started on: ' + port);

const { Issuer } = require('openid-client');
Issuer.discover('https://accounts.google.com') // => Promise
  .then(function (googleIssuer) {
    console.log('Discovered issuer %s %O', googleIssuer.issuer, googleIssuer.metadata);
  });
