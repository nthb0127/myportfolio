// const mySwiper = new Swiper('.card01 .swiper', {
//     slidesPerView: 1,
//     spaceBetween: 24,
//     grabCursor: true,
//     pagination: {
//         el: '.card01 .swiper-pagination',
//         clickable: true,
//     },
//     navigation: {
//         nextEl: '.card01 .swiper-button-next',
//         prevEl: '.card01 .swiper-button-prev',
//     },
//     breakpoints: {
//         600: {
//             slidesPerView: 2,
//         },
//         1025: {
//             slidesPerView: 4,
//             spaceBetween: 32,
//         }
//     },
// });

const swiper = new Swiper('.swiper', {
    effect: 'coverflow',
    speed: 1200,
    mousewheel: true,
    keyboard: true,
    loop: true,
    parallax: true,
    pagination: {
        el:".swiper-pagination",
        type:"bullets",
        clickable:true,
    }
});