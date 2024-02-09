'use strict';

// document.querySelector('.message').textContent = "No number!"
// document.querySelector('.score').textContent = 45

const score = 20
const number = 5
const highScore = 0;
// const number = Math.trunc(Math.random()*20)+1

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    if (!guess) {
        document.querySelector('.message').textContent = "No number!"
    } else if (guess === number) {
        document.querySelector('.message').textContent = "Correct Number!"
    }
    else if (guess > number) {
        document.querySelector('.message').textContent = "Too high!"
        score--;
        document.querySelector('.score').textContent = score;
    } else if (guess < number) {
        document.querySelector('.message').textContent = "Too low!"
        score--;
        document.querySelector('.score').textContent = score;
    } else {
        document.querySelector('.message').textContent = "No number!"
    }
})