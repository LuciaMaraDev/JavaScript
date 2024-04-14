'use strict';
//EASY FUNCTIONS
const displayMessage = function (mgs) {
  document.querySelector('.message').textContent = mgs;
};

const displayScore = function (points) {
  document.querySelector('.score').textContent = points;
};

const displayNumber = function (nro) {
  document.querySelector('.number').textContent = nro;
};

const displayBody = function (bdy) {
  document.querySelector('body').style.backgroundColor = bdy;
};

const displayHighScore = function (high) {
  document.querySelector('.highscore').textContent = high;
};

const displayGuess = function (gss) {
  document.querySelector('.guess').value = gss;
};
const createSecret = function () {
  const nro = Math.trunc(Math.random() * 20) + 1;
  return nro;
};
// VAR INITIALIZATION
let secretNumber = createSecret();
let score = 20;
let maxScrore = 0;
console.log(secretNumber);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (score > 1) {
    //NO VALID INPUT
    if (!guess) {
      displayMessage(' ⛔ No valid input! Write a number');

      // WRONG GUESSING
    } else if (guess !== secretNumber) {
      displayMessage(
        guess > secretNumber
          ? ' 🔊 To high  🔆 Try again'
          : '🔉 Too low 🔅 Try again'
      );
      score--;
      displayScore(score);
      // RIGHT GUESSING
    } else {
      displayMessage('🎆🎇🎉 Correct Number ! !🎆🎇🎉');

      displayNumber(secretNumber);

      displayBody('#60b347');
      if (score > maxScrore) {
        maxScrore = score;
        displayHighScore(maxScrore);
      }
    }
    // SCORE BELOW 1
  } else {
    displayMessage('You lost 🫠 ☠️  Try again');
  }
});

// Again btn functionality
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  displayScore(score);
  displayNumber('?');
  displayBody('#222');
  displayMessage('Start guessing...');
  displayGuess(' ');
  secretNumber = createSecret();
});
//TIMER IN JS para volver a hacer aparecer el mensaje "start guess"
