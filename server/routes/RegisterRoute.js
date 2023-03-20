const express = require("express");
const router = express.Router();
const { register, subscribe } = require("../controllers/RegisterController");

router.post("/", register);
router.post("/subscribe", subscribe);

module.exports = router;
