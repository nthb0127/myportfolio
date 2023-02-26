lightbox.option({
  'wrapAround': true,
  'albumLabel': ' %1 / total %2 '
})

function galleryAnime() {
  var time = 0.2;
  var value = time;
  $('.flipTrriger').each(function () {
    var parent = this;
    var elemPos = $(this).offset().top;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    var childs = $(this).children();

    if (scroll >= elemPos - windowHeight && !$(parent).hasClass("play")) {
      $(childs).each(function () {
        if (!$(this).hasClass("flip")) {
          $(parent).addClass("play");
          $(this).css("animation-delay", value + "s");
          $(this).addClass("flip");
          value = value + time;
          var index = $(childs).index(this);
          if((childs.length-1) == index){
            $(parent).removeClass("play");
          }
        }
      })
    }else {
      $(childs).removeClass("flip");
      value = time;
    }
  })
}

  $(window).scroll(function (){
    galleryAnime();
  });

  $(window).on('load', function(){
    galleryAnime();
  });
