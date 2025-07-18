export default function Leaderboard({ data }) {
  return (
    <div className="mt-8 max-w-4xl mx-auto p-4 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-semibold mb-4">🏆 Leaderboard</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="border border-gray-300 px-4 py-2 text-left font-medium">
                Rank
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left font-medium">
                Name
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left font-medium">
                Total Points
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((user) => (
              <tr
                key={user.name}
                className="hover:bg-gray-50 transition-colors"
              >
                <td className="border border-gray-300 px-4 py-2">
                  {user.rank}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {user.name}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {user.totalPoints}
                </td>
              </tr>
            ))}
            {data.length === 0 && (
              <tr>
                <td colSpan="3" className="text-center py-4 text-gray-500">
                  No leaderboard data yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
