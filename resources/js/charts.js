var charts = [{
    chartConfig: {
      name: 'Lokata progres - wykres oprocentowania',
      location: 'progressInterest',
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
        name: '3-miesięczna - oprocentowanie nominalne',
        data: [0, 0.2, 0.4, 1.5]
      }, {
        name: '3-miesięczna - oprocentowanie rzeczywiste',
        data: [0, 0.017, 0.034, 0.125]
      }, {
        name: '6-miesięczna - oprocentowanie nominalne',
        data: [0, 0.1, 0.2, 0.3, 0.5, 0.6, 2.5]
      }, {
        name: '6-miesięczna - oprocentowanie rzeczywiste',
        data: [0, 0.008, 0.017, 0.025, 0.042, 0.05, 0.21]
      }, {
        name: '12-miesięczna - oprocentowanie nominalne',
        data: [0, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 1, 1.2, 1.3, 2, 3]
      }, {
        name: '12-miesięczna - oprocentowanie rzeczywiste',
        data: [0, 0.017, 0.025, 0.034, 0.042, 0.05, 0.059, 0.067, 0.083, 0.1, 0.11, 0.167, 0.25]
      }]
    }
  },{
      chartConfig: {
        name: 'Oprocentowanie konta oszczędnościowego',
        chart: {
          type: 'area'
        },
        location: 'other_chart3',
        title: {text: 'Oprocentowanie konta oszczędnościowego'},
        xAxis: {
          title: {text: 'Wkład'},
          labels: {formatter: function() {return this.value+'PLN'}}
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
          name: '0 - 49999.99PLN',
          data: [{x: 0, y: 0.5},
                 {x: 49999.99, y: 0.5}]
        },{
          name: '50000 - 99999.94PLN',
          data: [{x: 50000, y: 0.65},
                 {x: 99999.99, y: 0.65}]
          }, {
            name: '100000 - 199999.94PLN',
            data: [{x: 100000, y: 0.8},
                   {x: 199999.99, y: 0.8}]
          },{
            name: '200000PLN i więcej',
            data: [{x: 200000, y: 1},
                   {x: 213700, y: 1}]
          }
        ]
      }
    }, {
        chartConfig: {
          name: 'Oprocentowanie lokaty terminowej',
          chart: {
            type: 'line'
          },
          location: 'deposit_chart3',
          title: {text: 'Oprocentowanie lokaty terminowej'},
          xAxis: {
            title: {text: 'Wiek pojazdu'},
            labels: {formatter: function() {return this.value+' lat'}}
          },
          yAxis:{
            title: {text: 'Oprocentowanie'},
            labels: {formatter: function() {return this.value+'%'}}
          },
          tooltip: {
            pointFormat: '{series.name} - <b>{point.y}%</b><br>',
            shared: true,
            crosshairs: true
          },
          series: [{
            name: '2-miesięczna',
            data: (new Array(2)).fill(0).map(function(item, i) {return {x: i+1, y: 0.5}})
          },{
            name: '3-miesięczna',
            data: (new Array(3)).fill(0).map(function(item, i) {return {x: i+1, y: 0.7}})
            }, {
              name: '6-miesięczna',
              data: (new Array(6)).fill(0).map(function(item, i) {return {x: i+1, y: 0.7}})
            }, {
              name: '12-miesięczna',
              data: (new Array(12)).fill(0).map(function(item, i) {return {x: i+1, y: 0.7}})
            }, {
              name: '24-miesięczna',
              data: (new Array(24)).fill(0).map(function(item, i) {return {x: i+1, y: 1}})
            }
          ]
        }
      }, {
        chartConfig: {
          name: 'Oprocentowanie kredytu samochodowego',
          chart: {
            type: 'area'
          },
          location: 'loan_chart1',
          title: {text: 'Oprocentowanie kredytu samochodowego'},
          xAxis: {
            title: {text: 'Wiek pojazdu'},
            labels: {formatter: function() {return this.value+' lat'}}
          },
          yAxis:{
            title: {text: 'Oprocentowanie'},
            labels: {formatter: function() {return this.value+'%'}}
          },
          tooltip: {
            pointFormat: '{series.name} - <b>{point.y}%</b>',
            shared: true,
            crosshairs: true
          },
          series: [{
            name: 'nowy',
            data: [{x: 0, y: 5.39},
                   {x: 0.99, y: 5.39}]
          },{
            name: '1-3 lat',
            data: [{x: 1, y: 5.39},
                   {x: 2, y: 5.39},
                   {x: 3, y: 5.39},
                   {x: 3.99, y: 5.39}
                 ]
            }, {
              name: '4-6 lat',
              data: [{x: 4, y: 6.39},
                     {x: 5, y: 6.39},
                     {x: 6, y: 6.39},
                     {x: 6.99, y: 6.39}]
            },{
              name: '7-10 lat',
              data: [{x: 7, y: 7.39},
                     {x: 8, y: 7.39},
                     {x: 9, y: 7.39},
                     {x: 10, y: 7.39}]
            }
          ]
        }
      }, {
          chartConfig: {
            name: 'Wykres kwoty kredytu samochodowego',
            chart: {
              type: 'pie',
              options3d: {
                enabled: true,
                alpha: 50,
                beta: 0
              }
            },
            location: 'loan_chart1_2',
            title: {text: 'Wykres kwoty kredytu samochodowego'},
            tooltip: {
              pointFormat: '{point.y}PLN - <b>{point.percentage:.2f}% całości</b>',
              shared: true,
              crosshairs: true
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    depth: 35,
                    dataLabels: {
                        enabled: true,
                        format: '{point.name}'
                    }
                }
            },
            series: [{
              name: 'Przykład wyliczenia kosztów kredytu',
              colorByPoint: true,
              data: [{
                  name: 'całkowita kwota kredytu (bez kredytowanych kosztów)',
                  y: 53800
              }, {
                  name: 'odsetki',
                  y: 8515.51
              }, {
                  name: 'prowizja za udzielenie kredytu',
                  y: 3766.00,
                  sliced: true,
                  selected: true
              }]
          }]
        }
      }, {
          chartConfig: {
            name: 'Wykres kwoty kredytu gotówkowego',
            chart: {
              type: 'pie',
              options3d: {
                enabled: true,
                alpha: 50,
                beta: 0
              }
            },
            location: 'loan_chart2',
            title: {text: 'Wykres kwoty kredytu gotówkowego'},
            tooltip: {
              pointFormat: '{point.y}PLN - <b>{point.percentage:.2f}% całości</b>',
              shared: true,
              crosshairs: true
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    depth: 35,
                    dataLabels: {
                        enabled: true,
                        format: '{point.name}'
                    }
                }
            },
            series: [{
              name: 'Przykład wyliczenia kosztów kredytu',
              colorByPoint: true,
              data: [{
                  name: 'całkowita kwota kredytu (bez kredytowanych kosztów)',
                  y: 8800
              }, {
                  name: 'odsetki',
                  y: 1752.82,
              }, {
                  name: 'prowizja za udzielenie kredytu',
                  y: 1319.12,
                  sliced: true,
                  selected: true
              }]
          }]
        }
      }, {
          chartConfig: {
            name: 'Wykres mRaty',
            chart: {
              type: 'pie',
              options3d: {
                enabled: true,
                alpha: 50,
                beta: 0
              }
            },
            location: 'loan_chart3',
            title: {text: 'Wykres kwoty kredytu gotówkowego'},
            tooltip: {
              pointFormat: '{point.y}PLN - <b>{point.percentage:.2f}% całości</b>',
              shared: true,
              crosshairs: true
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    depth: 35,
                    dataLabels: {
                        enabled: true,
                        format: '{point.name}'
                    }
                }
            },
            series: [{
              name: 'Przykład wyliczenia kosztów kredytu',
              colorByPoint: true,
              data: [{
                  name: 'całkowita kwota kredytu (bez kredytowanych kosztów)',
                  y: 1500
              }, {
                  name: 'odsetki',
                  y: 84.12,
              }, {
                  name: 'prowizja za udzielenie kredytu',
                  y: 75,
                  sliced: true,
                  selected: true
              }]
          }]
        }
      }, {
      chartConfig: {
        name: '3.5% dla nowych klientów',
        location: 'deposit_chart1',
        title: {text: '3.5% dla nowych klientów'},
        xAxis: {
          title: {text: 'Wkład'},
          labels: {formatter: function() {return this.value+'PLN'}}
        },
        yAxis:{
          title: {text: 'Zarobek'},
          labels: {formatter: function() {return this.value+'PLN'}}
        },
        tooltip: {
          shared: true,
          crosshairs: true
        },
        series: [{
          name: 'Lokata 3.5%',
          data: [{x: 500, y: 503.54},
          {x: 1500, y: 1510.63},
          {x: 2000, y: 2014.18},
          {x: 2500, y: 2517.72},
          {x: 3000, y: 3021.26},
          {x: 3500, y: 3524.81},
          {x: 4000, y: 4028.35},
          {x: 4500, y: 4531.89},
          {x: 5000, y: 5035.44},
          {x: 5500, y: 5538.98},
          {x: 6000, y: 6042.53},
          {x: 6500, y: 6546.07},
          {x: 7000, y: 7049.61},
          {x: 7500, y: 7553.16},
          {x: 8000, y: 8056.70},
          {x: 8500, y: 8560.24},
          {x: 9000, y: 9063.79},
          {x: 9500, y: 9567.33},
          {x: 10000, y: 10070.88}]
        }]
      }
    }, {
    chartConfig: {
      name: 'Wysokość kapitału do spłaty dla rat stałych',
      location: 'loan_chart4',
      title: {text: 'Wysokość kapitału do spłaty dla rat malejących'},
      xAxis: {
        title: {text: 'Okres kredytowania'},
        labels: {formatter: function() {return this.value+'miesiac'}}
      },
      yAxis:{
        title: {text: 'Zarobek'},
        labels: {formatter: function() {return this.value+'PLN'}}
      },
      chart: {
        type: 'area'
      },
      tooltip: {
        shared: true,
        crosshairs: true
      },
      series: [{
        name: 'Kwota pozostała do spłacenia',
        data: [{x: 0, y: 400000.00},
        {x: 1, y: 398969.40},
        {x: 12, y: 387374.54},
        {x: 24, y: 374169.07},
        {x: 36, y: 360356.95},
        {x: 48, y: 345910.29},
        {x: 60, y: 330799.96},
        {x: 72, y: 314995.47},
        {x: 84, y: 298464.91},
        {x: 96, y: 281174.95},
        {x: 108, y: 263090.69},
        {x: 120, y: 244175.64},
        {x: 132, y: 224391.64},
        {x: 144, y: 203698.76},
        {x: 156, y: 182055.26},
        {x: 168, y: 159417.46},
        {x: 180, y: 135739.68},
        {x: 192, y: 109740.15},
        {x: 204, y: 85070.90},
        {x: 216, y: 57977.65},
        {x: 228, y: 29639.74},
        {x: 240, y: 0}]
      }]
    }
  }, {
    chart: null,
    calc: {
      chart: null,
      legend: 'Wybierz odpowiednie opcje',
      elementID: 'progressive',
      seriesCount: 0,
      currentSeries: [],
      addSeries: function() {
        console.log('redraw');
        this.chart.addSeries({
          name: 'Seria #'+this.seriesCount,
          data: this.currentSeries
        }, true);
        this.chart.redraw();
        this.seriesCount++;
      },
      callback: function(event, other) {
        other.value=event.target.value;
        var options = this.predefined;
        var interest = {
          '3': [0.002, 0.004, 0.015],
          '6': [0.001, 0.002, 0.003, 0.005, 0.006, 0.025],
          '12': [0.002, 0.003, 0.004, 0.005, 0.006, 0.007, 0.008, 0.01, 0.012, 0.013, 0.02, 0.03]
        }
        this.inputs.map(function(input) {
          if(input.name === 'investTime') {
            options.interest = interest[input.element.value];
          }
          options[input.name] = Number(input.element.value);
        });
        console.log(options);
        this.currentSeries = investment(options);
        this.chart.series[0].setData(investment(options));
      },
      inputs: [{
        element: null,
        name: 'investTime',
        title: 'Czas inwestycji',
        type: 'select',
        options: [
          {value: 0, text: 'Czas inwestycji ▼', attribs: {selected: '', disabled: ''}},
          {value: 3, text: '3-miesięczna'},
          {value: 6, text: '6-miesięczna'},
          {value: 12, text: '12-miesięczna'}
        ],
        attribs: {
          placeholder: 'Czas inwestycji ▼'
        }
      }, {
        name: 'sCapital',
        title: 'Kapitał początkowy',
        type: 'range',
        attribs: {
          min: 500,
          step: 0.01,
          max: 10000,
          value: 2137
        }
      }, {
        name: 'capitalizationTime',
        title: 'Czas kapitalizacji',
        type: 'range',
        attribs: {
          value: 1,
          disabled: ''
        }
      }],
      predefined: {
        /*interest: [0.002, 0.003, 0.004],*/
      }
    },
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
        labels: {formatter: function() {return this.value+' PLN'}}
      },
      tooltip: {
        shared: true,
        crosshairs: true
      },
      series: [{
        name: 'Aktualna',
        data: [0, 0.2, 0.4, 1.5]
      }]
    }
}, ///tododotododo
{
  chart: null,
  calc: {
    chart: null,
    legend: 'Wybierz odpowiednie opcje',
    elementID: 'deposit_chart2',
    seriesCount: 0,
    currentSeries: [],
    addSeries: function() {
      console.log('redraw');
      this.chart.addSeries({
        name: 'Seria #'+this.seriesCount,
        data: this.currentSeries
      }, true);
      this.chart.redraw();
      this.seriesCount++;
    },
    callback: function(event, other) {
      console.log(other);
      other.value=event.target.value;
      var options = this.predefined;
      this.chart.series[0].setData([{x: 1, y: Number(other.value)}, {x: 3, y: Number(other.value)*(1+0.0125*(3/365))}]);
    },
    inputs: [{
      name: 'sCapital',
      title: 'Kapitał',
      type: 'range',
      attribs: {
        min: 500,
        step: 0.01,
        max: 10000,
        value: 2137
      }
    }],
    predefined: {
      /*interest: [0.002, 0.003, 0.004],*/
    }
  },
  chartConfig: {
    name: 'Lokata 3-dniowa - wykres oprocentowania',
    location: 'deposit_chart4',
    title: {text: 'Lokata 3-dniowa - wykres oprocentowania'},
    xAxis: {
      title: {text: 'Miesiąc'},
      labels: {formatter: function() {return this.value+'-dzień'}}
    },
    yAxis:{
      title: {text: 'Oprocentowanie'},
      labels: {formatter: function() {return this.value+' PLN'}}
    },
    tooltip: {
      shared: true,
      crosshairs: true
    },
    series: [{
      name: 'Aktualna',
      data: [{x: 1, y: 2137}, {x: 3, y: 2137.2195547945203}]
    }]
  }
}


];

/* CONFIG
var object = {
  interest: 0.017 ,
  investTime: 24,
  sCapital: 1000.00,
  capitalizationTime: 3,
  addMoney: null
}
*/
function investment(obj) {
  let cash = [];
  let capital = obj.sCapital;
  function append(x, y) {
    cash.push({
      x: x,
      y: Number(y.toFixed(2))
    });
  }

  function capi(interest) {
    return interest*(obj.capitalizationTime/12);
  }
  function taxIt(capi) {
    return (capi*capital+0.05).toFixed(2)*0.81;
  }
  append(0, capital);
  if(Array.isArray(obj.interest)) {
    for(let i = 0; i<obj.investTime;i++){
      capital = capital+taxIt(capi(obj.interest[i]));
      append(i+1,capital);
    }
  } else {
    let capi_ = capi(obj.interest)
    for(let i = obj.capitalizationTime; i<=obj.investTime; i+=obj.capitalizationTime ){
      capital= capital+taxIt(capi_);
      append(i, capital);
      if(obj.hasOwnProperty('addMoney')){
        capital+=obj.addMoney;
      }
    }
  }
  return cash;
}



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

function initializeCharts(config) {
  if(config.hasOwnProperty('calc')) { /* shitty code here */
    var container = document.getElementById(config.calc.elementID),
        calcContainer = document.createElement('div'),
        chartContainer = document.createElement('div'),
        fieldset = document.createElement('fieldset'),
        legend = document.createElement('legend'),
        addSeriesButton = document.createElement('button');
    calcContainer.id = config.calc.elementID+'_calc';
    chartContainer.id = config.calc.elementID+'_chart';
    calcContainer.classList.add('calc');
    chartContainer.classList.add('chart');
    legend.textContent = config.calc.legend;
    container.appendChild(calcContainer).parentNode.appendChild(chartContainer);
    calcContainer.appendChild(fieldset);
    fieldset.appendChild(legend);
    addSeriesButton.textContent = 'Dodaj na wykres';
    addSeriesButton.addEventListener('click', function() {
      config.calc.addSeries();
    })
    var fuckChromeDiv = document.createElement('div');
    fieldset.appendChild(fuckChromeDiv);
    config.calc.chart = createChart(chartContainer.id, config.chartConfig);
    config.calc.inputs.map(function(inputConfig) {
      var label = document.createElement('label');
      label.setAttribute('for', config.calc.elementID+'_'+inputConfig.name);
      label.textContent = inputConfig.title;
      fuckChromeDiv.appendChild(label);
      if(inputConfig.type==='select') {
        inputConfig.element = document.createElement('select');
        inputConfig.options.map(function(option) {
          var optionElement = document.createElement('option');
          if(option.hasOwnProperty('attribs')) {
            for(attribName in option.attribs) {
              optionElement.setAttribute(attribName, option.attribs[attribName]);
            }
          }
          optionElement.value = option.value;
          optionElement.textContent = option.text;
          inputConfig.element.appendChild(optionElement);
        })
      } else {
        inputConfig.element = document.createElement('input');
        inputConfig.element.setAttribute('type', inputConfig.type);
      }
      var valueDiv = document.createElement('input');
      valueDiv.id = config.calc.elementID+'_'+inputConfig.name+'Value';
      valueDiv.value = inputConfig.element.value;
      if(inputConfig.hasOwnProperty('attribs')) {
        for(attribName in inputConfig.attribs) {
          inputConfig.element.setAttribute(attribName, inputConfig.attribs[attribName]);
          valueDiv.setAttribute(attribName, inputConfig.attribs[attribName]);
        }
      }
      inputConfig.element.setAttribute('name', config.calc.elementID+'_'+inputConfig.name);
      label.appendChild(inputConfig.element);
      label.appendChild(valueDiv);
      [inputConfig.element, valueDiv].map(function(item) {
        item.addEventListener('input', function(event) {
          config.calc.callback(event, event.target.getAttribute('type')==='range'?valueDiv:inputConfig.element);
        });
      });
    })
      fieldset.appendChild(addSeriesButton);
  } else {
    config.chart = createChart(config.chartConfig.location, config.chartConfig);
  }
}

window.addEventListener('load', function() {
  charts.map(function(config) {
    initializeCharts(config);
  })
});
