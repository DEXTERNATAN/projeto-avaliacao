'use strict';

// Development specific configuration
// ==================================
module.exports = {
  // MongoDB connection options
  mongo: {
    uri: 'mongodb://localhost/prjavalicao05-dev'
  },

  // Postgres connection options
  postgres: {
    uri: process.env.POSTGRES_URL ||
         'postgres://postgres:root@127.0.0.1:5432/projetoAvaliacao'
  },
  database: 'projetoAvaliacao',
  username: 'postgres',
  password: 'root',
  seedDB: true
};
