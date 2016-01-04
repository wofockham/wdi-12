$(document).ready(function () {

  var search = function (e) {

    e.preventDefault(); // Prevent the default browser form submission.

    var query = $('#search').val();

    var request = new XMLHttpRequest();
    var url = 'http://omdbapi.com/?t=' + query;
    request.open('GET', url);

    request.onreadystatechange = function () {
      if (request.readyState !== 4) { return; }
      var info = JSON.parse( request.responseText );

      var $img = $('<img />');
      $img.attr('src', info['Poster']);
      $img.prependTo('#results');
    };

    request.send();
  }

  $('form').on('submit', search);

});