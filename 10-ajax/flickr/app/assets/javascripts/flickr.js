var searchFlickr = function (query) {
  console.log(query);
};

$(document).ready(function () {

  $('#search').on('submit', function (e) {
    e.preventDefault();

    var query = $('#query').val();

    searchFlickr( query );
  });

});