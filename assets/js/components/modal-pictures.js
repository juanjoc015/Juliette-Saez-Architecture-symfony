document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal-pictures');
    const modalImg = document.getElementById('modalImage');
    const closeBtn = document.querySelector('.close');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    
    let currentIndex = 0;
    let images = [];

    // Seleccionar imágenes de la galería y asignar eventos de clic
    document.querySelectorAll('div[data-modal="pictures"] img').forEach(img => {
        
        img.addEventListener('click', (event) => {
            const parent = event.target.closest('[data-modal="pictures"]');
            if (parent) {
                // Obtenemos todas las imágenes de la galería
                images = Array.from(parent.querySelectorAll('img:not(.img-texture-design)'));
                // Calculamos el índice de la imagen clicada
                currentIndex = images.indexOf(event.target);
                openModal(currentIndex);
            }
        });
    });

    // Abre el modal con la imagen correspondiente
    function openModal(index) {
        // 1. Verificamos si la imagen clicada es un "plano"
        const isPlan = images[index].classList.contains('plan-image');
        
        // 2. Agregamos o quitamos la clase .white-bg al modal
        if (isPlan) {
            modal.classList.add('white-bg');
        } else {
            modal.classList.remove('white-bg');
        }
    
        // 3. Abrimos el modal como siempre
        modal.style.display = 'block';
    
        // 4. Definimos el src a la versión grande
        const highResSrc = images[index].getAttribute('data-fullsize-url');
        modalImg.src = highResSrc || images[index].src;
        
    }
    

    // Cierra el modal
    function closeModal() {
        modal.style.display = 'none';
    }

    // Muestra la imagen anterior
    function showPrevImage() {
        currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
        const highResSrc = images[currentIndex].getAttribute('data-fullsize-url');
        modalImg.src = highResSrc || images[currentIndex].src;
    }

    // Muestra la imagen siguiente
    function showNextImage() {
        currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
        const highResSrc = images[currentIndex].getAttribute('data-fullsize-url');
        modalImg.src = highResSrc || images[currentIndex].src;
    }

    // Eventos para cerrar y cambiar imágenes
    closeBtn.addEventListener('click', closeModal);
    prevBtn.addEventListener('click', showPrevImage);
    nextBtn.addEventListener('click', showNextImage);

    // Cerrar el modal al hacer clic fuera de la imagen
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });
});
