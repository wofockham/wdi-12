/*

The Fortune Teller

Why pay a fortune teller when you can just program your fortune yourself?

Store the following into variables: number of children, partner's name, geographic location, job title.
Output your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."

*/

var numKids = 4;
var partnerName = 'Dwayne';
var geoLocation = 'Fiji';
var job = 'landscape gardener';

var fortune = "You will be a " + job + " in " + geoLocation +
              ", and married to " + partnerName + " with " + numKids + " kids.";

console.log(fortune);
