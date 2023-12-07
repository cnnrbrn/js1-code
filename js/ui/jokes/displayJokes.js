import { createJoke } from "./createJoke.js";

export function displayJokes(jokes) {
	const container = document.querySelector("#jokes-container");

	// console.log("jokes", jokes);

	container.innerHTML = "";

	jokes.forEach(function (joke) {
		console.log(joke);
		const jokeItem = createJoke(joke);
		container.append(jokeItem);
	});

	const jokesHtml = jokes.map(function (joke) {
		const jokeItem = createJoke(joke);
		return jokeItem;
	});

	console.log("jokesHtml", jokesHtml);

	container.append(...jokesHtml);
}
