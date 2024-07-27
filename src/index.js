import 'modern-normalize';
import './style.css';
import Dropdown from './Dropdown/dropdown';
import Carousel from './Carousel/carousel';
import placeholder from './img/placeholder.svg';

import img1 from './img/1.jpg';
import img2 from './img/2.jpg';
import img3 from './img/3.jpg';
import img4 from './img/4.jpg';
import img5 from './img/5.jpg';

document.addEventListener('DOMContentLoaded', () => {
  const placeholderIcons = document.querySelectorAll('.placeholder-icon');
  for (const icon of placeholderIcons) {
    icon.src = placeholder;
  }

  const dropdowns = document.querySelectorAll('.dropdown-wrapper');
  new Dropdown(dropdowns[0]);
  new Dropdown(dropdowns[1], true);

  const carousel = document.querySelector('.carousel-wrapper');
  const images = [img1, img2, img3, img4, img5];

  for (const image of images) {
    const img = document.createElement('img');
    img.src = image;
    carousel.appendChild(img);
  }

  new Carousel(carousel);
});
