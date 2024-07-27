import './carousel.css';

export default class Carousel {
  constructor(carouselWrapper) {
    this.wrapper = carouselWrapper;
    const images = Carousel.getImageArray(carouselWrapper);
  }

  static getImageArray(wrapper) {
    const array = [];
    for (const img of wrapper.querySelectorAll('img')) {
      array.push(img);
    }
    return array;
  }

  cycle() {}
}
