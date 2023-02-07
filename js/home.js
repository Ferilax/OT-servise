"use strict";

new Swiper('.swiper1', {
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},

	mousewheel: {
		sensitivity: 1,
		eventsTarget: ".swiper1"
	},

	navigation: {
		nextEl: '.swiper-btn-next',
		prevEl: '.swiper-btn-prev',
	},
});


const newsItems = document.querySelector('.pre-news__items')
console.log(newsItems)

let newsItem1 = new CreateBlock('#Электричество, #Строительство', 'Официально открыт корпоративный портал нашей компании', '19.07.2020', 'Сегодня официально заработал корпоративный портал нашей компании...', 'img/Home/main/news.png');
newsItem1.addElement(newsItems);

let newsItem2 = new CreateBlock('#Электричество, #Строительство', 'Официально открыт корпоративный портал нашей компании', '19.07.2020', 'Сегодня официально заработал корпоративный портал нашей компании...', 'img/Home/main/news.png');
newsItem2.addElement(newsItems);

let newsItem3 = new CreateBlock('#Электричество, #Строительство', 'Официально открыт корпоративный портал нашей компании', '19.07.2020', 'Сегодня официально заработал корпоративный портал нашей компании...', 'img/Home/main/news.png');
newsItem3.addElement(newsItems);

let newsItem4 = new CreateBlock('#Электричество, #Строительство', 'Официально открыт корпоративный портал нашей компании', '19.07.2020', 'Сегодня официально заработал корпоративный портал нашей компании...', 'img/Home/main/news.png');
newsItem4.addElement(newsItems);
