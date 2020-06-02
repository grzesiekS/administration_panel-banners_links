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

    /*START LOOP: for all links in side bar*/
    for(let link of thisSideBar.dom.menu_links) {
      link.addEventListener('click', function(){
        event.preventDefault();
        thisSideBar.removeActiveLinks();
        thisSideBar.setActiveLink(link);
      });
    /*END LOOP: for all links in side bar*/
    }

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

  setActiveLink(link) {
    /*[DONE] Add active class to link in side bar */
    link.classList.add(classNames.sideBarSection.active);
  }

  removeActiveLinks() {
    const thisSideBar = this;
    /*START LOOP: for all links in side bar */
    for(let link of thisSideBar.dom.menu_links) {
      /*[DONE] remove active class from link */
      link.classList.remove(classNames.sideBarSection.active);

    /*END LOOP: for all links in side bar */
    }
  }

  getElemenst(element) {
    const thisSideBar = this;

    thisSideBar.dom = {};
    thisSideBar.dom.wrapper = element;

    thisSideBar.dom.logo = thisSideBar.dom.wrapper.querySelector(select.sideBarSection.logo);
    thisSideBar.dom.logo.link = thisSideBar.dom.logo.querySelector('a');
    thisSideBar.dom.menu_links = thisSideBar.dom.wrapper.querySelectorAll(select.sideBarSection.menu_links);
  }
}

export {SideBar};
