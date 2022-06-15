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
});