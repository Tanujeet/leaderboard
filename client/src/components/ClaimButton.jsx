export default function ClaimButton({ selectedUserId, onClaim }) {
  return (
    <div className="flex justify-center mt-10">
      <button
        onClick={() => onClaim(selectedUserId)}
        disabled={!selectedUserId}
        className={`
          px-5 py-2 rounded-lg font-semibold
          text-white
          transition
          ${
            selectedUserId
              ? "bg-green-600 hover:bg-green-700 cursor-pointer"
              : "bg-gray-400 cursor-not-allowed"
          }
        `}
      >
        Claim Points
      </button>
    </div>
  );
}
