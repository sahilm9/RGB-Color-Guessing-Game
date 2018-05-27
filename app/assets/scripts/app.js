let numSquares = 9,
colors = [],
pickedColor;
const squares = Array.from(document.querySelectorAll(`.square`)),// Converting an array like object into Array, can also be done [].slice.call()
colorDisplay = document.getElementById(`colorDisplay`),
messageDisplay = document.querySelector(`#message`),
h1 = document.querySelector(`h1`),
resetButton = document.querySelector(`#reset`),
modeButtons = Array.from(document.querySelectorAll(`.mode`)), // Converting an array like object into Array, can also be done [].slice.call()
contentAnimate = document.querySelector(`.content-animation`).classList;


function modeButtonsSetup(){
  // Map modeButtons array to check for clicks
	modeButtons.map((modeButton) => {
    // add eventListener for each modeButton
		modeButton.addEventListener(`click`, function(){
      // Remove selected class for both the buttons
			modeButtons[0].classList.remove(`selected`);
			modeButtons[1].classList.remove(`selected`);
      // add selected class for the button clicked
			this.classList.add(`selected`);
      // see if selected button is easy or hard and assign numSquares based on it.
			this.textContent === `Easy` ? numSquares = 6: numSquares = 9;
      // reset the game if clicked on any of the modeButtons
			reset();
		});
	});
};

function squaresSetup(){
  // map squares array to checks for clicks
	squares.map(square => {
        // add click listeners to squares
		square.addEventListener(`click`, function(){
			//grab color of clicked square
			let clickedColor = this.style.backgroundColor;
			//compare color to pickedColor
			if(clickedColor === pickedColor){
        // Display message as 'Correct!'
				messageDisplay.textContent = `Correct!`;
        // Change resetButton text as 'Play Again?'
				resetButton.textContent = `Play Again?`
        // Call changeColors by passing clicked color which is equal to pickedColor, changeColors changes colors of Squares with the the color it receives as parameter
				changeColors(clickedColor);
			}
			else {
        // Clicked color not equal to picked color, change backgroundColor of square to background color of body
				this.style.backgroundColor = `#eee`;
        // Display Text 'Try again'
				messageDisplay.textContent = `Try Again`;
			}
		});
	});
};
