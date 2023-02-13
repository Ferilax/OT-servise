const slider = document.querySelector('.detailed-new__slider');
const allSlides = slider.querySelectorAll('.detailed-new__slide');
const miniMap = document.querySelector('.detailed-new__slider-minimap');
const allMiniSlides = miniMap.querySelectorAll('.detailed-new__slide-mini');

const prevBtn = document.querySelector('.detailed-new__prev-button');
const nextBtn = document.querySelector('.detailed-new__next-button');

allSlides[0].classList.add('active');
let slideCounter = 0;

slider.addEventListener("click", function(e) {
	let prev = e.target.closest('.detailed-new__prev-button');
	let next = e.target.closest('.detailed-new__next-button');

	if (next) {
		allSlides[slideCounter].classList.remove('active');
		slideCounter++;

		if (slideCounter == allSlides.length) slideCounter = 0;

		allSlides[slideCounter].classList.add('active');
	}

	if (prev) {
		allSlides[slideCounter].classList.remove('active');
		slideCounter--;

		if (slideCounter < 0) slideCounter = allSlides.length - 1;

		allSlides[slideCounter].classList.add('active');
	}
});

for (let i = 0; i < allMiniSlides.length; i++) {
	allMiniSlides[i].addEventListener("click", function(e) {
		allSlides[slideCounter].classList.remove('active');
		slideCounter = i;
		allSlides[slideCounter].classList.add('active');
	});
}
console.log(allMiniSlides)



//! Автоматический горизонтальный скролл
function scrollHorizontally(e) {
	e = window.event || e;
	var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
	document.querySelector('.detailed-new__slider-minimap').scrollLeft -= (delta * 60); // Multiplied by 40
	e.preventDefault();
}
if (document.querySelector('.detailed-new__slider-minimap').addEventListener) {
	// IE9, Chrome, Safari, Opera
	document.querySelector('.detailed-new__slider-minimap').addEventListener('mousewheel', scrollHorizontally, false);
	// Firefox
	document.querySelector('.detailed-new__slider-minimap').addEventListener('DOMMouseScroll', scrollHorizontally, false);
} else {
	// IE 6/7/8
	document.querySelector('.detailed-new__slider-minimap').attachEvent('onmousewheel', scrollHorizontally);
}