const express = require("express")
const { handleGenerateShortURL, handleGetReqUrlRoute } = require("../controllers/url")
const router = express.Router();

router
  .get("/", handleGetReqUrlRoute)
  .post("/", handleGenerateShortURL)

module.exports = router;
