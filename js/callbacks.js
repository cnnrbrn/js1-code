// function declaration
function printSomething() {
	console.log("something");
}

// function expression
const printSomethingElse = function () {
	console.log("print something else");
};

function fancyFunction(callback) {
	callback();
}

// fancyFunction(printSomethingElse);

// add event listener
const button = document.querySelector("button");

button.addEventListener("mouseover", printSomethingElse);

const colours = ["blue", "red", "green"];

// function expression
// const displayEachColour = function (colour) {
// 	console.log(colour);
// };

colours.forEach(displayEachColour);

// function declaration
function displayEachColour(colour) {
	console.log(colour);
}

// hoisting
