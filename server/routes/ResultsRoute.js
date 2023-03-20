const express = require("express");
const { getResults } = require("../controllers/ResultsController");
const router = express.Router();

router.get("/", getResults);
module.exports = router;
