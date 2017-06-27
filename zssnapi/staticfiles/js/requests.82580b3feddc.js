$(document).ready(function() {
  function preventInputEmptyness(inputId) {
    var selector = '#' + inputId;
    var value;
    if($(selector).val() && $(selector).val().length > 0)
      value = $(selector).val();
    return value;
  }

  function getSurvivorData() {
    var items = {
      Water: $('form#sign-up-form input[name="water"]').val(),
      Food: $('form#sign-up-form input[name="food"]').val(),
      Medication: $('form#sign-up-form input[name="medication"]').val(),
      Ammunition: $('form#sign-up-form input[name="ammunition"]').val()
    }
    var itemsString = '';
    for(key in items)
      if(items.hasOwnProperty(key))
        itemsString += key + ':' + items[key] + ';';

    var survivor = {
      name: $('form#sign-up-form input[name="name"]').val(),
      age: $('form#sign-up-form input[name="age"]').val(),
      gender: $('form#sign-up-form input[name="gender"]:checked').val(),
      items: itemsString
    }
    for(key in survivor)
      if(survivor.hasOwnProperty(key))
        if(!(survivor[key] && survivor[key].length > 0)) {
          console.error('Missing survivor key: ' + key)
          return '{}';
        }

    var survivorJson = JSON.stringify(survivor);
    console.log(survivorJson);
    return survivorJson;
  }

  var baseUrl = 'http://zssn-backend-example.herokuapp.com';

  $('#sign-up-form').submit(function(e) {
    e.preventDefault();
    var path = '/api/people.json';
    var data = getSurvivorData();
    $.ajax({
      type: 'POST',
      url: baseUrl + path,
      data: data,
      contentType: 'application/x-www-form-urlencoded',
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
