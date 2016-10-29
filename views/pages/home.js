module.exports = (data) => {
  var html = 'undefined'

  if (data.userId) {
    html = `<p>why are you here ${data.name}?</p>`
  }

  return `
    ${html}
  `
}
