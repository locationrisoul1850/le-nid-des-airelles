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
