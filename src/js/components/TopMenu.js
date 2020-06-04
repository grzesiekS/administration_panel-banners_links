class TopMenu {
  constructor(element) {
    const thisTopMenu = this;

    thisTopMenu.getElements(element);
  }

  getElements(element) {
    const thisTopMenu = this;

    thisTopMenu.dom = {};
    thisTopMenu.dom.wrapper = element;
  }
}

export {TopMenu};
