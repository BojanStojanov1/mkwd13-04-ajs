let url = 'https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/documents.json';
let studentsUrl = 'https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json';
let bandsUrl = 'https://raw.githubusercontent.com/qa-codecademy/mkwd13-04-ajs/refs/heads/main/G1/Extra%20homework/bands/bands.json';
let booksUrl = 'https://raw.githubusercontent.com/qa-codecademy/mkwd13-04-ajs/refs/heads/main/G1/Extra%20homework/library/books.json';


function getData(url) {
    let promise = fetch(url);
    promise
        .then(x => {
            console.log('First response', x);
            return x.json();
        })
        .then(data => {
            console.log('Second then');
            console.log(data)
        })
        .catch(x => console.log(x));
}

async function getDataAsync(url) {
    let response = await fetch(url);
    let data = await response.json();

    let html = '<ul>'
    for (let document of data) {
        html += `<li>${document.name}</li>`;
    }
    html += '</ul>';
    document.getElementById('content').innerHTML = html;

    console.log(response);
    console.log(data);
}

// getData(url);
// getDataAsync(url);


async function getDocumentsAsync() {
    try{
        let data = await fetch(url).then(x => x.json());
        console.log(data);
    } catch(error) {
        console.log(error);
    } finally {
        console.log('This block will always execute ');
    }

}

getDocumentsAsync();

function sum(num, num1) {
    return num + num1;
}
// No point in puting in try catch
// try{
//     sum(2 ,2);
// }catch(error) {
//     console.log(error);
// }

function getDataOrThrowError() {
    let response = Math.random() < 0.7;
    if(response) {
        return 10;
    } else {
        throw new Error('Something bad has happend');
    }
}
// Ok to use try/catch 
// try {
//     getDataOrThrowError();
// } catch(error) {
//     console.log(error);
// }


async function getStudentsAsync() {
    let response = await fetch(studentsUrl);
    let data = await response.json();
    console.log('getStudents', data);
    return data;
}

async function showDataAsync() {
    let data = await getStudentsAsync();
    console.log('showData', data);

    let html = '<ul>'
    for (let document of data) {
        html += `<li>${document.firstName}</li>`;
    }
    html += '</ul>';
    document.getElementById('content').innerHTML = html;
}

showDataAsync();