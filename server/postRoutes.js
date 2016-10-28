var db = require('../database/db')
var hasher = require('../database/hasher')
var render = require('../views/render')

module.exports = {
  logUp: logUp,
  logIn: logIn
}

function logUp (req, res) {
  db.getOneByName('users', req.body.name, (data) => {
    if (!data.length) {
      hasher.hash(req.body.password, (hashedPassword) => {
        db.addUser({name: req.body.name, password: hashedPassword}, (dbRes) => {
          res.send(render('log-in', {message: "* now log in"}))
        })
      })
    } else {
      res.send(render('log-up', {message: "* already user idiot"}))
    }
  })
}

function logIn (req, res) {
  db.getOneByName('users', req.body.name, (data) => {
    if (data.length > 0) {
      hasher.checkHash(req.body.password, data[0].password, (valid) => {
        if (valid) {
          req.session = require('./setSessionData')(req.session, data[0])
          res.send(render('home', req.session))
        } else {
          res.send(render('log-in', {message: "* wrong password idiot"}))
        }
      })
    } else {
      res.send(render('log-in', {message: "* user doesnt exist idiot"}))
    }
  })
}
