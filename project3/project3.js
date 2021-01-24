let score = 10;
let highscore = 0;
let output;
let secretNumber = Math.trunc(Math.random() * 100) + 1;
let userGuess;
console.log(secretNumber);

function outputDisplay(output, score) {
    document.querySelector('.score').textContent = `💯 Score: ${score}`;
    if (score == 0) {
        output = `❌ 🙁 Uh Oh! You lost, try again`;
        document.querySelector('.hint').textContent = `${output}`;
        document.querySelector('body').style.background = 'linear-gradient(to top right, #EB8F2D , #EC311B)';
    } else { document.querySelector('.hint').textContent = `${output}`; }
    document.querySelector('.userInput').value = '';
}
function correctDisplay(output, score, highscore) {
    document.querySelector('.hint').textContent = `${output}`;
    document.querySelector('.score').textContent = `💯 Score: ${score}`;
    document.querySelector('.highscore').textContent = `🏅 Highscore: ${highscore}`;
    document.querySelector('.box').textContent = `${secretNumber}`;
    document.querySelector('.gameName').textContent = `🎉 Congratulations! 🎉`;
    document.querySelector('.userInput').disabled = true;
    document.querySelector('.box').style.width = '200px';
    document.querySelector('.box').style.color = 'black';
    document.querySelector('.box').style.background = 'red';
    document.querySelector('body').style.background = 'linear-gradient(to top right, #2DEB39 , #2DDDEB)';
}

function guessChecker(userGuess, secretNumber) {
    if (userGuess == '') {
        output = `⭕  No Number!`;
        score = score;
        return outputDisplay(output, score);
    } else if (userGuess <= 0 || userGuess > 100) {
        output = `⛔  Invalid Entry`;
        score = score;
        return outputDisplay(output, score);
    } else if (userGuess < secretNumber) {
        score = score - 1;
        output = `📉  Too Low!`;
        return outputDisplay(output, score);
    } else if (userGuess > secretNumber) {
        score = score - 1;
        output = `📈  Too High!`;
        return outputDisplay(output, score);
    } else if (userGuess === secretNumber) {
        output = `🎉  Correct Number!`;
        if (score > highscore) {
            highscore = score;
        };
        return correctDisplay(output, score, highscore);
    } else { return -1; }
}

document.querySelector('.checkBtn').addEventListener('click', function () {
    userGuess = Number(document.querySelector('.userInput').value);
    guessChecker(userGuess, secretNumber);
})

document.querySelector('.playButton').addEventListener('click', function () {
    score = 10;
    output = 'Start Guessing...';
    secretNumber = Math.trunc(Math.random() * 100) + 1;
    console.log(secretNumber);
    document.querySelector('.hint').textContent = `${output}`;
    document.querySelector('.score').textContent = `💯 Score: ${score}`;
    document.querySelector('.highscore').textContent = `🏅 Highscore: ${highscore}`;
    document.querySelector('.gameName').textContent = `Guess My Number!`;
    document.querySelector('.box').textContent = `?`;
    document.querySelector('.userInput').value = '';
    document.querySelector('.userInput').disabled = false;
    document.querySelector('.box').style.width = '100px';
    document.querySelector('.box').style.color = 'blacl';
    document.querySelector('.box').style.background = 'white';
    document.querySelector('body').style.background = 'linear-gradient(to top right, #ED90F0, #F0EE81)';
})