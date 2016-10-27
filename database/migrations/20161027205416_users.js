exports.up = function(knex, Promise) {
  console.log('creating table')
  return knex.schema.createTableIfNotExists('users', (table) => {
    table.increments('id')
    table.string('name')
    table.string('password')
    table.timestamps()
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users').then(() => {
    console.log('users table dropped')
  })
};
