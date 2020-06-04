import { Modals } from './Modals.js';
import {select} from '../settings.js';

class ModalLogin extends Modals {
  constructor(element){
    super(element);

    const thisModal = this;
    thisModal.getElements();
    thisModal.initActions();
  }

  initActions() {
    const thisModal = this;

    thisModal.dom.submitButton.addEventListener('click', function(){
      event.preventDefault();
      /*START IF: If login and password are valid */
      if(thisModal.validLogin() && thisModal.validPassword) {
        thisModal.closeModal(thisModal.dom.login);
      }

    });
  }

  validLogin(){
    const thisModal = this;

    /* START IF: If length of login is greater then 0 */
    if(thisModal.dom.inputLogin.value.length > 0) {
      return true;
    } else {
      return false;
    }
  }

  validPassword(){
    const thisModal = this;

    /* START IF: If length of login is greater then 0 */
    if(thisModal.dom.inputPassword.value.length > 0) {
      return true;
    } else {
      return false;
    }
  }

  getElements() {
    const thisModal = this;

    thisModal.dom.login = thisModal.dom.wrapper.querySelector(select.modalSections.modalLogin);
    thisModal.dom.inputLogin = thisModal.dom.wrapper.querySelector(select.modalSections.modalLogin_login);
    thisModal.dom.inputPassword = thisModal.dom.wrapper.querySelector(select.modalSections.modalLogin_password);
    thisModal.dom.submitButton = thisModal.dom.wrapper.querySelector(select.modalSections.modalLogin_submit);
  }
}

export {ModalLogin};
