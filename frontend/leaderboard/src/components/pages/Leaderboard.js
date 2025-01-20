import React, { useEffect } from "react";
import { useApp } from "../../context/AppContext.js";
import Table from "../common/Table.js";


const Leaderboard = () => {
  const { leaderboard, fetchLeaderboard } = useApp();

  useEffect(() => {
    fetchLeaderboard();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold text-text-100 mb-6">Leaderboard</h2>

      <Table
        headers={["Rank", "Name", "Points"]}
        data={leaderboard}
        renderRow={(user, index) => (
          <tr
            key={user.id}
            className={index % 2 === 0 ? "bg-bg-200" : "bg-bg-100"}
          >
            <td className="p-4">{index + 1}</td>
            <td className="p-4">{user.name}</td>
            <td className="p-4">{user.points}</td>
          </tr>
        )}
      />
    </div>
  );
};

export default Leaderboard;
