module.exports = function (session, data) {
  session.userId = data.id
  session.name = data.name
  session.enemies = []
  return session
}
