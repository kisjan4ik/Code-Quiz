
// set global variables
var timer = document.getElementById("timer");
var score = document.getElementById("score");
var header = document.getElementById("header");
var startBtn = document.getElementById("start");
var score = document.getElementById("score");

var questions = [
  {
    title: "Example Question 1:",
    choices: ["Choice 1", "Choice 2", "Choice 3", "Choice 4"],
    answer: "answer from choices"
  },
  {
    title: "Example Question 2:",
    choices: ["Choice 1", "Choice 2", "Choice 3", "Choice 4"],
    answer: "answer from choices"
  }
];

startBtn.addEventListener("click", startQuiz, setInterval)

function startQuiz(){

var secondsLeft = 10;
var timerInterval = setInterval(function () {
  secondsLeft--;
  timer.textContent = (secondsLeft + " seconds left");

  if (secondsLeft === 0) {
    clearInterval(timerInterval);
    gameOver();
  }

}, 1 * 1000);

}

function gameOver() {
  timer.textContent = ("The time is up!");
}
startQuiz();
setTimer();

