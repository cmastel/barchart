function drawBarChart(data, options, element) {
  $(document).ready(function(){
    $("<h1>This is the Chart Title</h1>").prependTo(element);

  
    $(element).css('width', options['width']);
    $(element).css('height', options['height']);
    $(element).css('background-color', options['bar-color']);
    $(element).css('grid-template-rows', data.length + ', 1fr');

    $('.bar-1').css('grid-column-end', data[0]);
    $('.bar-2').css('grid-column-end', data[1]);
    $('.bar-3').css('grid-column-end', data[2]);
    $('.bar-4').css('grid-column-end', data[3]);
    $('.bar-5').css('grid-column-end', data[4]);
    $('.bar-6').css('grid-column-end', data[5]);
    $('.bar-7').css('grid-column-end', data[6]);

    // Add value to each bar
    for (let i = 0; i < 7; i++) {
      let bar = '.bar-' + (i + 1);
      $('<h1>' + data[i] + '</h1>').appendTo(bar);
    } 

    $('.bar-8)').addClass('chart');
    $('.bar-8').css('grid-column-end', data[7]);
  });


}

let data = [50, 8, 80, 9, 100, 60, 40, 5];
let data2 = [20, 50, 90];
let options = {'width': '70vw', 
                'height': '50vh', 
                'bar-color': '#cccccc'};
let element = '.chart'

drawBarChart(data, options, element);

