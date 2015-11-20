var $vids = $('li a');

$vids.each(function () {
  var link = $(this).attr('href');
  var thumbnailURL = youtube.generateThumbnailUrl(link);
  var $thumb = $('<img>').attr('src', thumbnailURL);
  $(this).append($thumb);
});

// Show off version:
// $('li a').each(function () {
//   $('<img>').attr('src', youtube.generateThumbnailUrl( $(this).attr('href') ))
//     .appendTo(this);
// });
