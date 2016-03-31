var userPoint = 0;
var aiPoint = 0;

// This function returns the selection of the computer
function getAISelection() {
    //TODO: randomly choose between 'rock', 'paper', or 'scissors'
    var randomhi = Math.random()*(3-0)+0;
    var random = Math.floor(random);
    var aiValue;
    if(random === 0)
{
    aiValue = "Rock";
}
else if (random === 1)
{
    aiValue = "Paper";
}
else if (random === 2)
{
    aiValue = "Scissors"
}
return aiValue;
}


// This function picks the winner
function pickWinner(userValue, aiValue) {
    //TODO: pick the correct winner: user or ai
    //TODO: Add one point for the winner
    var userPoint;
    var aiPoint;
  if(userValue == "Rock" && aiValue == "Scissors")
{
    userPoint += 1;
}
else if (userValue == "Rock" && aiValue == "Paper")
{
    aiPoint += 1;
}
else if(userValue=="Paper" && aiValue == "Scissors")
{
    aiPoint += 1;
}
    
}

// This function sets the scoreboard with the correct points
function setScore() {
console.log("The User has " + userPoint + "points.");
console.log("The AI has "+aiPoint+"points.");
}

// This function captures the click and picks the winner
function evaluate(evt) {
    var userValue = evt.target.getAttribute('id');
    var aiValue = getAISelection();

    var winner = pickWinner(userValue, aiValue);

    if ( 'user' === winner ) {
        $('#message').delay(50).text('You have won!, Click a box to play again');
    } else if ( winner === 'draw' ) {
        $('#message').delay(50).text('Draw! Click a box to play again');
    } else {
        $('#message').delay(50).text('You have lost!, Click a box to play again');
    }
}

// This function runs on page load
$(document).ready(function(){
$(".token").click(function(evt){
evaluate(evt);
    
});
}
);
