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
        $('html, body').stop().animate({scrollTop: $($anchor.attr('href')).offset().top}, 700);
        event.preventDefault();
    });
});
$('.navbar-collapse ul li a').click(function () {
    $('.navbar-toggle:visible').click();
});

