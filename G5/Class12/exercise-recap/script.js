// DOM Elements
const loginForm = document.getElementById("login-form");
const registerForm = document.getElementById("register-form");
const messageDiv = document.getElementById('message');
const logoutBtn = document.getElementById('logout-btn');
const registerLink = document.getElementById("register-link");
const main = document.getElementById('main');

function generateID() {
    return Date.now();
}

// Utility that stores the logged in user in localeStorage
function setLoggedInUser(user) {
    localStorage.setItem("loggedUser", JSON.stringify(user));
}

function getLoggedInUser() {
    const user = localStorage.getItem("loggedUser");
    return user;
}

function logout(){
    localStorage.removeItem("loggedUser")
};

class User {
    constructor(firstname, lastname, email, password) {
        this.id = generateID();
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.password = password;
    }
};

// Hardcoded data (simulating a db);
const users = [
    new User('John', 'Doe', 'john.doe@mail.com', '12345'),
    new User('Jane', 'Doe', 'jane.doe@mail.com', 'p@ssW0rd')
];

// Simulate login API call
function loginUser(email, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const userFound = users.find((user) => {
                return user.email === email && user.password === password
            })

            // Early return
            if (!userFound) {
                reject({ message: "Invalid email or password" });
                return;
            }

            resolve(userFound)
        }, 1000);

    })
};

// Simulate register API call
function registerUser(firstname, lastname, email, password){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(!firstname || !lastname || !email || !password){
                reject({message: "All fields are required"});
                return
            };

            const userExists = users.some((user) => user.email === email);
            if(userExists){
                reject({message: `User with the email: ${email} already exists.`});
                return;
            }

            const newUser = new User(firstname, lastname, email, password);
            users.push(newUser);

            resolve({message: "Registration succesful! Please log in."})

        }, 1000);
    })
}


// Display message utility
function displayMessage(message, isError = false) {
    messageDiv.style.display = "block";
    messageDiv.textContent = message;
    messageDiv.classList.add(isError ? "error" : "success");

    setTimeout(() => {
        messageDiv.textContent = "";
        messageDiv.style.display = "none";
    }, 2000)
}

// IIFE => Immedietly invoked function expression
(() => {
    const loggedInUser = getLoggedInUser();
    if(loggedInUser){
        loginForm.style.display = "none";
        main.style.display = "flex";
    };

    // SCOPE OF THE IIFE

    // Event listeners
    // Handle Login
    loginForm.addEventListener("submit", async (event) => {
        event.preventDefault();

        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;

        // Resolving promise with .then
        // loginUser(email, password)
        // .then((result) => {
        //     console.log(result)
        // })
        // .catch((error) => {
        //     console.log(error)
        // })

        // Resolving promise with async/await
        try {
            const result = await loginUser(email, password)
            loginForm.style.display = 'none';
            main.style.display = "flex";
            setLoggedInUser(result);
            displayMessage(`Welcome back ${result.firstname}!`)
            loginForm.reset() // clears all inputs in the form
        } catch (error) {
            displayMessage(error.message, true)
        }

    }) 

    // Handle register link
    registerLink.addEventListener("click", () => {
        loginForm.style.display = "none";
        registerForm.style.display = "block";
    })

    // Handle Register
    registerForm.addEventListener("submit", async (event) => {
        event.preventDefault();
        const firstname = document.getElementById('register-firstname').value;
        const lastname = document.getElementById('register-lastname').value;
        const email = document.getElementById('register-email').value;
        const password = document.getElementById('register-password').value;

        try {
          const result = await registerUser(firstname, lastname, email, password);
          displayMessage(result.message);
          registerForm.style.display = "none";
          loginForm.style.display = "block";
          registerForm.reset();
        } catch (error) {
            displayMessage(error.message, true)
        }
    })

    // Handle logout
    logoutBtn.addEventListener('click', () => {
        logout()
        loginForm.style.display = "block";
        main.style.display = "none";

        displayMessage('Logged out successfully!')
    })
})();
