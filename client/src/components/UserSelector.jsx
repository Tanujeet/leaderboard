// src/components/UserSelector.jsx

export default function UserSelector({ users, selectedUserId, onChange }) {
  return (
    <select value={selectedUserId} onChange={(e) => onChange(e.target.value)}>
      <option value="">Select User</option>
      {users.map((user) => (
        <option key={user._id} value={user._id}>
          {user.name}
        </option>
      ))}
    </select>
  );
}
