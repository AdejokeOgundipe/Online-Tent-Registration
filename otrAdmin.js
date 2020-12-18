const navBtn = document.getElementById("open-nav");
const navbar = document.getElementById("side-menu");
const navClose = document.getElementById("nav-close");

//To handle the navigation menu
navBtn.addEventListener("click", () => {
  navbar.classList.add("showSideMenu");
});

navClose.addEventListener("click", () => {
  navbar.classList.remove("showSideMenu");
});
