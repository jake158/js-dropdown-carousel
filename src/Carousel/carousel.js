import './style.css';

export default class Carousel {
  constructor(carouselWrapper) {
    this.wrapper = carouselWrapper;
    const images = Carousel.getImageArray(wrapper);
  }

  static getImageArray(wrapper) {
    const array = [];
    for (const img of wrapper.querySelectoAll('img')) {
      array.push(img);
    }
    return array;
  }

  cycle() {}
}
