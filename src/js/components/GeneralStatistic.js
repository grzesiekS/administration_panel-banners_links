import { select, classNames } from '../settings.js';

class GeneralStatistic {
  constructor(element) {
    const thisGeneralStatistic = this;

    thisGeneralStatistic.getElement(element);
    thisGeneralStatistic.initActions();
  }

  initActions() {
    const thisGeneralStatistic = this;

    thisGeneralStatistic.inputCheckedActivTabButton();
  }

  inputCheckedActivTabButton() {
    const thisGeneralStatistic = this;

    /*START LOOP: for all  color tab buttons*/
    for(let tab of thisGeneralStatistic.dom.colorTabButtons){
      /*START IF: If tab button contain active class */
      if(tab.classList.contains(classNames.generalStatisticSection.active)) {
        /*[DONE] get the input from tab*/
        const input = tab.querySelector('input');

        /*[DONE] Change check of the input to true */
        input.checked = true;
      /*END IF: If tab button contain active class */
      } else {
        /*[DONE] get the input from tab*/
        const input = tab.querySelector('input');

        /*[DONE] Change check of the input to false */
        input.checked = false;
      }
    /*END LOOP: for all  color tab buttons*/
    }
  }

  getElement(element) {
    const thisGeneralStatistic = this;

    thisGeneralStatistic.dom = {};
    thisGeneralStatistic.dom.wrapper = element;

    thisGeneralStatistic.dom.colorTabButtons = thisGeneralStatistic.dom.wrapper.querySelectorAll(select.generalStatisticSection.colorTabButtons);
  }
}

export {GeneralStatistic};
