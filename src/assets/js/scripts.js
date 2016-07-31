$(window).scroll(function () {
    if ($(".nav").offset().top > 50) {
        $(".nav").addClass("nav-dark");
    } else {
        $(".nav").removeClass("nav-dark");
    }
});
$(function () {
    $('a.page-scroll').bind('click', function (event) {
        var $anchor = $(this);
        $("a.page-scroll").parent().removeClass("active");
        $anchor.parent().addClass("active");

        $('html, body').stop().animate({scrollTop: $($anchor.attr('href')).offset().top-100}, 700);
        event.preventDefault();
    });
});
$('.navbar-collapse ul li a').click(function () {
    $('.navbar-toggle:visible').click();
});

