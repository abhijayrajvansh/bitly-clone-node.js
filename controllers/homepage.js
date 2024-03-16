function handleHomepage (req, res) {
  return res.send("welcome to bitly clone (url shortener), now goto /url")
}

module.exports = {
  handleHomepage
}