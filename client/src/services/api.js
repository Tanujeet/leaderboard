// src/services/api.js
import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api", // Update this if deployed
});

export const getUsers = () => API.get("/users");
export const addUser = (name) => API.post("/users", { name });
export const claimPoints = (userId) => API.post("/claim", { userId });
export const getLeaderboard = () => API.get("/leaderboard");
export const getClaimHistory = () => API.get("/claim/history");

export default API;
