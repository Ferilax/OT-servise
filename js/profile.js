"use strict";

const downDropList = document.querySelector('.header-user');
const downDropListHidden = document.querySelector('.header-user__hidden');
const downDropListVisible = document.querySelector('.header-user__visible');

const sectionPersonal = document.querySelector('.personal-settings');
const personalSettingsFormContainer = sectionPersonal.querySelector('.personal-settings__form-container');
const personalSettingsChangeBtn = sectionPersonal.querySelector('#changePersonalData');
const personalSettingsSubmitBtn = sectionPersonal.querySelector('#submitPersonalData');
const personalSettingsCancelBtn = sectionPersonal.querySelector('#cancelPersonalData');
const personalSettingsBody = sectionPersonal.querySelector('.personal-settings__body');
const personalSettingsTitle = sectionPersonal.querySelector('.personal-settings__title');
const inputAvatar = sectionPersonal.querySelector('#inputAvatar');
const userAvatar = sectionPersonal.querySelector('#userAvatar');

const sectionPassword = document.querySelector('.password-settings');
const passwordSettingsFormContainer = sectionPassword.querySelector('.password-settings__form-container');
const passwordSettingsChangePass = sectionPassword.querySelector('#changePassword');
const passwordSettingsSubmitPass = sectionPassword.querySelector('#submitPassword');
const passwordSettingsCancelPass = sectionPassword.querySelector('#cancelPassword');
const passwordSettingsBody = sectionPassword.querySelector('.password-settings__body');
const passwordSettingsTitle = sectionPassword.querySelector('.password-settings__title');

const sectionCompany = document.querySelector('.company-settings');
const companySettingsItems = Array.from(document.querySelectorAll('.company-settings__item'));

const sectionSpecialist = document.querySelector('.specialist-settings')
const specialistSettingsSelectContainer = sectionSpecialist.querySelector('.specialist-settings__select-container');
const specialistSettingsSelectBtn = sectionSpecialist.querySelector('.specialist-settings__button');
const specialistSettingsSelectUl = sectionSpecialist.querySelector('.specialist-settings__ul');
const specialistSettingsSelectLi = sectionSpecialist.querySelectorAll('.specialist-settings__li');
const specialistSettingsSelectInput = sectionSpecialist.querySelectorAll('.specialist-settings__input');

const modalCompany = document.querySelector('.modal-for-company');
const modalCompanySubmit = document.querySelector('.modal-for-company__submit-button');
let modalCounter;

let userAvatarBefore;


document.addEventListener("click", function (e) {
	//* Выпадашка *//
	if (e.target.closest('.header-user__visible')) {
		downDropList.classList.toggle('active');
	}
	if (!e.target.closest('.header-user')) {
		downDropList.classList.remove('active');
	}
	//* Сортировка выпадашка *//
	if (!e.target.closest('.specialist-settings__ul') && !e.target.closest('.specialist-settings__button')) {
		specialistSettingsSelectContainer.classList.remove('active');
	}
	//* Сортировка выпадашка *//
	if (e.target.closest('.modal-for-company__close')) {
		modalCompany.classList.remove('active');
	}
});


//! Искусственный select>option
specialistSettingsSelectBtn.addEventListener("click", function (e) {
	specialistSettingsSelectContainer.classList.toggle('active');
});

specialistSettingsSelectLi.forEach(el => {
	el.addEventListener("click", function (e) {
		specialistSettingsSelectContainer.classList.remove('active');
		specialistSettingsSelectBtn.innerText = this.innerText;
		specialistSettingsSelectInput.value = this.dataset.value;
		specialistSettingsSelectLi.forEach(el => {
			el.classList.remove('active');
		});
		this.classList.add('active');
	});
});


passwordSettingsChangePass.addEventListener("click", function(e) {
	passwordSettingsBody.classList.add('active');
	passwordSettingsTitle.innerHTML = 'Изменение пароля';
});

passwordSettingsCancelPass.addEventListener("click", function(e) {
	passwordSettingsBody.classList.remove('active');
	passwordSettingsTitle.innerHTML = 'Настройки пароля';
});

//! personal-settings

personalSettingsChangeBtn.addEventListener("click", function (e) {
	personalSettingsBody.classList.add('active');
	personalSettingsTitle.innerHTML = 'Изменение личной информации';
});

personalSettingsCancelBtn.addEventListener("click", function (e) {
	personalSettingsBody.classList.remove('active');
	personalSettingsTitle.innerHTML = 'Личная информация';
	userAvatar.src = userAvatarBefore;
});



//! img превью
inputAvatar.addEventListener("change", function(e) {
	let selectedFile = inputAvatar.files[0];

	//? Получаем URL изображения
	let fileURL = URL.createObjectURL(selectedFile);

	userAvatarBefore = userAvatar.src;

	userAvatar.src = fileURL;
})

//! модальное окно
sectionCompany.addEventListener("click", function(e) {
	let clickedItem = e.target.closest('.company-settings__item');
	let clickedDeleteButton = e.target.closest('.company-settings__delete');

	if (clickedDeleteButton) {
		modalCounter = companySettingsItems.indexOf(clickedItem);
		modalCompany.classList.add('active');
	}
	if (clickedItem && !clickedDeleteButton) {
		companySettingsItems.forEach(el => el.classList.remove('selected'));
		clickedItem.classList.add('selected');
	}

});

modalCompanySubmit.addEventListener("click", function(e) {
	companySettingsItems[modalCounter].remove();
	modalCompany.classList.remove('active');
});

