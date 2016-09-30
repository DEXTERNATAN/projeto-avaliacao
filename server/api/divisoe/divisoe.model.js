'use strict';

module.exports = function(sequelize, DataTypes) {
  var Divisoes = sequelize.define('Divisoes', {
    _id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: DataTypes.STRING,
    info: DataTypes.STRING,
    active: DataTypes.BOOLEAN,
  });

  return Divisoes;
};