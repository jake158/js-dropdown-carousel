import 'modern-normalize';
import './style.css';
import Dropdown from './Dropdown/dropdown';
import Carousel from './Carousel/carousel';
import placeholder from './img/placeholder.svg';

document.addEventListener('DOMContentLoaded', () => {
  const placeholderImgs = document.querySelectorAll('.placeholder-icon');
  for (const img of placeholderImgs) {
    img.src = placeholder;
  }

  const dropdowns = document.querySelectorAll('.dropdown-wrapper');
  new Dropdown(dropdowns[0]);
  new Dropdown(dropdowns[1], true);

  const carousel = document.querySelector('.carousel-wrapper');
  new Carousel(carousel);
});
