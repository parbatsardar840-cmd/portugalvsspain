// script.js

let portugalVotes = 0;
let spainVotes = 0;

function updateUI(){

  let total = portugalVotes + spainVotes;

  let portugalPercent = total === 0 ? 50 :
  ((portugalVotes / total) * 100).toFixed(0);

  let spainPercent = total === 0 ? 50 :
  ((spainVotes / total) * 100).toFixed(0);

  document.getElementById("portugalBar").style.width =
  portugalPercent + "%";

  document.getElementById("spainBar").style.width =
  spainPercent + "%";

  document.getElementById("portugalBar").innerHTML =
  portugalPercent + "%";

  document.getElementById("spainBar").innerHTML =
  spainPercent + "%";

  document.getElementById("totalVotes").innerHTML = total;
}

function votePortugal(){
  portugalVotes++;
  updateUI();
}

function voteSpain(){
  spainVotes++;
  updateUI();
}

updateUI();