export default class Dropdown {
  constructor(dropdownWrapper, showOnHover = false) {
    const elements = this.#getElements(dropdownWrapper);
    this.optionsList = elements.optionsList;
    this.#initializeStyle(elements);

    this.hide();

    elements.showButton.addEventListener(
      showOnHover ? 'mouseover' : 'click',
      () => this.toggle()
    );
  }

  #getElements(wrapper) {
    const showButton = wrapper.querySelector('button');
    const optionsList = wrapper.querySelector('ol');
    const optionButtons = optionsList.querySelectorAll('button');
    return { wrapper, showButton, optionsList, optionButtons };
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

  #initializeStyle(elements) {
    const btnHeight = '35px';
    const btnPadding = '5px 12px';
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

    addStyles(elements.optionsList, {
      margin: '0',
      padding: '0',
      position: 'absolute',
      left: '0',
      top: btnHeight,
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
        textAlign: 'left',
        backgroundColor: btnBgColor,
        border: 'none',
        padding: btnPadding,
        fontFamily: btnFontFamily,
        fontSize: btnFontSize,
        cursor: 'pointer',
      });

      btn.addEventListener('click', () => {
        elements.showButton.textContent = btn.textContent;
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

    const maxOptionWidth = elements.optionsList.offsetWidth;
    const btnWidth = elements.showButton.offsetWidth;

    addStyles(elements.showButton, {
      height: btnHeight,
      width: `${Math.max(maxOptionWidth, btnWidth)}px`,
      textWrap: 'nowrap',
      textAlign: 'left',
      backgroundColor: btnBgColor,
      border: `1px solid ${btnBorderColor}`,
      borderRadius: btnBorderRadius,
      padding: btnPadding,
      fontFamily: btnFontFamily,
      fontSize: btnFontSize,
      cursor: 'pointer',
    });
  }
}
