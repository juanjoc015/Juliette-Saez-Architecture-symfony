function initModalGallery(gallerySelector, modalId, modalImageId) {
    console.log(`initModalGallery se ha ejecutado para ${gallerySelector}`);

    // Verificar si el elemento de la galería existe
    const galleryElement = document.querySelector(gallerySelector);
    if (!galleryElement) {
        console.warn(`No se encontró ningún elemento para el selector '${gallerySelector}'. La galería no se inicializará.`);
        return;
    }

    // Obtener elementos
    const modal = document.getElementById(modalId);
    if (!modal) {
        console.warn(`No se encontró el modal con id '${modalId}'`);
        return;
    }
    const modalImg = document.getElementById(modalImageId);
    if (!modalImg) {
        console.warn(`No se encontró la imagen del modal con id '${modalImageId}'`);
        return;
    }

    const imageLinks = galleryElement.querySelectorAll('img');
    if (imageLinks.length === 0) {
        console.warn(`No se encontraron imágenes dentro de '${gallerySelector}'`);
        return;
    }

    const closeBtn = modal.querySelector('.close');
    if (!closeBtn) {
        console.warn(`No se encontró el botón de cierre en el modal con id '${modalId}'`);
        return;
    }
    const prevBtn = modal.querySelector('.prev');
    if (!prevBtn) {
        console.warn(`No se encontró el botón 'prev' en el modal con id '${modalId}'`);
        return;
    }
    const nextBtn = modal.querySelector('.next');
    if (!nextBtn) {
        console.warn(`No se encontró el botón 'next' en el modal con id '${modalId}'`);
        return;
    }

    let currentIndex = 0;

    // Rellenar el array con las rutas de las imágenes
    const imageSources = Array.from(imageLinks).map(img => img.getAttribute('data-large-src') || img.src);

    // Añadir eventos a las imágenes
    imageLinks.forEach((img, index) => {
        img.addEventListener('click', function(e) {
            e.preventDefault();
            currentIndex = index;
            openModal(imageSources[currentIndex]);
        });
    });

    // Función para abrir el modal
    function openModal(imageSrc) {
        modal.style.display = 'block';
        modalImg.src = imageSrc;
    }

    // Función para cerrar el modal
    function closeModal() {
        modal.style.display = 'none';
    }

    // Eventos de clic
    closeBtn.addEventListener('click', closeModal);

    // Navegación entre imágenes
    prevBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        currentIndex = (currentIndex - 1 + imageSources.length) % imageSources.length;
        modalImg.src = imageSources[currentIndex];
    });

    nextBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        currentIndex = (currentIndex + 1) % imageSources.length;
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
    initModalGallery('.plans', 'plans-modal', 'plans-image');          // Galería de planos
    initModalGallery('.photos', 'photos-modal', 'photos-image');        // Galería de fotos
    initModalGallery('.bwpictures', 'bwpictures-modal', 'bwpictures-image'); // Galería de bwpictures

    // Añade aquí más inicializaciones si tienes más galerías
    initModalGallery('#sceaux .plans', 'plans-modal-sceaux', 'plans-image-sceaux'); // Galería de Sceaux
});
