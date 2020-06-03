import { select } from './settings.js';
import { SideBar } from './components/SideBar.js';
import { GeneralStatistic } from './components/GeneralStatistic.js';
import { Modals } from './components/Modals.js';

const app = {
  initSideBar: function(){
    const thisApp = this;

    thisApp.sideBarWrapper = document.querySelector(select.containerOf.sideBar);

    new SideBar(thisApp.sideBarWrapper);
  },

  initGeneralStatistic: function() {
    const thisApp = this;

    thisApp.generalStatisticWrapper = document.querySelector(select.containerOf.generalStatistic);

    new GeneralStatistic(thisApp.generalStatisticWrapper);
  },

  initModals: function() {
    const thisApp = this;

    thisApp.modalWrapper = document.getElementById(select.containerOf.modals);

    new Modals(thisApp.modalWrapper);
  },

  init: function() {
    const thisApp = this;

    thisApp.initSideBar();
    thisApp.initGeneralStatistic();
    thisApp.initModals();
  },
};

app.init();
