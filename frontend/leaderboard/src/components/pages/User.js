import React, { useState, useEffect } from "react";
import { useApp } from "../../context/AppContext.js";
import Table from "../common/Table.js";
import Modal from "../common/Modal.js";
import { toast } from "react-toastify";

const User = () => {
  const { users, fetchUsers, addUser, claimPoints } = useApp();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newUserName, setNewUserName] = useState("");

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleAddUser = async (e) => {
    e.preventDefault();
    await addUser(newUserName);
    setNewUserName("");
    setIsModalOpen(false);
  };

  const handleClaimPoints = async (id) => {
    const response = await claimPoints(id);
    console.log(response)
    toast.success(`${response.pointsClaimed} Points claimed successfully`);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-text-100">Users</h2>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-primary-100 text-bg-100 px-4 py-2 rounded hover:bg-primary-200"
        >
          Add User
        </button>
      </div>

      <Table
        headers={['UserId', 'Name', 'Points', '']}
        data={users}
        renderRow={(user, index) => (
          <tr key={user.id} className={index % 2 === 0 ? 'bg-bg-200' : 'bg-bg-100'}>
            <td className="p-4">{user._id}</td>
            <td className="p-4">{user.name}</td>
            <td className="p-4">{user.points}</td>
            <td className="p-4">
              <button onClick={()=>{handleClaimPoints(user._id);}} className="bg-primary-100 text-bg-100 px-4 py-2 rounded-lg hover:bg-primary-200">Claim Points</button>
            </td>
          </tr>
        )}
      />

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Add New User"
      >
        <form onSubmit={handleAddUser}>
          <input
            type="text"
            value={newUserName}
            onChange={(e) => setNewUserName(e.target.value)}
            placeholder="Enter user name"
            className="w-full p-2 border border-bg-300 rounded mb-4"
            required
          />
          <button
            type="submit"
            className="w-full bg-primary-100 text-bg-100 px-4 py-2 rounded hover:bg-primary-200"
          >
            Add User
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default User;
