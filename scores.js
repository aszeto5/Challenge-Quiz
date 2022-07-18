//Scoreboard
var scoreboard = JSON.parse(localStorage.getItem("scoreSet"))
if (scoreboard === null) {
    scoreboard = [];
}
for (i =0; i < scoreboard.length; i++){
    var player = scoreboard[i];
    var li = document.createElement("li");
    li.textContent = player.name + " , Score: " + player.score;
    document.getElementById("list").append(li);
}