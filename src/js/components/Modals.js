import { select } from '../settings.js';

class Modals {
  constructor(element){
    const thisModal = this;

    thisModal.getElements(element);
    thisModal.initActions();

  }

  initActions() {
    const thisModal = this;

    thisModal.closeModalBacground();

    thisModal.topMenuLinks.forEach(element => {
      element.addEventListener('click', function(){
        event.preventDefault();

      });
    });
  }

  closeModalBackground() {
    const thisModal = this;
    document.querySelector('#' + select.containerOf.modals).addEventListener('click', function(e) {
      if(e.target === this) {
        thisModal.closeModal();
      }
    });
  }

  closeModal() {
    const thisModal = this;
    thisModal.dom.wrapper.classList.remove('show');
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
