import { Modals } from './Modals.js';

class ModalExit extends Modals {
  constructor(element) {
    super(element);
    const thisModalExit = this;

    thisModalExit.openModal(element);
  }
}

export {ModalExit};
