var render = require('../views/render')

module.exports = {
  home: home,
  no: no,
  logUp: logUp,
  logIn: logIn
}

function home (req, res) {
  res.send(render('home', req.session))
}

function no (req, res) {
  res.send(render('no', req.session))
}

function logUp (req, res) {
  res.send(render('log-up', req.session))
}

function logIn (req, res) {
  res.send(render('log-in', req.session))
}
