var charts = [{
    chart: null,
    chartConfig: {
      name: 'Lokata progres - wykres oprocentowania',
      location: 'deposit_chart4',
      title: {text: 'Lokata progres - wykres oprocentowania'},
      xAxis: {
        title: {text: 'Miesiąc'},
        labels: {formatter: function() {return this.value+'-miesiąc'}}
      },
      yAxis:{
        title: {text: 'Oprocentowanie'},
        labels: {formatter: function() {return this.value+'%'}}
      },
      tooltip: {
        shared: true,
        crosshairs: true
      },
      series: [{
        name: '3-miesięczna',
        data: [0, 0.2, 0.4, 1.5]
      }, {
        name: '6-miesięczna',
        data: [0, 0.1, 0.2, 0.3, 0.5, 0.6, 2.5]
      }, {
        name: '12-miesięczna',
        data: [0, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 1, 1.2, 1.3, 2, 3]
      }]
    }
}];


function concatObjects() {
  var _ = {};
  for(var o of arguments) {
    for(var p in o) {
      _[p] = o[p];
    }
  }
  return _;
}

function createChart(location, additionalOptions = {}) {
  var options = concatObjects({
    chart: {type: 'line'},
    title: {text: 'Wykres zależności'},
    xAxis: {
      title: {text: 'x'}
    },
    yAxis: {
      title: {text: 'y'}
    },
    series: [{name: 'seria1', data: [0.1, 0.4, 0.9, 1.6]}]
  }, additionalOptions);
  return Highcharts.chart(location, options);
}

window.addEventListener('load', function() {
  charts.map(function(chart) {
    chart.chart = createChart(chart.chartConfig.location, chart.chartConfig);
  });
});
