var card1 = document.querySelector('.card1');
var card2 = document.querySelector('.card2');
var card3 = document.querySelector('.card3');
var card4 = document.querySelector('.card4');
var card5 = document.querySelector('.card5');


function randomColor() {
	return '#'+Math.random().toString(16).substr(-6);
}


card1.addEventListener("mouseover", function() {
	card1.style.outline = "3px solid " + randomColor();
}, false);

card1.addEventListener("mouseout", function() {
	card1.style.outline = "";
}, false);

card2.addEventListener("mouseover", function() {
	card2.style.outline = "3px solid " + randomColor();
}, false);
card2.addEventListener("mouseout", function() {
	card2.style.outline = "";
}, false);

card3.addEventListener("mouseover", function() {
	card3.style.outline = "3px solid " + randomColor();
}, false);

card3.addEventListener("mouseout", function() {
	card3.style.outline = "";
}, false);

card4.addEventListener("mouseover", function() {
	card4.style.outline = "3px solid " + randomColor();
}, false);
card4.addEventListener("mouseout", function() {
	card4.style.outline = "";
}, false);

card5.addEventListener("mouseover", function() {
	card5.style.outline = "3px solid " + randomColor();
}, false);
card5.addEventListener("mouseout", function() {
	card5.style.outline = "";
}, false);
