import { select } from '../settings.js';

class MyChart {
  constructor() {
    const thisMyChart = this;

    thisMyChart.chartOptions = {
      signups: false,
      ftd: false,
      earned: true,
    };

    thisMyChart.getElements();
    thisMyChart.renderChart();
    thisMyChart.initActions();
  }

  initActions() {
    const thisMyChart = this;

    thisMyChart.colorTab.forEach(element => {
      element.addEventListener('click', function(){
        thisMyChart.input.forEach(inputElement => {
          if(inputElement.checked) {
            thisMyChart.chartOptions[inputElement.value] = false;
          } else {
            thisMyChart.chartOptions[inputElement.value] = true;
          }
        });
        thisMyChart.chart.destroy();
        thisMyChart.renderChart();
      });
    });
  }

  renderChart() {
    const thisMyChart = this;
    const ctx = thisMyChart.myChart.getContext('2d');
    /*eslint-disable */
    thisMyChart.chart = new Chart(ctx, {
      // 1
      type: 'bar',
      data: {
        // 2
        labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
        // 3
        datasets: [{
          // 4
          label: 'Signups',
          // 5
          backgroundColor: '#8DBEC8',
          borderColor: '#8DBEC8',
          // 6
          data: [ 52, 51, 41, 94, 26, 6, 72, 9, 21, 88 ],
          hidden: thisMyChart.chartOptions.signups,
        },
        {
          label: 'FTD',
          backgroundColor: '#F29E4E',
          borderColor: '#F29E4E',
          data: [ 6, 72, 1, 0, 47, 11, 50, 44, 63, 76 ],
          hidden: thisMyChart.chartOptions.ftd,
        },
        {
          label: 'Earned',
          backgroundColor: '#71B374',
          borderColor: '#71B374',
          data: [ 59, 49, 68, 90, 67, 41, 13, 38, 48, 48 ],
          // 7
          hidden: thisMyChart.chartOptions.earned,
        }]
      },
      options: {
        legend: {
          display: false,
        },
      },
    });
    /*eslint-enable */
  }

  getElements() {
    const thisMyChart = this;

    thisMyChart.myChart = document.getElementById(select.chartComponent.myChart);
    thisMyChart.colorTab = document.querySelectorAll(select.chartComponent.colorTab);
    thisMyChart.input = document.querySelectorAll(select.chartComponent.colorTabInput);
  }
}

export {MyChart};
