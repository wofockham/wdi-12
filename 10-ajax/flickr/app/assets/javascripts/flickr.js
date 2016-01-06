var searchFlickr = function (query) {

  var flickrUrl = 'https://api.flickr.com/services/rest/?jsoncallback=?';

  $.getJSON(flickrUrl, {
    method: 'flickr.photos.search',
    api_key: '2f5ac274ecfac5a455f38745704ad084',
    text: query,
    format: 'json'
  }).done(function (info) {
    displayPhotos(info.photos.photo); // The actual photos are buried deep in the object.
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
    '_m.jpg' // Change this for different sizes.
  ].join('');
};

var displayPhotos = function (photos) {
  _.each(photos, function (photo) {
    var photoURL = generateURL(photo);
    console.log(photoURL);
  })
};

$(document).ready(function () {

  $('#search').on('submit', function (e) {
    e.preventDefault();

    var query = $('#query').val();

    searchFlickr( query );
  });

});