export default function ClaimHistory({ history }) {
  return (
    <div className="mt-8 max-w-4xl mx-auto p-4 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-semibold mb-4">📜 Claim History</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="border border-gray-300 px-4 py-2 text-left font-medium">
                User
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left font-medium">
                Points
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left font-medium">
                Time
              </th>
            </tr>
          </thead>
          <tbody>
            {history.map((entry) => (
              <tr
                key={entry._id}
                className="hover:bg-gray-50 transition-colors"
              >
                <td className="border border-gray-300 px-4 py-2">
                  {entry.userName}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {entry.pointsClaimed}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {new Date(entry.claimedAt).toLocaleString()}
                </td>
              </tr>
            ))}
            {history.length === 0 && (
              <tr>
                <td colSpan="3" className="text-center py-4 text-gray-500">
                  No claim history yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
