var username;
var countdown = 60;
var score = 0;

//DOM elements
var introDisplay = document.querySelector("#Quiz");
var quizQuestions = document.querySelector("#Challenge");
var scoreEntry = document.querySelector("Score");
var timer = document.getElementById("realTime");
var choicesEl = document.querySelectorAll(".answerChoice");
var qDiv = document.getElementById("question");

// var choiceA = document.querySelector("A");
// var choiceB = document.querySelector("B");
// var choiceC = document.querySelector("C");
// var choiceD = document.querySelector("D");
var startQ = document.getElementById("Start");
var submitBtn = document.getElementById("submit");

//Questions
var index = 0 
var amtTime;
var challengeQuestions = [
    {
        question: "Who is the current best korean bboy powermover?",
        choices: ["Bboy Kill", "Bboy the End", "Bboy Shigekix", "Bboy Vero"],
        // choiceA: "Bboy Kill",
        // choiceB: "Bboy the End",
        // choiceC: "Bboy Shigekix",
        // choiceD: "Bboy Vero",
        answer: "Bboy the End"
    },
    {
        question: "Who won the 2011 RedBull BC One World Finals?",
        choices: ["Bboy Taisuke", "Bboy Hong10", "Bboy Roxrite", "Bboy Yan the Shrimp"],
        // choiceA: "Bboy Taisuke",
        // choiceB: "Bboy Hong10",
        // choiceC: "Bboy Roxrite",
        // choiceD: "Bboy Yan the Shrimp",
        answer: "Bboy Roxrite"
    },
    {
        question: "Where is the RockForce crew originally founded?",
        choices: ["Union City", "Oakland", "San Francisco", "South San Francisco"],
        // choiceA: "Union City",
        // choiceB: "Oakland",
        // choiceC: "San Francisco",
        // choiceD: " South San Francisco",
        answer: "Union City"
    },
];

//History
var scoreHistory = JSON.parse(localStorage.getItem("scoreHistory"));
if (scoreHistory === null) {
    scoreHistory = [];
};

// Start Quiz
function Start() {
    introDisplay.style.display = "none";
    quizQuestions.style.display = "block";
    displayChallenge();
    count();
}

//Display Quiz
function displayChallenge() {
    qDiv.textContent = challengeQuestions[index].question;
    for (var i=0; i < choicesEl.length; i++){
        choicesEl[i].textContent = challengeQuestions[index].choices[i];
        choicesEl[i].addEventListener('click', Answer);
    }
}

function Answer() {
    var click = this.textContent;
    var correctSelect = challengeQuestions[index].answer;

    //compare answer
    if (click === correctSelect) {
        index = index + 1;
    } else {
        countdown = countdown - 3;
        //real time
        timer.textContent = countdown + "seconds left";
    }

    if (challengeQuestions.length === index) {
        alert("Finish!");
        owari();
    } else {
        displayChallenge();
    }
}

//End Quiz
function owari() {
    clearInterval(amtTime);
    choicesEl.style.display = "none";
    scoreEntry.style.display = "block";
}

//Save Run
function saveEntry() {
    var player = document.getElementById("username").value;
    var playerCard = {
        name: player,
        score: countdown,
    }

    scoreboard.push(playerCard)
    localStorage.setItem("scoreSet", JSON.stringify(scoreboard));

    //Scoreboard redirect
    window.location.href = "high-scores.html";
}

//Timer
function count() {
    amtTime = setInterval(function() {
        if (countdown > 1) {
            timer.textContent = countdown + ' seconds remaining';
            countdown--;
        }
        else if (countdown === 1) {
            timer.textContent = countdown + ' second remaining';
            countdown--;
        }
        else {
            timer.textContent = '';
            owari()
        }
    }, 1000);
}

//Buttons
startQ.addEventListener('click', Start);
submitBtn.addEventListener('click', saveEntry);