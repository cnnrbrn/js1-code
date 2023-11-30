import { handleJokeDetailsDisplay } from "./handlers/jokes/handleJokeDetailsDisplay.js";
import { handleJokesDisplay } from "./handlers/jokes/handleJokesDisplay.js";

function router() {
	const path = window.location.pathname;

	console.log(path);

	switch (path) {
		case "/":
		case "/index.html":
			handleJokesDisplay();
			break;
		case "/joke.html":
			handleJokeDetailsDisplay();
			break;
	}
}

router();
