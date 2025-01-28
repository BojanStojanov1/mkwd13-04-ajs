console.log("tuka sum");

// Reusable get users function
// async function fetchUsers() {}

const fetchUsers = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  return response.json();
};

// Exercise 1: Get all usernames (map)
const getUsernames = async () => {
  const users = await fetchUsers();

  console.log(users);

  //   users.forEach((user) => {
  //     console.log(user);
  //   });

  return users.map((user) => user.username);

  //   return userNames;
};

// Exercise 2: Get users from specific city (filter)
const getUsersByCity = async () => {
  const users = await fetchUsers();

  return users.filter((user) => user.address.city === "Gwenborough");
};

// Exercise 3: Get emails of users with websites (filter + map)
const getEmailsWithWebsites = async () => {
  const users = await fetchUsers();

  return users.filter((user) => user.website).map((user) => user.email);
};

// Exercise 4: Get company names starting with specific letter (filter + map)
const getCompaniesStartingWith = async () => {
  const users = await fetchUsers();

  //   return users.filter((user) => user.company.name[0] === "A")
  return users
    .filter((user) => user.company.name.toLowerCase().startsWith("r"))
    .map((user) => user.company.name);
};

// Exercise 5: Get user summaries - return just the name of the user, and the company name of the user company
const getUserSummaries = async () => {
  const users = await fetchUsers();

  //   return users.map((user) => {
  //     return {
  //       name: user.name,
  //       company: user.company.name,
  //     };
  //   });
  return users.map((user) => ({
    name: user.name,
    company: user.company.name,
    phone: user.phone,
  }));
};

// Exercise 6: Find users with long names (filter) more than 20 characters
const getUsersWithLongNames = async () => {
  const users = await fetchUsers();
  return users.filter((user) => user.name.length > 20);
};

(async () => {
  console.log("Usernames:", await getUsernames());
  console.log("User Cities:", await getUsersByCity());
  console.log("Emails with Websites", await getEmailsWithWebsites());
  console.log(
    "Companies starting with specific letter",
    await getCompaniesStartingWith()
  );
  console.log("User summaries", await getUserSummaries());
  console.log("Users with long names", await getUsersWithLongNames());
})();

// async function runTests() {
//   console.log("Usernames:", await getUsernames());
// }

// runTests();
