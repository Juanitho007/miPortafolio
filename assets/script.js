const menuIcon = document.querySelector(".menu-icon");
const navMenu = document.querySelector(".nav-menu");
const dualBtn = document.querySelector(".dual-mode-btn");
const dualMode = document.querySelectorAll(".night-mode");

menuIcon.addEventListener("click", () => {
  navMenu.classList.toggle("nav-menu-visible");
});
navMenu.addEventListener("click", (e) => {
  if (e.target.classList.contains("menu-link")) {
    navMenu.classList.toggle("nav-menu-visible");
  }
});
dualBtn.addEventListener("click", (i) => {
  for (var i = 0; i < dualMode.length; i++) {
    dualMode[i].classList.toggle("night-mode-disabled");
  }
});
