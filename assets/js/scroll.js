// Función para desplazamiento automático hacia la derecha
export function autoScrollGallery(gallery, scrollAmount, scrollPerClick) {
    gallery.scrollLeft += scrollPerClick / 10; // Incremento para desplazamiento suave
    scrollAmount += scrollPerClick / 10; // Actualizamos el valor de desplazamiento
    return scrollAmount;
}

// Función para mover hacia la derecha (clic en la flecha derecha)
export function moveRight(gallery, scrollAmount, scrollPerClick) {
    gallery.scrollLeft += scrollPerClick; // Desplazar a la derecha
    scrollAmount += scrollPerClick;
    return scrollAmount;
}

// Función para mover hacia la izquierda (clic en la flecha izquierda)
export function moveLeft(gallery, scrollAmount, scrollPerClick) {
    gallery.scrollLeft -= scrollPerClick; // Desplazar a la izquierda
    scrollAmount -= scrollPerClick;
    return scrollAmount;
}
