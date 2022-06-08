const navbar = document.querySelector(".navbar");
const navbarSupportedContent = document.getElementById(
  "navbarSupportedContent"
);
navbarSupportedContent.addEventListener("shown.bs.collapse", function () {
  navbar.classList.add("navbar-shadow");
});
navbarSupportedContent.addEventListener("hidden.bs.collapse", function () {
  if (window.scrollY == 0) {
    navbar.classList.remove("navbar-shadow");
  }
});
window.onscroll = () => {
  if (window.scrollY > 0) {
    navbar.classList.add("navbar-shadow");
  } else if (window.scrollY == 0) {
    navbar.classList.remove("navbar-shadow");
  }
  if (window.scrollY > document.getElementById("slide-1").offsetHeight) {
    navbar.classList.add("navbar-light");
    navbar.classList.remove("navbar-dark");
    document
      .querySelector("meta[name=theme-color]")
      .setAttribute("content", "#f1f1f1");
  } else {
    navbar.classList.add("navbar-dark");
    navbar.classList.remove("navbar-light");
    document
      .querySelector("meta[name=theme-color]")
      .setAttribute("content", "#475aff");
  }
};
