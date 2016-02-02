var reverse = function (input) {
  var output = '';
  for (var i = 0; i < input.length; i++) {
    output =  input[i] + output;
  }
  return output;
};

console.log( reverse('hotdogs') );
