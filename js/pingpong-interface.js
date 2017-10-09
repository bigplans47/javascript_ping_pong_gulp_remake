var Calculator = require('./../js/pingpong.js').calculatorModule;

$(document).ready(function() {
  $('#ping-pong-form').submit(function(event) {
    event.preventDefault();
    var goal = $('#goal').val();
    var simpleCalculator = new Calculator('hot pink')
    // var output = pingPong(goal);
    var output = simpleCalculator.pingPong(goal);
    output.forEach(function(element) {
      console.log(element);
      // console.log($('#solution'))
      $('#solution').append("<li>" + element + "</li>")
    });
  });
});
