import './carousel.css';

export default class Carousel {
  constructor(carouselWrapper) {
    this.wrapper = carouselWrapper;
    this.images = Carousel.getImageArray(carouselWrapper);
    this.setUpHTML(this.images);
    this.setUpEventListeners();
    this.pos = 0;
    this.scrollTo(this.pos);
  }

  static getImageArray(wrapper) {
    return [...wrapper.querySelectorAll('img')];
  }

  setUpHTML(images) {
    this.wrapper.classList.add('carousel-wrapper');

    this.wrapper.innerHTML = `
    <div class="carousel-sidepanel">
      <button class="carousel-back carousel-arrow-button">
        B
      </button>
    </div>

    <div class="carousel-tape"></div>

    <div class="carousel-sidepanel">
      <button class="carousel-forward carousel-arrow-button">
        F
      </button>
    </div>
    `;

    this.tape = this.wrapper.querySelector('.carousel-tape');

    const constructContainer = (image, pos) => {
      const container = document.createElement('div');
      container.classList.add('carousel-image-container');
      image.classList.add('carousel-image');
      container.appendChild(image);
      container.dataset.pos = pos;
      return container;
    };

    for (let i = 0; i < images.length; i++) {
      const container = constructContainer(images[i], i);
      this.tape.appendChild(container);
    }
  }

  setUpEventListeners() {
    const backBtn = this.wrapper.querySelector('.carousel-back');
    backBtn.addEventListener('click', () => this.previous());

    const forwardBtn = this.wrapper.querySelector('.carousel-forward');
    forwardBtn.addEventListener('click', () => this.next());
  }

  scrollTo(pos) {
    const imgContainer = this.tape.querySelector(`[data-pos="${pos}"]`);
    imgContainer.scrollIntoView();
  }

  next() {
    if (this.pos === this.images.length - 1) {
      return;
    }
    this.pos += 1;
    this.scrollTo(this.pos);
  }

  previous() {
    if (this.pos === 0) {
      return;
    }
    this.pos -= 1;
    this.scrollTo(this.pos);
  }

  cycle() {}
}
