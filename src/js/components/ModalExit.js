import { Modals } from './Modals.js';
import { select } from '../settings.js';

class ModalExit extends Modals {
  constructor(element) {
    super(element);
    const thisModalExit = this;

    thisModalExit.openModal(element);
    thisModalExit.getElements();
  }

  getElements() {
    const thisModalExit = this;

    thisModalExit.dom.closeButton = thisModalExit.dom.wrapper.querySelectorAll(select.modalSections.modalCloseButton);
    console.log(thisModalExit.dom.closeButton);
  }
}

export {ModalExit};
