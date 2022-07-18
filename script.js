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
var quizQuestionEl = document.getElementById("quiz-question");
var choicesEl = document.querySelectorAll("answerChoice");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
const counter = document.getElementById("guage");
// const lastQuestion = questions.length - 1;
let runningQuestion = 0;


var questions = [
    {
        question: "Who is the current best korean bboy powermover?",
        choiceA: "Bboy Kill",
        choiceB: "Bboy the End",
        choiceC: "Bboy Shigekix",
        choiceD: "Bboy Vero",
        answer: "Bboy the End"
    },
    {
        question: "Who won the 2011 RedBull BC One World Finals?",
        choiceA: "Bboy Taisuke",
        choiceB: "Bboy Hong10",
        choiceC: "Bboy Roxrite",
        choiceD: "Bboy Yan the Shrimp",
        answer: "Bboy Roxrite"
    },
    {
        question: "Where is the RockForce crew originally founded?",
        choiceA: "Union City",
        choiceB: "Oakland",
        choiceC: "San Francisco",
        choiceD: " South San Francisco",
        answer: "Union City"
    },
];

// Start Quiz
function startQuiz() {
    renderDisplay();
    TIMER = setInterval(renderCounter,60);
};

// function renderCounter(){
//     if(count <= questionTime){
//         counter.innerHTML = count;
//         timeGauge.style.width = count * gaugeUnit + "px";
//         count++
//     }else{
//         count = 0;
//         // change progress color to red
//         answerIsWrong();
//         if(runningQuestion < lastQuestion){
//             runningQuestion++;
//             renderQuestion();
//         }else{
//             // end the quiz and show the score
//             clearInterval(TIMER);
//             scoreRender();
//         }
//     }
// }

// Rendering Questions
function renderQuestion() {
    let q = questions[runningQuestion];
    question.innerHTML = "<p>"+q.question +"</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
}

//Render Progress
function Progressrender() {
    for(let qIndex = 0; qIndex <= runningQuestion.length-1; qIndex++){
        progress.innerHTML += "<div class='prog' id=" + qIndex +"></div>";
    }
}

//Render and Display
function renderDisplay() {
    quizEl.textContent = questions[runningQuestion].question;

    for (var i = 0; i < choicesEl.length; i++){
        choicesEl[i].textContent = questions[questionIndex].choices[i];
        choicesEl[i].addEventListener('click', correctAns);
        questionsDiv.textContent = userQuestion;
    }
    
};

function compare(event) {
    var element = event.target;
    if (element.matches("li")){

    }
}

//Display challenge questions
// function displayQ () {
//     //document.getElementById("questions").textContent = questions[runningQuestion].question;
//     renderDisplay();
// }

//Answer
function correctAns() {
    var answerSelect = this.textContent;
    var correctSelect = questions[runningQuestion].answer;

    if (answerSelect === correctSelect) {
        runningQuestion = runningQuestion + 1;
    }
    else {
        timer = timer - 3
    }
}

//Timer
function clock() {
    Clock = setInterval(function() {
        if (timer > 1) {
            realTimeEl = timer + 'seconds remaining';
            timer--;
        } else if (timer === 1) {
            realTimeEl = timer + ' second remaining';
        } else {
            realTimeEl.textContent = '';
            quizFinish()
        }
    }, 1000);
}

// if (question === runningQuestion){
//     alert("finish!")
//     endQuiz();
// }
// else {
//     displayQ();
// };

quizStart.addEventListener("click", renderDisplay);
// scoreSub.addEventListener('click', saveScore);
