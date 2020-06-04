import { select } from '../settings.js';
import { ModalExit } from './ModalExit.js';

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
        thisTopMenu.openSelectedModal(thisTopMenu.findModal(element));
      });
    });
  }

  findModal(element){

    /*[DONE] Get href attribute from element */
    const href = element.getAttribute('href');

    /*[DONE] Find modal that contain in id href atribute */
    const modal = document.getElementById('modal__' + href.replace('#',''));

    return modal;
  }

  openSelectedModal(modal) {

    /*START IF: Modal is not null */
    if(modal != null){
      /* init class ModalExit */
      new ModalExit(modal);
    }
  }

  getElements() {
    const thisTopMenu = this;

    thisTopMenu.links = document.querySelectorAll(select.topMenuComponent.topMenuLinks);
  }
}

export {TopMenu};
