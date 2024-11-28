let gameResult = document.getElementById("gameResult");
let userInput = document.getElementById("userInput");
let randomNumber = Math.ceil(Math.random() * 1000);
let noOfTimes = document.getElementById("Count");
let winingTime = document.getElementById("won");
let count = 0;

function checkGuess() {

    let guessedNumber = parseInt(userInput.value);
    console.log(guessedNumber);
    if (guessedNumber > randomNumber) {
        gameResult.textContent = "Your Guessed Number is too high than the Number ,Try Again!";
        gameResult.style.backgroundColor = "red";
        count += 1;
    } else if (guessedNumber < randomNumber) {
        gameResult.textContent = "Your Guessed Number is too low than the Number ,Try Again!";
        gameResult.style.backgroundColor = "orange";
        count += 1;
    } else if (guessedNumber === randomNumber) {
        gameResult.textContent = "Congratulations !! You got it Right 😊";
        gameResult.style.backgroundColor = "green";
        winingTime.textContent = "Finally user won on " + count + "th Time";
        winingTime.style.color = "white";
    } else {
        gameResult.textContent = "Please provide a valid input";
        gameResult.style.backgroundColor = "red";
        count += 1;
    }
    console.log(count);
    noOfTimes.textContent = count + " Times user tried to guess the correct number but failed 😌";
    noOfTimes.style.color = "white";
}
