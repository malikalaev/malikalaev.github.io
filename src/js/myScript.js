"use strict"
$(document).ready(function () {
   $('a[href^="#"]').click(function(){ 
   let valHref = $(this).attr("href");
   $('html, body').animate({ scrollTop: $(valHref).offset().top - 60 + "px"});
   });

   $(window).scroll(() => {
      let scrollDistance = $(window).scrollTop();
      $(".section").each(function (i, el) { 
         if ($(el).offset().top - $("nav").outerHeight() <= scrollDistance){
            $("nav a").each(function (i, el) {
               if ($(el).hasClass("active")) {
                  $(el).removeClass("active");
               }
            });
            $('nav li:eq('+ i + ')').find('a').addClass("active");
         } 
      });
   });

   [].forEach.call(document.querySelectorAll('img[data-src]'),
   function(img) { img.setAttribute('src', img.getAttribute('data-src'));
    img.onload = function() { img.removeAttribute('data-src'); }; 
   });
   // первый номер 
   var number = document.querySelector('.number'),
		numberTop = number.getBoundingClientRect().top,
		start = +number.innerHTML, end = +number.dataset.max;

		window.addEventListener('scroll', function onScroll() {
			if(window.pageYOffset > numberTop - window.innerHeight / 2) {
				this.removeEventListener('scroll', onScroll);
				var interval = setInterval(function() {
					number.innerHTML = ++start;
					if(start == end) {
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
			if(window.pageYOffset > number1Top - window.innerHeight / 2) {
				this.removeEventListener('scroll', onScroll);
				var interval1 = setInterval(function() {
					number1.innerHTML = ++start1;
					if(start1 == end1) {
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
			if(window.pageYOffset > number2Top - window.innerHeight / 2) {
				this.removeEventListener('scroll', onScroll);
				var interval2 = setInterval(function() {
					number2.innerHTML = ++start2;
					if(start2 == end2) {
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
			if(window.pageYOffset > number3Top - window.innerHeight / 2) {
				this.removeEventListener('scroll', onScroll);
				var interval3 = setInterval(function() {
					number3.innerHTML = ++start3;
					if(start3 == end3) {
						clearInterval(interval3);
					}
				}, 5);
			}
		});
   $('.image-link').magnificPopup({type:'image'});

	$('.review_slider').slick({
		infinite:false,
		dots:true
	});

	// setTimeout(function() {
	// 	$('#modalOpen').click();
	// },15000);

let siteType = $('#siteType').val(),
   design =  $('#design').val(),
   adaptive =  $('#adaptive').val();

let choice = siteType + design + adaptive;
// $('#price') = text(choice);
console.log(choice);
function getCount (choice) {

if (choice == 111) {
   alert("Цена:11000 Сроки: 3 дня");
} 
else if (choice == 121) {
   alert("Цена:12000 Сроки: 7 дней");
}
else if (choice == 112) {
   alert("Цена:11000 Сроки: 9 дней");
} 
else if (choice == 122) {
   alert("Цена:11000 Сроки: 12 дней");
}
else if (choice == 211) {
   alert("Цена:11000 Сроки: 13 дней");
}
else if (choice == 221) {
   alert("Цена:11000 Сроки: 15 дней");
} 
else if (choice == 212) {
   alert("Цена:11000 Сроки: 20 дней");
}
else if (choice == 222) {
   alert("Цена:11000 Сроки: 30 дней");
}   
else {
   alert("вы ввели что-то не то");
}
}
let result = choice;

getCount(result);











});




