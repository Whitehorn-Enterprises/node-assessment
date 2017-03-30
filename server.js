// REQUIRE DEPENDENCIES
// ============================================================
var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
// CONTROLLERS
// ============================================================
var userCtrl = require('./userCtrl');
// INITILIZE APP
// ============================================================
var app = module.exports = express();
// INITILIZE DEPENDENCIES
// ============================================================
app.use(cors());
app.use(bodyParser.json());
// ENDPOINTS
// ============================================================
// USER ENDPOINTS
app.get('/api/users', function(req, res) {
  var response = userCtrl.readAll();
  res.status('200').send(response);
});
app.get('/api/users/:userId', function(req, res) {
  var userId = parseInt(req.params.userId)
  var response = userCtrl.findUserById(userId);
  res.status(200).send(response);
});
app.get('/api/admins', function(req, res) {
  var response = userCtrl.getAdmins();
  res.status('200').send(response);
});
app.get('/api/nonadmins', function(req, res) {
  var response = userCtrl.getNonAdmins();
  res.status('200').send(response);
});

app.post('/api/users', function(req, res) {
  var response = userCtrl.createUser(req.body);
  res.status('200').send(response);
});

app.put('/api/users/:userId', function(req, res) {
  var response = userCtrl.updateUser(req.params.userId, req.body);
  console.log(response);
  res.status('200').send(response);
});

app.delete('/api/users/:userId', function(req, res) {
  var response = userCtrl.removeUser(req.params.userId);
  res.status('200').send(response);
});
// VARIABLES
// ============================================================
var port = 3000;
// LISTEN
// ============================================================
// app.listen(port, function() {
//   console.log('listening on port ', port);
// });
