exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('users', (table) => {
    console.log('creating users')
    table.increments('id').primary()
    table.string('name')
    table.string('password')
    table.timestamp('createdAt').defaultTo(knex.fn.now())
  })
  .then(() => {
    console.log('creating enemies')
    return knex.schema.createTableIfNotExists('enemies', (table) => {
    table.integer('haterId').primary()
    table.string('haterName')
    table.integer('hatedId')
    table.string('hatedName')
    table.timestamp('createdAt').defaultTo(knex.fn.now())
    })
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users').then(() => {
    knex.schema.dropTableIfExists('enemies')
  })
}
