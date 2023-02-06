//! Искусственный select>option
const allSelect = document.querySelectorAll('.select');
allSelect.forEach(el => {
	let input = el.querySelector('.select__input');
	let allList = el.querySelectorAll('.select__li');
	let buttonText = el.querySelector('.select__span');
	let buttonPlaceholder = el.querySelector('.select__placeholder');

	el.addEventListener("click", function (e) {
		let clickedButton = e.target.closest('.select__button');
		let clickedList = e.target.closest('.select__li');

		if (clickedButton) {
			el.classList.toggle('active');
		}

		if (clickedList) {
			el.classList.remove('active');
			textForFckingSpan = clickedList.innerText;
			buttonText.innerText = textForFckingSpan;
			input.value = clickedList.dataset.value;
			allList.forEach(el => { el.classList.remove('active'); });
			clickedList.classList.add('active');
		}
	});

	if (el.dataset.type === 'default') {
		el.addEventListener("mouseover", function (e) {
			let hoveredList = e.target.closest('.select__li');
			if (hoveredList) {
				buttonPlaceholder.classList.add('active');
				buttonPlaceholder.innerText = 'Специалист по IT';
				buttonText.innerText = hoveredList.innerText;
			}
		});

		el.addEventListener("mouseout", function (e) {
			let hoverOutList = e.target.closest('.select__li');
			if (hoverOutList && !input.value) {
				buttonPlaceholder.classList.remove('active');
				buttonPlaceholder.innerText = 'Добавить специалиста по IT';
			}
			buttonText.innerText = textForFckingSpan;
		});
	}

	document.addEventListener("click", function (e) {
		if (!e.target.closest('.select__ul') && !e.target.closest('.select__button')) {
			el.classList.remove('active');
		}
	});
});