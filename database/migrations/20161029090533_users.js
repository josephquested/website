exports.up = function(knex, Promise) {
  console.log('creating table')
  return Promise.all([
    knex.schema.createTableIfNotExists('users', (table) => {
      table.increments('id')
      table.string('name')
      table.string('password')
      table.timestamps()
    }),

    knex.schema.createTableIfNotExists('enemies', (table) => {
      table.INTEGER('haterId')
      table.string('haterName')
      table.INTEGER('hatedId')
      table.string('hatedName')
      table.timestamps()
    })
  ]);
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users').then(() => {
    console.log('users table dropped')
  })
};
