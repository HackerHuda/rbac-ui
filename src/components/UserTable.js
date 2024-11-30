import React, { useState, useEffect } from "react";
import { getUsers, addUser, updateUser, deleteUser } from "../utils/api.js";
import Modal from "./Modal";

const UsersTable = () => {
  const [users, setUsers] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const data = await getUsers();
      setUsers(data);
    } catch (error) {
      console.error("Error fetching users:", error.message);
    }
  };

  const handleAddUser = async (newUser) => {
    try {
      const addedUser = await addUser(newUser);
      setUsers((prevUsers) => [...prevUsers, addedUser]);
      closeModal();
    } catch (error) {
      console.error("Error adding user:", error.message);
    }
  };

  const handleEditUser = async (id, updatedUser) => {
    try {
      const updated = await updateUser(id, updatedUser);
      setUsers((prevUsers) =>
        prevUsers.map((user) => (user.id === id ? updated : user))
      );
      closeModal();
    } catch (error) {
      console.error("Error updating user:", error.message);
    }
  };

  const handleDeleteUser = async (id) => {
    try {
      await deleteUser(id);
      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
    } catch (error) {
      console.error("Error deleting user:", error.message);
    }
  };

  const handleSave = (data) => {
    if (modalData) {
      handleEditUser(modalData.id, data);
    } else {
      handleAddUser(data);
    }
  };

  const openModal = (data = null) => {
    setModalData(data);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setModalData(null);
    setIsModalOpen(false);
  };

  return (
    <div className="p-4">
        <h2 className="text-xl font-bold mb-4">User Management</h2>
        <button
          onClick={() => openModal()}
          className="px-4 py-2 bg-blue-600 text-white rounded-md mb-4"
        >
          Add User
        </button>
      
      <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-md">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 border">ID</th>
            <th className="px-4 py-2 border">Name</th>
            <th className="px-4 py-2 border">Email</th>
            <th className="px-4 py-2 border">Role</th>
            <th className="px-4 py-2 border">Status</th>
            <th className="px-4 py-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="text-center">
              <td className="px-4 py-2 border">{user.id}</td>
              <td className="px-4 py-2 border">{user.name}</td>
              <td className="px-4 py-2 border">{user.email}</td>
              <td className="px-4 py-2 border">{user.role}</td>
              <td className="px-4 py-2 border">{user.status}</td>
              <td className="px-4 py-2 border">
                <button
                  onClick={() => openModal(user)}
                  className="px-2 py-1 bg-yellow-500 text-white rounded-md mx-1"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteUser(user.id)}
                  className="px-2 py-1 bg-red-600 text-white rounded-md mx-1"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          data={modalData}
          onClose={closeModal}
          onSave={handleSave}
          title={modalData ? "Edit User" : "Add User"}
          fields={[
            { name: "name", label: "Name", type: "text" },
            { name: "email", label: "Email", type: "email" },
            { name: "role", label: "Role", type: "text" },
            { name: "status", label: "Status", type: "text" },
          ]}
        />
      )}
    </div>
  );
};

export default UsersTable;
