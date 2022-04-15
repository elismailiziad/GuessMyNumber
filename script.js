'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(`secretNumber = ${secretNumber}`);

let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  if (!guess) {
    document.querySelector('.message').textContent = 'Please enter a number...';
  } else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.message').textContent = 'Correct Number!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess > secretNumber) {
    document.querySelector('.message').textContent = 'Try a lower number...';
    score--;
    document.querySelector('.score').textContent = score;
  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent = 'Try a higher number...';
    score--;
    document.querySelector('.score').textContent = score;
  }
  if (score === 0) {
    document.querySelector('.message').textContent = 'You lost the game...';
    document.querySelector('.check').style.pointerEvents = 'none';
  }

  document.querySelector('.again').addEventListener('click', function () {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;
    console.log(`secretNumber = ${secretNumber}`);
    document.querySelector('.guess').value = '';
    document.querySelector('.message').textContent = 'Starting game...';
    document.querySelector('.score').textContent = 20;
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = 'rgb(3, 63, 194)';
    document.querySelector('.check').style.pointerEvents = 'auto';
  });
});
