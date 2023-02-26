window.onload = function () {
    $('body').css('position','fixed');
    $('#loading-logo').delay(1200).fadeOut('slow');
    $('#loading').delay(1500).fadeOut('slow',function(){
        $('body').addClass('appear');
        $('html,body').animate({ scrollTop: 0 }, '1');
    });
    $('.loadbg').on('animationend', function() {
        $('.modal').fadeIn();
    });
}

$('.close').on('click',function(){
    $('.modal').fadeOut();
    $('body').css('position','');
    $('.title_pic').addClass('title_animation');
});