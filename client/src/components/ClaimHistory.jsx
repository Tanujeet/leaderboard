// src/components/ClaimHistory.jsx

export default function ClaimHistory({ history }) {
  return (
    <div>
      <h2>📜 Claim History</h2>
      <table border="1">
        <thead>
          <tr>
            <th>User</th>
            <th>Points</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {history.map((entry) => (
            <tr key={entry._id}>
              <td>{entry.userName}</td>
              <td>{entry.pointsClaimed}</td>
              <td>{new Date(entry.claimedAt).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
