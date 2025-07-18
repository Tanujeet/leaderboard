import { useState } from "react";

export default function AddUserForm({ onAdd }) {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      onAdd(name);
      setName("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-md w-full max-w-md mx-auto"
    >
      <input
        type="text"
        placeholder="Enter new user"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
      />
      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-all"
      >
        Add User
      </button>
    </form>
  );
}
