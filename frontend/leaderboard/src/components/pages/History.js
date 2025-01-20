import React, { useEffect } from "react";
import { useApp } from "../../context/AppContext.js";
import Table from "../common/Table.js";



const History = () => {
  const { history, fetchHistory } = useApp();
  const sortedHistory = history.slice().sort((a, b) => new Date(b.claimedAt) - new Date(a.claimedAt));

  useEffect(() => {
    fetchHistory();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold text-text-100 mb-6">Claim History</h2>

      <Table
        headers={["UserId", "User", "Points", "Time"]}
        data={sortedHistory}
        renderRow={(claim, index) => (
          <tr
            key={claim.id}
            className={index % 2 === 0 ? "bg-bg-200" : "bg-bg-100"}
          >
            <td className="p-4">{claim.userId._id}</td>
            <td className="p-4">{claim.userId.name}</td>
            <td className="p-4">{claim.pointsClaimed}</td>
            <td className="p-4">
              {new Date(claim.claimedAt).toLocaleString()}
            </td>
          </tr>
        )}
      />
    </div>
  );
};

export default History;
