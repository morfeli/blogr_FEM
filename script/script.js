const arrowButton = document.querySelectorAll(".menu-arrow");
const subMenu = document.querySelector(".sub-menu");

arrowButton.forEach((el) =>
  el.addEventListener("click", () => {
    subMenu.classList.toggle("open");
  })
);
