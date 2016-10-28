module.exports = function (session, data) {
  session.userId = data.id
  session.name = data.name
  return session
}
