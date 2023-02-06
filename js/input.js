const allInputContainers = document.querySelectorAll('.input-container');

allInputContainers.forEach(element => {
	let input = element.querySelector('input');
	let placeholder = element.querySelector('div');

	input.addEventListener('focus', function (e) {
		placeholder.classList.add('active');
	});

	input.addEventListener('blur', function (e) {
		if (!input.value) {
			placeholder.classList.remove('active');
		}
	});
})

