export class CreateBlock {
	postType = 2;

	constructor(hashtags, title, date, text, imgSrc, link) {
		this.hashtags = hashtags;
		this.title = title;
		this.date = date;
		this.text = text;
		this.imgSrc = imgSrc;
		this.link = link;
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
					<a href="${this.link || '#'}" class="post__preview">
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