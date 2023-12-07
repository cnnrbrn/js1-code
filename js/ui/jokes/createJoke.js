export function createJoke(joke) {
	console.log(joke);

	const { type, setup, punchline, id } = joke;

	// Create the outer div element
	const jokeDiv = document.createElement("div");
	jokeDiv.classList.add("joke");

	// Create the h3 element for the type
	const h3Element = document.createElement("h3");
	h3Element.textContent = type;

	// Create the first p element for the setup
	const setupParagraph = document.createElement("p");
	setupParagraph.textContent = setup;

	// Create the second p element for the punchline
	const punchlineParagraph = document.createElement("p");
	punchlineParagraph.textContent = punchline;

	const link = document.createElement("a");
	link.classList.add("link");
	link.textContent = "View details";
	link.href = `joke.html?id=${id}`;

	// Append the child elements to the jokeDiv
	jokeDiv.append(h3Element);
	jokeDiv.append(setupParagraph);
	jokeDiv.append(punchlineParagraph);
	jokeDiv.append(link);

	return jokeDiv;
}
