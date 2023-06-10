'use strict';
/*
console.log(document.querySelector(`.message`).textContent);
document.querySelector(`.message`).textContent = `Correct Number!`;
console.log(document.querySelector(`.message`).textContent);

document.querySelector(`.number`).textContent = 13;
document.querySelector(`.score`).textContent = 10;

document.querySelector(`.guess`).value = 20;
console.log(document.querySelector(`.guess`).value);
*/
//Math.random() e zgjedh nje numer random me DECIMAL POINT PREJ 0 DERI NE 1, na e shumzojm me 20 qe me e zgjedh deri ne 19.9999999...
//ja shtojm  +1 qe me e arrit numrin deri ne 20 pastaj metoda Math.trunc e bon numer te plote

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(`.message`).textContent = message;
};

console.log(secretNumber);
//document.querySelector(`.number`).textContent = secretNumber;
document.querySelector(`.check`).addEventListener(`click`, function () {
  const guess = Number(document.querySelector(`.guess`).value);
  console.log(guess, typeof guess);

  if (!guess) {
    //document.querySelector(`.message`).textContent = `Please guess a number!`;
    displayMessage(`Please guess a number (pt2)`);
  } else if (guess === secretNumber) {
    // document.querySelector(
    //   `.message`
    // ).textContent = `Correct number, well done!`;
    displayMessage(`Correct number, well done!`);
    document.querySelector(`.number`).textContent = secretNumber;
    document.querySelector(`body`).style.backgroundColor = `#60b347`;
    document.querySelector(`.number`).style.width = `30rem`;
    if (score > highscore) {
      highscore = score;
      document.querySelector(`.highscore`).textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector(`.message`).textContent =
      //   guess > secretNumber ? `Too high!` : `Too low`;
      displayMessage(guess > secretNumber ? `Too high!` : `Too low`);
      //score = score - 1;
      score--;
      document.querySelector(`.score`).textContent = score;
    } else {
      document.querySelector(
        `.message`
      ).textContent = `You have lost the game!`;
      document.querySelector(`.score`).textContent = 0;
    }
  } //else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector(`.message`).textContent = `Too high!`;
  //     //score = score - 1;
  //     score--;
  //     document.querySelector(`.score`).textContent = score;
  //   } else {
  //     document.querySelector(
  //       `.message`
  //     ).textContent = `You have lost the game!`;
  //     document.querySelector(`.score`).textContent = 0;
  //   }
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector(`.message`).textContent = `Too Low!`;
  //     score--;
  //     document.querySelector(`.score`).textContent = score;
  //   } else {
  //     document.querySelector(
  //       `.message`
  //     ).textContent = `You have lost the game!`;
  //     document.querySelector(`.score`).textContent = 0;
  //   }
  // }
});

document.querySelector(`.again`).addEventListener(`click`, function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector(`.number`).textContent = `?`;
  score = 20;
  document.querySelector(`.highscore`).textContent = highscore;
  document.querySelector(`.score`).textContent = score;
  document.querySelector(`.message`).textContent = `Guess a number again?`;
  document.querySelector(`.guess`).value = ` `;
  document.querySelector(`body`).style.backgroundColor = `#222`;
  document.querySelector(`.number`).style.width = `15rem`;

  //document.querySelector(`.number`).value = secretNumber;
});
