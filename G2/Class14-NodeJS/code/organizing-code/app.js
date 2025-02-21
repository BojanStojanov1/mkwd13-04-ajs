import { User } from "./models/user.js" // has to match the name of the export
// import { logInfo, logError } from "./services/logger-service.js"
import * as loggerService from "./services/logger-service.js"
import userService from "./services/user-service.js"; // export *default* has to be set in userService.js

console.log("============ Hello from app.js ============");
console.log(loggerService);

// ===> Create users
let john = new User("John", "john@mail.com", 39);
let bob = new User("Bob", "bob@mail.com", 23);

try {
    loggerService.logInfo("Adding users started...");
    userService.addUser(john);
    userService.addUser(bob);
    userService.addUser(bob);
} catch (error) {
    loggerService.logError(error)
} finally {
    loggerService.logInfo("Adding users finished")
}

const allUsers = userService.getUsers();
console.log("All users: ", allUsers)

