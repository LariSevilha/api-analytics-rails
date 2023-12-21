import Carousel from 'stimulus-carousel'

// Connects to data-controller="slider"
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
      slidesPerView: 2,
      spaceBetween: 8,
      freeMode: true,
      speed: 1000,
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      breakpoints: {
        990: {
          slidesPerView: 6,
        },
        790: {
          slidesPerView: 4,
        },
        470: {
          slidesPerView: 3,
        }
      }
    }
  }
}
