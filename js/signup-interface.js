$(document).ready(function() {
  $('#signup').submit(function(event){
    event.preventDefault();
    var email = $('#email').val();
    $('#signup').hide();
    $('#solution').prepend('<p> thanks ' + email + ' has been added to our list</p>')
  });
});
