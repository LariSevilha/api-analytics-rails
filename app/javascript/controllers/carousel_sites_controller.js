import Carousel from 'stimulus-carousel'

// Connects to data-controller="carousel-sites"
export default class extends Carousel {
  connect() {
    super.connect()

    // The swiper instance.
    this.swiper

    // Default options for every carousels.
    this.defaultOptions
  }

  // You can set default options in this getter.
  get defaultOptions() {
    return {
      slidesPerView: 1.55,
      spaceBetween: 32,
      centeredSlides: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {

        768: {
          slidesPerView: 2.8,
          spaceBetween: 30,
          navigation: {
            enabled: true
          }
        },
        992: {
          slidesPerView: 2.8,
          spaceBetween: 30,
          navigation: {
            enabled: true
          }
        },
        1200: {
          slidesPerView: 2.8,
          spaceBetween: 30,
          navigation: {
            enabled: true
          }
        },
        1364: {
          slidesPerView: 2.9,
          spaceBetween: 30,
          navigation: {
            enabled: true
          }
        }
      }
    }
  }
}
