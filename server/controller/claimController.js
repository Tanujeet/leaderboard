const User = require("../models/user");

const claimDailyPoints = async (req, res) => {
  const { email } = req.body;

  const user = await User.findOne({ email });
  if (!user) return res.status(404).json({ error: "User not found" });

  const now = new Date();
  const lastClaimed = user.lastClaimed || new Date(0);
  const hoursSinceLastClaim = (now - lastClaimed) / (1000 * 60 * 60);

  if (hoursSinceLastClaim < 24) {
    return res.status(400).json({ error: "Already claimed today" });
  }

  user.points += 10; // e.g., reward
  user.lastClaimed = now;
  await user.save();

  res.json({ message: "Claim successful", user });
};

module.exports = { claimDailyPoints };
