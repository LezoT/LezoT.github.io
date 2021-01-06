// Check to see if the window is top if not then display button
$(window).scroll(function () {
    if ($(this).scrollTop() > 400) {
        $('.scrolltotop').fadeIn();
    } else {
        $('.scrolltotop').fadeOut();
    }
});