var db = require('../database/db')
var hasher = require('../database/hasher')

module.exports = {
  logUp: logUp
}

function logUp (req, res) {
  console.log('form data: ', req.body)
  db.getOneByName('users', req.body.name, (data) => {
    if (!data.length) {
      hasher.hash(req.body.password, (hashedPassword) => {
        db.addUser({name: req.body.name, password: hashedPassword}, (dbRes) => {
          console.log('res from database: ', dbRes)
          res.render('home')
        })
      })
    } else {
      console.log('user already exists')
    }
  })
}
