# guess

Layout Scope
- Create a index.html file
- Make a html skeleton
- Make sure to give your page an appropriate title
- Add a main.js file (holds JavaScript code)
- Add a style.css file (holds CSS code)
- Add an input field and give an id (This input field will take the user's guess)
- Add a div and give an id (This div will hold any feedback from the game to the user)
- Add a button (This button will submit the user's guess to the game)

Functional Scope
- In your main.js file, make a variable, called rightNum and set its value to null
- Add a on load handler to the body
- It should call a function named pickNumber and assign its return value to the variable rightNum
- Make a function called pickNumber that takes no parameters and returns a number
Inside:
- It will creates a variable, called randomNum
- It will generate a random number between 1 and 10, and then assigns it to the randomNum variable
- return randomNum
- Add click handler to call the function makeGuess
- Add a function to your script tags named it makeGuess that takes no parameters and returns no values
- It will grab the value of the input from above and assign it to a variable named makeGuess
- It then compares the variable the_guess to the variable the_number
- If guess is higher than rightNum, it changes the contents of #responseDiv to "Too High!"
- If guess is lower than rightNum, it changes the contents of #responseDiv to "Too Low!"
- If guess is the same as rightNum, it changes the contents of #responseDiv to "You guessed it!"
