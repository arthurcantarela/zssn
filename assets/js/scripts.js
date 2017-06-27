function writeCookie(name,value,days) {
    var date, expires;
    if (days) {
        date = new Date();
        date.setTime(date.getTime()+(days*24*60*60*1000));
        expires = "; expires=" + date.toGMTString();
            }else{
        expires = "";
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie(name) {
    var i, c, ca, nameEQ = name + "=";
    ca = document.cookie.split(';');
    console.log(ca);
    for(i=0;i < ca.length;i++) {
        c = ca[i];
        while (c.charAt(0)==' ') {
            c = c.substring(1,c.length);
        }
        if (c.indexOf(nameEQ) == 0) {
            return c.substring(nameEQ.length,c.length);
        }
    }
    return '';
}

$(document).ready(function() {
  $('#sign-up-btn').click(function() {
    $('.landing').addClass('ln');
  });

  $('#sign-in-btn').click(function() {
    var survivorName = $('#sign-in-form input[name="name"]').val();
    writeCookie('survivorName', survivorName, 1);
    console.log(readCookie('survivorName'));
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
