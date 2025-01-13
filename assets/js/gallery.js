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
    let scrollPerClick = 460; 
    let isAutoScrolling = true;
    let autoScrollTimeout;
    let scrollDirection = 1; // 1 para derecha, -1 para izquierda

    // Obtener el array de imágenes
    const images = Array.from(gallery.querySelectorAll('img'));
    let currentIndex = 0; // Índice de la imagen actual (solo para pantallas pequeñas)

    function updateScrollPerClick() {
        const firstImage = images[0];
        if (!firstImage) return;

        const imageWidth = firstImage.clientWidth;
        const margin = 20;
        // Una imagen por click
        scrollPerClick = imageWidth + margin; 
    }

    updateScrollPerClick();
    window.addEventListener('resize', updateScrollPerClick);

    function resetAutoScroll() {
        clearTimeout(autoScrollTimeout);
        autoScrollTimeout = setTimeout(() => {
            isAutoScrolling = true;
        }, 2000); 
    }

    function autoScroll() {
        if (isAutoScrolling) {
            if (scrollDirection === 1) {
                scrollAmount = autoScrollGallery(gallery, scrollAmount, scrollPerClick);
            } else {
                scrollAmount = moveLeft(gallery, scrollAmount, scrollPerClick);
            }

            // Verificar límites
            if (gallery.scrollLeft >= gallery.scrollWidth - gallery.clientWidth) {
                scrollDirection = -1; 
            }

            if (gallery.scrollLeft <= 0) {
                scrollDirection = 1;
            }
        }
        requestAnimationFrame(autoScroll); 
    }

    autoScroll();

    // Funciones para pantallas pequeñas (<= 680px), para mover una imagen a la vez
    function scrollToImage(index, direction) {
        if (index < 0 || index >= images.length) return;

        const targetImage = images[index];
        if (!targetImage) return;

        // Desactivar comportamiento suave temporalmente para permitir clics rápidos
        gallery.style.scrollBehavior = 'auto';

        if (direction === 'right') {
            // Alinear la imagen para que su borde derecho coincida con el borde derecho del contenedor
            const newScrollLeft = targetImage.offsetLeft + targetImage.clientWidth - gallery.clientWidth;
            gallery.scrollLeft = Math.max(newScrollLeft, 0);
        } else if (direction === 'left') {
            // Alinear la imagen para que su borde izquierdo coincida con el borde izquierdo del contenedor
            gallery.scrollLeft = targetImage.offsetLeft;
        }

        scrollAmount = gallery.scrollLeft;

        // Restaurar el comportamiento suave
        gallery.style.scrollBehavior = 'smooth';
    }

    rightArrow.addEventListener('click', () => {
        isAutoScrolling = false;
        resetAutoScroll();

        if (window.matchMedia('(max-width: 680px)').matches) {
            // Pantallas pequeñas: avanzar una imagen a la derecha
            if (currentIndex < images.length - 1) {
                currentIndex++;
                scrollToImage(currentIndex, 'right');
            }
        } else {
            // Pantallas grandes: comportamiento original
            scrollAmount = moveRight(gallery, scrollAmount, scrollPerClick);
        }
    });

    leftArrow.addEventListener('click', () => {
        isAutoScrolling = false;
        resetAutoScroll();

        if (window.matchMedia('(max-width: 680px)').matches) {
            // Pantallas pequeñas: retroceder una imagen a la izquierda
            if (currentIndex > 0) {
                currentIndex--;
                scrollToImage(currentIndex, 'left');
            }
        } else {
            // Pantallas grandes: comportamiento original
            scrollAmount = moveLeft(gallery, scrollAmount, scrollPerClick);
        }
    });
}

// Usar 'DOMContentLoaded' para inicializar
document.addEventListener('DOMContentLoaded', initGallery);
