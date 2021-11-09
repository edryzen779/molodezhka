$(".gallery-list").magnificPopup({
	delegate: "a",
	type: "image",
	gallery: {
		enabled: true
	}
});

const header = document.querySelector('header');
const body = document.querySelector('body');
const navigation = document.querySelector('nav');
const toggle = document.querySelector('.toggle');


window.addEventListener("scroll", function () {
	header.classList.toggle('sticky', window.scrollY > 0);
});

document.querySelector('.toggle').onclick = function () {
	this.classList.toggle('active');
	body.classList.toggle('lock-scroll');
	navigation.classList.toggle('active');
	header.classList.add('sticky');

	// if ($('body').hasClass('lock-scroll')) {
	// 	$('body').removeClass('lock-scroll');
	// }
	// else {
	// 	$('body').addClass('lock-scroll');
	// };
	document.querySelector('.header__nav-items').onclick = function () {
		navigation.classList.toggle('active');
		toggle.classList.toggle('active')
		body.classList.toggle('lock-scroll');
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


$(document).ready(function () {
	if ($(window).width() > 992) {
		$('.menu__items').slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 3000,
			variableWidth: true,
			rows: 2,
			dots: true,
			infinite: true
		}
		)
	}
	else if ($(window).width() > 590) {
		$('.menu__items').slick({
			slidesToShow: 2,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 3000,
			variableWidth: true,
			dots: true,
			rows: 2,
			infinite: true
		})
	}
	else if ($(window).width() < 590){
		$('.menu__items').slick({
			centerMode: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 3000,
			variableWidth: true,
			dots: true,
			rows: 4,
			infinite: true
		})
	}
});

// $(window).resize(function () {
// 	if (window.width() < 768) {
// 		$('.menu__items').slick({
// 			slidesToShow: 3,
// 			slidesToScroll: 1,
// 			autoplay: true,
// 			autoplaySpeed: 3000,
// 			variableWidth: true,
// 			rows: 3,
// 			speed: 500
// 		})
// 	}
// 	else {
// 		//You probably want to do something here...
// 	}
// });