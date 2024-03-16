const mongoose = require('mongoose')

async function connectToMongoDBClient (url) {
  return mongoose.connect(url)
}

module.exports = {
  connectToMongoDBClient
}