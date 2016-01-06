var requestInProgress = false;
var currentPage = 1;
var reachedEnd = false;

var searchFlickr = function (query) {

  if (requestInProgress === true || reachedEnd === true) { return; }

  requestInProgress = true;

  var flickrUrl = 'https://api.flickr.com/services/rest/?jsoncallback=?';

  $.getJSON(flickrUrl, {
    method: 'flickr.photos.search',
    api_key: '2f5ac274ecfac5a455f38745704ad084',
    text: query,
    format: 'json',
    page: currentPage
  }).done(function (info) {
    console.log(info);
    displayPhotos(info.photos.photo); // The actual photos are buried deep in the object.
    if (info.photos.page === info.photos.pages) {
      reachedEnd = true;
    }
    currentPage++;
    requestInProgress = false;
  });

};

var generateURL = function (photo) {
  return [
    'http://farm',
    photo.farm,
    '.static.flickr.com/',
    photo.server,
    '/',
    photo.id,
    '_',
    photo.secret,
    '_q.jpg' // Change this for different sizes.
  ].join('');
};

var displayPhotos = function (photos) {
  var images = '';
  _.each(photos, function (photo) {
    var photoURL = generateURL(photo);
    images += '<img src="' + photoURL + '">';
  });
  $('#results').append(images);
};

$(document).ready(function () {

  $('#search').on('submit', function (e) {
    e.preventDefault();

    var query = $('#query').val();

    searchFlickr( query );
  });

  $('#query').on('change', function () {
    currentPage = 1;
    reachedEnd = false;
    $('#results').empty();
  });

  $(window).on('scroll', function () {
    var scrollBottom = $(document).height() - ($(window).height() + $(window).scrollTop());

    if (scrollBottom > 400) { return; } // Fine tune this amount.

    var query = $('#query').val();
    searchFlickr( query ); // This line will fire way too many times.

  });

});






