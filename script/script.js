const arrowButton = document.querySelectorAll(".menu-arrow");

arrowButton.forEach((el) =>
  el.addEventListener("click", (event) => {
    const subMenu = event.target.parentElement.querySelector(".sub-menu");
    subMenu.classList.toggle("open");
  })
);
