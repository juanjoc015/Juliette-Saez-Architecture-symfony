// Archivo: afppcd-galleries.js

document.addEventListener('turbo:load', function() {
    // --- Galería 1: afppcd ---
    (function() {
        // Seleccionar todas las imágenes con clase 'svg-gallery' dentro de '#afppcd'
        const galleryImages = document.querySelectorAll('#afppcd img.svg-gallery');
        
        // Seleccionar el modal existente
        const modal = document.getElementById('afppcd-modal');
        
        // Verificar si existen imágenes y el modal
        if (galleryImages.length === 0 || !modal) {
            return; // No hay nada que hacer
        }
        
        const modalImg = document.getElementById('afppcd-modal-image');
        const closeBtn = modal.querySelector('.afppcd-close');
        const prevBtn = modal.querySelector('.afppcd-prev');
        const nextBtn = modal.querySelector('.afppcd-next');
        
        // Obtener las fuentes de las imágenes SVG
        const imageSources = Array.from(galleryImages).map(img => img.getAttribute('data-large-src') || img.src);
        let currentIndex = 0;
        
        function openAfppcdModal(index) {
            currentIndex = index;
            modal.classList.remove('hidden'); // Mostrar el modal
            modalImg.src = imageSources[currentIndex];
        }
        
        // Función para cerrar el modal
        function closeAfppcdModal() {
            modal.classList.add('hidden'); // Ocultar el modal
        }
        
        // Eliminar posibles listeners previos para evitar duplicados
        galleryImages.forEach((img) => {
            if (img.afppcdClickListener) {
                img.removeEventListener('click', img.afppcdClickListener);
            }
        });
        
        // Añadir eventos de clic a las imágenes SVG
        galleryImages.forEach((img, index) => {
            img.afppcdClickListener = function() {
                openAfppcdModal(index);
            };
            img.addEventListener('click', img.afppcdClickListener);
        });
        
        // Eventos para los controles del modal
        closeBtn.addEventListener('click', closeAfppcdModal);
        
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
        
        // Cerrar el modal al hacer clic fuera de la imagen
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeAfppcdModal();
            }
        });
    })();

    // --- Galería 2: photos_bureauII ---
    (function() {
        // Seleccionar todas las imágenes dentro de '.photos' en '#photos_bureauII'
        const galleryImages = document.querySelectorAll('#photos_bureauII .photos img');
        
        // Seleccionar el modal existente
        const modal = document.getElementById('photos-bureauII-modal');
        
        // Verificar si existen imágenes y el modal
        if (galleryImages.length === 0 || !modal) {
            return; // No hay nada que hacer
        }
        
        const modalImg = document.getElementById('photos-bureauII-modal-image');
        const closeBtn = modal.querySelector('.photos-bureauII-close');
        const prevBtn = modal.querySelector('.photos-bureauII-prev');
        const nextBtn = modal.querySelector('.photos-bureauII-next');
        
        // Obtener las fuentes de las imágenes
        const imageSources = Array.from(galleryImages).map(img => img.getAttribute('data-large-src') || img.src);
        let currentIndex = 0;
        
        // Función para abrir el modal
        function openPhotosBureauIIModal(index) {
            currentIndex = index;
            modal.style.display = 'block';
            modalImg.src = imageSources[currentIndex];
        }
        
        // Función para cerrar el modal
        function closePhotosBureauIIModal() {
            modal.style.display = 'none';
        }
        
        // Eliminar posibles listeners previos para evitar duplicados
        galleryImages.forEach((img) => {
            if (img.photosBureauIIClickListener) {
                img.removeEventListener('click', img.photosBureauIIClickListener);
            }
        });
        
        // Añadir eventos de clic a las imágenes
        galleryImages.forEach((img, index) => {
            img.photosBureauIIClickListener = function() {
                openPhotosBureauIIModal(index);
            };
            img.addEventListener('click', img.photosBureauIIClickListener);
        });
        
        // Eventos para los controles del modal
        closeBtn.addEventListener('click', closePhotosBureauIIModal);
        
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
        
        // Cerrar el modal al hacer clic fuera de la imagen
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closePhotosBureauIIModal();
            }
        });
    })();
});
