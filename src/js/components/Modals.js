import { select } from '../settings.js';

class Modals {
  constructor(element){
    const thisModal = this;

    thisModal.getElements(element);
    thisModal.initActions();

  }

  initActions() {
    const thisModal = this;

    thisModal.topMenuLinks.forEach(element => {
      element.addEventListener('click', function(){
        event.preventDefault();

      });
    });
  }

  getElements(element) {
    const thisModal = this;

    thisModal.dom = {};
    thisModal.dom.wrapper = element;

    thisModal.dom.login = thisModal.dom.wrapper.querySelector(select.modalSections.modalLogin);
    thisModal.topMenuLinks = document.querySelectorAll(select.topMenuComponent.topMenuLinks);
  }
}

export {Modals};
