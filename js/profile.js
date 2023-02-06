"use strict";

const downDropList = document.querySelector('.header-user');
const downDropListHidden = document.querySelector('.header-user__hidden');
const downDropListVisible = document.querySelector('.header-user__visible');

const sectionPersonal = document.querySelector('.personal-settings');
const sectionPersonalPlaceholders = document.querySelectorAll('.placeholder');
const personalSettingsFormContainer = sectionPersonal.querySelector('.personal-settings__form-container');
const personalSettingsChangeBtn = sectionPersonal.querySelector('#changePersonalData');
const personalSettingsSubmitBtn = sectionPersonal.querySelector('#submitPersonalData');
const personalSettingsCancelBtn = sectionPersonal.querySelector('#cancelPersonalData');
const personalSettingsBody = sectionPersonal.querySelector('.personal-settings__body');
const personalSettingsTitle = sectionPersonal.querySelector('.personal-settings__title');
const inputAvatar = sectionPersonal.querySelector('#inputAvatar');
const userAvatar = sectionPersonal.querySelector('#userAvatar');

const sectionPassword = document.querySelector('.password-settings');
const sectionPasswordPlaceholders = sectionPassword.querySelectorAll('.placeholder');
const passwordSettingsFormContainer = sectionPassword.querySelector('.password-settings__form-container');
const passwordSettingsChangePass = sectionPassword.querySelector('#changePassword');
const passwordSettingsSubmitPass = sectionPassword.querySelector('#submitPassword');
const passwordSettingsCancelPass = sectionPassword.querySelector('#cancelPassword');
const passwordSettingsBody = sectionPassword.querySelector('.password-settings__body');
const passwordSettingsTitle = sectionPassword.querySelector('.password-settings__title');

const sectionCompany = document.querySelector('.company-settings');
const companySettingsItems = Array.from(document.querySelectorAll('.company-settings__item'));

const deleteModalCompany = document.querySelector('.modal-for-delete');
const deleteModalCompanySubmit = document.querySelector('.modal-for-delete__submit-button');
const editModalCompany = document.querySelector('.modal-for-edit');
const editModalCompanySubmit = document.querySelector('.modal-for-edit__submit-button');
let modalCounter;
let userAvatarBefore = userAvatar.src;
let textForFckingSpan = ''; //? Эта переменная нужна, чтобы при отведении курсора от option (li), в selection (button) текст не менялся на наведенный option (li)

//! Общие проверки
document.addEventListener("click", function (e) {
	//* Выпадашка *//
	if (e.target.closest('.header-user__visible')) {
		downDropList.classList.toggle('active');
	}
	if (!e.target.closest('.header-user')) {
		downDropList.classList.remove('active');
	}
	//* Модалка *//
	if (e.target.closest('.modal-for-delete__close')) {
		deleteModalCompany.classList.remove('active');
	}
	//* Модалка *//
	if (e.target.closest('.modal-for-edit__close')) {
		editModalCompany.classList.remove('active');
	}
});

//! password-settings
passwordSettingsChangePass.addEventListener("click", function(e) {
	passwordSettingsBody.classList.add('active');
	passwordSettingsTitle.innerHTML = 'Изменение пароля';
});
passwordSettingsCancelPass.addEventListener("click", function(e) {
	passwordSettingsBody.classList.remove('active');
	passwordSettingsTitle.innerHTML = 'Настройки пароля';
	sectionPasswordPlaceholders.forEach(el => { el.classList.remove('active') }); //? Возвращаем placeholder в изначальное положение
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
	sectionPersonalPlaceholders.forEach(el => { el.classList.remove('active') }); //? Возвращаем placeholder в изначальное положение
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
	let clickedEditButton = e.target.closest('.company-settings__edit');

	if (clickedItem && !clickedDeleteButton && !clickedEditButton) {
		companySettingsItems.forEach(el => el.classList.remove('selected'));
		clickedItem.classList.add('selected');
	}

	if (clickedDeleteButton) {
		modalCounter = companySettingsItems.indexOf(clickedItem);
		deleteModalCompany.classList.add('active');
		editModalCompany.classList.remove('active');
	}

	if (clickedEditButton) {
		modalCounter = companySettingsItems.indexOf(clickedItem);
		editModalCompany.classList.add('active');
		deleteModalCompany.classList.remove('active');
	}
});

deleteModalCompanySubmit.addEventListener("click", function(e) {
	companySettingsItems[modalCounter].remove();
	deleteModalCompany.classList.remove('active');
});
editModalCompanySubmit.addEventListener("click", function(e) {
	//хз че писать
});

