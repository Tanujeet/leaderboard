const express = require("express");
const router = express.Router();
const { createUser, getUser } = require("../controllers/userController");

router.post("/", createUser); // Create or login
router.get("/:email", getUser); // Get user by email

module.exports = router;
