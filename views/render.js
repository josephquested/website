module.exports = (page, data) => {
  var menuBar = require('./partials/menu-bar')(data)
  var body = require(`./pages/${page}`)(data)

  return `
    <html>
      <head>
        <title>website1000</title>
      </head>
      <body>
        <h1>website1000</h1>
        ${menuBar}
        ${body}
      </body>
    </html>
  `
}
