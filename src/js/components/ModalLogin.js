import { Modals } from './Modals.js';
import {select} from '../settings.js';

class ModalLogin extends Modals {
  constructor(element){
    super(element);

    const thisModal = this;
    thisModal.getElements();
  }

  getElements() {
    const thisModal = this;

    thisModal.dom.login = thisModal.dom.wrapper.querySelector(select.modalSections.modalLogin);
    thisModal.dom.inputLogin = thisModal.dom.wrapper.querySelector(select.modalSections.modalLogin_login);
    console.log(thisModal.dom.inputLogin);
  }
}

export {ModalLogin};
