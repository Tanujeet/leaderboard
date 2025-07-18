// src/api.js
const BASE_URL = "http://localhost:5000/api";

// Claim Points
export const claimPoints = async (userId) => {
  const res = await fetch(`${BASE_URL}/claim`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userId }),
  });
  return res.json();
};

// Get History
export const getHistory = async (userId) => {
  const res = await fetch(`${BASE_URL}/history/${userId}`);
  return res.json();
};

// Get Leaderboard
export const getLeaderboard = async () => {
  const res = await fetch(`${BASE_URL}/leaderboard`);
  return res.json();
};
