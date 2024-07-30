import './carousel.css';
import symbolLeft from './img/arrow-left.svg';
import symbolRight from './img/arrow-right.svg';

export default class Carousel {
  constructor(carouselWrapper) {
    this.wrapper = carouselWrapper;
    this.images = Carousel.getImageArray(carouselWrapper);
    this.setUpHTML(this.images);
    this.setUpEventListeners();
    this.pos = 0;
    this.selectImage(this.pos);
  }

  static getImageArray(wrapper) {
    return [...wrapper.querySelectorAll('img')];
  }

  setUpHTML(images) {
    this.wrapper.classList.add('carousel-wrapper');

    let imagesHTML = '';
    images.forEach((image, index) => {
      const imageHTML = `
      <div class="carousel-image-container" data-pos="${index}">
        <img src="${image.src}" class="carousel-image" alt="${image.alt || ''}">
      </div>`;
      imagesHTML += imageHTML;
    });

    let navHTML = '';
    for (let i = 0; i < images.length; i++) {
      const buttonHTML = `
      <button class="carousel-nav-button" data-pos="${i}"></button>
      `;
      navHTML += buttonHTML;
    }

    this.wrapper.innerHTML = `
    <div class="carousel-sidepanel">
      <button class="carousel-back carousel-arrow-button">
        <img src=${symbolLeft}>
      </button>
    </div>

    <div class="carousel-tape">
      ${imagesHTML}
    </div>

    <div class="carousel-nav">
      ${navHTML}
    </div>

    <div class="carousel-sidepanel">
      <button class="carousel-forward carousel-arrow-button">
        <img src=${symbolRight}>
      </button>
    </div>
    `;

    this.tape = this.wrapper.querySelector('.carousel-tape');
    this.nav = this.wrapper.querySelector('.carousel-nav');
  }

  setUpEventListeners() {
    const backBtn = this.wrapper.querySelector('.carousel-back');
    backBtn.addEventListener('click', () => this.previous());

    const forwardBtn = this.wrapper.querySelector('.carousel-forward');
    forwardBtn.addEventListener('click', () => this.next());

    const navBtns = this.wrapper.querySelectorAll('.carousel-nav-button');
    for (const btn of navBtns) {
      btn.addEventListener('click', (e) => {
        this.pos = parseInt(e.target.dataset.pos, 10);
        this.selectImage(this.pos);
      });
    }
  }

  selectImage(pos) {
    if (this.selectedNav) {
      this.selectedNav.classList.remove('selected');
    }
    this.selectedNav = this.nav.querySelector(`[data-pos="${pos}"]`);
    this.selectedNav.classList.add('selected');

    const imgContainer = this.tape.querySelector(`[data-pos="${pos}"]`);
    imgContainer.scrollIntoView();
  }

  next() {
    if (this.pos === this.images.length - 1) {
      return;
    }
    this.pos += 1;
    this.selectImage(this.pos);
  }

  previous() {
    if (this.pos === 0) {
      return;
    }
    this.pos -= 1;
    this.selectImage(this.pos);
  }

  cycle() {}
}
