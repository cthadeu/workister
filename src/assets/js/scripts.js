$(window).scroll(function () {
    if ($(".nav-deal").offset().top > 50) {
        $(".nav-deal").addClass("nav-dark");
    } else {
        $(".nav-deal").removeClass("nav-dark");
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

