import { url } from "./constants.js";
import { displayMessage } from "./ui/shared/displayMessage.js";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

// const detailUrl = `${url}/${id}`;

// console.log(detailUrl);

async function fetchJoke(id) {
	const detailUrl = `${url}ddd/${id}`;

	try {
		const response = await fetch(detailUrl);

		if (response.ok === true) {
			const result = await response.json();
			return displayJoke(result);
		}

		throw new Error("API call failed");
	} catch (error) {
		// console.error(error);

		displayMessage("#joke-container", error.message, "error");
		// const container = document.querySelector("#joke-container");
		// container.innerHTML = '<div class="error">There was an error fetching the joke</div>';
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
