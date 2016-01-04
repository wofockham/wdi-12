$(document).ready(function () {
  $('#getLucky').on('click', function () {

    var request = new XMLHttpRequest();
    request.open('GET', '/random'); // Set up where our request will be made to.

    // Define a callback for when the request is done.
    request.onreadystatechange = function () {
      if (request.readyState !== 4) { return; }

      // request.responseText is now available.
      // THIS IS THE ONLY PLACE WHERE WE CAN USEFULLY ACCESS request.responseText
      $('#result').text( request.responseText );
    }

    request.send(); // Initiate the request

  });


  $('#getTime').on('click', function () {

    var request = new XMLHttpRequest();
    request.open('GET', '/time');

    request.onreadystatechange = function () {
      if (request.readyState !== 4) { return; }

      $('#result').text( request.responseText );
    }

    request.send();

  });
});
