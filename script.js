var username;
var score = 0;

var timer = 60;
var realTimeEl = document.getElementById("realTime");

//DIV elements
var quizEl = document.getElementById("Quiz")
var quizStart = document.getElementById("Start");
var scoreEl = document.getElementById("Score");
var scoreSub = document.getElementById("submit");
var userEl = document.getElementById("username");
const progress = document.getElementById("progress");
// const lastQuestion = questions.length - 1;
let runningQuestion = 0;


var questions = [
    {
        question: "Who is the current best korean bboy powermover?",
        choices: ["Bboy Kill", "Bboy the End", "Bboy Shigekix", "Bboy Vero"],
        answer: "Bboy the End"
    },
    {
        question: "Who won the 2011 RedBull BC One World Finals?",
        choices: ["Bboy Taisuke", "Bboy Hong10", "Bboy Roxrite", "Bboy Yan the Shrimp"],
        answer: "Bboy Roxrite"
    },
    {
        question: "Where is the RockForce crew originally founded?",
        choices: ["Union City", "Oakland", "San Francisco", "South San Francisco"],
        answer: "Union City"
    },
];

//Start Quiz
// function displayQ() {
//     document.getElementById("question")
// };

//Rendering Questions
function renderQuestion() {
    let q = questions[runningQuestion];
    question.innerHTML = "<p>"+q.question +"</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
}

//Render Progress
function renderProgress() {
    for(let qIndex = 0; qIndex <= questions.length; qIndex++){
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>"
    }
}

//Display challenge questions
function displayQ () {
    document.getElementById("question").textContent = questions[runningQuestion].question;
    renderProgress();
}

//Answer
function correctAns() {
    var answerSelect = this.textContent;
    var correctSelect = questions[index].answer;

    if (answerSelect === correctSelect) {
        runningQuestion = runningQuestion + 1;
    }
    else {
        timer = timer - 3
    }
}

if (question === runningQuestion){
    alert("finish!")
    endQuiz();
}
else {
    displayQ();
};

quizStart.addEventListener("click", displayQ);
// scoreSub.addEventListener('click', saveScore);
