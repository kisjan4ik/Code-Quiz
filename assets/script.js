
// hook elements from the page (i.e. var exampleEl = document.querySelector(".elementClass"))
// hook container element
var container = document.querySelector(".container");
// hook timer element
var timer = document.getElementById("timer");

// Create dynamic elements (i.e. exampleDynamicEl = document.creteElement("button"))
// create h1 to show starting heading
var startText = document.createElement("h1");

// create button to start quiz<p><strong>First Name:</strong> <span id="user-first-name"></span></p>
var startBtn = document.createElement("button");
startBtn.classList.add("startBtn");

// create p tags to display questions
var questionText = document.createElement("p");
questionText.classList.add("qtext");
// add class to title (P)

// variable for initials
var initials = document.querySelector(".initials");

// variable for highscore btn
var scoreBtn = document.createElement("scorebutton");
scoreBtn.classList.add("scorebtn")

// set variable for initial instructions
var instructions = document.createElement("h2");

// declare global vriables
// variable to store timer number
var timeLeft = 75;
// variable to store current index
var index = 0;

// create a questions as an object. 

var questions = [
  {
    title: "Commonly used data types do not include:",
    choices: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
    answer: "3. alerts"
  },
  {
    title: "The condition in if/else statement is enclosed within _____.",
    choices: ["1. quotes", "2. curly braces", "3. parenthesis", "4. square brackets"],
    answer: "3. parenthesis"
  },
  {
    title: "Arrays in JavaScript can be used to store _____.",
    choices: ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"],
    answer: "4. all of the above"
  },
  {
    title: "String values must be enclosed within _____ when being assigned to variables.",
    choices: ["1. commas", "2. curly braces", "3. quotes", "4. parenthesis"],
    answer: "3. quotes"
  },
  {
    title: "A very useful tool used during development and debugging for printing content to the debugger is:",
    choices: ["1. JavaScript", "2. terminal/bash", "3. for loops", "4. console.log"],
    answer: "4. console.log"
  }
];


// *******FUNCTIONS******//
// function that loads content when page first load
// function that shows the question and starts the timer
// function that handles the timer
// function that handles and displays the next queston
// function to check the answer and display to following question

// function that loads content when page first load
function welcomePg() {
  // add text to Title tag
  startText.textContent = "Welcome to Code Quiz!";
  // add instructions
  instructions.textContent = "Try to answer the code-related questions within the thime limit. Keep in mind that incorrect answer will penalize your score/time by ten seconds!"
  // add text to button
  startBtn.textContent = "Start Quiz";
  // append text to container
  container.appendChild(startText);
  // append instructions text to the container
  container.appendChild(instructions);
  // append button to container
  container.appendChild(startBtn);
}
// function that shows highscore button
function highScoreBtn() {

  scoreBtn.textContent = "HIGHSCORES";
  container.appendChild(scoreBtn);
}

// function that shows the question and starts the timer
function startQuiz() {

  // show timer function
  showTimer();
  // call next question function
  nextQuestion();
  // add score btn
  highScoreBtn()

}


// function that handles the timer
function showTimer() {
  // display timer to screen
  timer.textContent = timeLeft;
  // create setInterval and store it to a variable
  var timeInterval = setInterval(function () {
    timeLeft--;
    timer.textContent = (timeLeft + "  seconds left");
    if (timeLeft <= 0 || index == questions.length) {
      clearInterval(timeInterval);
      timerOver();
      pageRedirect()
    }

  }, 1 * 1000);

}



// function that handles and displays the next queston
function nextQuestion() {

  // declare a variable to store current question. Assign the current question.
  var currentQuestion = questions[index];
  // empty container element
  container.textContent = "";
  // add current question title to the question display variable
  questionText.textContent = currentQuestion.title;
  // append the question display variable to the container
  container.appendChild(questionText);
  // create  a div element to wrap the "choices"
  var answersDiv = document.createElement("div");


  // for loop to 
  // create button elements for each choice
  // add a class to each button to be used with the event listener
  // add text to each button from question choices
  // append buttons to div element created to wrap choices

  for (let i = 0; i < currentQuestion.choices.length; i++) {
    var answerBtn = document.createElement("button");
    answerBtn.classList.add("choiceBtn");
    answerBtn.textContent = currentQuestion.choices[i];
    answersDiv.appendChild(answerBtn);

  }

  // append div element to the container
  container.appendChild(answersDiv);
  highScoreBtn()

};

// function to check the answer and display to the following question
document.addEventListener("click", function () {

  // if event.target.matches (--choice button class--)
  if (event.target.matches(".choiceBtn")) {
    var correctAnswer = document.getElementById("correct");
    


    // *****LOGIC TO CHECK FOR THE RIGHT ANSWER***//
    // set condition for matching qnswer
    if (event.target.textContent === questions[index].answer) {
      // set variable for correct answer result

      correctAnswer.textContent = "CORRECT ANSWER :)";
      index++;
    }
    else {
      correctAnswer.textContent = "WRONG ANSWER :(";
      timeLeft = timeLeft - 10;
      index++;

    }
    nextQuestion();
  }


})
// increse index by 1
// show next question



// if correct - show "Correct"
// if not correct - show "Wrong"
// decrese timer for 10 seconds





// add eventlistener to start quiz
startBtn.addEventListener("click", startQuiz);
// add event listener to choice button

// call function to show opening page

welcomePg()


function timerOver() {
  timer.textContent = ("The time is up!");

}


function pageRedirect() {
  window.location = "results.html"
}

// function gameOver() {
//   if (index == (questions.length - 1)) {
//     var gameEndTimer = setTimeout(function () {
//       correctAnswer.textContent = "GAME OVER!";
//       // result form
//     }, 3000)

// setTimeout();
//   }
// }
// gameOver();

var score = ("Your final score is:  " + timer.textContent);
if (timer.textContent <= 0) {
  score = ("Your final score is:  0");
}
var userInits = ("Your initials: " + initials.value);
console.log("Score  " + score);
console.log("Inits  :" + initials.value);




localStorage.setItem("score", JSON.stringify(score));
localStorage.setItem("userInits", JSON.stringify(userInits))
var lastScore = JSON.parse(localStorage.getItem("score"));
var insertInits = JSON.parse(localStorage.getItem("userInits"));




// done.timeleftSpan.textContent = lastScore.timeLeft;
// done.initials.valueSpan = lastScore.initials;
