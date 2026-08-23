// =====================================
// GALERIE PHOTO PLEIN ECRAN
// =====================================

document.addEventListener("DOMContentLoaded", () => {

    const images = document.querySelectorAll(".gallery-grid img");

    let currentIndex = 0;

    const lightbox = document.createElement("div");
    lightbox.className = "lightbox";

    lightbox.innerHTML = `
       <span class="close-btn">&times;</span>

<button class="nav-btn prev-btn">❮</button>

<img src="" alt="Photo appartement">

<button class="nav-btn next-btn">❯</button>

<div class="counter"></div>
    `;

    document.body.appendChild(lightbox);

    const lightboxImg = lightbox.querySelector("img");
    const counter = lightbox.querySelector(".counter");

    function showImage(index) {
        currentIndex = index;
        lightboxImg.src = images[currentIndex].src;
        counter.textContent =
            (currentIndex + 1) + " / " + images.length;
    }

    images.forEach((img, index) => {

        img.addEventListener("click", () => {

            lightbox.style.display = "flex";
            showImage(index);

        });

    });

    lightbox.querySelector(".close-btn")
        .addEventListener("click", () => {

            lightbox.style.display = "none";

        });

    lightbox.querySelector(".prev-btn")
        .addEventListener("click", () => {

            currentIndex =
                (currentIndex - 1 + images.length)
                % images.length;

            showImage(currentIndex);

        });

    lightbox.querySelector(".next-btn")
        .addEventListener("click", () => {

            currentIndex =
                (currentIndex + 1)
                % images.length;

            showImage(currentIndex);

        });

    document.addEventListener("keydown", (e) => {

        if (lightbox.style.display !== "flex")
            return;

        if (e.key === "ArrowLeft") {

            currentIndex =
                (currentIndex - 1 + images.length)
                % images.length;

            showImage(currentIndex);

        }

        if (e.key === "ArrowRight") {

            currentIndex =
                (currentIndex + 1)
                % images.length;

            showImage(currentIndex);

        }

        if (e.key === "Escape") {

            lightbox.style.display = "none";

        }

    });

});

// =====================================
// PLAN INTERACTIF APPARTEMENT
// =====================================

const roomData = {

    "Chambre": {
        image: "images/chambre.jpg",
        description:
            "Lit Queen Size 160x200 avec placard de rangement et chambre indépendante."
    },

    "Coin montagne": {
        image: "images/coin-montagne.jpg",
        description:
            "Lit superposé 3 couchages avec lampe de lecture individuelle."
    },

    "Salon": {
        image: "images/salon.jpg",
        description:
            "Salon chaleureux avec canapé gigogne 160x200, Smart TV et jeux de société."
    },

    "Cuisine": {
        image: "images/cuisine.jpg",
        description:
            "Cuisine équipée : Dolce Gusto, induction, four multifonction, raclette et fondue."
    },

    "Salle de bain": {
        image: "images/salle-bain.jpg",
        description:
            "Salle de bain rénovée avec baignoire, colonne de douche, miroir LED et sèche-serviettes."
    },

    "WC": {
        image: "images/wc.jpg",
        description:
            "WC séparé pour plus de confort."
    },

    "Terrasse": {
        image: "images/terrasse.jpg",
        description:
            "Terrasse privative de 5,31 m² exposée Sud-Ouest avec espace vert devant l'appartement."
    },


"Entrée": {
    image: "images/entree.jpg",
    description:
        "Entrée fonctionnelle avec porte-manteau 8 patères et range chaussures."
},

"Salle à manger": {
    image: "images/Salleamanger.JPG",
    description:
        "Espace repas convivial permettant de partager les repas en famille ou entre amis."
},

"Placard": {
    image: "images/Placard.jpg",
    description:
        "Grand espace de rangement pratique pour les vêtements, valises, jeux de société, literie du canapée et kit de dépannage ampoule, pile..."
    }
};

document.querySelectorAll(".hotspot").forEach(button => {

    button.addEventListener("click", () => {

        const room = button.dataset.room;

        const data = roomData[room];

        if (!data) return;

        const lightbox =
            document.querySelector(".lightbox");

        const existingImg =
            lightbox.querySelector("img");

        existingImg.src = data.image;

        const counter =
            lightbox.querySelector(".counter");

        counter.innerHTML =
            "<strong>" + room + "</strong><br>" +
            data.description;

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
