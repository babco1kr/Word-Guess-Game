var game = ["Holy", "Shadow", "Assassination", "Frost", "Dagger", "Sword", "Shield",
            "Melee", "Ranged", "Tank", "Healer", "Raid", "Dungeon", "Arena", "Buff",
            "Debuff", "Discipline", "Destruction", "Fury", "Survival", "Unholy", 
            "Sylvannas", "Void", "Ashara", "Azeroth"];

// console.log(game.length);

var chosen = Math.floor(Math.random()*25);
var selection = game[chosen];
var selectionLength = selection.length;
var dashes = [selectionLength];
var attempts = selectionLength +2;
var letters = selection.split("");
var guesses;

// console.log(selectionLength);

console.log(selection);
console.log(letters[2]);


for (i = 0; i < selectionLength; i++) {
    document.write("-");
}


// for (i = attempts; i > 0; i--) {
//     document.getElementById("remaining").innerHTML =  i;
// }

document.onkeypress = function(event) {
    var letterGuessed = String.fromCharCode(event.keyCode);
    guesses = guesses + letterGuessed;
    document.getElementById("guess").innerHTML = guesses;
}