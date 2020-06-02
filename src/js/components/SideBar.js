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
        thisSideBar.removeActiveClassFromSections();
        thisSideBar.setActiveClassForSection(link);
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

  setActiveClassForSection(link){
    const thisSideBar = this;

    /*[DONE] get href attribute from link */
    const hrefAtt = link.getAttribute('href');

    /*[DONE] create array from href atribute*/
    const hrefArray = hrefAtt.split('/');

    /*START LOOP: For all href in hrefArray */
    for(let href of hrefArray) {
      /*[DONE] get section that contains class from href attribute */
      const selectedSection = thisSideBar.sections.querySelector('section[class*="' + href.replace('#','') + '"]');

      /*START IF: if selected Section is not null*/
      if(selectedSection != null) {
        /*[DONE] Add active class to selected section */
        selectedSection.classList.add(classNames.sections.active);

      /*END IF: if selected Section is not null*/
      }

    /*END LOOP: For all href in hrefArray */
    }

    thisSideBar.addMarginTopClass();
  }

  removeActiveClassFromSections() {
    const thisSideBar = this;

    /*START LOOP: For all active sections */
    for(let section of thisSideBar.sections.active) {
      /* [DONE] remove active class */
      section.classList.remove(classNames.sections.active);

      /* [DONE] remove margin-top class */
      section.classList.remove(classNames.sections.margin_top);

    /*END LOOP: For all active sections */
    }
  }

  addMarginTopClass() {
    const thisSideBar = this;

    /*Add margin-top class */
    thisSideBar.sections.active[0].classList.add(classNames.sections.margin_top);
  }

  getElemenst(element) {
    const thisSideBar = this;

    thisSideBar.dom = {};
    thisSideBar.dom.wrapper = element;

    thisSideBar.dom.logo = thisSideBar.dom.wrapper.querySelector(select.sideBarSection.logo);
    thisSideBar.dom.logo.link = thisSideBar.dom.logo.querySelector('a');
    thisSideBar.dom.menu_links = thisSideBar.dom.wrapper.querySelectorAll(select.sideBarSection.menu_links);

    thisSideBar.sections = document.querySelector(select.containerOf.sections);
    thisSideBar.sections.active = thisSideBar.sections.querySelectorAll('section[class*="' + classNames.sections.active + '"]');
  }
}

export {SideBar};
