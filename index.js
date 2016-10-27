var PORT = process.env.PORT || 3000
var server = require('./server')

server.listen(PORT, () => {
  console.log(`website1000 is online`)
})
