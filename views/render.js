module.exports = (page, data) => {
  var menuBar = require('./partials/menu-bar')(data)
  var body = require(`./pages/${page}`)(data)
  var logger = require('./partials/logger')

  var logText = "website1000"

  if (data.userId) {
    logText = `${data.name}${data.userId}`
  }

  return `
    <html>
      <head>
        <title>website1000</title>
      </head>
      <body>
        <h1>website1000</h1>
        ${menuBar}
        ${body}
        ${logger(logText)}
      </body>
    </html>
  `
}
