const shortid = require('shortid');
const URL = require("../models/url")

async function handleGenerateShortURL (req, res) {
  const body = req.body;

  console.log("url:", body)

  if(!body.url || !body) return res.status(400).json({msg: "url is required"})

  const shortID = shortid()

  await URL.create({
    shortID: shortID,
    redirectUrl: body.url,
    visitHistory: []
  });

  return res.json({shortID: shortID})
}

async function handleGetReqUrlRoute (req, res) {
  return res.send("you're on /url route, now send some POST request to this route.")
}

module.exports = {
  handleGenerateShortURL,
  handleGetReqUrlRoute
}