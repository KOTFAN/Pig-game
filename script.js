'use strict';

//data
const MainScores = [0, 0];
let isGamePlaying = true;
let currentScore = 0;

//page content
const diceEl = document.querySelector('.dice')
const mainScoreP0 = document.getElementById('score--0')
const mainScoreP1 = document.getElementById('score--1')
const currentScoreP0 = document.getElementById('current--0')
const currentScoreP1 = document.getElementById('current--1')
const rollBtn = document.querySelector('.btn--roll')
const holdBtn = document.querySelector('.btn--bold')
const newGameBtn = document.querySelector('.btn--new')


//start conditionals
mainScoreP0.textContent = MainScores[0];
mainScoreP1.textContent = MainScores[1];
diceEl.classList.add('hidden')
