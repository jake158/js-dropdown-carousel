import upSymbol from './img/chevron-up.svg';
import downSymbol from './img/chevron-down.svg';

export default class Dropdown {
  constructor(dropdownWrapper, showOnHover = false) {
    const elements = this.#getElements(dropdownWrapper);
    this.optionsList = elements.optionsList;
    this.showButtonIcon = elements.showButtonIcon;

    this.#initializeStyle(elements);
    this.hide();

    elements.showButton.addEventListener(
      showOnHover ? 'mouseover' : 'click',
      () => this.toggle()
    );
  }

  #getElements(wrapper) {
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

  #initializeStyle(elements) {
    const btnHeight = '35px';
    const btnPadding = '4px 10px';
    const btnBgColor = '#f0f0f0';
    const btnHoverBgColor = '#e0e0e0';
    const btnActiveBgColor = '#d0d0d0';
    const btnBorderColor = '#ccc';
    const btnBorderRadius = '8px';
    const btnFontFamily = 'inherit';
    const btnFontSize = '14px';
    const addStyles = (el, styles) => Object.assign(el.style, styles);

    addStyles(elements.wrapper, {
      position: 'relative',
      display: 'flex',
    });

    addStyles(elements.showButton, {
      height: btnHeight,
      textWrap: 'nowrap',
      backgroundColor: btnBgColor,
      border: `1px solid ${btnBorderColor}`,
      borderRadius: btnBorderRadius,
      padding: btnPadding,
      fontFamily: btnFontFamily,
      fontSize: btnFontSize,
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: '5px',
    });

    addStyles(elements.showButtonIcon, {
      height: `calc(${btnHeight} / 2)`,
      width: 'auto',
    });

    addStyles(elements.optionsList, {
      margin: '0',
      padding: '0',
      position: 'absolute',
      left: '0',
      top: `calc(${btnHeight} + 8px)`,
      overflow: 'auto',
      minWidth: '100%',
      listStyleType: 'none',
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: btnBgColor,
      border: `1px solid ${btnBorderColor}`,
      borderRadius: btnBorderRadius,
      zIndex: '1000',
    });

    for (const btn of elements.optionButtons) {
      addStyles(btn, {
        textWrap: 'nowrap',
        width: '100%',
        height: btnHeight,
        backgroundColor: btnBgColor,
        border: 'none',
        padding: btnPadding,
        fontFamily: btnFontFamily,
        fontSize: btnFontSize,
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
      });

      btn.addEventListener('click', () => {
        this.hide();
      });

      btn.addEventListener('mouseover', () => {
        btn.style.backgroundColor = btnHoverBgColor;
      });

      btn.addEventListener('mouseout', () => {
        btn.style.backgroundColor = btnBgColor;
      });

      btn.addEventListener('mousedown', () => {
        btn.style.backgroundColor = btnActiveBgColor;
      });

      btn.addEventListener('mouseup', () => {
        btn.style.backgroundColor = btnHoverBgColor;
      });
    }

    for (const icon of elements.optionIcons) {
      addStyles(icon, {
        height: `calc(${btnHeight} / 1.5)`,
        width: 'auto',
      });
    }
  }
}
