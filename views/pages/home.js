module.exports = (data) => {
  var html = 'undefined'

  if (data.userId !== undefined) {
    console.log('USER DATA: ', data)
    html = `<p>why are you here ${data.name}?</p>`
  }

  return `
    ${html}
  `
}
