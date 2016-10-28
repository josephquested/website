module.exports = (data) => {
  console.log('data in user page: ', data)
  return `
    <h2>${data.name}</h2>
    <h3>romancer of the elderly</h3>
    <script src="user-page.js"
  `
}
