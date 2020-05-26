import { select } from './settings.js';
import { SideBar } from './components/SideBar.js';

const app = {
  initSideBar: function(){
    const thisApp = this;

    thisApp.sideBarWrapper = document.querySelector(select.containerOf.sideBar);

    new SideBar(thisApp.sideBarWrapper);
  },

  init: function() {
    const thisApp = this;

    thisApp.initSideBar();
  },
};

app.init();
