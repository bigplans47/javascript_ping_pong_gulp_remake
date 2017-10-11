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

$(document).ready(function() {
  $('#signup').submit(function(event){
    event.preventDefault();
    var email = $('#email').val();
    $('#signup').hide();
    $('#solution').prepend('<p> thanks ' + email + ' has been added to our list</p>')
  });
});
