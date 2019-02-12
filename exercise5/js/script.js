var el = document.querySelector(".box");


el.addEventListener("click", clickedBox, false);

var count = 0;

function clickedBox(evt) {
	console.log("clicked on box.");

	if (count == 0) {
		evt.target.classList.add('moveRight');
	}
	else if (count == 1) {
		evt.target.classList.add('moveDown');
	}
	else if (count == 2) {
		evt.target.classList.add('moveLeft');
	}
	else if (count == 3) {
		evt.target.classList.add('moveUp');
	}

	count++;

	if (count == 4) {
		count = 0;
	}
	console.log(count);

}
