const navSearchButton = document.querySelector(".nav-search-icon-mobile");
const navbarMain = document.querySelector(".navbar-main");
const navWithSearch = document.querySelector(".navbar-search");
const searchInput = document.querySelector("#search-bar");
const navbarBack = document.querySelector(".navbar-back");

const navbarLinks = document.querySelector(".navbar-links");
const hamburgerMenu = document.querySelector(".hamburger-nav-icon");

navSearchButton.addEventListener("click", () => {
    navbarMain.style.display = "none";
    navWithSearch.style.display = "flex";
    searchInput.focus();
});

navbarBack.addEventListener("click", () => {
    navbarMain.style.display = "flex";
    navWithSearch.style.display = "none";
});

hamburgerMenu.addEventListener("click", () => {
    console.log("clicked");
    navbarLinks.classList.toggle("expanded");
});
