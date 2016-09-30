'use strict';

var crypto = require('crypto');
var authTypes = ['github', 'twitter', 'facebook', 'google'];

module.exports = function(sequelize, DataTypes) {
  console.log('MODELO');
  var User = sequelize.define("User", {
    username: DataTypes.STRING,
    email   : { type: DataTypes.STRING, allowNull: false, unique: true },
    role    : { type: DataTypes.STRING, defaultValue: 'user' },
    salt    : { type: DataTypes.STRING }
    //google  : {},
    //github  : {} 
  }, {
    classMethods: {
      associate: function(models) {
        User.hasMany(models.Thing)
      }
    }
  });

  console.log(User);

  return User;
};
