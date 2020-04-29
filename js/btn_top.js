$(window).on('scroll', function(){
    var scrollPos = $(window).scrollTop();

    if(scrollPos >= 400) {
        $('#btnTop').fadeIn();
    }else {
        $('#btnTop').fadeOut();
    }

    console.log(scrollPos);
});

$('#btnTop').on('click', function(){
    $('html, body').animate({
        scrollTop : 0
    }, 400);
    $(this).blur();
});

$(window).scroll();