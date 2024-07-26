import 'modern-normalize';
import './style.css';
import Dropdown from './dropdown';
import Carousel from './carousel';

document.addEventListener('DOMContentLoaded', () => {
  const dropdowns = document.querySelectorAll('.dropdown-wrapper');
  new Dropdown(dropdowns[0]);
  new Dropdown(dropdowns[1], true);

  const carousel = document.querySelector('.carousel-wrapper');
  new Carousel(carousel);
});
