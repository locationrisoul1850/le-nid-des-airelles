document.addEventListener("DOMContentLoaded", () => {

    const lightbox = document.createElement("div");
    lightbox.classList.add("lightbox");

    const image = document.createElement("img");

    lightbox.appendChild(image);
    document.body.appendChild(lightbox);

    document.querySelectorAll(".gallery-grid img").forEach(img => {

        img.addEventListener("click", () => {

            image.src = img.src;
            lightbox.style.display = "flex";

        });

    });

    lightbox.addEventListener("click", () => {

        lightbox.style.display = "none";

    });

});

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

        const imagePath = roomImages[room];

        if(imagePath){

            const img = document.createElement("img");

            img.src = imagePath;

            const lightbox = document.querySelector(".lightbox");

            const existingImg = lightbox.querySelector("img");

            existingImg.src = imagePath;

            lightbox.style.display = "flex";

        }

    });

});
