const express = require("express")
const router = express.Router();
const { handleHomepage } = require("../controllers/homepage")

router.get('/', handleHomepage)

module.exports = router