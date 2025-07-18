const express = require("express");
const router = express.Router();
const { claimDailyPoints } = require("../controllers/claimController");

router.post("/", claimDailyPoints);

module.exports = router;
