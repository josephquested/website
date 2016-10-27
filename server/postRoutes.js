var db = require('../database/db')
var hasher = require('../database/hasher')

module.exports = {
  logUp: logUp,
  logIn: logIn
}

function logUp (req, res) {
  db.getOneByName('users', req.body.name, (data) => {
    if (!data.length) {
      hasher.hash(req.body.password, (hashedPassword) => {
        db.addUser({name: req.body.name, password: hashedPassword}, (dbRes) => {
          res.render('log-in', {message: "* now log in"})
        })
      })
    } else {
      res.render('log-up', {message: "* already user idiot"})
    }
  })
}

function logIn (req, res) {
  db.getOneByName('users', req.body.name, (data) => {
    if (data.length > 0) {
      hasher.checkHash(req.body.password, data[0].password, (valid) => {
        if (valid) {
          res.render('log-in', {message: "yes!"})
        } else {
          res.render('log-in', {message: "* wrong password idiot"})
        }
      })
    } else {
      res.render('log-in', {message: "* user doesnt exist idiot"})
    }
  })
}
