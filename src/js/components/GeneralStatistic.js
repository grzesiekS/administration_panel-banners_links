class GeneralStatisitc {
  constructor(element) {
    const thisGeneralStatisitc = this;

    thisGeneralStatisitc.getElement(element);
  }

  getElement(element) {
    const thisGeneralStatisitc = this;

    thisGeneralStatisitc.dom = {};
    thisGeneralStatisitc.dom.wrapper = element;
  }
}

export {GeneralStatisitc};
