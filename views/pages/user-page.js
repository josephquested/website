module.exports = (data) => {
  if (!data.description) {
    data.description = 'this user has no description'
  }

  return `
    <h2>${data.name}</h2>
    <br>
    <h4>${data.description}</h4>
    <button id='edit'>  click to edit</button>
    <script>
      document.getElementById('edit').addEventListener('click', ()=>{alert('you do not have permission to edit your description')})
    </script>
  `
}
