$(".gallery-list").magnificPopup({
	delegate: "a",
	type: "image",
	gallery: {
		enabled: true
	}
});

window.addEventListener("scroll", function () {
	const header = document.querySelector('header');
	header.classList.toggle('sticky', window.scrollY > 0);
});
const navigation = document.querySelector('nav');
document.querySelector('.toggle').onclick = function () {
	this.classList.toggle('active');
	navigation.classList.toggle('active');
	if ($('body').hasClass('lock-scroll')) {
		$('body').removeClass('lock-scroll');
	}
	else {
		$('body').addClass('lock-scroll');
	}
}


const btns = document.querySelectorAll('.back__btn');
const modalOverlay = document.querySelector('.back__overlay ');
const modals = document.querySelectorAll('.back__modal');

btns.forEach((el) => {
	el.addEventListener('click', (e) => {
		let path = e.currentTarget.getAttribute('data-path');

		modals.forEach((el) => {
			el.classList.remove('back__modal--visible');
		});

		document.querySelector(`[data-target="${path}"]`).classList.add('back__modal--visible');
		modalOverlay.classList.add('back__overlay--visible');
	});
});

modalOverlay.addEventListener('click', (e) => {
	console.log(e.target);

	if (e.target == modalOverlay) {
		modalOverlay.classList.remove('back__overlay--visible');
		modals.forEach((el) => {
			el.classList.remove('back__modal--visible');
		});
	}
});