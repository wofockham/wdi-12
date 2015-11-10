/*
Create 2 functions that calculate properties of a circle.

Create a function called calcCircumfrence:

Pass the radius to the function.
Calculate the circumference based on the radius, and output "The circumference is NN".
Create a function called calcArea:

Pass the radius to the function.
Calculate the area based on the radius, and output "The area is NN".
*/

// var radius = 57;
// var circumference = 2 * Math.PI * radius;
// var area = Math.PI * radius * radius; // PI r squared

// console.log('The circumference is ' + circumference);
// console.log('The area is ' + area);


var calcCircumference = function (radius) {
  var circumference = 2 * Math.PI * radius;
  console.log('The circumference is ' + circumference);
};

var calcArea = function (radius) {
  var area = Math.PI * radius * radius; // PI r squared
  console.log('The area is ' + area);
};

var circleInfo = function (radius) {
  calcCircumference(radius);
  calcArea(radius);
};

circleInfo(57);
circleInfo(1);






