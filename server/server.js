var express = require('express')
var app = express()
var hbs = require('express-handlebars')
var bodyParser = require('body-parser')

var getRoutes = require('./getRoutes')
var postRoutes = require('./postRoutes')

app.set('view engine', 'hbs')
app.set('views', require('path').join(__dirname, '../views'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static('./public'))

app.engine('hbs', hbs({
  extname: 'hbs',
  defaultLayout: 'main'
}))

// GET REQUESTS //
app.get('/', getRoutes.home)
app.get('/log', getRoutes.no)
app.get('/log/up', getRoutes.logUp)

// POST REQUESTS //
app.post('/log/up', postRoutes.logUp)

module.exports = app
