var optionsArray = ["one", "two", "three", "four", "five", "six"]

var memorizeArray = []

var attemptArray = []

var oneButton = $("#one");
var twoButton = $("#two");
var threeButton = $("#three");
var fourButton = $("#four");
var fiveButton = $("#five");
var sixButton = $("#six");


//1. user clicks start
//2. selectorArray is randomized and the random item is pushed to memorizeArray
//3. memorizeArray is 'read' in order (loop?) on a delay
//4. each time the user clicks, the value is pushed to attemptArray; each time a new item is added to the array, it is checked against memorizeArray until all items match memorize Array.
    //5. if all items match - restart at randomization
    //6. if it does not match - halt process and prompt to play again; subsequent button should reload page).
