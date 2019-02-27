var game = ["HOLY", "SHADOW", "ASSASSINATION", "FROST", "DAGGER", "SWORD", "SHIELD",
            "MELEE", "RANGED", "TANK", "HEALER", "RAID", "DUNGEON", "ARENA", "BUFF",
            "DEBUFF", "DISCIPLINE", "DESTRUCTION", "FURY", "SURVIVAL", "UNHOLY", 
            "SYLVANAS", "VOID", "AZSHARA", "AZEROTH"];

// console.log(game.length);

// Variables declared for use in functions
var chosen;
var selection;
var selectionLength;
var letters
var dashes;
var attempts;
var guesses;
var display;
var answer;


function start()  {
    chosen = Math.floor(Math.random()*25);
    selection = game[chosen];
    selectionLength = selection.length;
    letters = selection.split("");
    dashes = [];
    attempts = 0;
    guesses = "";
    display = "";
    for (i = 0; i < letters.length; i++) {
        dashes [i] = "_ ";
        display = display + dashes[i];
        document.getElementById("game").innerHTML = display;
    }
    display = "";
    attempts = selectionLength +3;
    document.getElementById("remaining").innerHTML = attempts;

    console.log(selection);
}

window.onload = function (){
    start();
};

function check (item) {
    for (i = 0; i < letters.length; i++) {
        if (item == letters[i]) {
            dashes[i] = item;
        }
        display = display + dashes[i];
        answer = dashes.join("");
        console.log(answer);
        }
        document.getElementById("game").innerHTML = display;
        display = "";
        attempts--;
        document.getElementById("remaining").innerHTML = attempts;
}


function guessMade (x) {
    guesses = guesses + " " + x;
    document.getElementById("guess").innerHTML = guesses;
    
}

console.log(dashes);



document.onkeypress = function(event) {
    // defines users key pressed
    var letterGuessed = event.key;
    guessMade(letterGuessed);
    check(letterGuessed.toUpperCase());
    // Checking to see if game is over
    if (selection === answer) {
        document.getElementById("game").innerHTML = answer;
        alert("You win!");
        start();
    }
    else if (attempts == 0) {
        alert("Try again")
        guesses = "";
        document.getElementById("guess").innerHTML = guesses;
        start();
    }
};