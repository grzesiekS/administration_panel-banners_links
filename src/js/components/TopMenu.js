import { select } from '../settings.js';

class TopMenu {
  constructor() {
    const thisTopMenu = this;

    thisTopMenu.getElements();
  }

  getElements() {
    const thisTopMenu = this;

    thisTopMenu.links = document.querySelectorAll(select.topMenuComponent.topMenuLinks);
    console.log(thisTopMenu.links);
  }
}

export {TopMenu};
