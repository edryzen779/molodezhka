// ГАЛЕРЕЯ =================================
'use strict'
$(".gallery-list").magnificPopup({
	delegate: "a",
	type: "image",
	gallery: {
		enabled: true
	}
});

// ШАПКА И БУРГЕР =================================

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
	document.querySelector('.header__nav-items').onclick = function () {
		navigation.classList.toggle('active');
		toggle.classList.toggle('active')
		body.classList.toggle('lock-scroll');
	}
}

// МЕНЮ ПОПАП =================================

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

// СЛАЙДЕР =================================

$(function () {
	$('.menu__items').slick({
		slidesToShow: 3,
		slidesToScroll: 3,
		autoplay: true,
		autoplaySpeed: 3000,
		variableWidth: true,
		rows: 2,
		dots: true,
		speed: 1200,
		infinite: true,
		responsive: [{
			breakpoint: 992,
			settings: {
				lidesToShow: 2,
				slidesToScroll: 2,
				autoplay: true,
				autoplaySpeed: 3000,
				variableWidth: true,
				dots: true,
				rows: 2,
				infinite: true,
			}
		}, {
			breakpoint: 585,
			settings: {
				centerMode: true,
				slidesToShow: 1,
				slidesToScroll: 1,
				autoplay: true,
				autoplaySpeed: 3000,
				variableWidth: false,
				arrows: false,
				dots: true,
				rows: 1,
				infinite: true
			}
		}]
	});
});

// ПЛАВНЫЙ СКРОЛЛ =================================

// $('.header__nav-items a').on('click', function() {

//     let href = $(this).attr('href');

//     $('html, body').animate({
//         scrollTop: $(href).offset().top
//     }, {
//         duration: 970,   // по умолчанию «400» 
//         easing: "swing" // по умолчанию «swing» 
//     });

//     return false;
// });

