console.log("1. This is the first console.log");

// setTimeout(() => {
//   console.log("2. Inside");
// }, 1000);

// setTimeout(() => {
//   console.log("4. Inside second");
// }, 500);

// setInterval(() => {
//   console.log("Tick");
// }, 400);

// console.log("3. After timeout");

//Events, fetch, setTimeout, setInterval

//1. Dice vegatables
//2. Add Vinegar
//2. Add Oil
//4. Add Salt
//5. Mix Salad
//6. Serve Salad

const makeSaladCallBack = () => {
  setTimeout(() => {
    console.log("All vegetables diced");
    setTimeout(() => {
      console.log("Salt added");
      setTimeout(() => {
        console.log("Oil added");
        setTimeout(() => {
          console.log("Vinegar added");
          setTimeout(() => {
            console.log("Salad mixed");
            setTimeout(() => {
              console.log("Salad served");
            }, 2000);
          }, 2000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 3000);
};

// makeSaladCallBack();

const firstPromiseFunc = () => {
  return new Promise((resolve, reject) => {
    // reject({ error: "FIRST ERRORED OUT" });

    setTimeout(() => {
      resolve({ msg: "First Promise Success" });
    }, 1500);
  });
};

const secondPromiseFunc = () => {
  return new Promise((resolve, reject) => {
    // reject("SECOND ERROR");

    setTimeout(() => {
      resolve({ msg: "Second Promise Success" });
    }, 1000);
  });
};

const thirdPromiseFunc = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ msg: "Third Promise Success" });
    }, 500);
  });
};

// firstPromiseFunc()
//   .then(data => {
//     console.log("DATA", data);

//     return secondPromiseFunc();
//   })
//   .then(data => {
//     console.log("DATA", data);

//     return thirdPromiseFunc();
//   })
//   .then(data => {
//     console.log("DATA", data);
//   })
//   .catch(err => {
//     //The catch block is only needed once, it gets exectued as soon as any of the chained promises rejects and then the execution stops
//     console.log("ERROR", err);
//   });

//Making a salad with promises

const cutVegetables = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("All vegetables diced");
    }, 2000);
  });
};

const addVinegar = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Vinegar added");
    }, 1000);
  });
};

const addOil = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Oil added");
    }, 1000);
  });
};

const addSalt = () => {
  return new Promise((resolve, reject) => {
    // reject({ msg: "No more salt!" });

    setTimeout(() => {
      resolve("Salt added");
    }, 1000);
  });
};

const mixSalad = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Salad mixed");
    }, 2000);
  });
};

const serveSalad = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Salad served");
    }, 2000);
  });
};

const makeSaladPromises = () => {
  cutVegetables()
    .then(value => {
      console.log(value);
      return addVinegar();
    })
    .then(value => {
      console.log(value);
      return addOil();
    })
    .then(value => {
      console.log(value);
      return addSalt();
    })
    .then(value => {
      console.log(value);
      return mixSalad();
    })
    .then(value => {
      console.log(value);
      return serveSalad();
    })
    .then(value => {
      console.log(value);
    })
    .catch(err => {
      console.log(err);
    })
    .finally(() => {
      //Finally gets executed no matter if all the promises are successful or one of them has errors
      console.log(`Salad finished at ${new Date().toISOString()}`);
    });
};

// makeSaladPromises();

const fetchPostsPromise = () => {
  fetch("https://jsonplaceholder.typ")
    .then(res => {
      console.log(res);
      return res.json();
    })
    .then(data => {
      console.log(data);
    })
    .catch(err => {
      console.log(err);
    })
    .finally(() => {
      console.log("Request finished");
    });
};

// fetchPostsPromise();

//Async/Await

//All async functions always without an exception return a promise, they will never return data as normal functions
async function testAsync() {
  return "John Doe";
}

// console.log(testAsync());

const asyncExample = async () => {
  //using await blocks the execution and waits for the promise to be resolved before contiuning down
  const firstPromiseData = await firstPromiseFunc();

  console.log(firstPromiseData);

  const secondPromiseData = await secondPromiseFunc();

  console.log(secondPromiseData);

  const thirdPromiseData = await thirdPromiseFunc();

  console.log(thirdPromiseData);
};

// asyncExample();

const fetchPostsAsync = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    // const res = await fetch("https://jsonplaceholder.typicode.c");

    const data = await res.json();

    return data;
  } catch (err) {
    throw new Error(err);
  }
};

const renderPosts = posts => {
  console.log("render posts called");

  const postsListEl = document.querySelector(".posts-list");

  postsListEl.innerHTML = posts.map(post => `<li>${post.title}</li>`).join("");
};

const app = async () => {
  try {
    //1. Fetch posts data
    const posts = await fetchPostsAsync();

    renderPosts(posts);

    //2. Render posts data
  } catch (error) {
    console.log("In the app error block");
    document.querySelector(".error").innerText = error;
  }
};

app();

//Async/Await Salad
const makeSaladAsync = async () => {
  try {
    console.log(await cutVegetables());
    console.log(await addVinegar());
    console.log(await addOil());
    console.log(await addSalt());
    console.log(await mixSalad());
    console.log(await serveSalad());
  } catch (error) {
    console.log(error);
  }
};

// makeSaladAsync();
