document.getElementById('get-sw-people')
    .addEventListener('click', function() {
        getSwapiPeoples('https://swapi.dev/api/people');
    });

document.getElementById('prev')
    .addEventListener('click', function(event) {
        let url = event.target.value;
        getSwapiPeoples(url);
    });

document.getElementById('next')
    .addEventListener('click', function(event) {
        let url = event.target.value;
        getSwapiPeoples(url);
    });

document.getElementById('content')
    .addEventListener('click', function(event) {
        event.stopPropagation();

        if (event.target.tagName === 'BUTTON') {
            // console.log(event.target);
            let url = event.target.value;
            getSwapiCharacter(url);
        }
    });

function showSwapiPeople(people) {
    let html = '<ol>';
    for(let person of people) {
        let li = `
            <li>
                ${person.name} has appeared in ${person.films.length} films
                <button type='button' value=${person.url}>More details</button>
            </li>
        `;
        html += li;
    }
    html += '</ol>';
    document.getElementById('content').innerHTML = html;
}

function showPrevNextPageBtn(data) {
    let prevBtn = document.getElementById('prev');
    prevBtn.style.display = 'block';
    let nextBtn = document.getElementById('next');
    nextBtn.style.display = 'block';
    
    if (data.previous) {
        // disable btn
        prevBtn.disabled = false;
        prevBtn.value = data.previous;
    } else {
        // unable
        prevBtn.disabled = true;
    }

    if (data.next) {
        nextBtn.disabled = false;
        nextBtn.value = data.next;
    } else {
        nextBtn.disabled = true;
    }
}

function getSwapiPeoples(url) {
    fetch(url)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
        showSwapiPeople(data.results);
        showPrevNextPageBtn(data);
    });
}

function getSwapiCharacter(url) {
    fetch(url)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log(data);
            showCharacterDetails(data);
        });
}

function showCharacterDetails(character) {
    let message = `Hello my name is ${character.name}, im ${character.height}cm tall 
    i weight ${character.mass}kg. Im born ${character.birth_year} year.
    `;
    document.getElementById('char-content')
        .innerText = message;
}