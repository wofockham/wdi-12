var add = function (a, b) {
  debugger;
  var result = a + b;
  console.log('I have found that the result is', result);
  return result;
}

console.log('Starting program');
var x = 12;
var y = Math.random();
var total = add(x, y);
console.log('Calculated total', total);

var otherTotal = add(x, y) * add(6, 5);
console.log('Other total', otherTotal);

console.log('Program done');