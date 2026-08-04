// =====================================
// GALERIE PHOTO PLEIN ECRAN
// =====================================

document.addEventListener("DOMContentLoaded", () => {

    // Création lightbox
    const lightbox = document.createElement("div");
    lightbox.classList.add("lightbox");

    const image = document.createElement("img");

    lightbox.appendChild(image);
    document.body.appendChild(lightbox);

    // Ouverture image
    document.querySelectorAll(".gallery-grid img").forEach(img => {

        img.addEventListener("click", () => {

            lightbox.style.display = "flex";
            image.src = img.src;

        });

    });

    // Fermeture
    lightbox.addEventListener("click", () => {

        lightbox.style.display = "none";

    });

});

// =====================================
// PLAN INTERACTIF APPARTEMENT
// =====================================

const roomImages = {

    "Chambre":"images/chambre.jpg",

    "Coin montagne":"images/coin-montagne.jpg",

    "Salon":"images/salon.jpg",

    "Cuisine":"images/cuisine.jpg",

    "Salle de bain":"images/salle-bain.jpg",

    "WC":"images/wc.jpg",

    "Terrasse":"images/terrasse.jpg"
};

document.querySelectorAll(".hotspot").forEach(button => {

    button.addEventListener("click", () => {

        const room = button.dataset.room;

        const lightbox = document.querySelector(".lightbox");

        const image = lightbox.querySelector("img");

        image.src = roomImages[room];

        lightbox.style.display = "flex";

    });

});

// =====================================
// ANIMATION APPARITION AU SCROLL
// =====================================

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},
{
    threshold:0.1
});

document.querySelectorAll("section").forEach(section => {

    observer.observe(section);

});
