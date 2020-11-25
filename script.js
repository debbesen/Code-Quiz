const quizContainer = document.getElementById('quiz-container');
const questionElement = document.getElementById('questions');
const optionButtonsElement = document.getElementById('option-btns');
const nextButton = document.getElementById('next-btn');
const startQuiz = document.getElementById('start-btn');




function Quiz() {

questionContainerElement
setNextQuestion()
}

function setNextQuestion() {
showQuestion()
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add = ('btn')
   
    if (answer.correct) {
        button.dataset.correct = answer.correct
    }
    button.addEventListener('click' selectAnswer)
 })
}


function selectAnswer(e) {

    const questions = [
        {
            questions: "What Color is my Hair?",
    
            answers: [
                {text: 'yellow', correct: false}
                {text: 'blue', correct: false}
                {text: 'black', correct: true}

             ],
            
        }, 

        {
            questions: "What Color is my Hair?",
    
            answers: [
                {text: 'red', correct: false}
                {text: 'olive green', correct: true}
                {text: 'black', correct: false}

             ],
            
        }, 
    
    ];
    
}



function resetState() {

}
