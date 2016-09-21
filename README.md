# simon
Simon game project site

Some planning steps to guide the process:
//1. user clicks start
//2. optionsArray is randomized and the random item is pushed to memorizeArray
//3. memorizeArray is 'read' in order (loop?) on a delay
//4. each time the user clicks, the value is pushed to attemptArray; each time a new item is added to the array, it is checked against memorizeArray until all items match memorize Array.
//5. if all items match - restart at randomization
//6. if it does not match - halt process and prompt to play again; subsequent button should reload page).

Note: the above changed considerably as I came to realize the minutia needed to tell the computer what to do and when. It ended up being much more complicated than I had initially anticipated (obviously).

User Stories:

As a user, I should be able to:

1. start the program and visually understand that the game has commenced
2. successfully match the computer selections to progress to the next level
3. fail to mimic the computer and access "gameover"
4. have the game automatically reload after failure
5. find the game visually pleasing and have the appearance of a modern web-based game.  
