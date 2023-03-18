"use strict";
import './header.js';
import './module-input.js';

const ask = document.querySelector('.ask')
const askButton = ask.querySelector('.ask__button');
const askInputFile = ask.querySelector('.ask__input-file');
const askPreviewRow = ask.querySelector('.ask__img-file-preview-row');

const reply = document.querySelector('.reply');
const replyButton = reply.querySelector('.reply__button');

const unanswered = document.querySelector('.unanswered');
const unansweredButton = document.querySelector('.unanswered__button');

askButton.addEventListener("click", function(e) {
	ask.classList.toggle('active');
});

replyButton.addEventListener("click", function(e) {
	reply.classList.toggle('active');
});

unansweredButton.addEventListener("click", function(e) {
	unanswered.classList.toggle('active');
});

//! img превью
askInputFile.addEventListener("change", function (e) {
	let selectedFile = askInputFile.files[0];

	
	//? Получаем URL изображения
	let fileURL = URL.createObjectURL(selectedFile);

	let fileName = selectedFile.name;
	let fileSize = Math.ceil(selectedFile.size / 1024) + 'КБ';
	let fileType = fileName.split('.').pop();
	
	//? Проверка на тип файла
	if (selectedFile.type.includes('image')) {
		askPreviewRow.insertAdjacentHTML(
			"beforeend",
			`<div class="ask__img-file-preview">
				<img src="${fileURL}" alt="">
			</div>`
		);
	} else {
		askPreviewRow.insertAdjacentHTML(
			"afterend",
			`<div class="ask__other-file">
				<div class="ask__icon">
					<img src="img/Files/${fileType}.svg" alt="" onerror="this.onerror=null;this.src='img/Files/image.svg';">
				</div>
				<div class="ask__fileinfo">
					${fileName} (${fileSize})
				</div>
				<div class="ask__close">
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path fill-rule="evenodd" clip-rule="evenodd"
							d="M18.7802 5.03014C19.0731 5.32304 19.0307 5.8403 18.6856 6.18548L6.18548 18.6856C5.8403 19.0307 5.32304 19.0731 5.03015 18.7802C4.73725 18.4873 4.77964 17.9701 5.12482 17.6249L17.6249 5.12482C17.9701 4.77964 18.4873 4.73725 18.7802 5.03014Z"
							fill="#373737" />
						<path fill-rule="evenodd" clip-rule="evenodd"
							d="M5.2191 5.03014C5.512 4.73725 6.02926 4.77964 6.37444 5.12482L18.8745 17.6249C19.2197 17.9701 19.2621 18.4873 18.9692 18.7802C18.6763 19.0731 18.159 19.0307 17.8139 18.6856L5.31378 6.18548C4.9686 5.8403 4.92621 5.32304 5.2191 5.03014Z"
							fill="#373737" />
					</svg>
				</div>
			</div>`
		);
	}
})


ask.addEventListener("click", function(e) {
	let clickedImg = e.target.closest('.ask__img-file-preview');
	let clickedOther = e.target.closest('.ask__other-file');

	if (clickedImg) {
		clickedImg.remove()
	}

	if (clickedOther) {
		clickedOther.remove()
	}
})
