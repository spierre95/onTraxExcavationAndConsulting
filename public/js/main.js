var Glide = require("@glidejs/glide");
// var Images = require('@glidejs/glide/dist/glide.modular.esm');
var Carousel = new Glide(".glide", {
  type: "carousel",
  perView: 2,
  gap: 10
}).mount();

// display 2 slides in carousel at one time
Carousel.on("run.after", evt => {
  const scrollSteps = Carousel.settings.perView;
  evt.steps = evt.direction === ">" ? -scrollSteps : scrollSteps;
});

//smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "start"
    });
  });
});
