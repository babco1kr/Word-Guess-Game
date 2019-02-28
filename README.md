# Word-Guess-Game

This is my third project for the UCF coding bootcamp.

This is a word guess game with a World of Warcraft theme.

#on load

The game starts when the broswer loads by randomly selecting a number and applying that number to the game array
It pulls the word and then populates a new array full of underscores as a place holder for the word to guess.
Attempts made is set equal to 3 + the length of the word selected.

#on key press

It take users key input and checks it against the letters in the word selected. If it matches it will replace that underscore
with the matching letter and display on screen. Every guess, correct or incorrect the guess counter goes down. It then adds
the letter guessed to the letter guessed category and displays it on screen.

#Guess remaining reaching 0

When the guess remaining reaches 0 and they havent completed the word the game restarts and plays a sound file from the game it's
themed on.

#Winning

If the user completes the word the game also restarts but plays a different sound file from the game to signify winning