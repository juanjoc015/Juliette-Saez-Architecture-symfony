import { autoScrollGallery, moveRight, moveLeft } from './scroll.js';

function initGallery() {
    const gallery = document.getElementById('gallery');
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');

    if (!gallery || !leftArrow || !rightArrow) {
        console.error("Algunos elementos de la galería no fueron encontrados.");
        return;
    }

    let scrollAmount = 0;
    const scrollPerClick = 460; // Controla cuánto se desplaza con cada clic
    let isAutoScrolling = true;
    let autoScrollTimeout;
    let scrollDirection = 1; // 1 para derecha, -1 para izquierda

    function resetAutoScroll() {
        clearTimeout(autoScrollTimeout);
        autoScrollTimeout = setTimeout(() => {
            isAutoScrolling = true;
        }, 2000); // Espera 1 segundo antes de reactivar el auto-scroll
    }

    rightArrow.addEventListener('click', () => {
        scrollAmount = moveRight(gallery, scrollAmount, scrollPerClick);
        isAutoScrolling = false;
        resetAutoScroll();
    });

    leftArrow.addEventListener('click', () => {
        scrollAmount = moveLeft(gallery, scrollAmount, scrollPerClick);
        isAutoScrolling = false;
        resetAutoScroll();
    });

    function autoScroll() {
        if (isAutoScrolling) {
            if (scrollDirection === 1) {
                scrollAmount = autoScrollGallery(gallery, scrollAmount, scrollPerClick);
            } else {
                scrollAmount = moveLeft(gallery, scrollAmount, scrollPerClick);
            }

            // Verificar si llegamos al final de la galería (derecha)
            if (gallery.scrollLeft >= gallery.scrollWidth - gallery.clientWidth) {
                scrollDirection = -1; // Cambiamos la dirección a izquierda
            }

            // Verificar si llegamos al principio de la galería (izquierda)
            if (gallery.scrollLeft <= 0) {
                scrollDirection = 1; // Cambiamos la dirección a derecha
            }
        }
        requestAnimationFrame(autoScroll); // Llamamos nuevamente a la función
    }

    autoScroll();
}

// Usar 'turbo:load' para inicializar con Turbo
document.addEventListener('turbo:load', initGallery);