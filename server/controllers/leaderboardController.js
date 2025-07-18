const User = require("../models/user");

const getLeaderboard = async (req, res) => {
  const topUsers = await User.find().sort({ points: -1 }).limit(10);
  res.json(topUsers);
};

module.exports = { getLeaderboard };
