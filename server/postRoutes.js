var db = require('../database/db')

module.exports = {
  logUp: logUp
}

function logUp (req, res) {
  console.log('form data: ', req.body)
  db.getOneByName('users', req.body.user, (data) => {
    if (!data) {
      db.addUser(userData, (res) => {
        console.log('res from database: ', res)
      })
    } else {
      console.log('user already exists')
    }
  })
}
