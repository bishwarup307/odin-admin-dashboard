const navSearchButton = document.querySelector(".nav-search-icon-mobile");
const navbarMain = document.querySelector(".navbar-main");
const navWithSearch = document.querySelector(".navbar-search");
const searchInput = document.querySelector("#search-bar");
const navbarBack = document.querySelector(".navbar-back");

navSearchButton.addEventListener("click", () => {
  navbarMain.style.display = "none";
  navWithSearch.style.display = "flex";
  searchInput.focus();
});

navbarBack.addEventListener("click", () => {
  navbarMain.style.display = "flex";
  navWithSearch.style.display = "none";
});
