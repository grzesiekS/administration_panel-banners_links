import { select } from './settings.js';
import { SideBar } from './components/SideBar.js';
import { GeneralStatistic } from './components/GeneralStatistic.js';
import { ModalLogin } from './components/ModalLogin.js';
import { TopMenu } from './components/TopMenu.js';
import { MyChart } from './components/MyChart.js';

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

  initModalLogin: function() {
    const thisApp = this;

    thisApp.modalWrapper = document.getElementById(select.containerOf.modals);
    new ModalLogin(thisApp.modalWrapper);

  },

  initTopMenu: function() {

    new TopMenu();

  },

  initChart: function() {
    new MyChart();
  },

  init: function() {
    const thisApp = this;

    thisApp.initSideBar();
    thisApp.initGeneralStatistic();
    thisApp.initModalLogin();
    thisApp.initTopMenu();
    thisApp.initChart();
  },
};

app.init();
