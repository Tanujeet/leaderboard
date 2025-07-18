// src/components/ClaimButton.jsx

export default function ClaimButton({ selectedUserId, onClaim }) {
  return (
    <button onClick={() => onClaim(selectedUserId)} disabled={!selectedUserId}>
      Claim Points
    </button>
  );
}
