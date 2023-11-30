export function displayJoke(joke) {
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
