"use strict";

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
	if (clicked) {
		companySettingsItems.forEach(el => el.classList.remove('selected'));
		clicked.classList.add('selected');
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