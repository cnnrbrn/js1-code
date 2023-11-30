import { createJoke } from "./createJoke.js";

export function displayJokes(jokes) {
	const container = document.querySelector("#jokes-container");

	container.innerHTML = "";

	jokes.forEach(function (joke) {
		const jokeItem = createJoke(joke);
		container.append(jokeItem);
	});
}
