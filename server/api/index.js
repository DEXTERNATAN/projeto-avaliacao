"use strict";

var fs        = require("fs");
var path      = require("path");
var Sequelize = require("sequelize");
var env       = process.env.NODE_ENV || "development";
var config    = require('../config/environment');
var sequelize = new Sequelize(config.database, config.username, config.password, config.sql);
var db        = {};

sequelize
  .sync({ force: true })
  .then(function(err) {
    console.log('It worked!');
  }, function (err) { 
    console.log('An error occurred while creating the table:', err);
}); 

sequelize.authenticate()
.then(function (err) {
    console.log('Connection has been established successfully.');
    console.log('Conexão estabelecida com sucesso.');
})
.catch(function (err) {
    console.log('Unable to connect to the database:', err);
})
.done();

// var Teste = sequelize.define('Teste', {
//     username: Sequelize.STRING,
//     password: Sequelize.STRING
// });

// Teste.create({
//     username: 'natan',
//     password: 'Natanael'
// }).then(function(user){
//     console.log('Teste funcionou');
// });   

fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf(".") !== 0) && (file !== "index.js");
  })
  .forEach(function(file) {
    file = '/' + file + '/' + file + '.model.js';
    var model = sequelize["import"](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(function(modelName) {
  if ("associate" in db[modelName]) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
