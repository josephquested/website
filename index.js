var PORT = process.env.PORT || 3000
var server = require('./server/server')
var http = require('http').Server(server);

require('./server/server-sockets')(http)

http.listen(PORT, () => {
  console.log(`website1000 is online`)
})
