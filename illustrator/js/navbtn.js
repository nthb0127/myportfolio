$(".openbtn").click(function () {
  $(this).toggleClass('active');
    $("nav").toggleClass('panelactive');
});

$("nav a").click(function () {
    $(".openbtn").removeClass('active');
    $("nav").removeClass('panelactive');
});
