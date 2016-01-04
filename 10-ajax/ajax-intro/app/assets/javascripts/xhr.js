$(document).ready(function () {
  $('#getLucky').on('click', function () {

    var request = new XMLHttpRequest();
    request.open('GET', '/random');

    request.onreadystatechange = function () {
      if (request.readyState !== 4) { return; }

      // request.responseText is now available
      $('#result').text( request.responseText );
    }

    request.send();

  });
});

// var request = new XMLHttpRequest();
// request.open('GET', '/time');

// request.onreadystatechange = function () {
//   if (request.readyState !== 4) {
//     return;
//   }

//   console.log('The server time is', request.responseText);
// };

// request.send();

// ///////////////////////////////////////////////////////////////////////////////
// var request2 = new XMLHttpRequest();
// request2.open('GET', '/random');

// request2.onreadystatechange = function () {
//   if (request2.readyState !== 4) {
//     return; // Data is not ready yet.
//   }

//   console.log('Your lucky number is', request2.responseText);
// };

// request2.send();