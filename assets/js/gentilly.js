// Archivo: gentilly-modal.js

function initModalGallery(gallerySelector, modalId, modalImageId) {
    const modal = document.getElementById(modalId);

    if (!modal) {
        return;
    }

    const modalImg = document.getElementById(modalImageId);
    const imageLinks = document.querySelectorAll(`${gallerySelector} img`); // Seleccionar imágenes de la galería
    const closeBtn = modal.querySelector('.close-gentilly');
    const prevBtn = modal.querySelector('.prev-gentilly');
    const nextBtn = modal.querySelector('.next-gentilly');
    let currentIndex = 0;

    // Verificar si los elementos existen
    if (!modal || !modalImg || imageLinks.length === 0 || !closeBtn || !prevBtn || !nextBtn) {
        console.error(`Algunos elementos necesarios no fueron encontrados para ${gallerySelector}.`);
        return;
    }

    // Rellenar el array con las rutas de las imágenes
    const imageSources = Array.from(imageLinks).map(img => img.getAttribute('data-large-src') || img.src);

    // Añadir eventos de clic a las imágenes
    imageLinks.forEach((img, index) => {
        img.addEventListener('click', function(e) {
            e.preventDefault();
            currentIndex = index;
            openModal(imageSources[currentIndex]);
        });
    });

    // Función para abrir el modal
    function openModal(imageSrc) {
        modal.classList.add('active'); // Añadimos la clase 'active' para mostrar el modal
        modalImg.src = imageSrc;
    }

    // Función para cerrar el modal
    function closeModal() {
        modal.classList.remove('active'); // Removemos la clase 'active' para ocultar el modal
    }

    // Eventos de clic
    closeBtn.addEventListener('click', closeModal);

    // Navegación entre imágenes
    prevBtn.addEventListener('click', function(e) {
        e.stopPropagation(); // Evita que el clic cierre el modal
        currentIndex = (currentIndex === 0) ? imageSources.length - 1 : currentIndex - 1;
        modalImg.src = imageSources[currentIndex];
    });

    nextBtn.addEventListener('click', function(e) {
        e.stopPropagation(); // Evita que el clic cierre el modal
        currentIndex = (currentIndex === imageSources.length - 1) ? 0 : currentIndex + 1;
        modalImg.src = imageSources[currentIndex];
    });

    // Cerrar modal al hacer clic fuera de la imagen
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
}

// Inicializar los modales para las galerías existentes
document.addEventListener('turbo:load', function() {
    initModalGallery('.plans-gentilly', 'plans-modal-gentilly', 'plans-image-gentilly');
});
