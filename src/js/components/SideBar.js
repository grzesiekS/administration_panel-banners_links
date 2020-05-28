import { select, classNames, options } from '../settings.js';

class SideBar {
  constructor(element) {
    const thisSideBar = this;

    thisSideBar.getElemenst(element);
    thisSideBar.initActions();
  }

  initActions() {
    const thisSideBar = this;

    /*IF START: If widnow inner width is less or equall mobile width */
    if (window.innerWidth <= options.widthMobile) {
      /*[DONE] hide sidebar section */
      thisSideBar.hideSideBarSection();
    /*IF END: If widnow inner width is less or equall mobile width */
    }

    thisSideBar.dom.logo.link.addEventListener('click', function(){
      event.preventDefault();
      thisSideBar.showHideSideBarSection();
    });
  }

  showHideSideBarSection() {
    const thisSideBar = this;

    /*[DONE] toggle class active */
    thisSideBar.dom.wrapper.classList.toggle(classNames.sideBarSection.active);
  }

  hideSideBarSection() {
    const thisSideBar = this;

    /*[DONE] remove class active from side bar */
    thisSideBar.dom.wrapper.classList.remove(classNames.sideBarSection.active);
  }

  getElemenst(element) {
    const thisSideBar = this;

    thisSideBar.dom = {};
    thisSideBar.dom.wrapper = element;

    thisSideBar.dom.logo = thisSideBar.dom.wrapper.querySelector(select.sideBarSection.logo);
    thisSideBar.dom.logo.link = thisSideBar.dom.logo.querySelector('a');
  }
}

export {SideBar};
