console.log("Heyo heyo");

// A callback is simply a function that you pass to another function to be executed after some operation completes.
function greet(name, callback) {
  const message = `Hello ${name}`;
  callback(message);
}

function showGreeting(greetingMessage) {
  console.log(greetingMessage);
}

greet("Dejan", showGreeting);

// Callback Hell
// Scenario:
// 1) get user data from database,
// 2) fetch user comments
// 3) update the UI
// 4) log a success message.

// function getUser(userId, callback) {
//   setTimeout(() => {
//     console.log(`Fetched user with ID: ${userId}`);
//     callback({ userId: userId, name: "Ivan" });
//     // callback(["Comment A", "Comment B"]);
//   }, 1000);
// }

// function getUserComments(user, callback) {
//   setTimeout(() => {
//     // Simulate fetching user comments
//     console.log(`Fetched comments for user ${user.name}`);
//     callback(["Comment A", "Comment B"]);
//   }, 1000);
// }

// function updateUI(user, comments, callback) {
//   setTimeout(() => {
//     console.log(`UI updated with data for ${user.name} and their comments`);
//     callback();
//   }, 1000);
// }

// getUser(101, (user) => {
//   getUserComments(user, (comments) => {
//     updateUI(user, comments, () => {
//       console.log("All operations completed. Now we are Done.");
//     });
//   });
// });

// Cleaner solution:

// function getUser(userId, onSuccess, onError) {
//   setTimeout(() => {
//     const foundUser = { userId: userId, name: "Bob" };

//     if (!userId || userId < 0) {
//       onError("Invalid user id!");
//       return;
//     }
//     onSuccess(foundUser);
//   }, 500);
// }

// function handleUserData(user) {
//   console.log(`User found: ${user.name}`);
// }

// function handleError(error) {
//   console.error(`ERROR: ${error}`);
// }

// getUser(123, handleUserData, handleError);

// This approach is more manegable, but once you many operations, it can still become complicated

// Promises

// A promise is an object representing the eventual completion or failure of an asynchronous operation and its resulting value.

// States: pending, fulfiled, rejected

function fetchDataPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;

      if (success) {
        resolve("Data fetched successfully");
      } else {
        reject("Failed to fetch data!");
      }
    }, 1000);
  });
}

// fetchDataPromise()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// Promise chaining
// function step1(result) {
//   console.log("Step 1 complete", result);
//   return "Result from step 1";
// }

// function step2(result) {
//   console.log("Step 2 complete", result);
//   return "Result from step 2";
// }

// function step3(result) {
//   console.log("Step 3 complete", result);
//   //   throw new Error("something went wrong");
//   return "Result from step 3";
// }

// fetchDataPromise()
//   .then(step1)
//   .then(step2)
//   .then(step3)
//   .then((finalResult) => {
//     console.log("Final result:", finalResult);
//   })
//   .catch((error) => {
//     console.error("Error in chain", error);
//   });

// real life example of using promises

function getDocuments() {
  return new Promise((resolve, reject) => {
    fetch(
      "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/documents.json"
    )
      .then((response) => response.json())
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}
