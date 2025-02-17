// import {
//   getUserByUsername,
//   getUserByEmail,
//   getUsersByRole,
//   getAllUserNames,
// } from "./userService.js";

// Import all functions with alias
// import * as userService from "./userService.js";

// with export default
import userService from "./userService.js";

// const usernames = getAllUserNames();
const usernames = userService.getAllUserNames();
console.log(usernames);

const allAdmins = userService.getUsersByRole("admin");
console.log(allAdmins);

const firstUser = userService.getUserByUsername("user1");
console.log(firstUser);
