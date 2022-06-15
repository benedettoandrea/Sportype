const navbar = document.querySelector(".navbar");
const navbarSupportedContent = document.getElementById(
  "navbar-supported-content"
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

  if (document.querySelector(".slide-page-1") != null) {
    // home page
    if (window.scrollY > document.querySelector(".slide-page-1").offsetHeight) {
      navbar.classList.add("navbar-light", "bgneutral");
      navbar.classList.remove("navbar-dark");
      document
        .querySelector("meta[name=theme-color]")
        .setAttribute("content", "#f7f7f7");
    } else {
      navbar.classList.add("navbar-dark");
      navbar.classList.remove("navbar-light", "bgneutral");
      document
        .querySelector("meta[name=theme-color]")
        .setAttribute("content", "#7885FF");
    }
  } else {
    // sub pages
    if (
      window.scrollY > document.querySelector(".slide-subpage-1").offsetHeight
    ) {
      navbar.classList.add("bgneutral");
      navbar.classList.remove("bgcolor");
      document
        .querySelector("meta[name=theme-color]")
        .setAttribute("content", "#f7f7f7");
    } else {
      navbar.classList.add("bgcolor");
      navbar.classList.remove("bgneutral");
      document
        .querySelector("meta[name=theme-color]")
        .setAttribute("content", "#bbc2ff");
    }
  }
};
