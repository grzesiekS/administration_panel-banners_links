import { Modals } from './Modals.js';
import { select } from '../settings.js';

class ModalExit extends Modals {
  constructor(element) {
    super(element);
    const thisModalExit = this;

    thisModalExit.openModal(element);
    thisModalExit.getElements();
    thisModalExit.initActions();
  }

  initActions() {
    const thisModalExit = this;

    thisModalExit.dom.closeButtons.forEach(element => {
      element.addEventListener('click', function(){
        event.preventDefault();
        thisModalExit.closeModal();
      });
    });
  }

  getElements() {
    const thisModalExit = this;

    thisModalExit.dom.closeButtons = thisModalExit.dom.wrapper.querySelectorAll(select.modalSections.modalCloseButton);
  }
}

export {ModalExit};
