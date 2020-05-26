import { select } from '../settings.js';

class SideBar {
  constructor(element) {
    const thisSideBar = this;

    thisSideBar.getElemenst(element);
    thisSideBar.initActions();
  }

  initActions() {
    const thisSideBar = this;

    thisSideBar.dom.logo.link.addEventListener('click', function(){
      event.preventDefault();
    });
  }

  getElemenst(element) {
    const thisSideBar = this;

    thisSideBar.dom = {};
    thisSideBar.dom.wrapper = element;

    thisSideBar.dom.logo = thisSideBar.dom.wrapper.querySelector(select.sideBarSection.logo);
    thisSideBar.dom.logo.link = thisSideBar.dom.logo.querySelector('a');
    console.log(thisSideBar.dom.logo.link);
  }
}

export {SideBar};
