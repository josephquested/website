module.exports = (data) => {
  var html = enemiesHTML(data.enemies)
  return `
    <h2>${data.name}'s enemy list</h2>
    <ul>
      ${html}
    </ul>
  `
}

function enemiesHTML (enemies) {
  var html =  ``
  enemies.forEach((enemy) => {
    html += `<li><a href="/user/${enemy.id}">${enemy.name}</a></li>`
  })
  return html
}
