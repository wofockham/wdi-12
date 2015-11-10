/*
The Geometrizer

Calculate properties of a circle, using the definitions here.

Store a radius into a variable.
Calculate the circumference based on the radius, and output "The circumference is NN".
Calculate the area based on the radius, and output "The area is NN".
*/

var radius = 57;
var circumference = 2 * Math.PI * radius;
var area = Math.PI * radius * radius; // PI r squared

console.log('The circumference is ' + circumference);
console.log('The area is ' + area);
