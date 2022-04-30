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
               if ($(el).hasClass(".active")) {
                  $(el).removeClass(".active");
               }
            });
            $('nav li:eq('+ i + ')').find('a').addClass(".active");
         } 
      });
   });

});








// let siteType = prompt ("1 - сайт-визитка, 2 - интернет-магазин"),
//    design = prompt ("1 - резиновый, 2 - адаптивный"),
//    adaptive = prompt ("1 - простенький, 2 - классный");

// let choice = siteType + design + adaptive;
// function getCount (choice) {

// if (choice == 111) {
//    alert("Цена:11000 Сроки: 3 дня");
// } 
// else if (choice == 121) {
//    alert("Цена:12000 Сроки: 7 дней");
// }
// else if (choice == 112) {
//    alert("Цена:11000 Сроки: 9 дней");
// } 
// else if (choice == 122) {
//    alert("Цена:11000 Сроки: 12 дней");
// }
// else if (choice == 211) {
//    alert("Цена:11000 Сроки: 13 дней");
// }
// else if (choice == 221) {
//    alert("Цена:11000 Сроки: 15 дней");
// } 
// else if (choice == 212) {
//    alert("Цена:11000 Сроки: 20 дней");
// }
// else if (choice == 222) {
//    alert("Цена:11000 Сроки: 30 дней");
// }   
// else {
//    alert("вы ввели что-то не то");
// }
// }

// let result = choice;

// getCount(result);
