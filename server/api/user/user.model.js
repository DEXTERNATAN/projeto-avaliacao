'use strict';

var crypto = require('crypto');
var authTypes = ['github', 'twitter', 'facebook', 'google'];

module.exports = function(sequelize, DataTypes) {

  var User = sequelize.define("User", {
    username: DataTypes.STRING,
    email   : { type: DataTypes.STRING, allowNull: false, unique: true },
    role    : { type: DataTypes.STRING, defaultValue: 'user' },
    descricao: { type: DataTypes.STRING, defaultValue: 'Tiago' }
  }, {
    classMethods: {
      associate: function(models) {
        User.hasMany(models.Thing)
      }
    }
  });

  return User;
};
