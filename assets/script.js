// create a questions as an object. 

var questions = [
  {
    title: "Example Question 1:",
    choices: ["Choice 1", "Choice 2", "Choice 3", "Choice 4"],
    answer: "Choice 4"
  },
  {
    title: "Example Question 2:",
    choices: ["Choice 1", "Choice 2", "Choice 3", "Choice 4"],
    answer: "Choice 2"
  },
  {
    title: "Example Question 3:",
    choices: ["Choice 1", "Choice 2", "Choice 3", "Choice 4"],
    answer: "Choice 3"
  },
  {
    title: "Example Question 4:",
    choices: ["Choice 1", "Choice 2", "Choice 3", "Choice 4"],
    answer: "Choice 1"
  },
  {
    title: "Example Question 5:",
    choices: ["Choice 1", "Choice 2", "Choice 3", "Choice 4"],
    answer: "Choice 3"
  }
];

// hook elements from the page (i.e. var exampleEl = document.querySelector(".elementClass"))
// hook container element
var container = document.querySelector(".container");
// hook timer element
var timer = document.getElementById("timer");

// Create dynamic elements (i.e. exampleDynamicEl = document.creteElement("button"))
// create h1 to show starting heading
var startText = document.createElement("h1");

// create button to start quiz
var startBtn = document.createElement("button");

// create p tags to display questions
var questionText = document.createElement("p");

// declare global vriables
// variable to store timer number
var timeLeft = 15;
// variable to store current index
var index = 0;

// *******FUNCTIONS******//
// function that loads content when page first load
// function that shows the question and starts the timer
// function that handles the timer
// function that handles and displays the next queston
// function to check the answer and display to following question

// function that loads content when page first load
function welcomePg (){
// add text to Title tag
startText.textContent = "Welcome to Code Quiz!";
// add text to button
startBtn.textContent = "Start Quiz";
// append text to container
container.appendChild(startText);
// append button to container
container.appendChild(startBtn);
}

// function that shows the question and starts the timer
function startQuiz(){

// show timer function
showTimer();
// call next question function
nextQuestion();
}


// function that handles the timer
function showTimer(){
// display timer to screen
timer.textContent = timeLeft;
// create setInterval and store it to a variable
var timeInterval = setInterval(function () {
timeLeft--;
timer.textContent = (timeLeft + "  seconds left");
if (timeLeft === 0){
  clearInterval(timeInterval);
  gameOver ();
}

}, 1 *1000)
}
// function that handles and displays the next queston
function nextQuestion(){
 
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

};

// function to check the answer and display to the following question
function checkAnswer(event){

  // if event.target.matches (--choice button class--)
if(event.target.matches(".choiceBtn")){

  // *****LOGIC TO CHECK FOR THE RIGHT ANSWER***//
  index++;
  nextQuestion();
}
  // increse index by 1
  // show next question
}

// add eventlistener to start quiz
startBtn.addEventListener("click", startQuiz);
// add event listener to choice button
document.addEventListener("click", checkAnswer);
// call function to show opening page

welcomePg()


function gameOver() {
  timer.textContent = ("The time is up!");
}