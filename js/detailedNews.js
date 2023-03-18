"use strict";
import './header.js';
import './module-ibg.js';
import { CreateBlock } from './module-constructor1.js';

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

//! создаем блоки
const moreNewsItems = document.querySelector('.more-news__items');
let newsItem1 = new CreateBlock('#Электричество, #Строительство', 'Официально открыт корпоративный портал нашей компании', '19.07.2020', 'Сегодня официально заработал корпоративный портал нашей компании...', 'img/Home/main/news.png', 'detailedNews.html');
newsItem1.addElement(moreNewsItems);
let newsItem2 = new CreateBlock('#Электричество, #Строительство', 'Официально открыт корпоративный портал нашей компании', '19.07.2020', 'Сегодня официально заработал корпоративный портал нашей компании...', 'img/Home/main/news.png', 'detailedNews.html');
newsItem2.addElement(moreNewsItems);
let newsItem3 = new CreateBlock('#Электричество, #Строительство', 'Официально открыт корпоративный портал нашей компании', '19.07.2020', 'Сегодня официально заработал корпоративный портал нашей компании...', 'img/Home/main/news.png', 'detailedNews.html');
newsItem3.addElement(moreNewsItems);
let newsItem4 = new CreateBlock('#Электричество, #Строительство', 'Официально открыт корпоративный портал нашей компании', '19.07.2020', 'Сегодня официально заработал корпоративный портал нашей компании...', 'img/Home/main/news.png', 'detailedNews.html');
newsItem4.addElement(moreNewsItems);
newsItem4.addElement(moreNewsItems);
newsItem4.addElement(moreNewsItems);
newsItem4.addElement(moreNewsItems);
newsItem4.addElement(moreNewsItems);
newsItem4.addElement(moreNewsItems);
newsItem4.addElement(moreNewsItems);
newsItem4.addElement(moreNewsItems);
newsItem4.addElement(moreNewsItems);
newsItem4.addElement(moreNewsItems);