'use strict';

//data
const winingScore = 30;
const mainScores = [0, 0];

let isGamePlaying = true;
let currentScore = 0;
let diseNum;
let currentPlayer = 0;


//page content
const diceEl = document.querySelector('.dice')
const mainScoreP0 = document.getElementById('score--0')
const mainScoreP1 = document.getElementById('score--1')
const p1Layout = document.querySelector('.player--1');
const p0Layout = document.querySelector('.player--0')
const rollBtn = document.querySelector('.btn--roll')
const holdBtn = document.querySelector('.btn--hold')
const newGameBtn = document.querySelector('.btn--new')


//functions


function newgame() {
   document.querySelector(`.player--${currentPlayer}`).classList.remove('player--winner')
   currentScore = 0;
   document.getElementById(`current--${currentPlayer}`).textContent = currentScore;
   mainScores[0] = mainScores[1] = currentPlayer = 0;
   isGamePlaying = true;


   mainScoreP0.textContent = mainScores[0];
   mainScoreP1.textContent = mainScores[1];



   diceEl.classList.add('hidden')
   p0Layout.classList.add('player--active');
   p1Layout.classList.remove('player--active')
}

const swapPlayers = () => {
   p0Layout.classList.toggle('player--active');
   p1Layout.classList.toggle('player--active');

   currentScore = 0;
   document.getElementById(`current--${currentPlayer}`).textContent = currentScore;
   currentPlayer = currentPlayer === 0 ? 1 : 0
}


//start conditionals


newgame()


rollBtn.addEventListener('click', () => {
   if (isGamePlaying) {
      diseNum = Math.trunc(Math.random() * 6 + 1)
      diceEl.classList.remove('hidden')
      diceEl.src = `dice-${diseNum}.png`

      if (diseNum !== 1) {
         currentScore += diseNum;
         document.getElementById(`current--${currentPlayer}`).textContent = currentScore;

      } else {
         swapPlayers()
      }
   }

});


holdBtn.addEventListener('click', () => {
   if (isGamePlaying) {
      //add main score 
      mainScores[currentPlayer] += currentScore;
      document.getElementById(`score--${currentPlayer}`).textContent = mainScores[currentPlayer]

      //is has score to win?
      if (mainScores[currentPlayer] >= winingScore) {
         document.querySelector(`.player--${currentPlayer}`).classList.add('player--winner')

         isGamePlaying = false;
         diceEl.classList.add('hidden')
         document.getElementById(`current--${currentPlayer}`).textContent = currentScore = 0;
      } else {
         swapPlayers()
      }
   }

});


newGameBtn.addEventListener('click', newgame)