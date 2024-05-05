// Pobieranie elementów przycisków i body
const startButton = document.querySelector('[data-start]'); 
const stopButton = document.querySelector('[data-stop]');
const body = document.querySelector('body');

let intervalId; //zmienna interwału czasowego

//Event listenery dodane do przycisków start i stop 
startButton.addEventListener('click', startColorChange);
stopButton.addEventListener('click', stopColorChange);


function startColorChange() { //funkcja rozpoczynająca zmianę kolorów tła
    intervalId = setInterval(() => {
        body.style.backgroundColor = getRandomHexColor(); //funkcja zmieniająca kolor
    }, 1000); //zmiana koloru co 1sekundę
    startButton.disabled = true; //wyłączenie przycisku start po jednokrotnym naciśnięciu 
}

function stopColorChange() { //funkcja zatrzymująca zmianę kolorów
    clearInterval(intervalId); //zresetowanie odliczania 
    startButton.disabled = false; //włączenie przysicku start
}

//funkcja do zmiany kolorów tła
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
