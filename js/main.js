var rightNum = null;
var responseDiv = document.getElementById('responseDiv');

function pickNumber(max) {
    var randomNum = Math.floor((Math.random() * 10) + 1);
    rightNum = randomNum; //randomizes the right number
    return rightNum;
}

function makeGuess() {
    var guess = document.getElementById('guessInput').value;
    var guessBox = document.getElementById('guessInput');
    var result;
    console.log('Guessed ' + guess + ';' + ' right number: ' + rightNum);

    if (guess === '') {
        guessBox.classList.add('incorrect');
        result = 'Please insert a number between (1-10)';
    } else if ((guess > 10) || (guess < 0) || (guess == 0)) {
        guessBox.classList.add('incorrect');
        result = 'Invalid number. Please enter a number between (1-10)';
    } else if (guess > rightNum) {
        result = 'Too high, guess again!';
        console.log('Too high!');
    } else if (guess < rightNum) {
        result = 'Too low, guess again!';
        console.log('Too low!');
    } else if (guess == rightNum) {
        guessBox.classList.add('correct');
        result = 'Awesome, you got it!';
        console.log('Awesome, you got it');
    }
    responseDiv.innerHTML = result;
}

function reset() {
    var retry = document.getElementById('retry');
    location.reload();
}
