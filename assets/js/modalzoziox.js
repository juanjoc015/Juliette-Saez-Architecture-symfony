function initLightbox() {
    console.log('initLightbox se ha ejecutado');

    // Obtener elementos
    const modal = document.getElementById('lightbox-modal');

    if (!modal) {
        return;
    }

    const modalImg = document.getElementById('lightbox-image');
    const imageLinks = document.querySelectorAll('.gallery_zoziox a');
    const closeBtn = document.querySelector('.close');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    let currentIndex = 0;
    let largeImageSources = []; // Declarar el array aquí

    // Verificar si los elementos existen
    if (!modal || !modalImg || imageLinks.length === 0 || !closeBtn || !prevBtn || !nextBtn) {
        console.error('Algunos elementos necesarios no fueron encontrados.');
        return;
    }

    // Añadir evento de clic a cada enlace de imagen
    imageLinks.forEach((link, index) => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            // Reiniciar el array de imágenes grandes
            largeImageSources = [];

            // Obtener la imagen pequeña (src del <img>)
            const smallSrc = link.querySelector('img').getAttribute('src');

            // Obtener la imagen grande (data-large-src del <a>)
            const largeSrc = link.getAttribute('data-large-src');

            // Añadir las dos imágenes al array
            largeImageSources.push(largeSrc);
            largeImageSources.push(smallSrc);
            

            // Establecer el índice actual en 0 (imagen pequeña)
            currentIndex = 0;

            // Abrir el modal con la imagen pequeña
            openModal(largeImageSources[currentIndex]);
        });
    });

    // Función para abrir el modal
    function openModal(imageSrc) {
        modal.style.display = 'flex';
        modalImg.src = imageSrc;
    }

    // Función para cerrar el modal
    function closeModal() {
        modal.style.display = 'none';
    }

    // Eventos de clic
    closeBtn.addEventListener('click', closeModal);

    // Navegación entre imágenes (solo dos imágenes)
    prevBtn.addEventListener('click', function(e) {
        e.stopPropagation(); // Evita que el clic cierre el modal
        currentIndex = (currentIndex === 0) ? largeImageSources.length - 1 : currentIndex - 1;
        modalImg.src = largeImageSources[currentIndex];
    });

    nextBtn.addEventListener('click', function(e) {
        e.stopPropagation(); // Evita que el clic cierre el modal
        currentIndex = (currentIndex === largeImageSources.length - 1) ? 0 : currentIndex + 1;
        modalImg.src = largeImageSources[currentIndex];
    });

    // Cerrar modal al hacer clic fuera de la imagen
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
}

// Usar 'turbo:load' para inicializar con Turbo
document.addEventListener('DOMContentLoaded', initLightbox);
