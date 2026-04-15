const boton = document.getElementById('boton')
const etiquetaTexto = document.getElementById('parrafo')

function cambiarTexto() {
    
    etiquetaTexto.innerText = "¡Gracias por su compra!"
    etiquetaTexto.style.color = "green"
    boton.innerText="Comprado"

}

boton.addEventListener('click', cambiarTexto)

const mediaCards = document.querySelectorAll(".media-hover");

mediaCards.forEach(card => {
    const img = card.querySelector(".foto-perfil");
    const videoContainer = card.querySelector(".video-container");
    const videoURL = card.dataset.video;

    card.addEventListener("mouseenter", () => {
        img.style.display = "none";

        videoContainer.innerHTML = `
            <iframe
                src="${videoURL}"
                title="Video de YouTube"
                allow="autoplay; encrypted-media"
                allowfullscreen>
            </iframe>
        `;
    });

    card.addEventListener("mouseleave", () => {
        videoContainer.innerHTML = "";
        img.style.display = "block";
    });
});