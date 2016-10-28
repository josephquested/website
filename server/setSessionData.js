module.exports = function (session, data) {
  session.userId = data.id
  session.userName = data.name
  return session
}
