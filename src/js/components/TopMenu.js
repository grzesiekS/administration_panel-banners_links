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
        thisTopMenu.findModal(element);
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

  getElements() {
    const thisTopMenu = this;

    thisTopMenu.links = document.querySelectorAll(select.topMenuComponent.topMenuLinks);
  }
}

export {TopMenu};
