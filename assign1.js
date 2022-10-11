
errorParagraph = document.getElementById("error")

function purchase() {
	console.log("The Purchase button has just been Clicked")

	errorParagraph.textContent = "Something has just gone wrong with the Purchase"
}

purchase();