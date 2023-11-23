import { url } from "./constants.js";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

// const detailUrl = `${url}/${id}`;

// console.log(detailUrl);

async function fetchJoke(id) {
	const detailUrl = `${url}/${id}`;

	try {
		const response = await fetch(detailUrl);
		const result = await response.json();
		displayJoke(result);
		// create html for the single object
	} catch (error) {
		console.error(error);
		const container = document.querySelector("#joke-container");
		container.innerHTML = '<div class="error">There was an error fetching the joke</div>';
	}
}

fetchJoke(id);

function displayJoke(joke) {
	document.title = `${joke.setup} | ${document.title}`;

	const container = document.querySelector("#joke-container");

	container.innerHTML = "";

	const heading = document.createElement("h1");
	heading.innerText = joke.setup;

	const punchline = document.createElement("p");
	punchline.innerText = joke.punchline;

	container.append(heading);
	container.append(punchline);
}
