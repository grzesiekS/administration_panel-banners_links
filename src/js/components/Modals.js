import { classNames } from '../settings.js';

class Modals {
  constructor(elementWrapper){
    const thisModal = this;

    thisModal.dom = {};
    thisModal.dom.wrapper = elementWrapper;

  }

  // initActions() {
  //   const thisModal = this;

  //   thisModal.topMenuLinks.forEach(element => {
  //     element.addEventListener('click', function(){
  //       event.preventDefault();
  //       thisModal.openModal('#modal__' + element.getAttribute('href').replace('#',''));
  //     });
  //   });
  // }

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
}

export {Modals};
