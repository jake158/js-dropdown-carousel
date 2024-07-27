import './dropdown.css';
import upSymbol from './img/chevron-up.svg';
import downSymbol from './img/chevron-down.svg';

export default class Dropdown {
  constructor(dropdownWrapper, showOnHover = false) {
    const elements = this.getElements(dropdownWrapper);
    this.addClasses(elements);
    this.optionsList = elements.optionsList;
    this.showButtonIcon = elements.showButtonIcon;

    this.hide();

    elements.showButton.addEventListener(
      showOnHover ? 'mouseover' : 'click',
      () => this.toggle()
    );
  }

  getElements(wrapper) {
    const showButton = wrapper.querySelector('button');
    const showButtonIcon = document.createElement('img');
    showButtonIcon.src = downSymbol;
    showButton.appendChild(showButtonIcon);

    const optionsList = wrapper.querySelector('ol');
    const optionButtons = optionsList.querySelectorAll('button');
    const optionIcons = optionsList.querySelectorAll('img');
    return {
      wrapper,
      showButton,
      showButtonIcon,
      optionsList,
      optionButtons,
      optionIcons,
    };
  }

  addClasses(elements) {
    elements.wrapper.classList.add('dropdown-wrapper');
    elements.showButton.classList.add('dropdown-show-button');
    elements.showButtonIcon.classList.add('dropdown-icon');
    elements.optionsList.classList.add('dropdown-options-list');

    const optionButtons = elements.optionsList.querySelectorAll('button');
    const optionIcons = elements.optionsList.querySelectorAll('img');

    for (const btn of optionButtons) {
      btn.classList.add('dropdown-option-button');
    }
    for (const icon of optionIcons) {
      icon.classList.add('dropdown-option-icon');
    }
  }

  hide() {
    this.optionsList.style.display = 'none';
    this.showButtonIcon.src = downSymbol;
    this.visible = false;
  }

  show() {
    this.optionsList.style.display = 'flex';
    this.showButtonIcon.src = upSymbol;
    this.visible = true;
  }

  toggle() {
    this.visible ? this.hide() : this.show();
  }
}
