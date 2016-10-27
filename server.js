var app = require('express')()
var hbs = require('express-handlebars')
var path = require('path')

app.engine('hbs', hbs({
  extname: 'hbs',
  defaultLayout: 'main'
}))

app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))

// GET REQUESTS //
app.get('/', require('./routes/home'))

// POST REQUESTS //





module.exports = app
