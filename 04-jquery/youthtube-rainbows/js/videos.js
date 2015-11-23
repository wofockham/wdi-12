var thumbnailify = function () {
  // Show thumbnail.
  var link = $(this).attr('href');
  var thumbnailURL = youtube.generateThumbnailUrl(link);
  var $thumb = $('<img>').attr('src', thumbnailURL);
  $(this).append($thumb);

  // Show the video when the user clicks.
  $(this).on('click', function (event) {
    event.preventDefault(); // Don't go to Youtube.

    var videoURL = $(this).attr('href'); // Where is this video?
    var embedURL = youtube.generateEmbedUrl(videoURL); // What is its embed URL?
    var embedCode = '<iframe width="560" height="315" src="' + embedURL + '" frameborder="0" allowfullscreen></iframe>'; // Make the embed code.

    $('#player').hide().html(embedCode).fadeIn(2000);
  });
};


$(document).ready(function () {
  var $vids = $('li a');
  $vids.each(thumbnailify);

  $('h2').funText(400, '#999');
});




