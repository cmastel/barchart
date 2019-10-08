function drawBarChart(data, options, element) {
  $(document).ready(function(){
    
    // get the keys of the data Object
    let dataKeys = Object.keys(data); 
    
    // to determine the number of rows in the chart, we need to know
    // the maximum value a bar will contain
    let largestValue = objectMax(dataKeys, data);
    
    // the total number of rows in the chart will be increased by three
    // to allow for a Title, X-axis Title, and Bar Labels
    let totalRows = largestValue + 3;

    chartTitle.innerText = options['chart-title'];
    $(element).css('width', options['width']);
    $(element).css('height', options['height']);
    $(element).css('background-color', options['background-color']);
    $('bar').css('background-color', options['bar-color']); // NOT WORKING
    // set the number of columns in the chart by the number of labels (dataKeys)
    // 2 columns are added for yAxis title and yAxis tick marks
    $(element).css('grid-template-columns', (dataKeys.length + 2) + ', 1fr');
    // set the number of rows in the chart to totalRows determined above
    $(element).css('grid-template-rows', 'repeat(' + totalRows + ', 1fr)');
    // have the header (therefore chart title) span the width of the chart
    $('header').css('grid-column', '1 / ' + (dataKeys.length + 2));
    
    // create the y-Axis title
    $('<div class="yAxisTitle">' + options['yAxisTitle'] + '</div>').appendTo(element);
    $('.yAxisTitle').css('grid-row-start', 2);
    $('.yAxisTitle').css('grid-row-end', totalRows);
    $('.yAxisTitle').css('grid-row-end', totalRows);
    $('.yAxisTitle').css('grid-column-start', 1);
    $('.yAxisTitle').css('grid-column-end', 2);

    // create the y-Axis tick marks
    $('<div class="yAxisTicks">' + largestValue + '</div>').appendTo(element);
    $('.yAxisTicks').css('grid-row', 2 / (2 + 1));
    $('.yAxisTicks').css('grid-column-start', 2);
    $('.yAxisTicks').css('grid-column-end', 3);


    // for each value in the data object, create a new div in the Chart
    // element, assign it a length, and add the value into the bar
    for (let i = 0; i < dataKeys.length; i++) {
      let bar = '.bar-' + (i + 1);
      let label = '.label-' + (i + 1);
      let key = dataKeys[i];
            
      $('<div class="bar-' + (i + 1) + '">').appendTo(element);
      $(bar).css('grid-row-start', ((totalRows) - data[key]));
      $(bar).css('grid-row-end', (totalRows));
      $(bar).css('grid-column-start', (2 + i + 1));
      $(bar).css('grid-column-end', (2 + i + 2));

      $('<div class="label-' + (i + 1) + '">').appendTo(element);
      $(label).css('grid-row-start', totalRows);
      $(label).css('grid-row-end', totalRows + 1);
      $(label).css('grid-column-start', (2 + i + 1));
      $(label).css('grid-column-end', (2 + i + 2));
      $('<h2>' + key + '</h2>').appendTo(label);
      $('<h2>' + data[key] + '</h2>').appendTo(bar);
    } // end of for loop


  }); // end of $(document).ready

} // end of function drawBarChart

function objectMax(keys, dataObject) {
  // loop through a dataObject to get the maximum value
  // uses the keys array to loop through the object, and access
  // the values based on the keys
  let max = 0;
  for (let x = 0; x < keys.length; x++) {
    if (dataObject[keys[x]] > max) {
      max = dataObject[keys[x]];
    }
  } 
  return max;
} // end of function objectMax


let data = {"Mercury": 0, "Venus": 0, "Earth": 1, "Mars": 2, 
              "Jupiter": 67, "Saturn": 62, "Uranus": 27, "Neptune": 14};
let options = {'width': '70vw', 
                'height': '50vh', 
                'background-color': '#EEAA7B',
                'bar-color': '#EEAA7B',
                'chart-title': 'Moons of Each Planet',
                'yAxisTitle': 'Number of Moons'
};
let element = '.chart'

drawBarChart(data, options, element);

