const colours = ["red", "blue", "green"];

// colours.forEach(function (colour) {
// 	console.log(colour);
// });

console.log(colours);

const newColours = colours.map(function (colour) {
	return `Colour is ${colour}`;
});

console.log(newColours);
