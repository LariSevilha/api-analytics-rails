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
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      slidesPerView: 1.5,
      spaceBetween: 10,
      breakpoints: {
        480: {
          slidesPerView: 2.5,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3.5,
          spaceBetween: 30,
        },
        992: {
          slidesPerView: 4.5,
          spaceBetween: 30,

        },
        1200: {
          slidesPerView: 5,
          spaceBetween: 30,

        },
        1364: {
          slidesPerView: 5,
          spaceBetween: 30,
        }
      },

    }
  }
}
