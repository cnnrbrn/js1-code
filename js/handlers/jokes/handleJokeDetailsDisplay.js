import { fetchSingleJoke } from "../../api/jokes/fetchSingleJoke.js";
import getQueryParam from "../../helpers/getQueryParam.js";
import { displayJoke } from "../../ui/jokes/displayJoke.js";
import { displayMessage } from "../../ui/shared/displayMessage.js";

export async function handleJokeDetailsDisplay() {
	const id = getQueryParam("id");

	if (!id) {
		window.location.href = "/";
	}

	try {
		const joke = await fetchSingleJoke(id);
		console.log(joke);
		displayJoke(joke);
		// display the joke html
	} catch (error) {
		displayMessage("#joke-container", error.message);
	}

	// console.log("display details");
}
