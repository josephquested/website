module.exports = {
  home: home,
  no: no,
  logUp: logUp,
  logIn: logIn
}

function home (req, res) {
  res.render('home')
}

function no (req, res) {
  res.render('no')
}

function logUp (req, res) {
  res.render('log-up')
}

function logIn (req, res) {
  res.render('log-in')
}
