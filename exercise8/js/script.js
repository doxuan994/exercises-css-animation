var deck = document.querySelector('.deck');


var card1 = document.querySelector('.card1');
var card2 = document.querySelector('.card1');
var card3 = document.querySelector('.card1');
var card4 = document.querySelector('.card1');
var card5 = document.querySelector('.card1');

function randomColor() {
	return '#'+Math.random().toString(16).substr(-6);
}



deck.addEventListener("mouseover", function(  ) {


	console.log(card1);
	console.log(card2);
	console.log(card3);
	console.log(card4);
	console.log(card5);

	card1.style.outline = "3px solid " + randomColor();
	card2.style.outline = "3px solid " + randomColor();
	card3.style.outline = "3px solid " + randomColor();
	card4.style.outline = "3px solid " + randomColor();
	card5.style.outline = "3px solid " + randomColor();





	setTimeout(function() {
		card1.style.outline = "";
		card2.style.outline = "";
		card3.style.outline = "";
		card4.style.outline = "";
		card5.style.outline = "";
	}, 500);

}, false);
