/*  Concept
The app begins with the user pressing a button on the webpage 
The app will pick a random number from a range according to the size of a doc 
(text file, excel doc idk)
gets the amount of entries in the doc, sets it as the ceiling e.g 1-35 games. 
it will take that entry and display it on the screen, showing what game to play 
*/ 


/* Future Concept
Page can toggle between single player or multiplayer games
when button is pressed, the options cycle through on screen (like a roulette) and slow down
to a stop 
*/ 

/*
setup an array with the list 
Math.random()

arraylist.get(random number)

the list should be populated with entries
use a json or txt file.

*/

/* 
use ionic for mobile app dev
google firebase for authentication aka security 
*/ 

const startButton = document.getElementById('start-btn')
const resetButton = document.getElementById('reset-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')

startButton.addEventListener('click', startGame)
resetButton.addEventListener('click',()=>{
    currentQuestionIndex++
})

/* my name jeff */

const gameList=[
    {
        game: 
    }
]