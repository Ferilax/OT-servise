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

const downDropList = document.querySelector('.header-user');
const downDropListHidden = document.querySelector('.header-user__hidden');
const downDropListVisible = document.querySelector('.header-user__visible');

document.addEventListener("click", function(e) {
	if (e.target.closest('.header-user__visible')) {
		downDropList.classList.toggle('active');
	}
	if (!e.target.closest('.header-user')) {
		downDropList.classList.remove('active');
	}
	if (!e.target.closest('.user-profile__ul') && !e.target.closest('.user-profile__button')) {
		userCompanySelectUl.classList.remove('active');
	}
});


//! Искусственный select>option
const userCompanySelectContainer = document.querySelector('.user-profile__select-container');
const userCompanySelectBtn = document.querySelector('.user-profile__button');
const userCompanySelectUl = document.querySelector('.user-profile__ul');
const userCompanySelectLi = document.querySelectorAll('.user-profile__li');
const userCompanySelectInput = document.querySelectorAll('.user-profile__input');

userCompanySelectBtn.addEventListener("click", function(e) {
	userCompanySelectUl.classList.toggle('active');
});

userCompanySelectLi.forEach(el => {
	el.addEventListener("click", function(e) {
		userCompanySelectUl.classList.remove('active');
		userCompanySelectBtn.innerText = this.innerText;
		userCompanySelectInput.value = this.dataset.value;
		console.log(userCompanySelectInput.value);
		userCompanySelectLi.forEach(el => {
			el.classList.remove('active')
		});
		this.classList.add('active');
	});
});


