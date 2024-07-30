import './carousel.css';

export default class Carousel {
  constructor(carouselWrapper) {
    this.wrapper = carouselWrapper;
    this.images = Carousel.getImageArray(carouselWrapper);
    this.setUpHTML(this.images);
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

    for (let i = 0; i < images.length; i++) {
      const img = images[i];
      img.classList.add('carousel-image');
      img.dataset.pos = i;
      this.tape.appendChild(img);
    }

    this.gap = this.wrapper.offsetWidth;
    this.tape.style.gap = this.gap + 'px';
    this.tape.scrollLeft = 0;

    // Temp
    this.tape.addEventListener('click', () => this.next());
  }

  next() {
    this.tape.scrollLeft += this.gap * 2;
  }

  previous() {
    this.tape.scrollLeft -= this.gap * 2;
  }

  cycle() {}
}
