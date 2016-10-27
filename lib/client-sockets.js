var io = require('socket.io-client')
global.socket = io.connect('http://localhost:3000')

module.exports = function (callback) {
  socket.on('setId', (id) => {
    socket.id = id
    callback()
  })
}
