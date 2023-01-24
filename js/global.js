"use strict";

const newsItems = document.querySelector('.news__items')
console.log(newsItems)

class CreateBlock {
	postType = 2;
	
	constructor(hashtags, title, date, text, imgSrc) {
		this.hashtags = hashtags;
		this.title = title;
		this.date = date;
		this.text = text;
		this.imgSrc = imgSrc;
	}

	addPostTavAndTeacher(postTab, teachersType, teachers) {
		this.postType = 1;
		this.postTab = postTab;
		this.teachersType = teachersType;
		this.teachers = teachers;
		return this;
	}

	addElement(htmlElement) {
		htmlElement.insertAdjacentHTML(
			"beforeend",
			`<div class="post post-type-${this.postType}">
				<div class="post-body">
					<a href="#" class="post__preview">
						<img src="${this.imgSrc}" alt="">
						${this.postType == 2 ? "" : `<div class="post__type">${this.postTab}</div>`}
					</a>
					
					<div class="post__body">
						<div class="post__hashtag">${this.hashtags}</div>
						<div class="post__title h2">${this.title}</div>
						<div class="post__date">${this.date}</div>
						${this.postType == 2 ? "" : `<div class="post__teachers"> <span>${this.teachersType}</span> ${this.teachers}</div>`}
						<div class="post__text">${this.text}</div>
					</div>
				</div>
			</div>`
		);
	}
}


let newsItem1 = new CreateBlock('#Электричество, #Строительство', 'Официально открыт корпоративный портал нашей компании', '19.07.2020', 'Сегодня официально заработал корпоративный портал нашей компании...', 'img/Home/main/news.png');
newsItem1.addElement(newsItems);

let newsItem2 = new CreateBlock('#Электричество, #Строительство', 'Официально открыт корпоративный портал нашей компании', '19.07.2020', 'Сегодня официально заработал корпоративный портал нашей компании...', 'img/Home/main/news.png');
newsItem1.addElement(newsItems);

let newsItem3 = new CreateBlock('#Электричество, #Строительство', 'Официально открыт корпоративный портал нашей компании', '19.07.2020', 'Сегодня официально заработал корпоративный портал нашей компании...', 'img/Home/main/news.png');
newsItem1.addElement(newsItems);

let newsItem4 = new CreateBlock('#Электричество, #Строительство', 'Официально открыт корпоративный портал нашей компании', '19.07.2020', 'Сегодня официально заработал корпоративный портал нашей компании...', 'img/Home/main/news.png');
newsItem1.addElement(newsItems);