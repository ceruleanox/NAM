import Glide, { Autoplay } from '@glidejs/glide/dist/glide.modular.esm'

var glide = new Glide('.glider', {
  autoplay: input.value,
  hoverpause: false,
  slidesToshow: 3,
  draggable: true,
  dots: '#dots',
  type: 'carousel',
  startAt: 0,
  perView: 3,
  arrows: {
    prev: '.glider-prev',
    next: '.glider-next'
  }
});

input.addEventListener('input', function (event) {
  glide.update({
    autoplay: (event.target.value != 0) ? event.target.value : false
  })
})

glide.mount()