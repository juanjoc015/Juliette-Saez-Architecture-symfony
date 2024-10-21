function initModalGallery(gallerySelector, modalId, modalImageId) {
    console.log(`initModalGallery se ha ejecutado para ${gallerySelector}`);

    // Obtener elementos
    const modal = document.getElementById(modalId);
    const modalImg = document.getElementById(modalImageId);
    const imageLinks = document.querySelectorAll(`${gallerySelector} img`); // Seleccionar imágenes de la galería
    const closeBtn = modal.querySelector('.close');
    const prevBtn = modal.querySelector('.prev');
    const nextBtn = modal.querySelector('.next');
    let currentIndex = 0;

    // Verificar si los elementos existen
    if (!modal || !modalImg || imageLinks.length === 0 || !closeBtn || !prevBtn || !nextBtn) {
        console.error(`Algunos elementos necesarios no fueron encontrados para ${gallerySelector}.`);
        return;
    }

    // Rellenar el array con las rutas de las imágenes
    const imageSources = [];
    imageLinks.forEach((img, index) => {
        const src = img.src;
        imageSources.push(src);

        img.addEventListener('click', function(e) {
            e.preventDefault();
            currentIndex = index;
            openModal(src);
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
    initModalGallery('.plans', 'plans-modal', 'plans-image'); 
    initModalGallery('.photos', 'photos-modal', 'photos-image'); 
});
