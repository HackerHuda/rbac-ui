import React, { useState, useEffect } from "react";
import { getRoles, addRole, updateRole, deleteRole } from "../utils/api";
import Modal from "./Modal";

const RolesTable = () => {
  const [roles, setRoles] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentRole, setCurrentRole] = useState(null);
  const [formValues, setFormValues] = useState({ name: "", permissions: "" });

  useEffect(() => {
    getRoles().then(setRoles);
  }, []);

  const handleAddRole = () => {
    setCurrentRole(null);
    setFormValues({ name: "", permissions: "" });
    setModalOpen(true);
  };

  const handleEditRole = (role) => {
    setCurrentRole(role);
    setFormValues({ name: role.name, permissions: role.permissions.join(", ") });
    setModalOpen(true);
  };

  const handleDeleteRole = (id) => {
    deleteRole(id)
      .then(() => setRoles(roles.filter((role) => role.id !== id)))
      .catch((error) => console.error(error));
  };

  const handleSaveRole = () => {
    const updatedRole = { ...formValues, permissions: formValues.permissions.split(",") };

    if (currentRole) {
      updateRole(currentRole.id, updatedRole).then((updated) => {
        setRoles(roles.map((role) => (role.id === currentRole.id ? updated : role)));
        setModalOpen(false);
      });
    } else {
      addRole(updatedRole).then((newRole) => {
        setRoles([...roles, newRole]);
        setModalOpen(false);
      });
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Roles Management</h2>
      <button
        onClick={handleAddRole}
        className="px-4 py-2 bg-blue-600 text-white rounded-md mb-4"
      >
        Add Role
      </button>
      <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-md">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2 border">ID</th>
            <th className="px-4 py-2 border">Role Name</th>
            <th className="px-4 py-2 border">Permissions</th>
            <th className="px-4 py-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {roles.map((role) => (
            <tr key={role.id} className="text-center">
              <td className="px-4 py-2 border">{role.id}</td>
              <td className="px-4 py-2 border">{role.name}</td>
              <td className="px-4 py-2 border">{role.permissions.join(", ")}</td>
              <td className="px-4 py-2 border">
                <button
                  onClick={() => handleEditRole(role)}
                  className="px-2 py-1 bg-yellow-500 text-white rounded-md mx-1"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteRole(role.id)}
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
          data={currentRole}
          onClose={() => setModalOpen(false)}
          onSave={handleSaveRole}
          title={currentRole ? "Edit Role" : "Add Role"}
          fields={[
            { name: "name", label: "Role Name", type: "text" },
            { name: "permissions", label: "Permissions (comma-separated)", type: "text" },
          ]}
        />
      )}
    </div>
  );
};

export default RolesTable;
