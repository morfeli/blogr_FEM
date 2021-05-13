const arrowButton = document.querySelectorAll(".menu-arrow");
const hamburgerBtn = document.getElementById("hamburger");
const navLink = document.querySelector(".nav__links");
const reswidth = screen.width;

arrowButton.forEach((el) =>
  el.addEventListener("click", (event) => {
    const subMenu = event.target.parentElement.querySelector(".sub-menu");
    subMenu.classList.toggle("open");
  })
);

navLink.style.left = "-100%";
hamburgerBtn.addEventListener("click", () => {
  navLink.style.left = navLink.style.left === "-100%" ? "0" : "-100%";
});

// window.addEventListener("mouseup", (event) => {
//   let box = document.querySelector(".sub-menu.open");
//   if (event.target != box && event.target.parentNode != box) {
//     box.style.display = "none";
//   }
// });
