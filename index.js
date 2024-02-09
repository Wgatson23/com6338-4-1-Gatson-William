var words = [
  'bananas',
  'grapes',
  'carousel',
  'milkshake',
  'javascript',
  'limousine',
  'chocolate',
  'programming',
  'meatloaf',
  'ukulele',
  'mango'
]

 function loadFunction() {
  remainingTries = 10;
  incorrectEl.textContent = ""
  remainingEl.textContent = remainingTries;
  newWordGuess = words[Math.floor(Math.random() * words.length)];
  var underScore = "";
  incorrectArray = [];
  correctArray = [];

  for (var i = 0; i < newWordGuess.length; i++) {
    underScore += "_";

  }

  wordGuess.textContent = underScore;

}
var incorrect
var wins = 0
var losses = 0
var winsEl = document.getElementById('wins')
var lossesEl = document.getElementById('losses')
var remainingTries = 10
var previousEl = document.getElementById('previous-word')
var incorrectEl = document.getElementById('incorrect-letters')
var remainingEl = document.getElementById('remaining-guesses')
var correctArray = []
var incorrectArray = []
var wordGuess = document.getElementById('word-to-guess');
var newWordGuess;
loadFunction()


document.body.onkeyup = function (e) {
  var key = e.key.toLowerCase()
  console.log(e.key)

  if (newWordGuess.includes(key)) {
	var underScore = "";
	correctArray.push(key);
	for (var i = 0; i < newWordGuess.length; i++) {


		if (correctArray.includes(newWordGuess[i])) {
			underScore += newWordGuess[i];
		}
		else {
			underScore += "_";
		}
	}
	

    wordGuess.textContent = underScore;
  } else if(!incorrectArray.includes(key) && !newWordGuess.includes(key)) {
    incorrectArray.push(key);
    remainingTries--;
    remainingEl.textContent = remainingTries;
    incorrectEl.textContent = incorrectArray;
  }

  if(wordGuess.textContent === newWordGuess) {
    wins++;
    winsEl.textContent = wins;
    previousEl.textContent = newWordGuess;
  
  loadFunction()
  
  }  else if(remainingTries <= 0) {
    losses++;
    lossesEl.textContent = losses;
    previousEl.textContent = newWordGuess;
  
  loadFunction()
   
  }
}