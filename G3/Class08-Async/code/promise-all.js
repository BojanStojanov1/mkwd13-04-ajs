console.log("Raboti");

async function fetchUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  return response.json();
}

async function fetchPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");

  return response.json();
}

async function main() {
  try {
    const [usersData, postsData] = await Promise.all([
      fetchUsers(),
      fetchPosts(),
    ]);

    console.log("Users data:", usersData);
    console.log("Posts data:", postsData);

    // Example: find all posts by the first user

    const firstUser = usersData[0];

    const firstUserPosts = postsData.filter(
      (post) => post.userId === firstUser.id
    );

    console.log(`First user: ${firstUser.name}`);
    console.log(`Posts by ${firstUser.name}:`, firstUserPosts);
  } catch (error) {
    console.error("Error fetching data", error);
  }
}

main();
