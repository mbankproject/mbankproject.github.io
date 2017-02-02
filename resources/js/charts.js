
window.addEventListener('load', function(event) {
  var deposit_charts = new Array(4).fill(null).map(function(item, index) {
    item = Highcharts.chart('deposit_chart'+(index+1), {
      chart: {
        type: 'line'
      },
      title: {
        text: 'Oprocentowanie'
      },
      xAxis: {
        title: {
          text: 'Miesiąc'
        }, labels: {
          formatter: function() {
            return this.value + '-miesiac'
          }
        }
      },
      yAxis: {
        title: {
          text: 'Oprocentowanie'
        }, labels: {
          formatter: function() {
            return this.value + ' %'
          }
        }
      },
      series:[{
        name: 'jan',
        data: new Array(20).fill(0).map(function(item, index) {
          return parseInt(Math.sin(index/1.25)*100)/100;
        }),
      }, {
        name: 'dzban',
        data: new Array(20).fill(0).map(function(item, index) {
          return parseInt(Math.cos(index/1.25)*100)/100;
        }),
      }, {
        name: 'huligan',
        data: new Array(20).fill(0).map(function(item, index) {
          return parseInt((Math.random()*2-1)*100)/100;
        }),
      }]
    });
  });


  var loan_charts = new Array(4).fill(null).map(function(item, index) {
    item = Highcharts.chart('loan_chart'+(index+1), {
      chart: {
        type: 'line'
      },
      title: {
        text: 'Oprocentowanie'
      },
      xAxis: {
        title: {
          text: 'Miesiąc'
        }, labels: {
          formatter: function() {
            return this.value + '-miesiac'
          }
        }
      },
      yAxis: {
        title: {
          text: 'Oprocentowanie'
        }, labels: {
          formatter: function() {
            return this.value + ' %'
          }
        }
      },
      series:[{
        name: 'jan',
        data: new Array(20).fill(0).map(function(item, index) {
          return parseInt((Math.random()*Math.sin(index+1)*2-1)*100)/100;
        }),
      }, {
        name: 'dzban',
        data: new Array(20).fill(0).map(function(item, index) {
          return parseInt((Math.random()*Math.sin(index+1)*2-1)*100)/100;
        }),
      }, {
        name: 'huligan',
        data: new Array(20).fill(0).map(function(item, index) {
          return parseInt((Math.random()*Math.sin(index+1)*2-1)*100)/100;
        }),
      }]
    });
  });

  var other_charts = new Array(4).fill(null).map(function(item, index) {
    item = Highcharts.chart('other_chart'+(index+1), {
      chart: {
        type: 'line'
      },
      title: {
        text: 'Oprocentowanie'
      },
      xAxis: {
        title: {
          text: 'Miesiąc'
        }, labels: {
          formatter: function() {
            return this.value + '-miesiac'
          }
        }
      },
      yAxis: {
        title: {
          text: 'Oprocentowanie'
        }, labels: {
          formatter: function() {
            return this.value + ' %'
          }
        }
      },
      series:[{
        name: 'jan',
        data: new Array(20).fill(0).map(function(item, index) {
          return Math.cos(Math.sin(Math.random()*Math.random()));
        }),
      }, {
        name: 'dzban',
        data: new Array(20).fill(0).map(function(item, index) {
          return Math.cos(Math.sin(Math.random()*Math.random()));
        }),
      }, {
        name: 'huligan',
        data: new Array(20).fill(0).map(function(item, index) {
          return Math.cos(Math.sin(Math.random()*Math.random()));
        }),
      }]
    });
  });
});
