window.onscroll = function() {
    const navbar = document.querySelector('.navbar');
    const header = document.querySelector('.header');

    if (window.scrollY > (header.offsetHeight - 50)) {
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('navbar-scrolled');
    }

};

document.addEventListener('DOMContentLoaded', function() {
    const swiper = new Swiper(".mySwiper", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        watchSlidesProgress: true, // Vital para que los puntos sepan dónde está la slide
        updateOnWindowResize: true,
        
        coverflowEffect: {
            rotate: 35,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        },

        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            dynamicBullets: true,
            dynamicMainBullets: 3,
        },

        navigation: {
            nextEl: ".acciones-section .swiper-button-next",
            prevEl: ".acciones-section .swiper-button-prev",
        },
        
        // ESTO FUERZA LA SINCRONIZACIÓN CADA VEZ QUE SE MUEVE
        on: {
            slideChange: function () {
                this.pagination.update();
            },
        }
    });
});