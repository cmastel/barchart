function drawBarChart(data, options, element) {
  $(document).ready(function(){
  
    $(element).css('width', options['width']);
    $(element).css('height', options['height']);
    $(element).css('background-color', options['bar-color']);
    $(element).css('grid-template-rows', data.length + ', 1fr');
    myHeader.innerText = options['chart-title'];

    // for each value in the data array, create a new div in the Chart
    // element, assign it a length, and add the value into the bar
    for (let i = 0; i < data.length; i++) {
      let bar = '.bar-' + (i + 1);
      $('<div class="bar-' + (i + 1) +'">').appendTo(element);
      $(bar).css('grid-column-end', data[i]);
      $('<h2>' + data[i] + '</h2>').appendTo(bar);
    } // end of for loop

  }); // end of $(document).ready


} // end of function drawBarChart

let data = [50, 8, 80, 9, 100, 60, 40, 5];
let data2 = [20, 50, 90];
let options = {'width': '70vw', 
                'height': '50vh', 
                'bar-color': '#cccccc',
                'chart-title': 'A Beautiful Bar Chart'};
let element = '.chart'

drawBarChart(data, options, element);

