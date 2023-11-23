import { url } from "./constants.js";
import { displayMessage } from "./ui/shared/displayMessage.js";

async function fetchJokes() {
	try {
		const response = await fetch(url);
		const results = await response.json();
		displayJokes(results);
	} catch (error) {
		console.log(error);
		displayMessage("#jokes-container", "An error occured fetching the jokes", "success");

		// const container = document.querySelector("#jokes-container");
		// container.innerHTML = '<div class="error">An error occured fetching the jokes</div>';
	}
}

fetchJokes();

function displayJokes(jokes) {
	const container = document.querySelector("#jokes-container");

	container.innerHTML = "";

	jokes.forEach(function (joke) {
		const jokeItem = createJoke(joke);
		container.append(jokeItem);

		// container.innerHTML += `<div class="joke">
		// 												<h3>${joke.type}</h3>
		// 												<p>${joke.setup}</p>
		// 												<p>${joke.punchline}</p>
		// 												<a href="joke.html?id=${joke.id}">View details</a>
		// 											</div>`;
	});
}

function createJoke(joke) {
	// Create the outer div element
	const jokeDiv = document.createElement("div");
	jokeDiv.classList.add("joke");

	// Create the h3 element for the type
	const h3Element = document.createElement("h3");
	h3Element.textContent = joke.type;

	// Create the first p element for the setup
	const setupParagraph = document.createElement("p");
	setupParagraph.textContent = joke.setup;

	// Create the second p element for the punchline
	const punchlineParagraph = document.createElement("p");
	punchlineParagraph.textContent = joke.punchline;

	const link = document.createElement("a");
	link.classList.add("link");
	link.textContent = "View details";
	link.href = `joke.html?id=${joke.id}`;

	// Append the child elements to the jokeDiv
	jokeDiv.append(h3Element);
	jokeDiv.append(setupParagraph);
	jokeDiv.append(punchlineParagraph);
	jokeDiv.append(link);

	return jokeDiv;
}
