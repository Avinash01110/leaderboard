import React, { useState } from "react";
import { useApp } from "../../context/AppContext.js";


const ClaimPoints = () => {
  const { claimPoints } = useApp();
  const [userId, setUserId] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await claimPoints(userId);
    setUserId("");
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold text-text-100 mb-6">Claim Points</h2>

      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <input
          type="text"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          placeholder="Enter user ID"
          className="w-full p-2 border border-bg-300 rounded mb-4"
          required
        />
        <button
          type="submit"
          className="w-full bg-primary-100 text-bg-100 px-4 py-2 rounded hover:bg-primary-200"
        >
          Claim Points
        </button>
      </form>
    </div>
  );
};

export default ClaimPoints;
