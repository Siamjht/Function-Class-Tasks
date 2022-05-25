// random number guessing game.

function randomGuess(num) {
    let randomNum = Math.floor((Math.random()) * 10);
    if (num > randomNum) {
        alert(`Your number is bigger! Try again...`);
    }
    else if (num < randomNum) {
        alert(`Your number is smaller! Try again...`);
    }
    else
        alert(`Number Matched!! You are the Winner, Bravo!!!`);
}
randomGuess(Number(prompt("Place any number between 1-10:")));
