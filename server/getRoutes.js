var formatMenuBar = require('../views/logic/format-menu-bar')

module.exports = {
  home: home,
  no: no,
  logUp: logUp,
  logIn: logIn
}

function home (req, res) {
  res.render('home', {menuBar: formatMenuBar(req.session)})
}

function no (req, res) {
  res.render('no')
}

function logUp (req, res) {
  res.render('log-up', {menuBar: formatMenuBar(req.session)})
}

function logIn (req, res) {
  res.render('log-in', {menuBar: formatMenuBar(req.session)})
}
