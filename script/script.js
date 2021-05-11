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

function resizeImg() {
  const reswidth = screen.width;
  let image = document.querySelector(".future__container--img");
  console.log(image.src);
  if (reswidth >= 1440) {
    image.src = "../images/illustration-editor-desktop.svg";
  } else {
    image.src = "../images/illustration-editor-mobile.svg";
  }
}
window.addEventListener("resize", resizeImg);
