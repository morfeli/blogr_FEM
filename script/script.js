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

const resizeEditiorImg = () => {
  const reswidth = screen.width;
  let image = document.querySelector(".future__container--img");
  if (reswidth >= 1440) {
    image.src = "../images/illustration-editor-desktop.svg";
  } else {
    image.src = "../images/illustration-editor-mobile.svg";
  }
};
window.addEventListener("resize", resizeEditiorImg);

const resizeLaptopImg = () => {
  const reswidth = screen.width;
  let image = document.querySelector(".free__container--img");
  if (reswidth >= 1440) {
    image.src = "../images/illustration-laptop-desktop.svg";
  } else {
    image.src = "../images/illustration-laptop-mobile.svg";
  }
};
window.addEventListener("resize", resizeLaptopImg);
