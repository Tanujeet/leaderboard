const User = require("../models/user");

const createUser = async (req, res) => {
  const { name, email } = req.body;

  let user = await User.findOne({ email });
  if (!user) {
    user = await User.create({ name, email });
  }

  res.status(200).json(user);
};

const getUser = async (req, res) => {
  const { email } = req.params;
  const user = await User.findOne({ email });

  if (!user) return res.status(404).json({ error: "User not found" });

  res.json(user);
};

module.exports = { createUser, getUser };
