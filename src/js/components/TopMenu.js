import { select } from '../settings.js';

class TopMenu {
  constructor() {
    const thisTopMenu = this;

    thisTopMenu.getElements();
    thisTopMenu.initActions();
  }

  initActions() {
    const thisTopMenu = this;

    thisTopMenu.links.forEach(element => {
      element.addEventListener('click', function(){
        console.log(element);
      });
    });
  }

  getElements() {
    const thisTopMenu = this;

    thisTopMenu.links = document.querySelectorAll(select.topMenuComponent.topMenuLinks);
  }
}

export {TopMenu};
