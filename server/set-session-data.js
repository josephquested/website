module.exports = function (session, data) {
  session.id = data.id
  session.name = data.name
  return session
}
