// REQUIRE DEPENDENCIES
// ============================================================
var users = require('./users');
// EXPORT METHODS
// ============================================================
module.exports = {
  // CRUD METHODS
  // ============================================================
  readAll: function(req, res) {
    var result = users.find();
    return result
  },

  findUserById: function(req) {
    var result = users.findOne("id", req);
    if (result) {
      return result;
    }
    else {
      return null
    }
  },

  getAdmins: function(req, res) {
    var result = users.find("type", "admin");
    if (result) {
      return result;
    }
    else {
      return null
    }
  },
  //
  getNonAdmins: function(req, res) {
    var result = users.find("type", "user");
    if (result) {
      return result;
    }
    else {
      return null
    }
  },
  //
  getUsersByFavorite: function(req, res) {
    var result = users.find();
    var newResult = [];
    if (result) {
      for (var i = 0; i < result.length; i++) {
        for (var j = 0; j < result[i].favorites.length; j++) {
          if (result[i].favorites[j] === req) {
            newResult.push(result[i])
          }
        }
      }
      return newResult;
    }
    else {
      return null
    }
  },

  getUsersByAgeLimit: function(req, res) {
    var result = users.find();
    var newResult = [];
    if (result) {
      for (var i = 0; i < result.length; i++) {
        if (result[i].age <= req) {
          newResult.push(result[i])
        }
      }
      if (newResult) {
        return newResult;
      }
    }
    else {
      return null
    }
  },

  findUserByQuery: function(query, value) {
    var result = users.find(query, value);
    if (result) {
      return result;
    }
    else {
      return null
    }
  },

  createUser: function(newUser) {
    var result = users.add(newUser);
    if (result === "err") {
      return null
    }
    else {
      return result;
    }
  },

  updateUser: function(id, obj) {
    users.update("id", id, obj);
    var result = users.findOne("id", id);
    return result;
  },

  removeUser: function(req, res) {
    var result = users.findOne("id", req);
    users.remove("id", req);
    return result;
  }

  // OTHER METHODS
  // ============================================================

};
