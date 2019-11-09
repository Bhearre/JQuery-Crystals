// <!-- Javascript



//  document.ready funtion was placed in the head section of the html after jQuery loaded
// $(document).ready(function() {};

//  Global Variables
// -----------------------------------------------------------------------
// Make our variables global to the runtime of our application

/*
            var wins                  = 0;
            var losses                = 0;
            var valtargetNumber       = 0;
            var valCrystal1           = 0;
            var valCrystal2           = 0;
            var valCrystal3           = 0;
            var valCrystal4           = 0;
            var score                 = 0;

            // var isGameOver = false;  (Perhaps we will need to determine this)
            // var isWinner = false;    (Perhaps we will need to determine this)

*/

var crystals = {
    blue: 0,
    green: 0,
    red: 0,
    yellow: 0
};


// Scores are Score and Target
var currentScore = 0;
var targetScore = 0;


//  Tracking Wins and Losses
var winCount = 0;
var lossCount = 0;

//  HTML hooks

var targetScoreText = document.getElementById("targetScore");
var currentScoreText = document.getElementById("currentScore");
var winCountText = document.getElementById("winCount");
var lossCountText = document.getElementById("lossCount");

// Functions ******************************************************************

// Helper function for getting random numbers
var getRandom = function (min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

// Update the HTML with our variables
var updateScreen = function () {
    targetScoreText.textContent = "Target Number: " + targetScore;
    currentScoreText.textContent = "Current Score: " + currentScore;
    winCountText.textContent = "Win Count: " + winCount;
    lossCountText.textContent = "Loss Count: " + lossCount;
}

// Starts the game and restarts the game
var startGame = function () {
    //reset the currentScore back to zero
    currentScore = 0;

    // set a new targetScore (between 19 and 120)
    targetScore = getRandom(19, 120);

    crystals.blue = getRandom(1, 12);
    crystals.green = getRandom(1, 12);
    crystals.red = getRandom(1, 12);
    crystals.yellow = getRandom(1, 12);

    updateScreen();

    console.log("-------------------------------------");
    //console.log("Target Score: " + targetScore);
    console.log("Blue: " + crystals.blue.value);
    console.log("Green: " + crystals.green.value);
    console.log("Red " + crystals.red.value);
    console.log("Yellow " + crystals.yellow.value);
}

// Update the value of the score a the player click crystals
var updateScore = function (crystalValue) {
    currentScore = currentScore + crystalValue;
    updateScreen();
    if (currentScore > targetScore){
        alert("Sorry, you lose your final score was " + currentScore);
        lossCount++;
        startGame();
    }
    if (currentScore === targetScore) {
        alert("Congratulations, you win. Please play again.")
        winCount++;
        startGame();
    }
}


/* Need a jQuery function to initialiaze and or reset the game and set
 everything to zero
/* Also need a function to generate a random number to be matched and if 
it matched then the player wins
/* Need another function or functions to generate random number for the
 value of the four crystals
/* Need a function to keep score and to add the value of each crystal
 as it is clicked to score
/* Need a function with if score < targetNumer then alert 
"Click Again" / Continue, else if score = targetNummber then "Winner Winner Chicken Dinner", else score > targetNumber alert "No Soup for You, Try Again",to compare the value of t. 
*/



// Main Processes --------------------------------------------------------------

// Starts the Game the first time
startGame();

$("#blue").click(function () {
    updateScore(crystals.blue);
});

$("#green").click(function () {
    updateScore(crystals.green);
});

$("#red").click(function () {
    updateScore(crystals.red);
});

$("#yellow").click(function () {
    updateScore(crystals.yellow);
});

