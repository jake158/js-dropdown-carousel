(()=>{"use strict";var n={288:(n,e,t)=>{t.d(e,{A:()=>A});var o=t(354),r=t.n(o),i=t(314),a=t.n(i)()(r());a.push([n.id,"/*! modern-normalize v2.0.0 | MIT License | https://github.com/sindresorhus/modern-normalize */\n\n/*\nDocument\n========\n*/\n\n/**\nUse a better box model (opinionated).\n*/\n\n*,\n::before,\n::after {\n\tbox-sizing: border-box;\n}\n\nhtml {\n\t/* Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3) */\n\tfont-family:\n\t\tsystem-ui,\n\t\t'Segoe UI',\n\t\tRoboto,\n\t\tHelvetica,\n\t\tArial,\n\t\tsans-serif,\n\t\t'Apple Color Emoji',\n\t\t'Segoe UI Emoji';\n\tline-height: 1.15; /* 1. Correct the line height in all browsers. */\n\t-webkit-text-size-adjust: 100%; /* 2. Prevent adjustments of font size after orientation changes in iOS. */\n\t-moz-tab-size: 4; /* 3. Use a more readable tab size (opinionated). */\n\ttab-size: 4; /* 3 */\n}\n\n/*\nSections\n========\n*/\n\nbody {\n\tmargin: 0; /* Remove the margin in all browsers. */\n}\n\n/*\nGrouping content\n================\n*/\n\n/**\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n*/\n\nhr {\n\theight: 0; /* 1 */\n\tcolor: inherit; /* 2 */\n}\n\n/*\nText-level semantics\n====================\n*/\n\n/**\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr[title] {\n\ttext-decoration: underline dotted;\n}\n\n/**\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n\tfont-weight: bolder;\n}\n\n/**\n1. Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n2. Correct the odd 'em' font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n\tfont-family:\n\t\tui-monospace,\n\t\tSFMono-Regular,\n\t\tConsolas,\n\t\t'Liberation Mono',\n\t\tMenlo,\n\t\tmonospace; /* 1 */\n\tfont-size: 1em; /* 2 */\n}\n\n/**\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n\tfont-size: 80%;\n}\n\n/**\nPrevent 'sub' and 'sup' elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n\tfont-size: 75%;\n\tline-height: 0;\n\tposition: relative;\n\tvertical-align: baseline;\n}\n\nsub {\n\tbottom: -0.25em;\n}\n\nsup {\n\ttop: -0.5em;\n}\n\n/*\nTabular data\n============\n*/\n\n/**\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n*/\n\ntable {\n\ttext-indent: 0; /* 1 */\n\tborder-color: inherit; /* 2 */\n}\n\n/*\nForms\n=====\n*/\n\n/**\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n\tfont-family: inherit; /* 1 */\n\tfont-size: 100%; /* 1 */\n\tline-height: 1.15; /* 1 */\n\tmargin: 0; /* 2 */\n}\n\n/**\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n\ttext-transform: none;\n}\n\n/**\nCorrect the inability to style clickable types in iOS and Safari.\n*/\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n\t-webkit-appearance: button;\n}\n\n/**\nRemove the inner border and padding in Firefox.\n*/\n\n::-moz-focus-inner {\n\tborder-style: none;\n\tpadding: 0;\n}\n\n/**\nRestore the focus styles unset by the previous rule.\n*/\n\n:-moz-focusring {\n\toutline: 1px dotted ButtonText;\n}\n\n/**\nRemove the additional ':invalid' styles in Firefox.\nSee: https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737\n*/\n\n:-moz-ui-invalid {\n\tbox-shadow: none;\n}\n\n/**\nRemove the padding so developers are not caught out when they zero out 'fieldset' elements in all browsers.\n*/\n\nlegend {\n\tpadding: 0;\n}\n\n/**\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n\tvertical-align: baseline;\n}\n\n/**\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n\theight: auto;\n}\n\n/**\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n\t-webkit-appearance: textfield; /* 1 */\n\toutline-offset: -2px; /* 2 */\n}\n\n/**\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n\t-webkit-appearance: none;\n}\n\n/**\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to 'inherit' in Safari.\n*/\n\n::-webkit-file-upload-button {\n\t-webkit-appearance: button; /* 1 */\n\tfont: inherit; /* 2 */\n}\n\n/*\nInteractive\n===========\n*/\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n\tdisplay: list-item;\n}\n","",{version:3,sources:["webpack://./node_modules/modern-normalize/modern-normalize.css"],names:[],mappings:"AAAA,8FAA8F;;AAE9F;;;CAGC;;AAED;;CAEC;;AAED;;;CAGC,sBAAsB;AACvB;;AAEA;CACC,sHAAsH;CACtH;;;;;;;;kBAQiB;CACjB,iBAAiB,EAAE,gDAAgD;CACnE,8BAA8B,EAAE,0EAA0E;CAC1G,gBAAgB,EAAE,mDAAmD;CACrE,WAAW,EAAE,MAAM;AACpB;;AAEA;;;CAGC;;AAED;CACC,SAAS,EAAE,uCAAuC;AACnD;;AAEA;;;CAGC;;AAED;;;CAGC;;AAED;CACC,SAAS,EAAE,MAAM;CACjB,cAAc,EAAE,MAAM;AACvB;;AAEA;;;CAGC;;AAED;;CAEC;;AAED;CACC,iCAAiC;AAClC;;AAEA;;CAEC;;AAED;;CAEC,mBAAmB;AACpB;;AAEA;;;CAGC;;AAED;;;;CAIC;;;;;;WAMU,EAAE,MAAM;CAClB,cAAc,EAAE,MAAM;AACvB;;AAEA;;CAEC;;AAED;CACC,cAAc;AACf;;AAEA;;CAEC;;AAED;;CAEC,cAAc;CACd,cAAc;CACd,kBAAkB;CAClB,wBAAwB;AACzB;;AAEA;CACC,eAAe;AAChB;;AAEA;CACC,WAAW;AACZ;;AAEA;;;CAGC;;AAED;;;CAGC;;AAED;CACC,cAAc,EAAE,MAAM;CACtB,qBAAqB,EAAE,MAAM;AAC9B;;AAEA;;;CAGC;;AAED;;;CAGC;;AAED;;;;;CAKC,oBAAoB,EAAE,MAAM;CAC5B,eAAe,EAAE,MAAM;CACvB,iBAAiB,EAAE,MAAM;CACzB,SAAS,EAAE,MAAM;AAClB;;AAEA;;CAEC;;AAED;;CAEC,oBAAoB;AACrB;;AAEA;;CAEC;;AAED;;;;CAIC,0BAA0B;AAC3B;;AAEA;;CAEC;;AAED;CACC,kBAAkB;CAClB,UAAU;AACX;;AAEA;;CAEC;;AAED;CACC,8BAA8B;AAC/B;;AAEA;;;CAGC;;AAED;CACC,gBAAgB;AACjB;;AAEA;;CAEC;;AAED;CACC,UAAU;AACX;;AAEA;;CAEC;;AAED;CACC,wBAAwB;AACzB;;AAEA;;CAEC;;AAED;;CAEC,YAAY;AACb;;AAEA;;;CAGC;;AAED;CACC,6BAA6B,EAAE,MAAM;CACrC,oBAAoB,EAAE,MAAM;AAC7B;;AAEA;;CAEC;;AAED;CACC,wBAAwB;AACzB;;AAEA;;;CAGC;;AAED;CACC,0BAA0B,EAAE,MAAM;CAClC,aAAa,EAAE,MAAM;AACtB;;AAEA;;;CAGC;;AAED;;CAEC;;AAED;CACC,kBAAkB;AACnB",sourcesContent:["/*! modern-normalize v2.0.0 | MIT License | https://github.com/sindresorhus/modern-normalize */\n\n/*\nDocument\n========\n*/\n\n/**\nUse a better box model (opinionated).\n*/\n\n*,\n::before,\n::after {\n\tbox-sizing: border-box;\n}\n\nhtml {\n\t/* Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3) */\n\tfont-family:\n\t\tsystem-ui,\n\t\t'Segoe UI',\n\t\tRoboto,\n\t\tHelvetica,\n\t\tArial,\n\t\tsans-serif,\n\t\t'Apple Color Emoji',\n\t\t'Segoe UI Emoji';\n\tline-height: 1.15; /* 1. Correct the line height in all browsers. */\n\t-webkit-text-size-adjust: 100%; /* 2. Prevent adjustments of font size after orientation changes in iOS. */\n\t-moz-tab-size: 4; /* 3. Use a more readable tab size (opinionated). */\n\ttab-size: 4; /* 3 */\n}\n\n/*\nSections\n========\n*/\n\nbody {\n\tmargin: 0; /* Remove the margin in all browsers. */\n}\n\n/*\nGrouping content\n================\n*/\n\n/**\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n*/\n\nhr {\n\theight: 0; /* 1 */\n\tcolor: inherit; /* 2 */\n}\n\n/*\nText-level semantics\n====================\n*/\n\n/**\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr[title] {\n\ttext-decoration: underline dotted;\n}\n\n/**\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n\tfont-weight: bolder;\n}\n\n/**\n1. Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n2. Correct the odd 'em' font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n\tfont-family:\n\t\tui-monospace,\n\t\tSFMono-Regular,\n\t\tConsolas,\n\t\t'Liberation Mono',\n\t\tMenlo,\n\t\tmonospace; /* 1 */\n\tfont-size: 1em; /* 2 */\n}\n\n/**\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n\tfont-size: 80%;\n}\n\n/**\nPrevent 'sub' and 'sup' elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n\tfont-size: 75%;\n\tline-height: 0;\n\tposition: relative;\n\tvertical-align: baseline;\n}\n\nsub {\n\tbottom: -0.25em;\n}\n\nsup {\n\ttop: -0.5em;\n}\n\n/*\nTabular data\n============\n*/\n\n/**\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n*/\n\ntable {\n\ttext-indent: 0; /* 1 */\n\tborder-color: inherit; /* 2 */\n}\n\n/*\nForms\n=====\n*/\n\n/**\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n\tfont-family: inherit; /* 1 */\n\tfont-size: 100%; /* 1 */\n\tline-height: 1.15; /* 1 */\n\tmargin: 0; /* 2 */\n}\n\n/**\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n\ttext-transform: none;\n}\n\n/**\nCorrect the inability to style clickable types in iOS and Safari.\n*/\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n\t-webkit-appearance: button;\n}\n\n/**\nRemove the inner border and padding in Firefox.\n*/\n\n::-moz-focus-inner {\n\tborder-style: none;\n\tpadding: 0;\n}\n\n/**\nRestore the focus styles unset by the previous rule.\n*/\n\n:-moz-focusring {\n\toutline: 1px dotted ButtonText;\n}\n\n/**\nRemove the additional ':invalid' styles in Firefox.\nSee: https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737\n*/\n\n:-moz-ui-invalid {\n\tbox-shadow: none;\n}\n\n/**\nRemove the padding so developers are not caught out when they zero out 'fieldset' elements in all browsers.\n*/\n\nlegend {\n\tpadding: 0;\n}\n\n/**\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n\tvertical-align: baseline;\n}\n\n/**\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n\theight: auto;\n}\n\n/**\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n\t-webkit-appearance: textfield; /* 1 */\n\toutline-offset: -2px; /* 2 */\n}\n\n/**\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n\t-webkit-appearance: none;\n}\n\n/**\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to 'inherit' in Safari.\n*/\n\n::-webkit-file-upload-button {\n\t-webkit-appearance: button; /* 1 */\n\tfont: inherit; /* 2 */\n}\n\n/*\nInteractive\n===========\n*/\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n\tdisplay: list-item;\n}\n"],sourceRoot:""}]);const A=a},104:(n,e,t)=>{t.d(e,{A:()=>A});var o=t(354),r=t.n(o),i=t(314),a=t.n(i)()(r());a.push([n.id,".carousel-wrapper {\n    width: 100%;\n    height: 100%;\n\n    display: grid;\n    grid-template: 1fr 35px / 70px 1fr 70px;\n}\n\n\n.carousel-sidepanel {\n    grid-row: 1 / 2;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.carousel-arrow-button {\n    cursor: pointer;\n    outline: 0;\n    border: 0;\n    background: 0;\n    width: 40px;\n    height: 40px;\n    border-radius: 50%;\n    opacity: 0.6;\n    transition: 0.05s ease;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.carousel-arrow-button img {\n    filter: invert(98%) sepia(2%) saturate(1016%) hue-rotate(273deg) brightness(110%) contrast(74%);\n}\n\n.carousel-arrow-button:hover img {\n    filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(241deg) brightness(103%) contrast(103%);\n}\n\n.carousel-arrow-button:active img {\n    filter: invert(98%) sepia(2%) saturate(1016%) hue-rotate(273deg) brightness(110%) contrast(74%);\n}\n\n.carousel-arrow-button:hover {\n    opacity: 0.9;\n}\n\n\n.carousel-tape {\n    grid-row: 1 / 2;\n    grid-column: 2;\n\n    overflow-x: scroll;\n    overflow-y: hidden;\n    scrollbar-width: none;\n    scroll-behavior: smooth;\n\n    display: flex;\n    flex-wrap: nowrap;\n    align-items: center;\n    gap: 50px;\n}\n\n\n.carousel-nav {\n    grid-row: 2;\n    grid-column: 2 / 3;\n\n    display: flex;\n    justify-content: center;\n    align-items: end;\n    gap: 13px;\n}\n\n.carousel-nav-button {\n    outline: 0;\n    border: 0;\n    width: 12px;\n    height: 12px;\n    border-radius: 50%;\n    opacity: 0.6;\n    background-color: #dedede;\n    transition: 0.05s ease;\n}\n\n.carousel-nav-button.selected {\n    opacity: 0.9;\n    background-color: white;\n}\n\n\n.carousel-image-container {\n    height: 100%;\n    width: 100%;\n    flex-shrink: 0;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.carousel-image {\n    border-radius: 12px;\n    max-height: 100%;\n    max-width: 100%;\n}","",{version:3,sources:["webpack://./src/Carousel/carousel.css"],names:[],mappings:"AAAA;IACI,WAAW;IACX,YAAY;;IAEZ,aAAa;IACb,uCAAuC;AAC3C;;;AAGA;IACI,eAAe;;IAEf,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,UAAU;IACV,SAAS;IACT,aAAa;IACb,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,YAAY;IACZ,sBAAsB;;IAEtB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,+FAA+F;AACnG;;AAEA;IACI,gGAAgG;AACpG;;AAEA;IACI,+FAA+F;AACnG;;AAEA;IACI,YAAY;AAChB;;;AAGA;IACI,eAAe;IACf,cAAc;;IAEd,kBAAkB;IAClB,kBAAkB;IAClB,qBAAqB;IACrB,uBAAuB;;IAEvB,aAAa;IACb,iBAAiB;IACjB,mBAAmB;IACnB,SAAS;AACb;;;AAGA;IACI,WAAW;IACX,kBAAkB;;IAElB,aAAa;IACb,uBAAuB;IACvB,gBAAgB;IAChB,SAAS;AACb;;AAEA;IACI,UAAU;IACV,SAAS;IACT,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,YAAY;IACZ,yBAAyB;IACzB,sBAAsB;AAC1B;;AAEA;IACI,YAAY;IACZ,uBAAuB;AAC3B;;;AAGA;IACI,YAAY;IACZ,WAAW;IACX,cAAc;;IAEd,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,mBAAmB;IACnB,gBAAgB;IAChB,eAAe;AACnB",sourcesContent:[".carousel-wrapper {\n    width: 100%;\n    height: 100%;\n\n    display: grid;\n    grid-template: 1fr 35px / 70px 1fr 70px;\n}\n\n\n.carousel-sidepanel {\n    grid-row: 1 / 2;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.carousel-arrow-button {\n    cursor: pointer;\n    outline: 0;\n    border: 0;\n    background: 0;\n    width: 40px;\n    height: 40px;\n    border-radius: 50%;\n    opacity: 0.6;\n    transition: 0.05s ease;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.carousel-arrow-button img {\n    filter: invert(98%) sepia(2%) saturate(1016%) hue-rotate(273deg) brightness(110%) contrast(74%);\n}\n\n.carousel-arrow-button:hover img {\n    filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(241deg) brightness(103%) contrast(103%);\n}\n\n.carousel-arrow-button:active img {\n    filter: invert(98%) sepia(2%) saturate(1016%) hue-rotate(273deg) brightness(110%) contrast(74%);\n}\n\n.carousel-arrow-button:hover {\n    opacity: 0.9;\n}\n\n\n.carousel-tape {\n    grid-row: 1 / 2;\n    grid-column: 2;\n\n    overflow-x: scroll;\n    overflow-y: hidden;\n    scrollbar-width: none;\n    scroll-behavior: smooth;\n\n    display: flex;\n    flex-wrap: nowrap;\n    align-items: center;\n    gap: 50px;\n}\n\n\n.carousel-nav {\n    grid-row: 2;\n    grid-column: 2 / 3;\n\n    display: flex;\n    justify-content: center;\n    align-items: end;\n    gap: 13px;\n}\n\n.carousel-nav-button {\n    outline: 0;\n    border: 0;\n    width: 12px;\n    height: 12px;\n    border-radius: 50%;\n    opacity: 0.6;\n    background-color: #dedede;\n    transition: 0.05s ease;\n}\n\n.carousel-nav-button.selected {\n    opacity: 0.9;\n    background-color: white;\n}\n\n\n.carousel-image-container {\n    height: 100%;\n    width: 100%;\n    flex-shrink: 0;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.carousel-image {\n    border-radius: 12px;\n    max-height: 100%;\n    max-width: 100%;\n}"],sourceRoot:""}]);const A=a},270:(n,e,t)=>{t.d(e,{A:()=>A});var o=t(354),r=t.n(o),i=t(314),a=t.n(i)()(r());a.push([n.id,".dropdown-wrapper {\n    --btn-height: 38px;\n    --btn-padding: 4px 12px;\n    --btn-bg: #f0f0f0;\n    --btn-hover-bg: #e0e0e0;\n    --btn-active-bg: #d0d0d0;\n    --btn-border-radius: 8px;\n    --btn-font-family: inherit;\n    --btn-font-size: 15px;\n\n    position: relative;\n    display: flex;\n}\n\n.dropdown-show-button {\n    height: var(--btn-height);\n    text-wrap: nowrap;\n    background-color: var(--btn-bg);\n    border: 0;\n    border-radius: var(--btn-border-radius);\n    padding: var(--btn-padding);\n    font-family: var(--btn-font-family);\n    font-size: var(--btn-font-size);\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n    gap: 6px;\n}\n\n.dropdown-icon {\n    height: calc(var(--btn-height) / 2);\n    width: auto;\n}\n\n.dropdown-options-list {\n    margin: 0;\n    padding: 0;\n    position: absolute;\n    left: 0;\n    top: calc(var(--btn-height) + 8px);\n    overflow: auto;\n    min-width: 100%;\n    list-style-type: none;\n    display: flex;\n    flex-direction: column;\n    background-color: var(--btn-bg);\n    border: 0;\n    border-radius: var(--btn-border-radius);\n    z-index: 1000;\n}\n\n.dropdown-option-button {\n    text-wrap: nowrap;\n    width: 100%;\n    height: var(--btn-height);\n    background-color: var(--btn-bg);\n    border: none;\n    padding: var(--btn-padding);\n    font-family: var(--btn-font-family);\n    font-size: var(--btn-font-size);\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n    gap: 8px;\n}\n\n.dropdown-option-button:hover {\n    background-color: var(--btn-hover-bg);\n}\n\n.dropdown-option-button:active {\n    background-color: var(--btn-active-bg);\n}\n\n.dropdown-option-icon {\n    height: calc(var(--btn-height) / 2);\n    width: auto;\n}","",{version:3,sources:["webpack://./src/Dropdown/dropdown.css"],names:[],mappings:"AAAA;IACI,kBAAkB;IAClB,uBAAuB;IACvB,iBAAiB;IACjB,uBAAuB;IACvB,wBAAwB;IACxB,wBAAwB;IACxB,0BAA0B;IAC1B,qBAAqB;;IAErB,kBAAkB;IAClB,aAAa;AACjB;;AAEA;IACI,yBAAyB;IACzB,iBAAiB;IACjB,+BAA+B;IAC/B,SAAS;IACT,uCAAuC;IACvC,2BAA2B;IAC3B,mCAAmC;IACnC,+BAA+B;IAC/B,eAAe;IACf,aAAa;IACb,mBAAmB;IACnB,QAAQ;AACZ;;AAEA;IACI,mCAAmC;IACnC,WAAW;AACf;;AAEA;IACI,SAAS;IACT,UAAU;IACV,kBAAkB;IAClB,OAAO;IACP,kCAAkC;IAClC,cAAc;IACd,eAAe;IACf,qBAAqB;IACrB,aAAa;IACb,sBAAsB;IACtB,+BAA+B;IAC/B,SAAS;IACT,uCAAuC;IACvC,aAAa;AACjB;;AAEA;IACI,iBAAiB;IACjB,WAAW;IACX,yBAAyB;IACzB,+BAA+B;IAC/B,YAAY;IACZ,2BAA2B;IAC3B,mCAAmC;IACnC,+BAA+B;IAC/B,eAAe;IACf,aAAa;IACb,mBAAmB;IACnB,QAAQ;AACZ;;AAEA;IACI,qCAAqC;AACzC;;AAEA;IACI,sCAAsC;AAC1C;;AAEA;IACI,mCAAmC;IACnC,WAAW;AACf",sourcesContent:[".dropdown-wrapper {\n    --btn-height: 38px;\n    --btn-padding: 4px 12px;\n    --btn-bg: #f0f0f0;\n    --btn-hover-bg: #e0e0e0;\n    --btn-active-bg: #d0d0d0;\n    --btn-border-radius: 8px;\n    --btn-font-family: inherit;\n    --btn-font-size: 15px;\n\n    position: relative;\n    display: flex;\n}\n\n.dropdown-show-button {\n    height: var(--btn-height);\n    text-wrap: nowrap;\n    background-color: var(--btn-bg);\n    border: 0;\n    border-radius: var(--btn-border-radius);\n    padding: var(--btn-padding);\n    font-family: var(--btn-font-family);\n    font-size: var(--btn-font-size);\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n    gap: 6px;\n}\n\n.dropdown-icon {\n    height: calc(var(--btn-height) / 2);\n    width: auto;\n}\n\n.dropdown-options-list {\n    margin: 0;\n    padding: 0;\n    position: absolute;\n    left: 0;\n    top: calc(var(--btn-height) + 8px);\n    overflow: auto;\n    min-width: 100%;\n    list-style-type: none;\n    display: flex;\n    flex-direction: column;\n    background-color: var(--btn-bg);\n    border: 0;\n    border-radius: var(--btn-border-radius);\n    z-index: 1000;\n}\n\n.dropdown-option-button {\n    text-wrap: nowrap;\n    width: 100%;\n    height: var(--btn-height);\n    background-color: var(--btn-bg);\n    border: none;\n    padding: var(--btn-padding);\n    font-family: var(--btn-font-family);\n    font-size: var(--btn-font-size);\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n    gap: 8px;\n}\n\n.dropdown-option-button:hover {\n    background-color: var(--btn-hover-bg);\n}\n\n.dropdown-option-button:active {\n    background-color: var(--btn-active-bg);\n}\n\n.dropdown-option-icon {\n    height: calc(var(--btn-height) / 2);\n    width: auto;\n}"],sourceRoot:""}]);const A=a},208:(n,e,t)=>{t.d(e,{A:()=>A});var o=t(354),r=t.n(o),i=t(314),a=t.n(i)()(r());a.push([n.id,"body {\n    background-color: #252526;\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n}\n\nsection {\n    padding: 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 100px;\n}\n\n#dropdowns {\n    height: 200px;\n    padding: 200px;\n}\n\n#carousel {\n    height: 500px;\n}\n\n.carousel-wrapper {\n    width: 800px;\n}","",{version:3,sources:["webpack://./src/style.css"],names:[],mappings:"AAAA;IACI,yBAAyB;IACzB,aAAa;IACb,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,UAAU;IACV,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,UAAU;AACd;;AAEA;IACI,aAAa;IACb,cAAc;AAClB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,YAAY;AAChB",sourcesContent:["body {\n    background-color: #252526;\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n}\n\nsection {\n    padding: 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 100px;\n}\n\n#dropdowns {\n    height: 200px;\n    padding: 200px;\n}\n\n#carousel {\n    height: 500px;\n}\n\n.carousel-wrapper {\n    width: 800px;\n}"],sourceRoot:""}]);const A=a},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(o)for(var A=0;A<this.length;A++){var s=this[A][0];null!=s&&(a[s]=!0)}for(var c=0;c<n.length;c++){var l=[].concat(n[c]);o&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),e.push(l))}},e}},354:n=>{n.exports=function(n){var e=n[1],t=n[3];if(!t)return e;if("function"==typeof btoa){var o=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),i="/*# ".concat(r," */");return[e].concat([i]).join("\n")}return[e].join("\n")}},72:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var i={},a=[],A=0;A<n.length;A++){var s=n[A],c=o.base?s[0]+o.base:s[0],l=i[c]||0,d="".concat(c," ").concat(l);i[c]=l+1;var p=t(d),u={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(u);else{var h=r(u,o);o.byIndex=A,e.splice(A,0,{identifier:d,updater:h,references:1})}a.push(d)}return a}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var i=o(n=n||[],r=r||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var A=t(i[a]);e[A].references--}for(var s=o(n,r),c=0;c<i.length;c++){var l=t(i[c]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}i=s}}},659:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={id:o,exports:{}};return n[o](i,i.exports,t),i.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&(!n||!/^http(s?):/.test(n));)n=o[r--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.nc=void 0;var o=t(72),r=t.n(o),i=t(825),a=t.n(i),A=t(659),s=t.n(A),c=t(56),l=t.n(c),d=t(540),p=t.n(d),u=t(113),h=t.n(u),C=t(288),b={};b.styleTagTransform=h(),b.setAttributes=l(),b.insert=s().bind(null,"head"),b.domAPI=a(),b.insertStyleElement=p(),r()(C.A,b),C.A&&C.A.locals&&C.A.locals;var g=t(270),f={};f.styleTagTransform=h(),f.setAttributes=l(),f.insert=s().bind(null,"head"),f.domAPI=a(),f.insertStyleElement=p(),r()(g.A,f),g.A&&g.A.locals&&g.A.locals;const m=t.p+"7c3bd4beab414bf074b0.svg",v=t.p+"da1d4548b671a011dfa4.svg";class B{constructor(n,e=!1){const t=this.getElements(n);this.addClasses(t),this.optionsList=t.optionsList,this.showButtonIcon=t.showButtonIcon,this.hide(),t.showButton.addEventListener(e?"mouseover":"click",(()=>this.toggle()))}getElements(n){const e=n.querySelector("button"),t=document.createElement("img");t.src=v,e.appendChild(t);const o=n.querySelector("ol"),r=o.querySelectorAll("button"),i=o.querySelectorAll("img");return{wrapper:n,showButton:e,showButtonIcon:t,optionsList:o,optionButtons:r,optionIcons:i}}addClasses(n){n.wrapper.classList.add("dropdown-wrapper"),n.showButton.classList.add("dropdown-show-button"),n.showButtonIcon.classList.add("dropdown-icon"),n.optionsList.classList.add("dropdown-options-list");const e=n.optionsList.querySelectorAll("button"),t=n.optionsList.querySelectorAll("img");for(const n of e)n.classList.add("dropdown-option-button");for(const n of t)n.classList.add("dropdown-option-icon")}hide(){this.optionsList.style.display="none",this.showButtonIcon.src=v,this.visible=!1}show(){this.optionsList.style.display="flex",this.showButtonIcon.src=m,this.visible=!0}toggle(){this.visible?this.hide():this.show()}}var w=t(104),y={};y.styleTagTransform=h(),y.setAttributes=l(),y.insert=s().bind(null,"head"),y.domAPI=a(),y.insertStyleElement=p(),r()(w.A,y),w.A&&w.A.locals&&w.A.locals;const I=t.p+"36bec1667db89cdb26a7.svg",E=t.p+"16e447b4597e29038bb9.svg";class x{constructor(n,e=!0){this.wrapper=n,this.images=x.getImageArray(n),this.setUpHTML(this.images),this.setUpEventListeners(),this.pos=0,this.cycling=!!e,this.selectImage(this.pos),setTimeout((()=>this.cycle()),5e3)}static getImageArray(n){return[...n.querySelectorAll("img")]}setUpHTML(n){this.wrapper.classList.add("carousel-wrapper");let e="";n.forEach(((n,t)=>{const o=`\n      <div class="carousel-image-container" data-pos="${t}">\n        <img src="${n.src}" class="carousel-image" alt="${n.alt||""}">\n      </div>`;e+=o}));let t="";for(let e=0;e<n.length;e++)t+=`\n      <button class="carousel-nav-button" data-pos="${e}"></button>\n      `;this.wrapper.innerHTML=`\n    <div class="carousel-sidepanel">\n      <button class="carousel-back carousel-arrow-button">\n        <img src=${I}>\n      </button>\n    </div>\n\n    <div class="carousel-tape">\n      ${e}\n    </div>\n\n    <div class="carousel-nav">\n      ${t}\n    </div>\n\n    <div class="carousel-sidepanel">\n      <button class="carousel-forward carousel-arrow-button">\n        <img src=${E}>\n      </button>\n    </div>\n    `,this.tape=this.wrapper.querySelector(".carousel-tape"),this.nav=this.wrapper.querySelector(".carousel-nav")}setUpEventListeners(){this.wrapper.querySelector(".carousel-back").addEventListener("click",(()=>{this.cycling=!1,this.previous()})),this.wrapper.querySelector(".carousel-forward").addEventListener("click",(()=>{this.cycling=!1,this.next()}));const n=this.wrapper.querySelectorAll(".carousel-nav-button");for(const e of n)e.addEventListener("click",(n=>{this.cycling=!1,this.pos=parseInt(n.target.dataset.pos,10),this.selectImage(this.pos)}))}selectImage(n){this.selectedNav&&this.selectedNav.classList.remove("selected"),this.selectedNav=this.nav.querySelector(`[data-pos="${n}"]`),this.selectedNav.classList.add("selected"),this.tape.querySelector(`[data-pos="${n}"]`).scrollIntoView()}next(){this.pos===this.images.length-1?this.pos=0:this.pos+=1,this.selectImage(this.pos)}previous(){0===this.pos?this.pos=this.images.length-1:this.pos-=1,this.selectImage(this.pos)}cycle(){this.cycling&&(this.next(),setTimeout((()=>this.cycle()),5e3))}}var S=t(208),k={};k.styleTagTransform=h(),k.setAttributes=l(),k.insert=s().bind(null,"head"),k.domAPI=a(),k.insertStyleElement=p(),r()(S.A,k),S.A&&S.A.locals&&S.A.locals;const z=t.p+"858ace2a4655551cffb8.svg",M=t.p+"115651d7dbbc4fdf9b67.jpg",j=t.p+"76af34600e24abfdece7.jpg",L=t.p+"acd35576f605bac2d02c.jpg",D=t.p+"ba0885579847ff78ecb3.jpg",T=t.p+"ab71bee636ef05bca25d.jpg",U=t.p+"8d833eef1280d29ad36c.jpg";document.addEventListener("DOMContentLoaded",(()=>{const n=document.querySelectorAll(".placeholder-icon");for(const e of n)e.src=z;const e=document.querySelectorAll(".dropdown-wrapper");new B(e[0]),new B(e[1],!0);const t=document.querySelector(".carousel-wrapper"),o=[M,j,L,D,T,U];for(const n of o){const e=document.createElement("img");e.src=n,t.appendChild(e)}new x(t)}))})();