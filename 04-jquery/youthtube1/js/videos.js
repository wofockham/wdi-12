var vids = document.querySelectorAll('li a');

for (var i = 0; i < vids.length; i++) {
  var linkNode = vids[i];
  var link = linkNode.getAttribute('href');

  var thumbnailURL = youtube.generateThumbnailUrl(link);

  var thumbnailNode = document.createElement('img');
  thumbnailNode.setAttribute('src', thumbnailURL);

  linkNode.appendChild(thumbnailNode);
}
