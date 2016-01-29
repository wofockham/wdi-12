$(document).ready(function () {
  // Creates a canvas of "pixel" divs for drawing.
  var addPixels = function (n) {
    for (var i = 0; i < n; i++) {
      $('<div class="pixel"/>').appendTo('#canvas');
    }
  };

  addPixels(5000);

  $('#add').on('click', function () {
    var color = $('#color').val();
    var $swatch = $('<div class="swatch"/>');
    $swatch.css('background-color', color);
    $swatch.appendTo('#palette');
  });

  // Delegate listening for the click event to the parent (the #palette div)
  $('#palette').on('click', '.swatch', function () {
    var selectedColor = $(this).css('background-color');
    $('#selected').css('background-color', selectedColor);
  });

});