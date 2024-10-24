// Archivo: sareelight-modal.js

document.addEventListener('DOMContentLoaded', function() {

    // Función general para inicializar un modal
    function initModal({
        modalId,
        imageSelector,
        modalImageId,
        closeBtnClass,
        prevBtnClass,
        nextBtnClass,
        specialImageClass,
        applySpecialClassCondition
    }) {
        // Seleccionar las imágenes
        const galleryImages = document.querySelectorAll(imageSelector);
        const imagesToShow = Array.from(galleryImages);

        // Seleccionar el modal existente
        let modal = document.getElementById(modalId);

        // Verificar si existen imágenes y el modal
        if (imagesToShow.length === 0 || !modal) {
            return; // No hay nada que hacer
        }

        const modalImg = document.getElementById(modalImageId);
        const closeBtn = modal.querySelector(`.${closeBtnClass}`);
        const prevBtn = modal.querySelector(`.${prevBtnClass}`);
        const nextBtn = modal.querySelector(`.${nextBtnClass}`);

        // Obtener las fuentes de las imágenes
        const imageSources = imagesToShow.map(img => img.getAttribute('data-large-src') || img.src);
        let currentIndex = 0;

        // Función para abrir el modal
        function openModal(index) {
            currentIndex = index;
            modal.classList.add('active');
            modalImg.src = imageSources[currentIndex];

            // Aplicar clase especial si es necesario
            if (specialImageClass && applySpecialClassCondition(currentIndex)) {
                modalImg.classList.add(specialImageClass);
            } else if (specialImageClass) {
                modalImg.classList.remove(specialImageClass);
            }
        }

        // Función para cerrar el modal
        function closeModal() {
            modal.classList.remove('active');
        }

        // Añadir eventos de clic a las imágenes
        imagesToShow.forEach((img, index) => {
            img.addEventListener('click', function() {
                openModal(index);
            });
        });

        // Eventos para los controles del modal
        if (closeBtn) {
            closeBtn.addEventListener('click', closeModal);
        }

        if (prevBtn && nextBtn) {
            prevBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                currentIndex = (currentIndex - 1 + imageSources.length) % imageSources.length;
                modalImg.src = imageSources[currentIndex];

                if (specialImageClass && applySpecialClassCondition(currentIndex)) {
                    modalImg.classList.add(specialImageClass);
                } else if (specialImageClass) {
                    modalImg.classList.remove(specialImageClass);
                }
            });

            nextBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                currentIndex = (currentIndex + 1) % imageSources.length;
                modalImg.src = imageSources[currentIndex];

                if (specialImageClass && applySpecialClassCondition(currentIndex)) {
                    modalImg.classList.add(specialImageClass);
                } else if (specialImageClass) {
                    modalImg.classList.remove(specialImageClass);
                }
            });
        }

        // Cerrar el modal al hacer clic fuera de la imagen
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeModal();
            }
        });
    }

    // Inicializar el modal para la galería de sareeslight (primeras cuatro imágenes)
    initModal({
        modalId: 'sareelight-modal',
        imageSelector: '#sareeslight .row1-sareeslight img, #sareeslight .row2-sareeslight img',
        modalImageId: 'sareelight-modal-image',
        closeBtnClass: 'sareelight-close',
        prevBtnClass: 'sareelight-prev',
        nextBtnClass: 'sareelight-next',
        specialImageClass: 'small-image',
        applySpecialClassCondition: function(index) {
            return index >= 2; // Aplicar la clase 'small-image' a las imágenes con índice 2 y 3
        }
    });

    // Inicializar el modal para la galería de row3-sareeslight
    initModal({
        modalId: 'row3-sareeslight-modal',
        imageSelector: '#sareeslight .row3-sareeslight img',
        modalImageId: 'row3-sareelight-modal-image',
        closeBtnClass: 'row3-sareelight-close',
        prevBtnClass: 'row3-sareelight-prev',
        nextBtnClass: 'row3-sareelight-next'
    });

    // Inicializar el modal para la galería de row4-sareeslight
    initModal({
        modalId: 'row4-sareeslight-modal',
        imageSelector: '#sareeslight .row4-sareeslight img',
        modalImageId: 'row4-sareelight-modal-image',
        closeBtnClass: 'row4-sareelight-close',
        prevBtnClass: 'row4-sareelight-prev',
        nextBtnClass: 'row4-sareelight-next'
    });

    // Inicializar el modal para la imagen de row5-sareeslight
    (function() {
        // Seleccionar la imagen dentro de '.row5-sareeslight'
        const galleryImage = document.querySelector('#sareeslight .row5-sareeslight img');

        const modalId = 'row5-sareeslight-modal';
        let modal = document.getElementById(modalId);

        if (!galleryImage || !modal) {
            return; // No hay nada que hacer
        }

        const modalImg = document.getElementById('row5-sareelight-modal-image');
        const closeBtn = modal.querySelector('.row5-sareelight-close');

        const imageSource = galleryImage.getAttribute('data-large-src') || galleryImage.src;

        // Función para abrir el modal
        function openModal() {
            modal.classList.add('active');
            modalImg.src = imageSource;
        }

        // Función para cerrar el modal
        function closeModal() {
            modal.classList.remove('active');
        }

        // Añadir evento de clic a la imagen
        galleryImage.addEventListener('click', openModal);

        // Evento para el botón de cerrar
        if (closeBtn) {
            closeBtn.addEventListener('click', closeModal);
        }

        // Cerrar el modal al hacer clic fuera de la imagen
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeModal();
            }
        });
    })();
});
