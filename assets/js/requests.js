$(document).ready(function() {
  var formToJson = function($form) {
    var formArray = $form.serializeArray();
    var formJson = '{';
    for(i in formArray) {
      formJson += '"' + formArray[i].name + '":"' + formArray[i].value + '"';
      if(i < formArray.length - 1) {
        formJson += ',';
      }
    }
    formJson += '}';
    return formJson;
  }

  var baseUrl = 'http://zssn-backend-example.herokuapp.com';

  $('#newSurvivor').submit(function(e) {
    e.preventDefault();
    var path = '/api/people';
    var data = formToJson($(this));
    $.ajax({
      type: 'POST',
      url: baseUrl + path,
      data: data,
      success: function(response) {
        console.log('Success');
        console.log(response);
      },
      error: function(response) {
        console.log('Error');
        console.log(response);
      }
    });
  });
});
