window.onload = ()=>{
    const loader = document.getElementById('loader');
    loader.animate(
        [
            { opacity: 0 },
            { opacity: 1 }
        ],
        {
            duration: 1000,
            fill: 'forwards'
        }
    );
    loader.classList.add('loaded');
}

window.addEventListener('DOMContentLoaded', () => {
    let fadeInTarget = document.querySelectorAll('.fade');
    
    window.addEventListener('scroll', () => {
        const windowHeight = window.innerHeight; // 現在のブラウザの高さ

        for (let i = 0; i < fadeInTarget.length; i++){
            const rect = fadeInTarget[i].getBoundingClientRect().top;
            const scroll = window.pageYOffset || document.documentElement.scrollTop;
            const offset = rect + scroll;
            if (scroll > offset - windowHeight + 150) {
                fadeInTarget[i].classList.add('fadein');
            }  
        }
    });
})