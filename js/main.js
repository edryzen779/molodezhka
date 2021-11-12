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
		navigation.classList.remove('active');
		toggle.classList.remove('active')
		body.classList.remove('lock-scroll');
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
		slidesToShow: 5,
		slidesToScroll: 3,
		autoplay: true,
		autoplaySpeed: 4000,
		waitForAnimate: true,
		rows: 1,
		dots: false,
		speed: 1200,
		infinite: true,
		swipeToSlide: true,
		responsive: [{
			breakpoint: 992,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 2,
				autoplay: true,
				autoplaySpeed: 3000,
				rows: 1,
			}
		}, {
			breakpoint: 585,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				autoplay: true,
				autoplaySpeed: 3000,
				arrows: true,
			}
		}]
	});
});

// ПЛАВНЫЙ СКРОЛЛ =================================

$('.header__nav-items a').on('click', function () {

	let href = $(this).attr('href');

	$('html, body').animate({
		scrollTop: $(href).offset().top
	}, {
		duration: 970,   // по умолчанию «400» 
		easing: "swing" // по умолчанию «swing» 
	});
	$(navigation).removeClass('active');
	$(toggle).removeClass('active');
	$(body).removeClass('lock-scroll');

	return false;
});


// АНИМАЦИЯ ПОЯВЛЕНИЯ =================================

const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
	window.addEventListener('scroll', animOnScroll);
	function animOnScroll() {
		for (let index=0; index < animItems.length; index++) {
			const animItem =animItems[index];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 5;

			let animItemPoint = window.innerHeight - animItemHeight / animStart;

			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}

			if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
				animItem.classList.add('_active')
			} else {
				// if (animItem.classList.contains('_anim-hide')) {
				animItem.classList.remove('_active')
				// }
			}
		}
	}
	function offset(el) {
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
	}
	animOnScroll();
}