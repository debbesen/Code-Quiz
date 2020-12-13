var question = document.getElementById('question');
var answers = document.getElementById('results');
const startButton = document.getElementById('startbtn');


let score = 0;
//Timer
let timeRemaining = 60;
let currentQuestion = 0;

//listen for game start
startButton.addEventListener('click', startGame);
//hide answers
answers.style.visibility = 'hidden';

function startGame() {
    setTime();
    alert('The game has started');
    startButton.style.visibility = 'hidden';
    answers.style.visibility = 'visible';
    setQuestion();
}

function setQuestion() {
    //Checks if its time to end the game
    if (currentQuestion == questions.length) {
        endGame();
    }
    //create the question
    question.innerText = questions[currentQuestion].questionText;
   

    let answerButton1 = $("<button>");
    answerButton1.attr("id", "button1");
    let answerButton2 = $("<button>");
    answerButton2.attr("id", "button2");
    let answerButton3 = $("<button>");
    answerButton3.attr("id", "button3");
    let answerButton4 = $("<button>");
    answerButton4.attr("id", "button4");
    
    //adds text from questions object

    answerButton1.text(questions[currentQuestion].answers[0]);
    answerButton2.text(questions[currentQuestion].answers[1]);
    answerButton3.text(questions[currentQuestion].answers[2]);
    answerButton4.text(questions[currentQuestion].answers[3]);

    //append
    $("#results").append(answerButton1);
    $("#results").append(answerButton2);
    $("#results").append(answerButton3);
    $("#results").append(answerButton4);

    //events
    $("#button1").on("click", function (e) {
        answerChecker(questions[currentQuestion].answers[0])
    });
    $("#button2").on("click", function (e) {
        answerChecker(questions[currentQuestion].answers[1])
    });
    $("#button3").on("click", function (e) {
        answerChecker(questions[currentQuestion].answers[2])
    });
    $("#button4").on("click", function (e) {
        answerChecker(questions[currentQuestion].answers[3])
    });

}

function answerChecker(selection) {

    if (questions[currentQuestion].correctAnswer == selection) {
        score++;
        alert("Correct! Your current score: " + score)
        currentQuestion++;
        clear();
        setQuestion();
        console.log(score)
    }
    else {
        alert("Incorrect! Try again.")
        timeRemaining -= 10;
    }
}

//clears the elements
function clear() {
    $("#results").empty();
}

//set time 
function setTime() {
    let timerInterval = setInterval(function () {
        timeRemaining--;
        if (timeRemaining <= 0) {
            clearInterval(timerInterval)
            return endGame();
        }
    }, 1000);
}

//end game 
function endGame() {
    alert(`Game Over! Your score: ${score}`)
    let userName = window.prompt("Enter your name: ");
    localStorage.setItem(userName, score);
    location.reload();
}

//restart
function restart() {
    timeRemaining = 60;
    currentQuestion = 1;
    score = 0;
    startGame();
}
const questions = [
  {
    question: "Who invented JavaScript?",
    answers: ["Douglas Crockford", "Sheryl Sandberg", "Brendan Eich"],
    correctAnswer: "Brendan Eich",

    },
    
  {
    question: "Which one of these is a JavaScript package manager?",
    answers: [ "Node.js", "TypeScript", "npm"],
    correctAnswer: "npm",
    },
   
  {
    question: "Which tool can you use to ensure code quality?",
    answers: [ "Angular", "jQuery", "RequireJS", "ESLint"],
    correctAnswer: "ESLint"  
    },
    
]
