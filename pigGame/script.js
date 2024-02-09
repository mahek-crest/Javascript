'use strict';
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1'); // this is faster than query selector , helpuful when there are thousands of element
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice')
const btnNew = document.querySelector('.btn--new')
const btnRoll = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold')

//starting condition
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

const scores = [0, 0]
let currentScore = 0;
let activePlayer = 0;
let totalScore = 0;

const switchPlayer = function () {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
}

// rolling dice
btnRoll.addEventListener('click', function () {
    //generate random dice
    const dice = Math.trunc(Math.random() * 6) + 1;

    //display the dice
    diceEl.classList.remove('hidden')
    diceEl.src = `dice-${dice}.png`

    //check is rolled dice is 1; if true 
    if (dice !== 1) {
        currentScore += dice;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;

    } else {
        //switch to next player
        switchPlayer();
    }
})


btnHold.addEventListener('click', function () {
    //add current score
    scores[activePlayer] += currentScore //score[1]=score[1]+currentscore
    document.getElementById(`.score--${activePlayer}`).textContent = scores[activePlayer]

    //if score>=100 , switch player else current player wins
    if (scores[activePlayer] >= 20) {
        document.querySelector(`.player==${activePlayer}`).classList.add('player--winner')
        document.querySelector(`.player==${activePlayer}`).classList.remove('player--acive')

    } else {
        switchPlayer()
    }

    //switch player

})