export default class Dropdown {
  constructor(dropdownWrapper, showOnHover = false) {
    const elements = this.#getElements(dropdownWrapper);
    this.#initializeStyle(elements);

    this.optionsList = elements.optionsList;
    this.hide();

    if (showOnHover) {
      elements.showButton.addEventListener('mouseover', () => this.show());
      elements.showButton.addEventListener('mouseout', () => this.hide());
    } else {
      elements.showButton.addEventListener('click', () => this.toggle());
    }
  }

  #getElements(wrapper) {
    const showButton = wrapper.querySelector('button');
    const optionsList = wrapper.querySelector('ol');
    return { wrapper, showButton, optionsList };
  }

  #initializeStyle(elements) {
    const addStyles = (el, styles) => Object.assign(el.style, styles);

    addStyles(elements.wrapper, {
      position: 'relative',
      display: 'flex',
    });

    addStyles(elements.showButton, {
      width: '120px',
      height: '60px',
    });

    addStyles(elements.optionsList, {
      margin: '0',
      padding: '0',
      position: 'absolute',
      left: '0',
      top: '60px',
      display: 'flex',
      flexDirection: 'column',
    });
  }

  hide() {
    this.optionsList.style.display = 'none';
    this.visible = false;
  }

  show() {
    this.optionsList.style.display = 'flex';
    this.visible = true;
  }

  toggle() {
    this.visible ? this.hide() : this.show();
  }
}
