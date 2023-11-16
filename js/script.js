const nameInput = document.querySelector("input");
const saveButton = document.querySelector("#save");
const deleteButton = document.querySelector("#delete");

saveButton.addEventListener("click", saveToStorage);
deleteButton.addEventListener("click", deleteFromStorage);

function saveToStorage() {
	const name = nameInput.value;
	// sessionStorage.setItem("name", name);
	localStorage.setItem("name", name);
	// location.href = "favourites.html";
}

function deleteFromStorage() {
	localStorage.clear();
}
