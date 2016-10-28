module.exports = (data) => {
  if (!data.message) data.message = ''

  return `
    <h3>log in</h3>
    <form action="/log/in" method="post">
      user: <input type="text" name="name"><br>
      pass: <input type="password" name="password"><br><br>
      <input type="submit" value="Submit">
      <p>${data.message}</p>
    </form>
  `
}
