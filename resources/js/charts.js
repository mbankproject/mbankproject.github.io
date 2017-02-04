var charts = [{
    chart: null,
    calc: {
      chart: null,
      legend: 'Super legenda',
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
      callback: function(event) {
        event.target.nextSibling.textContent = event.target.value;
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
          min: 0,
          step: 1000,
          max: 100000
        }
      }, {
        name: 'capitalizationTime',
        title: 'Czas kapitalizacji',
        type: 'range',
        attribs: {
          min: 1,
          step: 1,
          max: 1,
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
        name: '3-miesięczna',
        data: [0, 0.2, 0.4, 1.5]
      }]
    }
}];

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
      if(inputConfig.hasOwnProperty('attribs')) {
        for(attribName in inputConfig.attribs) {
          inputConfig.element.setAttribute(attribName, inputConfig.attribs[attribName]);
        }
      }
      inputConfig.element.setAttribute('name', config.calc.elementID+'_'+inputConfig.name);
      label.appendChild(inputConfig.element);
      inputConfig.element.addEventListener('input', function(event) {
        config.calc.callback(event);
      });
      var valueDiv = document.createElement('div');
      valueDiv.id = config.calc.elementID+'_'+inputConfig.name+'Value';
      valueDiv.innerHTML = inputConfig.element.value;
      label.appendChild(valueDiv);

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
