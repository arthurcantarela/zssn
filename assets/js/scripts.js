$(document).ready(function() {
  $('#sign-up-btn').click(function() {
    $('.landing').addClass('ln');
  });

  $('#sign-in-btn').click(function() {
    $('.landing').addClass('si');
  });

  $('input.number-only').on('change keyup keydown', function() {
    var value = $(this).val().replace(/\D/g,'');
    if(value.length == 0) value = 0;
    $(this).val(parseInt(value));
  });

  $('.input-increase').click(function() {
    var input = '#' + $(this).parent().attr('for');
    var value = parseInt($(input).val());
    $(input).val(value + 1);
  });

  $('.input-decrease').click(function() {
    var input = '#' + $(this).parent().attr('for');
    var value = parseInt($(input).val());
    if(value > 0)
      $(input).val(value - 1);
  });

  var createTableRow = function(survivor) {
    var row = '<tr>'
    for(key in survivor)
      if(survivor.hasOwnProperty(key))
        row += '<td class=table-' + key + '>' + survivor[key] + '</td>';
    row += '</tr>'
    return row;
  }
});
