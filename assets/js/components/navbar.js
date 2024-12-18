console.log("navbar.js cargado correctamente");

export default function ToggleMenu() {
    const navbar = document.querySelector("#navbar");
    const icons = document.querySelector("#icons");
    const header = document.querySelector(".header");

    if (icons && navbar && header) {
        if (!icons.dataset.listenerAdded) {
            const iconElement = icons.querySelector("i");

            icons.addEventListener("click", () => {
                navbar.classList.toggle("active");

                if (navbar.classList.contains("active")) {
                    header.style.position = "fixed";
                    iconElement.classList.remove("fa-bars");
                    iconElement.classList.add("fa-xmark", "icon-large"); // Ajusta el tamaño aquí
                } else {
                    header.style.position = "relative";
                    iconElement.classList.remove("fa-xmark", "icon-large");
                    iconElement.classList.add("fa-bars");
                }
            });

            icons.dataset.listenerAdded = "true";
        }
    } else {
        console.warn("Elementos #navbar o #icons no encontrados.");
    }
}



