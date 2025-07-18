// src/components/Leaderboard.jsx

export default function Leaderboard({ data }) {
  return (
    <div>
      <h2>🏆 Leaderboard</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Total Points</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user) => (
            <tr key={user.name}>
              <td>{user.rank}</td>
              <td>{user.name}</td>
              <td>{user.totalPoints}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
