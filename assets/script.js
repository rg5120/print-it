const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
console.log(slides[2]["tagLine"]);
var pos = 0;
function updateSlider(direction) {
	let img = document.querySelector(".banner-img");
	if (direction === 1) {
		pos = (pos === (slides.length - 1)) ? 0 : pos + 1;
		console.log(pos);
		img.setAttribute("src", "./assets/images/slideshow/"$(slides[pos]["image"]))
	}
	else {
		pos = !pos ? slides.length - 1 : pos - 1;
		console.log(pos);
	}
}
let leftArrow = document.querySelector(".arrow_left");
let rightArrow = document.querySelector(".arrow_right");

leftArrow.addEventListener("click", (event) => {
	if (event.button === 0) {
		console.log("vous avez cliqué gauche");
		updateSlider(-1);
	}
});

rightArrow.addEventListener("click", (event) => {
	if (event.button === 0) {
		console.log("vous avez cliqué droit");
		updateSlider(1);
	}
});

let dots = `<span class="dot dot_selected"></span>`;
for (let i = 0; i < slides.length - 1; i++) {
	dots += `<span class="dot"></span>`;
}
let banner = document.querySelector(".dots");

banner.innerHTML = dots;