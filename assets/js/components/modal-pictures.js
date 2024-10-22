export default class ModalPictures {
    constructor() {
        const modalList = document.querySelectorAll('.modal-pictures');

        modalList.forEach(modal => {
            modal.addEventListener('shown.modal', this.loadContent);
            modal.addEventListener('hidden.modal', this.removeContent);
        });
    }

    loadContent = (event) => {
        event.preventDefault();

        let modal = event.currentTarget;
        let linkElement = event.relatedTarget;
        let size = linkElement.getAttribute('data-modal-size') || 'md';
        let url = linkElement.getAttribute('href');

    };

    removeContent = (event) => {
        let modal = event.currentTarget;
        modal.querySelector('.modal-pictures-content').innerHTML = "";
    };
};

const showEvent = new CustomEvent('shown.modal', {
    detail: { modal, linkElement, size, url }
});

const hideEvent = new CustomEvent('hidden.modal', {
    detail: { modal }
});