import './carousel.css';

export default class Carousel {
  constructor(carouselWrapper) {
    this.wrapper = carouselWrapper;
    const images = Carousel.getImageArray(carouselWrapper);
    this.setUpHTML(images);
  }

  static getImageArray(wrapper) {
    return [...wrapper.querySelectorAll('img')];
  }

  setUpHTML(images) {
    this.wrapper.classList.add('carousel-wrapper');

    this.wrapper.innerHTML = `
    <div class="carousel-tape"></div>
    `;

    this.tape = this.wrapper.querySelector('.carousel-tape');
    for (const img of images) {
      img.classList.add('carousel-image')
      this.tape.appendChild(img);
    }
  }

  next() {}

  previous() {}

  cycle() {}
}
