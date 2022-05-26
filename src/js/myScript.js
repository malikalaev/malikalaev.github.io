"use strict"
$(document).ready(function () {
	$('a[href^="#"]').click(function () {
		let valHref = $(this).attr("href");
		$('html, body').animate({ scrollTop: $(valHref).offset().top - 60 + "px" });
	});

	$(window).scroll(() => {
		let scrollDistance = $(window).scrollTop();
		$(".section").each(function (i, el) {
			if ($(el).offset().top - $("nav").outerHeight() <= scrollDistance) {
				$("nav a").each(function (i, el) {
					if ($(el).hasClass("active")) {
						$(el).removeClass("active");
					}
				});
				$('nav li:eq(' + i + ')').find('a').addClass("active");
			}
		});
	});

	[].forEach.call(document.querySelectorAll('img[data-src]'),
		function (img) {
			img.setAttribute('src', img.getAttribute('data-src'));
			img.onload = function () { img.removeAttribute('data-src'); };
		});
	// первый номер 
	var number = document.querySelector('.number'),
		numberTop = number.getBoundingClientRect().top,
		start = +number.innerHTML, end = +number.dataset.max;

	window.addEventListener('scroll', function onScroll() {
		if (window.pageYOffset > numberTop - window.innerHeight / 2) {
			this.removeEventListener('scroll', onScroll);
			var interval = setInterval(function () {
				number.innerHTML = ++start;
				if (start == end) {
					clearInterval(interval);
				}
			}, 5);
		}
	});
	// второй номер
	var number1 = document.querySelector('.number1'),
		number1Top = number1.getBoundingClientRect().top,
		start1 = +number1.innerHTML, end1 = +number1.dataset.max;

	window.addEventListener('scroll', function onScroll() {
		if (window.pageYOffset > number1Top - window.innerHeight / 2) {
			this.removeEventListener('scroll', onScroll);
			var interval1 = setInterval(function () {
				number1.innerHTML = ++start1;
				if (start1 == end1) {
					clearInterval(interval1);
				}
			}, 5);
		}
	});
	// третий номер 
	var number2 = document.querySelector('.number2'),
		number2Top = number2.getBoundingClientRect().top,
		start2 = +number2.innerHTML, end2 = +number2.dataset.max;

	window.addEventListener('scroll', function onScroll() {
		if (window.pageYOffset > number2Top - window.innerHeight / 2) {
			this.removeEventListener('scroll', onScroll);
			var interval2 = setInterval(function () {
				number2.innerHTML = ++start2;
				if (start2 == end2) {
					clearInterval(interval2);
				}
			}, 5);
		}
	});
	// четвертый номер 
	var number3 = document.querySelector('.number3'),
		number3Top = number3.getBoundingClientRect().top,
		start3 = +number3.innerHTML, end3 = +number3.dataset.max;

	window.addEventListener('scroll', function onScroll() {
		if (window.pageYOffset > number3Top - window.innerHeight / 2) {
			this.removeEventListener('scroll', onScroll);
			var interval3 = setInterval(function () {
				number3.innerHTML = ++start3;
				if (start3 == end3) {
					clearInterval(interval3);
				}
			}, 5);
		}
	});
	$('.image-link').magnificPopup({ type: 'image' });

	$('.review_slider').slick({
		infinite: false,
		dots: true
	});

	setTimeout(function () {
		$('#modalOpen').click();
	}, 19000);
	// калькулятор
	$('#buttonApplications').click(function () {
		let siteType = $('#siteType').val(),
			design = $('#design').val(),
			adaptive = $('#adaptive').val();

		let siteTypeNum = parseInt(siteType, 10),
			designNum = parseInt(design, 10),
			adaptiveNum = parseInt(adaptive, 10)

		let choice = siteTypeNum + designNum + adaptiveNum;
		$('#price').text(choice);

		function getCount(choice) {
			if (choice = 0) {
				$('#terms').text(0);
			}
			else if (choice < 2000) {
				$('#terms').text(12);
			}
			else if (choice < 5000) {
				$('#terms').text(16);
			}
			else if (choice < 8000) {
				$('#terms').text(18);
			}
			else if (choice < 10000) {
				$('#terms').text(22);
			}
			else if (choice < 15000) {
				$('#terms').text(31);
			}
			else {
				$('#terms').text(36);
			};
		}
		let result = choice;

		getCount(result);
	});
	new WOW().init();


	function logoAnimation() {
		let options = { threshold: [1] };
		let observer = new IntersectionObserver(onEntry, options);
		let elements = $('.logo');
		elements.each((i, el) => {
			observer.observe(el);
		});
		function onEntry(entry) {
			entry.forEach(change => {
				if (change.isIntersecting) {
					change.target.classList.add('logo-animation');
				}
			});
		};
	};

	function menuLiAnimation() {
		let options = { threshold: [1] };
		let observer = new IntersectionObserver(onEntry, options);
		let elements = $('.menu');
		elements.each((i, el) => {
			observer.observe(el);
		});
		function onEntry(entry) {
			entry.forEach(change => {
				if (change.isIntersecting) {
					change.target.classList.add('menu-li-animation');
				}
			});
		};

	};
	function titleContainerAnimation() {
		let options = { threshold: [1] };
		let observer = new IntersectionObserver(onEntry, options);
		let elements = $('.title_container');
		elements.each((i, el) => {
			observer.observe(el);
		});
		function onEntry(entry) {
			entry.forEach(change => {
				if (change.isIntersecting) {
					change.target.classList.add('title_container-animationation');
				}
			});
		};

	};

	logoAnimation();
	menuLiAnimation();
	titleContainerAnimation();
});




