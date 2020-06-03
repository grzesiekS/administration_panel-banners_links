const select = {
  containerOf: {
    sections: '.sections',
    topBar: '.top-bar',
    sideBar: '.side-bar',
    generalStatistic: '.general-statistic',
    modals: 'overlay',
  },
  sideBarSection: {
    logo: '.side-bar .logo',
    menu: '.side-bar__menu',
    menu_links: '.side-bar__menu li a',
    messenger: '.side-bar__messenger',
    bottomMenu: '.side-bar__menu--bottom',
  },
  generalStatisticSection: {
    dateInput: '.date__input',
    startDate: '.start-date',
    endDate: '.end-date',
    tabButtons: '.tab-buttons',
    colorTabButtons: '.color-tab',
  },
  modalSections: {
    modalLogin: 'modal__login',
  },
  topMenuComponent: {
    topMenu: '.top-menu',
    topMenuLinks: '.top-menu a',
  },
};

const classNames = {
  sideBarSection: {
    active: 'active',
  },
  generalStatisticSection: {
    active: 'active',
  },
  sections: {
    active: 'active',
    margin_top: 'margin-top',
  },
  modals: {
    show: 'show',
  },
};

const options = {
  widthMobile: 1024,
};

export {select, classNames, options};
