export default function UserSelector({ users, selectedUserId, onChange }) {
  return (
    <div className="flex justify-center">
      <select
        value={selectedUserId}
        onChange={(e) => onChange(e.target.value)}
        className="
          w-full max-w-sm md:max-w-xs
          px-4 py-2
          border border-gray-300 rounded-lg
          focus:outline-none focus:ring-2 focus:ring-blue-500
          bg-white
          text-gray-700
          cursor-pointer
          transition
          hover:border-blue-400
        "
      >
        <option value="" disabled className="text-gray-400">
          Select User
        </option>
        {users.map((user) => (
          <option key={user._id} value={user._id}>
            {user.name}
          </option>
        ))}
      </select>
    </div>
  );
}
