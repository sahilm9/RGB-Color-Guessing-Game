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
