const homeHeroVideoTrailerModal = document.getElementById(
  "home-hero-video-trailer-modal"
);
const homeHeroVideoTrailer = document.getElementById("home-hero-video-trailer");
homeHeroVideoTrailerModal.addEventListener("hidden.bs.modal", function (event) {
  homeHeroVideoTrailer.pause();
});
