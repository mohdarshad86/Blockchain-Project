const express = require("express");
const router = express.Router();
const coinController = require("../controllers/coinController");

router.get("/getCoins", coinController.getCoins);

module.exports = router;
