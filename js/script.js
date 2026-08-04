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

const roomDescriptions = {

    "Chambre":
        "🛏️ Chambre indépendante avec lit Queen Size 160x200 et placard de rangement.",

    "Coin montagne":
        "🛌 Coin montagne avec lit superposé 3 couchages et lampes de lecture individuelles.",

    "Salon":
        "📺 Salon chaleureux avec canapé gigogne 160x200, Smart TV AirPlay et Miracast.",

    "Cuisine":
        "🍳 Cuisine équipée : Dolce Gusto, raclette, fondue, induction, four multifonction.",

    "Salle de bain":
        "🛁 Salle de bain rénovée en 2026 avec baignoire, douche, miroir LED et sèche-serviettes.",

    "WC":
        "🚻 WC séparé pour plus de confort.",

    "Terrasse":
        "☀️ Terrasse privative de 5,31 m² exposée Sud-Ouest avec vue dégagée."
};

document.querySelectorAll(".hotspot").forEach(button => {

    button.addEventListener("click", () => {

        const room = button.dataset.room;

        alert(
            room + "\n\n" + roomDescriptions[room]
        );

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
