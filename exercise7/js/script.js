var red = document.querySelector('div#loader .red');
var blue = document.querySelector('div#loader .blue');
var green = document.querySelector('div#loader .green');



function randomColor() {
	return '#'+Math.random().toString(16).substr(-6);
}

// Toggle button code. Don't edit.
var loader = document.getElementById("loader");
var button = document.getElementById("button");


button.addEventListener("click", function() {

	if (loader.className === "loading") {
		loader.className = "";
	} else {
		loader.className = "loading";
	}

	if (loader.className === "loading") {

		red.style.background = randomColor();
		blue.style.background = randomColor();
		green.style.background = randomColor();
	}
})

//loader.className ="";
