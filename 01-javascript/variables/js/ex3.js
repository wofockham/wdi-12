/*
The Lifetime Supply Calculator

Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

Store your current age into a variable.
Store a maximum age into a variable.
Store an estimated amount per day (as a number).
Calculate how many you would eat total for the rest of your life.
Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".
*/

var currentAge = 37;
var maximumAge = 55;
var amountPerDay = 17; // hotdogs

var amountPerYear = amountPerDay * 365.25;

var yearsRemaining = maximumAge - currentAge;

var lifeTimeSupply = amountPerYear * yearsRemaining;

console.log('You will need ' + lifeTimeSupply +
            ' to last you until the ripe old age of ' + maximumAge);
