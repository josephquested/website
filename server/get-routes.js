var db = require('../database/db')
var render = require('../views/render')

module.exports = {
  home: home,
  no: no,
  logUp: logUp,
  logIn: logIn,
  logOut: logOut,
  userPage: userPage,
  enemies: enemies
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

function logOut (req, res) {
  req.session = require('./wipe-session-data')(req.session)
  res.redirect('/')
}

function enemies (req, res) {
  console.log(req.session)
  res.send(render('enemies', req.session))
}

function userPage (req, res) {
  db.getOneById('users', req.params.id, (data) => {
    if (data.length > 0) {
      res.send(render('user-page', data[0]))
    } else {
      res.send(render('no', req.session))
    }
  })
}
