$(document).ready(function () {

  $('#getInfo').on('click', function () {
    $.ajax('/info').done(function (info) {
      var output = "<p>Lucky number: " + info.lucky_number + "</p><p>Time: " + info.time + "</p>";
      output += "<p>Uptime: " + info.uptime + "</p>";
      $('#result').html( output );
    })
  });

  $('#getLucky').on('click', function () {

    $.ajax('/random').done(function (number) {
      $('#result').text( number ); // Show the number on the page
    });

  });


  $('#getTime').on('click', function () {

    $.ajax('/time').done(function (time) {
        $('#result').text( time ); // Show the time on the page.
    });

  });
});
