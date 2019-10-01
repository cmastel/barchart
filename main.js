function drawBarChart(data, options, element) {
  $(document).ready(function(){
    $("<h1>This is the Chart Title</h1>").prependTo(element);

  
    $(element).css('width', options['width']);
    $(element).css('height', options['height']);
    $(element).css('background-color', options['bar-color']);
    $(element).css('grid-template-rows', data.length + ', 1fr');


    // Create, and add Value to each bar
    for (let i = 0; i < data.length; i++) {
      let bar = '.bar-' + (i + 1);
      $('<div class="bar-' + (i + 1) +'">').appendTo(element);
      $(bar).css('grid-column-end', data[i]);
      $('<h1>' + data[i] + '</h1>').appendTo(bar);
    } // end of for loop

  }); // end of $(document).ready


} // end of function drawBarChart

let data = [50, 8, 80, 9, 100, 60, 40, 5];
let data2 = [20, 50, 90];
let options = {'width': '70vw', 
                'height': '50vh', 
                'bar-color': '#cccccc'};
let element = '.chart'

drawBarChart(data, options, element);

