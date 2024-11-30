// Mock API simulation for roles and users

const roles = [
    { id: 1, name: "Admin", permissions: ["Read", "Write", "Delete"] },
    { id: 2, name: "Editor", permissions: ["Read", "Write"] },
    { id: 3, name: "Viewer", permissions: ["Read"] },
  ];
  
  const users = [
    { id: 1, name: "Huda Alam", email: "huda@example.com", role: "Admin", status: "Active" },
    { id: 2, name: "Fiza Khan", email: "Fiza@example.com", role: "Editor", status: "Inactive" },
  ];
  
  // Helper function to simulate API delay
  const simulateDelay = (response) =>
    new Promise((resolve) => setTimeout(() => resolve(response), 500));
  
  // Role Management APIs
  export const getRoles = () => simulateDelay(roles);
  
  export const addRole = (newRole) => {
    const id = roles.length + 1;
    const role = { id, ...newRole };
    roles.push(role);
    return simulateDelay(role);
  };
  
  export const updateRole = (id, updatedRole) => {
    const index = roles.findIndex((role) => role.id === id);
    if (index !== -1) {
      roles[index] = { ...roles[index], ...updatedRole };
      return simulateDelay(roles[index]);
    }
    throw new Error("Role not found");
  };
  
  export const deleteRole = (id) => {
    const index = roles.findIndex((role) => role.id === id);
    if (index !== -1) {
      roles.splice(index, 1);
      return simulateDelay({ success: true });
    }
    throw new Error("Role not found");
  };
  
  // User Management APIs
  export const getUsers = () => simulateDelay(users);
  
  export const addUser = (newUser) => {
    const id = users.length + 1;
    const user = { id, ...newUser };
    users.push(user);
    return simulateDelay(user);
  };
  
  export const updateUser = (id, updatedUser) => {
    const index = users.findIndex((user) => user.id === id);
    if (index !== -1) {
      users[index] = { ...users[index], ...updatedUser };
      return simulateDelay(users[index]);
    }
    throw new Error("User not found");
  };
  
  export const deleteUser = (id) => {
    const index = users.findIndex((user) => user.id === id);
    if (index !== -1) {
      users.splice(index, 1);
      return simulateDelay({ success: true });
    }
    throw new Error("User not found");
  };
  