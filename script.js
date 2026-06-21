// ====================
// MENU MOBILE
// ====================

const menuToggle = document.getElementById("menuToggle");
const menu = document.getElementById("menu");

if (menuToggle) {

    menuToggle.addEventListener("click", () => {
        menu.classList.toggle("show");
    });

}

// ====================
// MENU AKTIF
// ====================

const currentPage = document.body.dataset.page;

document.querySelectorAll(".menu a").forEach((link) => {

    if (link.getAttribute("href") === currentPage) {
        link.classList.add("active");
    }

    link.addEventListener("click", () => {
        menu.classList.remove("show");
    });

});

// ====================
// LIGHTBOX GALERI
// ====================

function openLightbox(img) {

    document.getElementById("lightbox").style.display = "flex";

    document.getElementById("lightbox-img").src = img.src;

}

function closeLightbox() {

    document.getElementById("lightbox").style.display = "none";

}