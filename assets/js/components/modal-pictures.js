document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal-pictures');
    const modalImg = document.getElementById('modalImage');
    const closeBtn = document.querySelector('.close');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    let currentIndex = 0;
    let images = [];

    document.querySelectorAll('img').forEach(img => {
        img.addEventListener('click', (event) => {
            const parent = event.target.closest('[data-modal="pictures"]');
            if (parent) {
                images = Array.from(parent.querySelectorAll('img'));
                currentIndex = images.indexOf(event.target);
                openModal(currentIndex);
            }
        });
    });

    function openModal(index) {
        modal.style.display = 'block';
        modalImg.src = images[index].src;
    }

    function closeModal() {
        modal.style.display = 'none';
    }

    function showPrevImage() {
        currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
        modalImg.src = images[currentIndex].src;
    }

    function showNextImage() {
        currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
        modalImg.src = images[currentIndex].src;
    }

    closeBtn.addEventListener('click', closeModal);
    prevBtn.addEventListener('click', showPrevImage);
    nextBtn.addEventListener('click', showNextImage);

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });
});