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
      // Your default options here
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      "navigation": {
        "nextEl": ".swiper-button-next",
        "prevEl": ".swiper-button-prev"
      },
      "pagination": {
        "el": ".swiper-pagination",
        "clickable": true,
      },
      slidesPerView: 1,
      keyboard: true,
      effect: "cards",
      grabCursor: true,
    }
  }
}

