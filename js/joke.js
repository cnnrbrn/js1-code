import { url } from "./constants.js";
import { displayMessage } from "./ui/shared/displayMessage.js";

async function fetchJoke(id) {
	const detailUrl = `${url}/${id}`;

	try {
		const response = await fetch(detailUrl);

		if (response.ok === true) {
			const result = await response.json();
			return displayJoke(result);
		}

		throw new Error("API call failed");
	} catch (error) {
		// console.error(error);

		displayMessage("#joke-container", error.message);
		// const container = document.querySelector("#joke-container");
		// container.innerHTML = '<div class="error">There was an error fetching the joke</div>';
	}
}

fetchJoke(id);
