const User = require("../models/user");
const ClaimHistory = require("../models/ClaimHistory");

exports.claimPoints = async (req, res) => {
  const { userId } = req.body;
  const points = Math.floor(Math.random() * 10) + 1;

  const user = await User.findById(userId);
  if (!user) return res.status(404).json({ message: "User not found" });

  user.totalPoints += points;
  await user.save();

  const history = await ClaimHistory.create({ userId, points });

  res.status(200).json({
    message: `User ${user.name} claimed ${points} points.`,
    user,
    history,
  });
};

exports.getHistory = async (req, res) => {
  const history = await ClaimHistory.find()
    .populate("userId", "name")
    .sort({ claimedAt: -1 });
  res.json(history);
};
