//Scoreboard
var scoreHistory = JSON.parse(localStorage.getItem("scoreSet"));
if (scoreHistory === null) {
    scoreHistory = [];
};
for (i = 0; i < scoreHistory.length; i++){
    var player = scoreHistory[i];
    console.log(player);
    var liEl = document.createElement("li");
    liEl.textContent = player.name + " , Score: " + player.score;
    document.getElementById("list").append(liEl);
}