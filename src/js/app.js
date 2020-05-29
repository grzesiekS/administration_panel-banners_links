import { select } from './settings.js';
import { SideBar } from './components/SideBar.js';
import { GeneralStatisitc } from './components/GeneralStatistic.js';

const app = {
  initSideBar: function(){
    const thisApp = this;

    thisApp.sideBarWrapper = document.querySelector(select.containerOf.sideBar);

    new SideBar(thisApp.sideBarWrapper);
  },

  initGeneralStatistic: function() {
    const thisApp = this;

    thisApp.generalStatisticWrapper = document.querySelector(select.containerOf.generalStatistic);

    new GeneralStatisitc(thisApp.generalStatisticWrapper);
  },

  init: function() {
    const thisApp = this;

    thisApp.initSideBar();
    thisApp.initGeneralStatistic();
  },
};

app.init();
