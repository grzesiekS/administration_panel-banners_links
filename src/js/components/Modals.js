import { classNames, select } from '../settings.js';

class Modals {
  constructor(elementWrapper){
    const thisModal = this;

    thisModal.dom = {};
    thisModal.dom.wrapper = elementWrapper;
  }

  closeModal() {
    document.getElementById(select.containerOf.modals).classList.remove(classNames.modals.show);
  }

  openModal(modal) {
    document.querySelectorAll('#overlay > *').forEach(function(modal) {
      modal.classList.remove(classNames.modals.show);
    });

    /*[DONE] Add show class to selected modal */
    modal.classList.add(classNames.modals.show);

    /*[DONE] Add show class for overlay class */
    document.getElementById(select.containerOf.modals).classList.add(classNames.modals.show);

    /*END IF: If selected modal is not null */
  }
}

export {Modals};
