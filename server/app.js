const express = require("express");
const cors = require("cors");
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/claim", require("./routes/claimRoutes"));
app.use("/api/leaderboard", require("./routes/leaderboardRoutes"));

module.exports = app;
