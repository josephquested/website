var env = process.env.NODE_ENV || 'development'
var config = require('./knexfile')[env]
var knex = require('knex')(config)

module.exports = {
  getAll: (table, callback) => {
    knex.raw('select * from ' + table)
    .then(res => callback(res))
  },

  getOneByName: (table, name, callback) => {
    knex(table)
    .where('name', name)
    .then(res => callback(res))
  },

  addUser: (userData, callback) => {
    knex('users')
    .insert({name: userData.name, password: userData.password})
    .then(res => callback(res))
  }
}
