// MDN
// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed,
//without waiting for stylesheets, images, and subframes to finish loading.
// The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.

const btn = document.querySelector(".switch-btn");
const video = document.querySelector(".video-container");

//added click event to btn
// checking if btn does NOT have slide class btn will add slide class
//added pause and play methods to video
btn.addEventListener("click", function () {
  if (!btn.classList.contains("slide")) {
    btn.classList.add("slide");
    video.pause();
  } else {
    btn.classList.remove("slide");
    video.play();
  }
});

//preloader
//using query selector lets you select preloader class from html
//event listener listening for load event
const preloader = document.querySelector(".preloader");
window.addEventListener("load", function () {
  preloader.classList.add("hide-preloader");
});
