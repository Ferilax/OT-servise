"use strict";
/*
new Swiper('.swiper1', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
		  dynamicBullets: true,
    },

    mousewheel: {
        sensitivity: 1,
        eventsTarget: ".swiper1"
    },
});
*/

const loginForm = document.forms.login,
		registerForm = document.forms.register,
		sectionAuthorization = document.querySelector('.authorization'),
		allInputContainers = sectionAuthorization.querySelectorAll('.authorization__input'),
		allInput = sectionAuthorization.querySelectorAll('input'),
		loginButton = sectionAuthorization.querySelector('.authorization__login'),
		registerButton = sectionAuthorization.querySelector('.authorization__register'),
		inputPasswordL = loginForm.password,
		inputPasswordR = registerForm.password,
		inputEmailL = loginForm.email,
		inputEmailR = registerForm.email,
		inputFioR = registerForm.fio


allInputContainers.forEach(element => {
	let input = element.querySelector('input');
	let placeholder = element.querySelector('.authorization__placeholder');

	input.addEventListener('focus', function (e) {
		placeholder.classList.add('active');
	});

	input.addEventListener('blur', function (e) {
		if (!input.value) {
			placeholder.classList.remove('active');
		}
	});
})

registerForm.style.display = 'none';
document.addEventListener("click", function(e) {
	if (e.target.closest('.authorization__login')) {
		swapToLogin(true)
	}
	if (e.target.closest('.authorization__register')) {
		swapToRegister()
	}
});

function swapToLogin(boolean) {
	if (boolean) {
		loginButton.classList.add('active');
		registerButton.classList.remove('active');
		registerForm.style.display = 'none';
		loginForm.style.display = 'block';
	}
}
function swapToRegister() {
	registerButton.classList.add('active');
	loginButton.classList.remove('active');
	loginForm.style.display = 'none';
	registerForm.style.display = 'block';
}


class Validator {
	value;
	errorMessage;
	htmlElement
	hasError = false;

	constructor(value, errorMessage, htmlElement) {
		this.value = String(value);
		this.errorMessage = errorMessage;
		this.htmlElement = htmlElement;
	}
	
	isLength(min, max) {
		if (min && this.value.length < min) {
			this.hasError = true;
		}
		if (this.value.length > max) {
			this.hasError = true;
		}
		return this;
	}

	containsLetters(needLetter) {
		let blyatKakNazvat = 0;
		for (let letter in this.value) {
			if (this.value[letter] === this.value[letter].toUpperCase()) {
				blyatKakNazvat++;
			}
		}
		if (blyatKakNazvat < needLetter) {
			this.hasError = true;
		}
		return this;
	}

	containsNumbers(count) {
		let krutayaPeremennaya = 0;
		for (let number in this.value) {
			if (!isNaN(+this.value[number])) {
				krutayaPeremennaya++;
			}
		}
		if (krutayaPeremennaya < count) {
			this.hasError = true;
		}
		return this;
	}

	errorEvent(arg) {
		if (this.htmlElement.parentElement.previousElementSibling && this.htmlElement.parentElement.previousElementSibling.classList.contains('authorization__error')) {
			this.htmlElement.parentElement.previousElementSibling.remove();
		}
		if (this.hasError) {
			this.htmlElement.parentElement.insertAdjacentHTML(
				"beforebegin",
				`<div class="authorization__error">${this.errorMessage}</div>`
			);
			this.htmlElement.style.border = '0.1rem solid red';
			arg();
		}
		this.htmlElement.addEventListener("focus", function(e) {
			this.style.border = 'none';
		});
		return this;
	}
}

let kostilDlyaSwapToLogin = false;


registerForm.addEventListener("submit", function (e) {
	const FioRegisterValidator = new Validator(inputFioR.value, 'ФИО должно содержать от 3 символов ', inputFioR);
	FioRegisterValidator
	.isLength(3)
	.errorEvent(dontSubmit);
	
	const emailRegisterValidator = new Validator(inputEmailR.value, 'Ошибка валидации', inputEmailR);
	emailRegisterValidator
	.isLength(3, 20)
	.errorEvent(dontSubmit)

	const passwordRegisterValidator = new Validator(inputPasswordR.value, 'Пароль должен содержать не менее 8 символов разного регистра включая 1 цифру', inputPasswordR);
	passwordRegisterValidator
	.isLength(3, 20)
	.containsLetters(1)
	.containsNumbers(3)
	.errorEvent(dontSubmit);


	function dontSubmit() {
		e.preventDefault()
		kostilDlyaSwapToLogin = false;
	}
	//location.href='home.html'
	swapToLogin(kostilDlyaSwapToLogin);

});

loginForm.addEventListener("submit", function(e) {
	location.href = 'home.html';
})

