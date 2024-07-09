'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};
// Function of addeventlistener to get input
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // When there is no input
  if (!guess) {
    displayMessage('No Number...!');
    // document.querySelector('.message').textContent = 'No Number';
  }
  // When player wins
  else if (guess === secretNumber) {
    displayMessage('Correct Number');
    // document.querySelector('.message').textContent = 'Correct Number';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // document.querySelector('.highscore').textContent = score;
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high!' : 'Too low');
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? 'Too high!' : 'Too low';
      score--;
      displayScore(score);
      // document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You Lose..');
      // document.querySelector('.message').textContent = 'You lose';
      displayScore(score);
      // document.querySelector('.score').textContent = 0;
    }
  }
  // When guess is high
  /* else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lose';
      document.querySelector('.score').textContent = 0;
    }
  }

  // When guess is low
  else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lose';
    }
  } */
});
document.querySelector('.again').addEventListener('click', function () {
  displayMessage('Start guessing...');
  // document.querySelector('.message').textContent = 'Start guessing...';
  score = 20;
  displayScore(score);
  // document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.guess').value = '';
});
