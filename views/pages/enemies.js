module.exports = (data) => {
  var html = enemiesHTML(data.enemies)
  return `
    <h2>your enemies</h2>
    <ul>
      ${html}
    </ul>
    <br>
    <hr>
    <form action="/enemies" method="post">
      declare an enemy: <input type="text" name="name">
      <input type="submit" value="Submit">
    </form>
  `
}

function enemiesHTML (enemies) {
  var html =  ``
  if (enemies) {
    enemies.forEach((enemy) => {
      html += `<li><a href="/user/${enemy.id}">${enemy.name}</a></li>`
    })
  }
  return html
}
