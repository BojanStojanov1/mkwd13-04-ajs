import { users } from "./users.js";

// console.log(users);
function getUserByEmail(email) {
  return users.find((user) => user.email === email);
}

function getUserByUsername(username) {
  return users.find((user) => user.username === username);
}

function getUsersByRole(role) {
  return users.filter((user) => user.role === role);
}

function getAllUserNames() {
  return users.map((user) => user.username);
}

// Export specific functions
// export { getUserByEmail, getUserByUsername, getUsersByRole, getAllUserNames };

const userService = {
  getUserByEmail,
  getUserByUsername,
  getUsersByRole,
  getAllUserNames,
};

export default userService;
