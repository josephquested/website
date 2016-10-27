module.exports = function (connection) {
  var io = require('socket.io')(connection)

  io.on('connection', (socket) => {
    io.to(socket.id).emit('setId', socket.id)
    console.log(`user: ${socket.id} connected`)

    socket.on('disconnect', () => {
      console.log(`user: ${socket.id} disconnected`)
    })
  })
}
