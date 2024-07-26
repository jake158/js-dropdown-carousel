import "modern-normalize";
import "./style.css";
import Dropdown from "./dropdown";
import Carousel from "./carousel";

document.addEventListener("DOMContentLoaded", () => {
  const dropdownWrappers = document.querySelectorAll(".dropdown-wrapper");
  for (const wrapper of dropdownWrappers) {
    new Dropdown(wrapper);
  }

  const carouselWrapper = document.querySelector(".carousel-wrapper");
  new Carousel(carouselWrapper);
});
