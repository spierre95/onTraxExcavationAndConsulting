var Glide = require('@glidejs/glide')
// var Images = require('@glidejs/glide/dist/glide.modular.esm');
var Carousel = new Glide('.glide',{
    type: 'carousel',
    perView: 2,
    gap: 10
}
).mount()

Carousel.on('run.before', evt => {
    const scrollSteps = Carousel.settings.perView;
    evt.steps = evt.direction === '>' ? -scrollSteps : scrollSteps;
});