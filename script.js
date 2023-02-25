'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number!';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
*/
let seccretNumber, score, highScore;
//tao ham toi uu code
const init = function () {
  seccretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  highScore = 0;
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
init();
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
    // document.querySelector('.number').textContent = seccretNumber;
    displayNumber(seccretNumber);

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
  //when wrong
  else if (guess !== seccretNumber) {
    //truong hop seccretNumber khong xac dinh undefined thi xay ra loi bi thua luon
    if (score > 1) {
      // document.querySelector('.message').textContent =
      // guess > seccretNumber ? '📈 To Hight!' : '📉 To Low!';
      displayMessage(guess > seccretNumber ? '📈 To Hight!' : '📉 To Low!');
      score--;
      // document.querySelector('.score').textContent = score;
      displayScore(score);
    } else {
      // document.querySelector('.message').textContent = '🎆 You lost the game!';
      displayMessage('🎆 You lost the game!');
      // document.querySelector('.score').textContent = 0;
      displayScore(0);
    }
  }
});
//when guess to hight
// else if (guess > seccretNumber) {
//   if (score > 1) {
//     document.querySelector('.message').textContent = '📈 To Hight!';
//     score--;
//     document.querySelector('.score').textContent = score;
//   } else {
//     document.querySelector('.message').textContent = '🎆 You lost the game!';
//     document.querySelector('.score').textContent = 0;
//   }
// }
//when guess to low
// else if (guess < seccretNumber) {
//   if (score > 1) {
//     document.querySelector('.message').textContent = '📉 To Low!';
//     score--;
//     document.querySelector('.score').textContent = score;
//   } else {
//     document.querySelector('.message').textContent = '🎆 You lost the game!';
//     document.querySelector('.score').textContent = 0;
//   }
// }
