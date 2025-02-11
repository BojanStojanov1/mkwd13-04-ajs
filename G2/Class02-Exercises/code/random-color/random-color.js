// Random color page
// Create an HTML page
// On every refresh the page should pick a random color and change the background of the page
// The RGB values of the color should be shown in the center of the page on every restart

let div = document.getElementById(`div`);

function getRandomColors() {
    const letters = `0123456789ABCDEF`;
    let color = `#`;

    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

document.addEventListener(`DOMContentLoaded`, function () {
    let randomColor = getRandomColors();
    div.style.backgroundColor = randomColor;
    div.style.color = `black`;
    div.innerText = randomColor;
})