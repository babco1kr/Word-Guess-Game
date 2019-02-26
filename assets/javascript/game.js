var game = ["HOLY", "SHADOW", "ASSASSINATION", "FROST", "DAGGER", "SWORD", "SHIELD",
            "MELEE", "RANGED", "TANK", "HEALER", "RAID", "DUNGEON", "ARENA", "BUFF",
            "DEBUFF", "DISCIPLINE", "DESTRUCTION", "FURY", "SURVIVAL", "UNHOLY", 
            "SYLVANAS", "VOID", "AZSHARA", "AZEROTH"];

// console.log(game.length);

var chosen = Math.floor(Math.random()*25);
var selection = game[chosen];
var selectionLength = selection.length;
var dashes = [];
var attempts = selectionLength +3;
var letters = selection.split("");
var guesses = "";
var display = "";

// console.log(selectionLength);

console.log(selection);
console.log(letters[2]);

function start()  {
    for (i = 0; i < letters.length; i++) {
        dashes [i] = "_ ";
        display = display + dashes[i];
        document.getElementById("game").innerHTML = display;
        document.getElementById("remaining").innerHTML = attempts;
    }
    display = "";
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
        }
        document.getElementById("game").innerHTML = display;
        display = "";
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
    attempts--;
    // Displays the remaining attempts in the html
    document.getElementById("remaining").innerHTML = attempts;
    // For loop that runs the letter through the array of the word looking for matches
    check(letterGuessed.toUpperCase());

    if (attempts  < 1) {
        start();
    }
};