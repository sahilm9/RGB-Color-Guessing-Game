/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var numSquares = 9,
    colors = [],
    pickedColor = void 0;
var squares = Array.from(document.querySelectorAll(".square")),
    // Converting an array like object into Array, can also be done [].slice.call()
colorDisplay = document.getElementById("colorDisplay"),
    messageDisplay = document.querySelector("#message"),
    h1 = document.querySelector("h1"),
    resetButton = document.querySelector("#reset"),
    modeButtons = Array.from(document.querySelectorAll(".mode")),
    // Converting an array like object into Array, can also be done [].slice.call()
contentAnimate = document.querySelector(".content-animation").classList;

function modeButtonsSetup() {
	// Map modeButtons array to check for clicks
	modeButtons.map(function (modeButton) {
		// add eventListener for each modeButton
		modeButton.addEventListener("click", function () {
			// Remove selected class for both the buttons
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			// add selected class for the button clicked
			this.classList.add("selected");
			// see if selected button is easy or hard and assign numSquares based on it.
			this.textContent === "Easy" ? numSquares = 6 : numSquares = 9;
			// reset the game if clicked on any of the modeButtons
			reset();
		});
	});
};

function squaresSetup() {
	// map squares array to checks for clicks
	squares.map(function (square) {
		// add click listeners to squares
		square.addEventListener("click", function () {
			//grab color of clicked square
			var clickedColor = this.style.backgroundColor;
			//compare color to pickedColor
			if (clickedColor === pickedColor) {
				// Display message as 'Correct!'
				messageDisplay.textContent = "Correct!";
				// Change resetButton text as 'Play Again?'
				resetButton.textContent = "Play Again?";
				// Call changeColors by passing clicked color which is equal to pickedColor, changeColors changes colors of Squares with the the color it receives as parameter
				changeColors(clickedColor);
			} else {
				// Clicked color not equal to picked color, change backgroundColor of square to background color of body
				this.style.backgroundColor = "#eee";
				// Display Text 'Try again'
				messageDisplay.textContent = "Try Again";
			}
		});
	});
};

function reset() {
	// Call the randomColorsGenerator with numSquare default value or value selected
	colors = randomColorsGenerator(numSquares);
	//pick a new random color from array
	pickedColor = colorPick();
	//change colorDisplay to match picked Color
	colorDisplay.textContent = pickedColor;
	// change restButton text to 'New Colors'
	resetButton.textContent = "New Colors";
	// change messageDisplay text to ''
	messageDisplay.textContent = "";
	//change colors of squares
	for (var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			// Set the properties of current square to following
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
}

// listen for click on resetButton
resetButton.addEventListener("click", function () {
	// Remove animated flash property
	contentAnimate.remove("animated");
	contentAnimate.remove("flash");
	// Call reset function
	reset();
});

function changeColors(color) {
	// map squares array to change color of each square
	squares.map(function (square) {
		// Set the backgroundColor of square to the color passed as parameter to the function
		square.style.backgroundColor = color;
	});
	// Add animated flash property, as correct color is clicked
	contentAnimate.add("animated");
	contentAnimate.add("flash");
}

function colorPick() {
	// pick a random number
	var random = Math.floor(Math.random() * colors.length);
	// return random color of from colors array
	return colors[random];
}

function randomColorsGenerator(num) {
	var arr = [];
	//loop num(numSquare) times
	for (var i = 0; i < num; i++) {
		//get random color and push into arr
		arr.push(getRandomColor());
	}
	// return that array
	return arr;
}

/***/ })
/******/ ]);