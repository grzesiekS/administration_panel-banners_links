import { select, classNames } from '../settings.js';

class Modals {
  constructor(element){
    const thisModal = this;

    thisModal.getElements(element);
    thisModal.initActions();

  }

  initActions() {
    const thisModal = this;

    /* Close modal by clicking background of overlay */
    document.querySelector('#' + select.containerOf.modals).addEventListener('click', function(e) {
      if(e.target === this) {
        thisModal.closeModal();
      }
    });

    thisModal.topMenuLinks.forEach(element => {
      element.addEventListener('click', function(){
        event.preventDefault();
        thisModal.openModal('#modal__' + element.getAttribute('href').replace('#',''));
      });
    });
  }

  closeModal() {
    const thisModal = this;
    thisModal.dom.wrapper.classList.remove(classNames.modals.show);
  }

  openModal(modal) {
    const thisModal = this;

    document.querySelectorAll('#overlay > *').forEach(function(modal) {
      modal.classList.remove(classNames.modals.show);
    });

    /*[DONE] Get selected modal */
    const selectedModal = document.querySelector(modal);

    /*START IF: If selected modal is not null */
    if(selectedModal != null) {
      /*[DONE] Add show class to selected modal */
      selectedModal.classList.add(classNames.modals.show);

      /*[DONE] Add show class for overlay class */
      thisModal.dom.wrapper.classList.add(classNames.modals.show);

    /*END IF: If selected modal is not null */
    }
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
