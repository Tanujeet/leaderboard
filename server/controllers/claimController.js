const User = require("../models/User");
const ClaimHistory = require("../models/ClaimHistory");

exports.claimPoints = async (req, res) => {
  try {
    const { userId } = req.body;
    const user = await User.findById(userId);

    if (!user) return res.status(404).json({ error: "User not found" });

    const points = Math.floor(Math.random() * 10) + 1;
    user.totalPoints += points;
    await user.save();

    const history = new ClaimHistory({
      userId,
      userName: user.name,
      pointsClaimed: points,
    });

    await history.save();

    res.json({ message: "Points claimed", points, user });
  } catch (err) {
    res.status(500).json({ error: "Error claiming points" });
  }
};

exports.getHistory = async (req, res) => {
  try {
    const history = await ClaimHistory.find().sort({ claimedAt: -1 });
    res.json(history);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch history" });
  }
};
