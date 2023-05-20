const express = require("express");
const router = express.Router();
const {
  register,
  subscribe,
  checkout,
  getKey,
} = require("../controllers/RegisterController");

router.post("/", register);
// router.post("/checkout", checkout);
router.post("/subscribe", subscribe);
// router.get("/key", getKey);

module.exports = router;
