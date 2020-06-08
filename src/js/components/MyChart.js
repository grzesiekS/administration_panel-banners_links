import { select } from '../settings.js';

class MyChart {
  constructor() {
    const thisMyChart = this;

    thisMyChart.getElements();
  }

  getElements() {
    const thisMyChart = this;

    thisMyChart.myChart = document.getElementById(select.chartComponent.myChart);
    console.log(thisMyChart.myChart);
  }
}

export {MyChart};
