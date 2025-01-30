// *** ASYNC/AWAIT ***

const makeApiRequest = async () => {
    try{
        console.log('Fetching...')
        // await says => do not go to next line until I resolve a value
        const response = await fetch(`https://swapi.dev/api/people/1`); // .then(response)
        console.log('1')
        
        const result = await response.json(); // then(response.json)
        console.log('2')
        console.log(result)

        const homeworldUrl = result.homeworld;

        const responseHomeworld = await fetch(homeworldUrl);
        const resultHomeworld = await responseHomeworld.json();

        console.log(resultHomeworld)

        printResult(result.name, resultHomeworld.name)
        
    }
    catch(error){
        console.log('Error happened', error)
    }
  
}

makeApiRequest()

function printResult(personName, homeworldName) {
    let element = document.getElementById('result');

    element.innerHTML = `
        <p>Character name: ${personName}</p>
        <p>Character homeworld: ${homeworldName}</p>
    `

}