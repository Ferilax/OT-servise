const downDropList = document.querySelector('.header-user');

document.addEventListener("click", function (e) {
	//* Выпадашка *//
	if (e.target.closest('.header-user__visible')) {
		downDropList.classList.toggle('active');
	}
	if (!e.target.closest('.header-user')) {
		downDropList.classList.remove('active');
	}
});
