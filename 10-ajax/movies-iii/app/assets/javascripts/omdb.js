$(document).ready(function () {

  var search = function (e) {

    e.preventDefault(); // Prevent the default browser form submission.

    var query = $('#search').val();

    $.ajax('http://omdbapi.com/', {
      data: {
        t: query
      }
    }).done(function (info) {
      var $img = $('<img />');
      $img.attr('src', info['Poster']);
      $img.prependTo('#results');
    });

  }

  $('form').on('submit', search);

});