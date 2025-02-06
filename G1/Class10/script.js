let url = 'https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/documents.json';
let studentsUrl = 'https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json';
let bandsUrl = 'https://raw.githubusercontent.com/qa-codecademy/mkwd13-04-ajs/refs/heads/main/G1/Extra%20homework/bands/bands.json';
let booksUrl = 'https://raw.githubusercontent.com/qa-codecademy/mkwd13-04-ajs/refs/heads/main/G1/Extra%20homework/library/books.json';


function getDocuments() {
    return fetch(url)
        .then(x => x.json());
}


function getStudents() {
    return fetch(studentsUrl)
        .then(x => x.json());
}

function getBooks() {
    return fetch(booksUrl)
        .then(x => x.json());
}

function getBands() {
    return fetch(bandsUrl)
        .then(x => x.json());
}

function getStudentsWIthBooksAndBands() {
    getStudents()
        .then(async data => {
            // let books = await getBooks();
            // let bands = await getBands();

            getBooks().then(x => {
                getBands().then(z => {
                    let mappedStudents = {
                        ...data[0],
                        favoriteBand: {
                            ...z[0]
                        },
                        favoriteBook: {
                            ...x[0]
                        },
                        doubleFetch: true
                    };
                    console.log(mappedStudents);
                })
            })

            Promise.all([getBooks(), getBands()])
                .then(([books, bands]) => {
                    let mappedStudents = {
                        ...data[0],
                        favoriteBand: {
                            ...bands[0]
                        },
                        favoriteBook: {
                            ...books[0]
                        },
                        promiseAll: true
                    };
                    console.log(mappedStudents);
                })
        })
}

// getStudentsWIthBooksAndBands();

function getStudentsInformation() {
    Promise.all([getStudents(), getBooks(), getBands()])
        // .then(data => {
        //     let students = data[0];
        //     let books = data[1];
        //     let bands = data[2];
        // })
        .then(([students, books, bands]) => {
            let mappedStudents = students.map((x, i) => {
                let obj = {
                    ...x,
                    favoriteBook: { ...books[i] },
                    favoriteBand: { ...bands[i] }
                }
                return obj;
            });
            console.log(mappedStudents);
        })
}

getStudentsInformation()