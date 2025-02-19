// sesion storage

sessionStorage.setItem('username', 'Trajan');

let obj = {
    firstName: 'Trajan',
    lastName: 'Stevkovski'
};

sessionStorage.setItem('userInfo', JSON.stringify(obj));

let userInfo = sessionStorage.getItem('userInfo');
console.log(userInfo);

// sessionStorage.clear();

// local storage
localStorage.setItem('usertoken', 'asdghdsfjkab 7q34yrhkjdvasdiftgafiuvk');
let usertoken = localStorage.getItem('usertoken');
console.log(usertoken);


let localStorageService = {
    setItem: function(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    },
    getItem: function(key) {
        return JSON.parse(localStorage.getItem(key));
    }
};

localStorageService.setItem('currentUser', {
    firstName: 'name',
    lastName: 'lastname',
    age: 123,
    canDance: false,
    acedemy: 'QA'
});

localStorageService.setItem('name', 'Trajan');
localStorageService.setItem('age', 123);
localStorageService.setItem('canDance', false);

console.log(localStorageService.getItem('name'));
console.log(localStorageService.getItem('age'));
console.log(localStorageService.getItem('canDance'));
