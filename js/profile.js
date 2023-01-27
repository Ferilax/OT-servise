"use strict";
const wrapper = document.querySelector('.wrapper');
const downDropList = document.querySelector('.header-user');
const downDropListHidden = document.querySelector('.header-user__hidden');
const downDropListVisible = document.querySelector('.header-user__visible');

document.addEventListener("click", function (e) {
	if (e.target.closest('.header-user__visible')) {
		downDropList.classList.toggle('active');
	}
	if (!e.target.closest('.header-user')) {
		downDropList.classList.remove('active');
	}
});

const companySettingsItems = document.querySelectorAll('.company-settings__item');
const companySettings = document.querySelector('.company-settings');

companySettings.addEventListener("click", function(e) {
	let clicked = e.target.closest('.company-settings__item');
	if (clicked) {
		companySettingsItems.forEach(el => el.classList.remove('selected'));
		clicked.classList.add('selected');
	}
});

companySettings.addEventListener("click", function(e) {
	let clicked = e.target.closest('.company-settings__item');
	let deleteBtn = e.target.closest('.company-settings__icon');

	if (clicked) {
		companySettingsItems.forEach(el => el.classList.remove('selected'));
		clicked.classList.add('selected');
	}

	if (deleteBtn) {
		console.log(deleteBtn);
		wrapper.insertAdjacentHTML(
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
});


//! Искусственный select>option
const specialistSettingsSelectContainer = document.querySelector('.specialist-settings__select-container');
const specialistSettingsSelectBtn = document.querySelector('.specialist-settings__button');
const specialistSettingsSelectUl = document.querySelector('.specialist-settings__ul');
const specialistSettingsSelectLi = document.querySelectorAll('.specialist-settings__li');
const specialistSettingsSelectInput = document.querySelectorAll('.specialist-settings__input');

specialistSettingsSelectBtn.addEventListener("click", function (e) {
	specialistSettingsSelectUl.classList.toggle('active');
	specialistSettingsSelectBtn.classList.toggle('active');
});

document.addEventListener("click", function (e) {
	if (!e.target.closest('.specialist-settings__ul') && !e.target.closest('.specialist-settings__button')) {
		specialistSettingsSelectUl.classList.remove('active');
		specialistSettingsSelectBtn.classList.remove('active');
	}
});

specialistSettingsSelectLi.forEach(el => {
	el.addEventListener("click", function (e) {
		specialistSettingsSelectUl.classList.remove('active');
		specialistSettingsSelectBtn.classList.remove('active');
		specialistSettingsSelectBtn.innerText = this.innerText;
		specialistSettingsSelectInput.value = this.dataset.value;
		specialistSettingsSelectLi.forEach(el => {
			el.classList.remove('active')
		});
		this.classList.add('active');
	});
});


const passwordSettingsFormContainer = document.querySelector('.password-settings__form-container');
const passwordSettingsChangePass = document.querySelector('#changePassword');
const passwordSettingsSubmitPass = document.querySelector('#submitPassword');
const passwordSettingsCancelPass = document.querySelector('#cancelPassword');
const passwordSettingsBody = document.querySelector('.password-settings__body');
const passwordSettingsTitle = document.querySelector('.password-settings__title');

passwordSettingsChangePass.addEventListener("click", function(e) {
	passwordSettingsFormContainer.classList.add('active');
	passwordSettingsBody.classList.remove('active');
	passwordSettingsTitle.innerHTML = 'Изменение пароля';
});

passwordSettingsCancelPass.addEventListener("click", function(e) {
	passwordSettingsFormContainer.classList.remove('active');
	passwordSettingsBody.classList.add('active');
	passwordSettingsTitle.innerHTML = 'Настройки пароля';
});

//! personal-settings
const personalSettingsFormContainer = document.querySelector('.personal-settings__form-container');
const personalSettingsChangePass = document.querySelector('#changePersonalData');
const personalSettingsSubmitPass = document.querySelector('#submitPersonalData');
const personalSettingsCancelPass = document.querySelector('#cancelPersonalData');
const personalSettingsBody = document.querySelector('.personal-settings__body');
const personalSettingsTitle = document.querySelector('.personal-settings__title');

personalSettingsChangePass.addEventListener("click", function (e) {
	personalSettingsFormContainer.classList.add('active');
	personalSettingsBody.classList.remove('active');
	personalSettingsTitle.innerHTML = 'Изменение личной информации';
});

personalSettingsCancelPass.addEventListener("click", function (e) {
	personalSettingsFormContainer.classList.remove('active');
	personalSettingsBody.classList.add('active');
	personalSettingsTitle.innerHTML = 'Личная информация';
});



//! img превью
const inputAvatar = document.querySelector('#inputAvatar');
const userAvatar = document.querySelector('#userAvatar');


inputAvatar.addEventListener("change", function(e) {
	let selectedFile = inputAvatar.files[0];

	//? Получаем URL изображения
	let fileURL = URL.createObjectURL(selectedFile);

	userAvatar.src = fileURL;
})

//! модальное окно