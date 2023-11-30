import { fetchJokes } from "../../api/jokes/fetchJokes.js";
import { displayJokes } from "../../ui/jokes/displayJokes.js";
import { displayMessage } from "../../ui/shared/displayMessage.js";

export async function handleJokesDisplay() {
	try {
		const jokes = await fetchJokes();
		displayJokes(jokes);
	} catch (error) {
		displayMessage("#jokes-container", error.message);
	}
}
