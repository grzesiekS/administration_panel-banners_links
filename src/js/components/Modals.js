class Modals {
  constructor(element){
    const thisModal = this;

    thisModal.getElements(element);

  }

  getElements(element) {
    const thisModal = this;

    thisModal.dom = {};
    thisModal.dom.wrapper = element;

    console.log(thisModal.dom.wrapper);
  }
}

export {Modals};
