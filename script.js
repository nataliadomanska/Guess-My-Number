'use strict';

// Functions
const secretNumberCreator = function () {
  return Math.trunc(Math.random() * 20) + 1;
};

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayNewScore = function (score) {
  document.querySelector('.score').textContent = score;
};

// Variables
let secretNumber = secretNumberCreator();
let score = 20;
let highscore = 0;

// CHECK BUTTON
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // when there is no input
  if (!guess) {
    displayMessage('🚫 No number!');
    // if player wins
  } else if (guess === secretNumber) {
    displayMessage('🥳 Correct Number');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    // when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '☝️ Too high!' : '👇 Too low');
      score--;
      displayNewScore(score);
    } else {
      displayMessage('😢 You lost the game!');
      displayNewScore(0);
    }
  }
});

// AGAIN BUTTON
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = secretNumberCreator();

  displayNewScore(score);
  document.querySelector('.number').textContent = '?';
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';

  document.querySelector('.number').style.width = '';
  document.querySelector('body').style.backgroundColor = '';
});
