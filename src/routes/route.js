const express = require("express");
const router = express.Router();
const coinController = require("../controllers/coinController");

router.get("/assets", coinController.getCoins);

module.exports = router;
