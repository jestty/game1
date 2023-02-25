'use strict';

//tao ham toi uu code
let seccretNumber, score, highScore;
seccretNumber = Math.trunc(Math.random() * 20) + 1;
score = 20;
highScore = 0;
const init = function () {
  score = 20;
  seccretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  displayNumber('?');
  displayScore(score);
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
};
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const displayNumber = function (message) {
  document.querySelector('.number').textContent = message;
};
const displayScore = function (message) {
  document.querySelector('.score').textContent = message;
};

//thao tac voi nut again trang thai ban dau ma giu nguyen high score
document.querySelector('.again').addEventListener('click', init);

//thao tac even voi nut check
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  console.log(seccretNumber);
  //when there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔ No Number';
    displayMessage('⛔ No Number');
  }
  //when player win
  else if (guess === seccretNumber) {
    // document.querySelector('.message').textContent = '🎉 Correct Number!';
    displayMessage('🎉 Correct Number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    displayNumber(seccretNumber);

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
  //when wrong
  else if (guess !== seccretNumber) {
    if (score > 1) {
      displayMessage(guess > seccretNumber ? '📈 To Hight!' : '📉 To Low!');
      score--;
      displayScore(score);
    } else {
      displayMessage('🎆 You lost the game!');
      displayScore(0);
    }
  }
});


