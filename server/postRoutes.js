var db = require('../database/db')
var hasher = require('../database/hasher')

module.exports = {
  logUp: logUp
}

function logUp (req, res) {
  db.getOneByName('users', req.body.name, (data) => {
    if (!data.length) {
      hasher.hash(req.body.password, (hashedPassword) => {
        db.addUser({name: req.body.name, password: hashedPassword}, (dbRes) => {
          res.render('home')
        })
      })
    } else {
      res.render('log-up', {message: "* already user idiot"})
    }
  })
}
