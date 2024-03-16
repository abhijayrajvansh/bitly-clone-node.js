const express = require("express");
const urlRoute = require("./routes/url")
const homepageRoute = require("./routes/homepage")
const URL = require("./models/url")
const { connectToMongoDBClient } = require('./connect')


const app = express();
const PORT = 3000;

connectToMongoDBClient('mongodb://127.0.0.1:27017/shorturl').then(() => {
  console.log("connected to mongodb!")
})

//middleware
app.use(express.json());

app.use('/', homepageRoute)
app.use('/url', urlRoute)

app.get("/:shortid", async (req, res) => {
  const shortid = req.params.shortid;

  console.log(`requested shortid: ${shortid}`)

  const entry = await URL.findOne({shortID: shortid})

  console.log(entry)

  res.redirect(entry.redirectUrl)

})



app.listen(PORT, () => {
  console.log(`server started on PORT: ${PORT}`)
})