"use strict";
const scorecurent0 = document.getElementById("current--0");
const scorecurent1 = document.getElementById("current--1");
const score0 = document.getElementById("score--0");
const score1 = document.getElementById("score--1");
const player1 = document.querySelector(".player--0");
const player2 = document.querySelector(".player--1");
const diceel = document.querySelector(".imageroll");
let scorecurent;
let activeplayer;
let playing;
let scores;
const defultdata = function () {
  scorecurent = 0;
  activeplayer = 0;
  playing = true;
  scores = [0, 0];
  scorecurent0.textContent = 0;
  scorecurent1.textContent = 0;
  score0.textContent = 0;
  score1.textContent = 0;
  diceel.classList.add("hidden");
  player1.classList.add("activeplayer");
  player2.classList.remove("activeplayer");
  player1.classList.remove("winerplayer");
  player2.classList.remove("winerplayer");
};
const switchplayer = function () {
  document.getElementById(`current--${activeplayer}`).textContent = 0;
  scorecurent = 0;
  
  activeplayer = activeplayer === 0 ? 1 : 0;
  player1.classList.toggle("activeplayer");
  player2.classList.toggle("activeplayer");
};
defultdata();

document.querySelector(".newgamebtn").addEventListener("click", function () {
  defultdata();
});
document.querySelector(".holdbtn").addEventListener("click", function () {
  if (playing) {
    scores[activeplayer] += scorecurent;
    document.getElementById(`score--${activeplayer}`).textContent =
      scores[activeplayer];
    if (scores[activeplayer] >= 10) {
      playing = false;
      diceel.classList.add("hidden");
      document
        .querySelector(`.player--${activeplayer}`)
        .classList.add("winerplayer");
      document
        .querySelector(`.player--${activeplayer}`)
        .classList.remove("activeplayer");
    } else {
      switchplayer();
    }
  }
});

document.querySelector(".rollbtn").addEventListener("click", function () {
  if (playing) {
    const randomnum = ~~(Math.random() * 6 + 1);
    diceel.classList.remove("hidden");
    diceel.src = `${randomnum}.png`;

    if (randomnum !== 1) {
      scorecurent += randomnum;
      document.getElementById(`current--${activeplayer}`).textContent =
        scorecurent;
    } else {
      switchplayer();
    }
  }
});
