const arrowButton = document.querySelectorAll(".menu-arrow");
const hamburgerBtn = document.getElementsByClassName("toggle-button")[0];
const navBarLinks = document.getElementsByClassName("navbar-links")[0];

arrowButton.forEach((el) =>
  el.addEventListener("click", (event) => {
    const subMenu = event.target.parentElement.querySelector(".sub-menu");
    subMenu.classList.toggle("open");
  })
);

hamburgerBtn.addEventListener("click", () => {
  navBarLinks.classList.toggle("active");
});
