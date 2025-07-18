import React, { useEffect, useState } from "react";
import {
  getUsers,
  addUser,
  claimPoints,
  getLeaderboard,
  getClaimHistory,
} from "../services/api";

import UserSelector from "../components/UserSelector";
import AddUserForm from "../components/AddUserForm";
import ClaimButton from "../components/ClaimButton";
import Leaderboard from "../components/Leaderboard";
import ClaimHistory from "../components/ClaimHistory";

export default function Home() {
  const [users, setUsers] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState("");
  const [leaderboard, setLeaderboard] = useState([]);
  const [history, setHistory] = useState([]);

  const fetchAll = async () => {
    const [userRes, boardRes, historyRes] = await Promise.all([
      getUsers(),
      getLeaderboard(),
      getClaimHistory(),
    ]);
    setUsers(userRes.data);
    setLeaderboard(boardRes.data);
    setHistory(historyRes.data);
  };

  useEffect(() => {
    fetchAll();
  }, []);

  const handleAddUser = async (name) => {
    await addUser(name);
    fetchAll();
  };

  const handleClaim = async (userId) => {
    await claimPoints(userId);
    fetchAll(); // Refresh everything
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>🎯 Leaderboard System</h1>

      <AddUserForm onAdd={handleAddUser} />

      <br />

      <UserSelector
        users={users}
        selectedUserId={selectedUserId}
        onChange={setSelectedUserId}
      />
      <ClaimButton selectedUserId={selectedUserId} onClaim={handleClaim} />

      <br />
      <br />

      <Leaderboard data={leaderboard} />
      <br />
      <ClaimHistory history={history} />
    </div>
  );
}
